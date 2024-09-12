const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-pass")
const submitButton = document.querySelector(".submit-button");
const form = document.querySelector("form");


form.addEventListener("submit",(e)=>{
    if(password.value!=confirmPassword.value){
        password.setCustomValidity("Password doesn't match with confirmed password field");
        e.preventDefault();
    }
    else{
        password.setCustomValidity("");
    }
})

const email = form.email;
email.addEventListener("input",(e)=>{
    if(email.validity.typeMismatch){
        email.setCustomValidity("enter a valid email");
    }
    else{
        email.setCustomValidity("")
    }
})