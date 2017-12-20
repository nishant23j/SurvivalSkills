/*global $ */
 /*exported formValidationSetup, refreshErrorMessages */
 /*global document require*/ // eslint-disable-line no-unused-vars
 /*global $ */



     // Below function Executes on click of login button.
     function validate() { // eslint-disable-line no-unused-vars
         var username = document.getElementById("name").value;
         var password = document.getElementById("id").value;
         if (username == "Ashish" && password == 12345 || username=="Bhavyesh" && password
==34567) {
             window.alert("Login successfully");   /*eslint unused:false*/ // eslint-disable-line no-unused-vars
             window.location.href = "home.html"; /*eslint unused:false*/  // eslint-disable-line no-unused-vars
             if (typeof (localStorage) != "undefined") {
                 localStorage.name = document.getElementById("name").value;
                 localStorage.id = document.getElementById("id").value;
             }

             document.getElementById("name").value = null;

             return false;
         } else {
            
             alert("Wrong Attempt ");
             // Disabling fields after 3 attempts.
         }
     }
    
    
    $('.tbl-accordion-nested').each(function(){
  var thead = $(this).find('thead');
  var tbody = $(this).find('tbody');
  
  tbody.hide();
  thead.click(function(){
    tbody. slideToggle();
  })
})
    






