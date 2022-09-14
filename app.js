const loginForm =document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");



function loginSubmit(event){
   event.preventDefault();
   const userName=loginInput.value;
   loginForm.classList.add("hidden");
   localStorage.setItem("username",userName);
   greeting.innerText="안녕하세요, "+userName+"님";
   greeting.classList.remove("hidden");

}

loginForm.addEventListener("submit",loginSubmit)
