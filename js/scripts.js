loadUsers = () =>{
        
    const localemail = ["a@a.com","v@v.com","b@b.com", "avyu@mine.com"]
  //Use to loop through users
  localemail.forEach((name)=>{
         // Set's the key and value
         localStorage.setItem(name,name)
     })
  // Set's and item to your local storage, the key and value
  localStorage.setItem("password","password")

}

 const loginUser = (event) => {
  // getting information from the input
     let loginEmail= document.getElementById("email").value;
     let loginPassword= document.getElementById("userPassword").value;

     // check's the input length you can use input min to achieve the same process
     if (loginEmail.length < 1 || loginPassword.length <1 ){
         // stops the page from submitting
         event.preventDefault();
     }
     // Check's if the input and local storage is the same
     if (localStorage.getItem(loginEmail) === loginEmail &&
         localStorage.getItem(loginPassword) === "password"){ 
         localStorage.setItem("email",loginEmail);
         if(loginEmail === "a@a.com"){
             localStorage.setItem("name","Amrutha");
         }
         if(loginEmail === "v@v.com"){
             localStorage.setItem("name","Vinay");
         }
         if(loginEmail === "b@b.com"){
             localStorage.setItem("name","Bootstrap");
         }
         if(loginEmail === "avyu@mine.com"){
             localStorage.setItem("name","Avyukth");
         }
     }else {
         // stops the page from submitting
         event.preventDefault();
         var errorDiv = document.getElementById("authenticationError");
         var errorPara = document.createElement('p');
         errorPara.innerHTML="Wrong UserId/Password. Please try again";
         console.log("Please try again ");
         errorDiv.appendChild(errorPara);
         console.log(loginEmail);
         console.log(loginPassword);
     }
 }

 loginForm.addEventListener("submit",loginUser)

 if (localStorage.getItem("name").length > 0){
    // Changes the h1 to add the user name
        console.log(localStorage.getItem("name"));
        document.getElementById("userNameDisplay").innerHTML="Welcome "+localStorage.getItem("name");
    }