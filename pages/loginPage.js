const { I } = inject();

module.exports = {

fillForm : function(username,password){
  
  I.fillField(I.getParameter("username"),username);
  I.fillField(I.getParameter("password"),password);
  I.waitForElement(I.getParameter("loginButtonLoginPage"));
  I.click(I.getParameter("loginButtonLoginPage"));
  
},

errorForUsername : function(){
  I.waitForElement(I.getParameter("errorForUsername"));
  I.seeElement(I.getParameter("errorForUsername"));
},

errorForPassword : function(){
  I.waitForElement(I.getParameter("errorForPassword"));
  I.seeElement(I.getParameter("errorForPassword"));
}


}
