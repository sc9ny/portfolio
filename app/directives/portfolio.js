module.exports = function(ngModule) {
  ngModule.directive('portfolio', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./portfolio.html'),
      //templateUrl: ('./directives/portfolio.html'),
      controllerAs: '$ctrl',
      controller: function() {
        const self = this;
        let data = {};

        //utilized https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
        this.handleFormSubmit = function() {
          const data = self.data;
            this.successMessage = "Email has successfully sent! Thanks for reaching out :) ";
            const url = "https://script.google.com/macros/s/AKfycbydCtBH3FBr3FVkFIa9tzPI1AD6tpjufgz1CqIJ/exec";
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.withCredentials = true;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            // url encode form data for sending as post data
            const encoded = Object.keys(data).map((k) => {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            }).join('&');
            xhr.send(encoded);
          }
      }
    }
  });
};
