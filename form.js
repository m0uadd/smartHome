let users=document.querySelector("#users");
let username=document.querySelector("#name");
let mail=document.querySelector("#mail");
let password=document.querySelector("#password");
let myForm=document.querySelector("#form");
myForm=addEventListener("submit",addUser);
input=addEventListener("change",deletError);
let a;
function addUser() {
    if(username.value==""){
        document.getElementById("usname").classList.remove("error0");
        a=1;
    }
    if(mail.value==""){
        document.getElementById("mailerror").classList.remove("error0");
       a=1;
    }
    if(password.value==""){
        document.getElementById("passwd").classList.remove("error0");
        a=1;
    }
    if(a==1){
        a=0;
        return ;
    }
    var list=document.createElement("ol");
    var user_data=document.createTextNode("username:"+username.value+"||Mail:"+mail.value+"||password:"+password.value);
    list.appendChild(user_data);
    users.appendChild(list);
    username.value="";
    mail.value="";
    password.value="";
}
function deletError(){
    document.getElementById("usname").classList.add("error0");
    document.getElementById("mailerror").classList.add("error0");
    document.getElementById("passwd").classList.add("error0");
}
