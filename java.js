function formSubmitted(event){

    let usernameTxt = document.getElementById('usernameTxt')
    let username = usernameTxt.value
    let password = document.getElementById('passwordTxt').value
    let confirmPassword = document.getElementById('confirmPasswordTxt').value
    let email = document.getElementById('emailTxt').value
    let fullname = document.getElementById('fullnameTxt').value
    let address = document.getElementById('addressTxt').value
    let checkBox = document.getElementById('checkBox').checked

    if (username.length < 8){
        alert('username length must be atleast 8 characters')
    } 
    else if (fullname.length < 10){
        alert('fullname length must be atleast 10 characters')
    }
    else if (!email.endsWith('@gmail.com')){
        alert('email must ends with @gmail.com')
    }
    else if (password !== confirmPassword){
        alert('Password must match with each other')
    }
    else if (address.length < 15){
        alert('Address length must be atleast 15 characters')
    }
    else if (!checkBox){
        alert('you must agree with the terms and conditions')
    }
    else{
        alert('success')
    }

    event.preventDefault()
}