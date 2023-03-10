// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
if (localStorage.getItem("name").length > 0){
  // Changes the h1 to add the user name
      console.log(localStorage.getItem("name"));
      document.getElementById("userNameDisplay").innerHTML="Welcome "+localStorage.getItem("name");
      }
