

let total = JSON.parse(localStorage.getItem("HP_checkout_total")) ;

let Sub = document.querySelector("#HP_ST");
Sub.innerText = "$ "+Number(total);

let red = document.querySelector("#red");
let x = Number(total)+Number(80);
red.innerText = "$ "+x

localStorage.setItem("HP_final_Total",JSON.stringify(x))

document.querySelector("#HP_Place_order_btn").addEventListener("click",function(){
   window.location.href="./payments/payments.html"
});

// total.innerText=null
