const loginForm =document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");
const clocks = document.querySelector(".clock");
const todoForms = document.querySelector(".todo-form");
const qouteds = document.querySelector(".quote span");
const weather = document.querySelector(".weather")

const savedUsername = localStorage.getItem("username");

if(savedUsername ===null)
{
   loginForm.classList.remove("hidden");
   
   function loginSubmit(event){
      event.preventDefault();
      const userName=loginInput.value;
      loginForm.classList.add("hidden");
      localStorage.setItem("username",userName);
      greeting.innerText="안녕하세요, "+userName+"님";
      greeting.classList.remove("hidden");
      clocks.classList.remove("hidden");
      todoForms.classList.remove("hidden");
      qouteds.classList.remove("hidden");
      weather.classList.remove("hidden");
   
   }
   
   loginForm.addEventListener("submit",loginSubmit);
   

}

else{
   greeting.classList.remove("hidden");
   greeting.innerText="안녕하세요, "+savedUsername+"님";
   clocks.classList.remove("hidden");
   todoForms.classList.remove("hidden");
   qouteds.classList.remove("hidden");
   weather.classList.remove("hidden");
   
  

}
