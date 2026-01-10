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
function ShowLoginForm(){
    
}