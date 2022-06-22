// in this file you can append custom step methods to 'I' object

module.exports = function() {
  let parameters = require ('./parameters/parameters.json')


  return actor({

    getParameter : function(key){
      return parameters[key];
    },


    goLoginPage : function(){
    
      this.amOnPage(this.getParameter("url"));
      this.waitForElement(this.getParameter("loginButtonHomePage"));
      this.click(this.getParameter("loginButtonHomePage"));
      this.waitForElement(this.getParameter("username"));
      this.waitForElement(this.getParameter("password"));    
    }

  });
}
