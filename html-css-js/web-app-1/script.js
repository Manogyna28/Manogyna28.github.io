function dispMessage(){
    // a=10
    // b=20
    // c=a+b
    // document.writeln(c)  )it is open a new page and give the result as 30 in new page
    // alert(c)
    // alert(document.getElementById("txtEmail").value);
     //   lblMessahge.innerHTML=document.getElementById("txtEmail").value +"-" +document.getElementById("txtPassword").value
     let email= document.getElementById("txtEmail").value
     let password=document.getElementById("txtPassword").value
     if(email=="login@123"&& password=="123"){
        lblMessage.innerHTML="welcome";
     } else{
        lblMessage.innerHTML="access denied";
     }
}
function showLoginForm(){
    let str = `
    <h3>Login Form</h3>
      <p><label id="lblMessage"></label></p>
      <p><input type="text" id="txtEmail" /></p>
      <p><input type="password" id="txtPassword" /></p>
      <p><button class="login-btn" onclick="dispMessage()">Log In</button></p>
      <hr>
      <p><button class="account" onclick="showRegisterForm()">Create Account</button></p>
    `
    root.innerHTML = str
}

function showRegisterForm(){
    let str =  `
     <h3>Registration Form</h3>
    `
    root.innerHTML = str
}