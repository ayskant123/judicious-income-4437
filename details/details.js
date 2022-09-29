let item_obj=JSON.parse(localStorage.getItem("BuyData"))
 console.log(item_obj)
 appendItem(item_obj)
    function appendItem(item_obj)
{
    let container=document.getElementById("details")
    container.innerHTML=null
     let div=document.createElement('div')
     div.setAttribute("class","detail")
    let img=document.createElement('img')
    img.src=item_obj.image
    let des=document.createElement('p')
    des.innerText=item_obj.description
    let name=document.createElement('h2')
    name.innerText=item_obj.title

    let price=document.createElement('h2')
    price.innerText=item_obj.price
    let btn1=document.createElement('button')
    btn1.innerText="Add To Cart"
    btn1.setAttribute("class","add_to_cart")
    btn1.addEventListener("click",function(){
        addTocart()
    })
    let btn2=document.createElement('button')
    btn2.innerText="Buy Now"
     btn2.setAttribute("class","Buy_Now")
    btn2.addEventListener("click",function(){
        buyNow()
    })

   div.append(img,name,des,price,btn1,btn2)
   container.append(div)

}
    function addTocart()
    {
        
        
            let count=JSON.parse(localStorage.getItem("items"))||[]
            // let couIt=document.getElementById("item_count")
            // couIt.innerText=count.length+1
            let cartData=JSON.parse(localStorage.getItem("items"))||[]
               cartData.push(item_obj)
               localStorage.setItem("items",JSON.stringify(cartData))
               console.log(cartData)
    

       
    }
   function buyNow(index){
   let BuyNow=localStorage.setItem("BuyData",JSON.stringify(Info[index]))
    console.log(BuyNow)
    window.location.href="details.html"
    }