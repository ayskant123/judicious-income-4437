
let products = JSON.parse(localStorage.getItem("items"));
console.log(products)

let pro = document.getElementById("HP_product")

    let ship = document.querySelector("#ship")
    let ship1 = document.querySelector("#ship1")
    let sub = document.querySelector("#HP_sub")
    let total1 = document.querySelector("#total1")
    
    let subTotal

    displayData(products)

    function displayData(data){

        // product.innerHTML = null;
        
        ship.innerText= "( "+ products.length +" Items"+")"
        ship1.innerText=  products.length 

        subTotal = 0

        data.forEach(function(el,index){


            let count = el.count || 1;

            let div = document.createElement("div");
            div.setAttribute("class","items")

                let div1 = document.createElement("div");
                div1.setAttribute("id","Div1")
                let img = document.createElement("img");
                img.src= el.thumbnail;
                
                div1.append(img)

                let div2 = document.createElement("div");
                div2.setAttribute("id","Div2")
                let desc = document.createElement("p");
                desc.innerText = el.title;

                div2.append(desc)

                let div3 = document.createElement("div");
                div3.setAttribute("id","Div3")
                let pri = document.createElement("p");
                pri.innerText = "$ "+ el.price

                div3.append(pri)

                let div4 = document.createElement("div");
                div4.setAttribute("id","Div4")
                
                let dec = document.createElement("button");
                dec.innerText= "-";

                let inc = document.createElement("button");
                inc.innerText="+";

                let p = document.createElement("p");
                p.innerText= count;

                dec.addEventListener("click",function(){
                    decCount(el);
                })

                inc.addEventListener("click",function(){
                    incCount(el);
                })

                div4.append(dec,p,inc)

                let div5=document.createElement("div")
                div5.setAttribute("id","Div5")
                let total = document.createElement("h3");
                total.innerText = "$ "+Number(count)*Math.floor(Number(el.price));
                
                div5.append(total)

                subTotal+= Number(count)*Math.floor(Number(el.price));
                subTotal = Math.floor(subTotal)
                sub.innerHTML = "$ "+subTotal
                total1.innerHTML= "$ "+subTotal

                

                let div6=document.createElement("div");
                div6.setAttribute("id","Div6");

                div6.innerText = " Delete"

                div6.addEventListener("click",function(){
                    deleteItem(el,index);
                })

            div.append(div1,div2,div3,div4,div5,div6);
            

            pro.append(div)

        })
    }

    localStorage.setItem("HP_checkout_total",JSON.stringify(subTotal))

    function  decCount(el){

        if(el.count>0){
            el.count--;
        }

        localStorage.setItem("items",JSON.stringify(products));
        window.location.reload()

    }

    function  incCount(el){

        el.count++;
        localStorage.setItem("items",JSON.stringify(products));
        window.location.reload()

    }

    function deleteItem(el,index){
        products.splice(index,1);
        localStorage.setItem("items",JSON.stringify(products));
        window.location.reload()
    }

    document.querySelector("#proceed").addEventListener("click",function(){
        window.location.href="../shipping/shipping.html"
    });

    let nav_logo = document.getElementById("nav_logo").addEventListener("click",function(){
        window.location.href ="../judicious-income-4437/index.html"
      })

