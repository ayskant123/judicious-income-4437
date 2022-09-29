showItem();
async function showItem(){
try{
    
    
    let res=await fetch('https://fakestoreapi.com/products')
    let Info=await res.json()
     let  items=Info.data
    console.log(Info)
     appendItem(Info)
    
   
}
catch(err){
    console.log(err)
}
}
function appendItem(Info)
{
    let container=document.getElementById("items")
    container.innerHTML=null
    Info.forEach(function(ele,index) {
        let div=document.createElement('div')
        div.setAttribute("class","item")
    let img=document.createElement('img')
    img.src=ele.image
    let name=document.createElement('h2')
    name.innerText=ele.name
    let price=document.createElement('p')
    price.innerText=ele.price
    let btn1=document.createElement('button')
    btn1.innerText="Add To Cart"
    btn1.setAttribute("class","add_to_cart")
    btn1.addEventListener("click",function(){
        addTocart(index)
    })
    let btn2=document.createElement('button')
    btn2.innerText="Buy Now"
     btn2.setAttribute("class","Buy_Now")
    btn2.addEventListener("click",function(){
        buyNow(index)
    })

   div.append(img,name,price,btn1,btn2)
   container.append(div)

    });
    function addTocart(index)
    {
        
        
            let count=JSON.parse(localStorage.getItem("items"))||[]
            // let couIt=document.getElementById("item_count")
            // couIt.innerText=count.length+1
            let cartData=JSON.parse(localStorage.getItem("items"))||[]
               cartData.push(Info[index])
               localStorage.setItem("items",JSON.stringify(cartData))
               console.log(cartData)
    

       
    }
   function buyNow(index){
   let BuyNow=localStorage.setItem("BuyData",JSON.stringify(Info[index]))
    console.log(BuyNow)
    window.location.href="details.html"
    }
 }