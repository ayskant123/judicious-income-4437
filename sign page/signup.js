

submit=()=>{

    function Obj(text,email,password){
    this.name=text;
    this.email=email;
    this.password=password;
    
    }
    
    let text=document.querySelector("#HP_name").value;
    let email=document.querySelector("#HP_email").value
    let password=document.querySelector("#HP_password").value
    
    let HP_Data=new Obj(text,email,password)
    console.log(HP_Data)
    
    localStorage.setItem("HP_user",JSON.stringify(HP_Data))
    window.location.href="signin.html"
    }
   
    let nav_logo = document.getElementById("nav_logo").addEventListener("click",function(){
        window.location.href ="index.html"
      })