let countDownDate = new Date("Oct 4, 2022 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML ="Ends In " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);
// ......................................................................................//

let item_obj=JSON.parse(localStorage.getItem("BuyData"))
 console.log(item_obj.images[0]    )
 appendItem(item_obj)
 
    function appendItem(item_obj)
{
    let img_container=document.getElementById("img")
    img_container.innerHTML=null
     let div1=document.createElement('div')
     div1.setAttribute("class","img_div1")
    let img=document.createElement('img')
    img.src=item_obj.thumbnail
    div1.append(img)
     img_container.append(div1)
// .......................................................................//  
    let des_container=document.getElementById("des")
    des_container.innerHTML=null
    div2=document.createElement('div')
    let des=document.createElement('p')
    des.innerText=item_obj.description
    let name=document.createElement('h3')
    name.innerText=item_obj.title
    div2.append(des,name)
     des_container.append(div2)

    //  ........................................................................//
    let ex_container=document.getElementById("ex_info")
        ex_container.innerHTML=null
        div3=document.createElement('div')
        let span1=document.createElement('span')
        span1.innerText="Rating: "+" " + item_obj.rating
        div3.append(span1)
       
        div4=document.createElement('div')
        let span2=document.createElement('span')
        span2.innerText="Brand: " + " " + item_obj.brand

        div4.append(span2)
        div5=document.createElement('div')
         let span3=document.createElement('span')
        span3.innerText="Item Code: " + " " + item_obj.id
        div5.append(span3)
        ex_container.append(div3,div4,div5)
    let pr_container=document.getElementById("Price")
        pr_container.innerHTML=null
        div6=document.createElement('div')
    let span4=document.createElement('span')
    span4.innerText="$"+item_obj.price +" "
    let del1=document.createElement('del')
        del1.innerText="$9820"
     div6.append(span4,del1)

    div7=document.createElement('div')
    let Offer=document.createElement('p')
     Offer.innerText="24% OFF"
     div7.append(Offer)
     pr_container.append(div6,div7)

    // .............................................................................//
    
    let op_container=document.getElementById("op_img")
    op_container.innerHTML=null
    let div8=document.createElement('div')
    let img_op=document.createElement('img')
    img_op.src=item_obj.images[0]
     div8.append(img_op)
     op_container.append(div8)
    // ..............................................................................// 

       let btn_container=document.getElementById("btn")
       btn_container.innerHTML=null
       let div9=document.createElement('div')

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

   div9.append(btn1,btn2)
   btn_container.append(div9)

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
   function buyNow(){
   let BuyNow=localStorage.setItem("BuyData",JSON.stringify(item_obj))
    console.log(BuyNow)
    window.location.href="shipping.html"
    }

    let nav_logo = document.getElementById("nav_logo").addEventListener("click",function(){
        window.location.href ="index.html"
      })