const loginForm = document.querySelector("#form_login")
const forgotForm = document.querySelector("#forgot_pw")
const btn_forgot = document.querySelector("#forgot")
const btnCloseModal = document.querySelector("#closeModal")


btn_forgot.addEventListener('click' , (e) =>{
   loginForm.classList.toggle('formHidden')
})

btnCloseModal.addEventListener("click" , () =>{
    loginForm.classList.remove('formHidden')
})