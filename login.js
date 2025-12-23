
function login(){
 let u=document.getElementById("user").value;
 if(u){
  sessionStorage.setItem("user",u);
  location.href="index.html";
 }
}
