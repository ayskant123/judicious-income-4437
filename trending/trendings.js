showItem();
async function showItem(){
try{
    
    
    
    let res=await fetch('https://dummyjson.com/products')
     let Info=await res.json()
      data=Info.products
    console.log(data)
    appendItem(data)
    
   
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
        let div1=document.createElement('div')
        div1.setAttribute("class","aym_pr")
    let img=document.createElement('img')
    img.src=ele.thumbnail
        div1.append(img)
        let div2=document.createElement('div')
        let span1=document.createElement('span')
        span1.innerText=ele.title
         div2.setAttribute("class","aym_title")
        div2.append(span1)
        let div3=document.createElement('div')
        let span2=document.createElement('span')
        span2.innerText='Rating:' + ele.rating
        div3.append(span2)
        let div4=document.createElement('div')
        let span3=document.createElement('span')
        let h2=document.createElement('h2')
        h2.innerText='$'+ele.price
        span3.append(h2)
        div4.append(span3)
        let div5=document.createElement('div')
        div5.setAttribute("class","shop")
       let i=document.createElement('i')
       i.setAttribute("class","fa-solid fa-cart-shopping")
        let btn1=document.createElement('button')
        btn1.setAttribute("class","addTocart")
          
        btn1.append(i)
        div5.append(btn1)
   
    btn1.addEventListener("click",function(){
        addTocart(index)
    })
    let btn2=document.createElement('button')
    btn2.innerText="Buy"
    div5.append(btn2)
     btn2.setAttribute("class","Buy_Now")
    btn2.addEventListener("click",function(){
        buyNow(index)
    })
      
   div.append(div1,div2,div3,div4,div5)
   container.append(div)

  });
}
    function addTocart(index)
    {
        
        
            let count=JSON.parse(localStorage.getItem("items"))||[]
            // let couIt=document.getElementById("item_count")
            // couIt.innerText=count.length+1
            let cartData=JSON.parse(localStorage.getItem("items"))||[]
               cartData.push(data[index])
               localStorage.setItem("items",JSON.stringify(cartData))
               console.log(cartData)
    

       
    }
   function buyNow(index){
   let BuyNow=localStorage.setItem("BuyData",JSON.stringify(data[index]))
    console.log(BuyNow)
    window.location.href="../details/details.html"
    }
  

    
    
