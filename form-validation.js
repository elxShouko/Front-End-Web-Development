// Disable form submissions if there are invalid fields
(function () {
   'use strict';
   window.addEventListener('load', function () {
       // Get the forms we want to add validation styles to
       var forms = document.getElementsByClassName('needs-validation');
       // Loop over them and prevent submission
       var validation = Array.prototype.filter.call(forms, function (form) {
           form.addEventListener('submit', function (event) {
               event.preventDefault(); //Valid or invalid, will not submit
               event.stopPropagation(); //Valid or invalid, will not submit
               if (form.checkValidity() === false) {
               } else {
                   var msg = document.getElementsByClassName("modal-body")[0];
                   msg.innerHTML = "";
                   var firstName = document.getElementsByTagName("input")[0].value;
                   var lastName = document.getElementsByTagName("input")[1].value;
                   var email = document.getElementsByTagName("input")[2].value;
                   var contact = document.getElementsByTagName("input")[3].value;
                   var company = document.getElementsByTagName("input")[4].value;
                   var specify = document.getElementsByName("issues")[2].value;
                   var improve = document.getElementsByName("improve")[0].value;

                  //  var selectedRadio = document.querySelector('input[name="typeOfForm"]:checked').value;

                   msg.innerHTML += `<center> Thank you for filling up our contact form! </center> <br>`
                   msg.innerHTML += `<center> Please double check the information here before submission as once it is submitted, it <b>cannot be changed</b> </center> <br> <br>`
                   msg.innerHTML += `Your First Name is: ${firstName}<br>`
                   msg.innerHTML += `Your Last Name is: ${lastName}<br>`
                   msg.innerHTML += `Your Email is: ${email}<br>`
                   msg.innerHTML += `Your Phone is: ${contact}<br> <br>`
                   msg.innerHTML += `Your Company is: ${company}<br> <br>`
                   msg.innerHTML += `Issues met: ${specify}<br> <br>`
                   msg.innerHTML += `Your improvement suggestion is: ${improve}<br> <br>`
                  //  msg.innerHTML += `Your form submission today is regarding: ${selectedRadio}<br> <br>`
                  //  msg.innerHTML += `Comments: <br>${comment}`
                   $("#myModal").modal();

               }
               form.classList.add('was-validated');
           }, false);
       });
   }, false);
})();



function gotoPage(page) {
   location.href = page;
}