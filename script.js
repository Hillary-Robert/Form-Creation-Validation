
document.addEventListener("DOMContentLoaded", () =>{

  const form = document.getElementById("registration-form");

  const feedbackDiv = document.getElementById("form-feedback")



  form.addEventListener("submit", (event) =>{

    event.preventDefault()

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();


    let isValid = true;
    let messages = []

    if(username.length < 3){
      isValid = false;
      messages.push("Your username needs to be more than 3 character");
    }

    if(!email.includes("@") && !email.includes(".")){
      isValid = false;
      messages.push("Enter a valid email")

    }


    if(!password.length >= 8){
      isValid = false
      messages.push("Your password must have atleast 8 characters")
    }


    feedbackDiv.style.display = "block";

    if (isValid === true){
      feedbackDiv.textContent = "Registration successful!"
      feedbackDiv.style.color = "#28a745"

    }else{
      feedbackDiv.innerHTML = messages.join("div")
      feedbackDiv.style.color = "#dc3545"
    }


    form.reset();


  

  })


  

})