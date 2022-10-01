// ........................................................................// 
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
  document.getElementById("dealsCountdown").innerHTML ="Ends In " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dealsCountdown").innerHTML = "EXPIRED";
  }
}, 1000);
   let id;
function slideShow()
{
    const arr=["https://content1.geekbuying.com/V1.4/en/promotion/20220926q/image/ban0.png",
               "https://img.gkbcdn.com/pi/20220926/ban1._p1_.jpg",
              "https://img.gkbcdn.com/pi/20220923/ban1._p1_.jpg",
              "https://img.gkbcdn.com/bn/2209/740x670-63244c8f2b40c94d3cdf00a6._p1_.jpg",
              "https://img.gkbcdn.com/bn/2209/740x670-632283f42b40c92780e67224._p1_.jpg"
              ];
  
    
    let i=0;
     let div=document.getElementById("slider")
     let img=document.createElement('img')
     img.src=arr[0]
     div.append(img);
     i=i+1
     setInterval(function(){
         if(i==3)
        
     {
             i=0
         }
         img.src=arr[i];
         i=i+1
         div.append(img)
     },2000)
}
slideShow();
// + days + "d " 

let nav_logo = document.getElementById("nav_logo").addEventListener("click",function(){
    window.location.href ="index.html"
  })
    

