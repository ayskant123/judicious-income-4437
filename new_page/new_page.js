

let container = document.getElementById("BS_new_append");


let BS_new_data = [
    {
        img: "./new_page/img1.jpg",
        title: 'Creativity Ender 3 S1 3D Original Heater Block Silicone',
        price: 2.04,

    },
    {
        img: "./new_page/img2.jpg",
        title: 'Creativity Ender 3 S1 3DOriginal Heater Block Silicone',
        price: 31.07,
        
    },
    {
        img: "./new_page/img3.jpg",
        title: 'Spare Part for NAVEE N65 CAR Truck',
        price: 70.94,
        
    },
    {
        img: "./new_page/img4.jpg",
        title: 'JJRC H106 RC Drone Spare Parts 4PCS Protective Frame',
        price: 41.10,
        
    },{
        img: "./new_page/img5.jpg",
        title: 'JJRC H106 RC Drone Spare Parts 2PCS CW CCW Propeller',
        price: 6.10,
        
    },{
        img: "./new_page/img6.jpg",
        title: 'Creativity Ender-3 S1 24V 40W Heater Thermistor Heating Rod',
        price: 99.13,
        
    },{
        img: "./new_page/img7.jpg",
        title: 'Robot Vacuum Cleaner Accessories Cleaning Mop',
        price: 22.13,
        
    },{
        img: "./new_page/img8.jpg",
        title: 'JJRC H106 RC Drone Spare Parts CCW Motor',
        price: 88.13,
        
    },{
        img: "./new_page/img9.jpg",
        title: 'JJRC H106 RC Drone Spare Parts CW Motor',
        price: 11.13,
        
    },{
        img: "./new_page/img10.jpg",
        title: 'Creativity V6 to CR10 J-head Hot End Aluminum Bracket,',
        price: 27.13,
        
    },
    {
        img: "./new_page/img11.jpg",
        title: 'Solid Color Finger Strap Phone Protective Shell for iPhone 14',
        price: 6.15,
        
    },
    {
        img: "./new_page/img12.jpg",
        title: 'TWO TREES Dual Drive Gear Extruder Kit Cloned Btech',
        price: 9.15,
        
    },
    {
        img: "./new_page/img13.jpg",
        title: 'OOLACTIVE GF-1202 340z Water Bottle with Straw',
        price: 24.18,
        
    },
    {
        img: "./new_page/img14.jpg",
        title: 'Y80 Bluetooth 5.1 TWS Earphone Wireless Digital',
        price: 49.18,
        
    },
    {
        img: "./new_page/img15.jpg",
        title: 'F6D TWS Earbuds Touch Bluetooth 5.0 True Wireless',
        price: 7.18,
        
    },
    {
        img: "./new_page/img16.jpg",
        title: 'F6D TWS Earbuds Touch Bluetooth 5.0 True Wireless',
        price: 62.18,
        
    },
    {
        img: "./new_page/img17.jpg",
        title: 'F6S Wireless TWS Bluetooth 5.2 Sports Stereo In-Ear',
        price: 77.18,
        
    },
    {
        img: "./new_page/img18.jpg",
        title: 'Roller Brush for Proscenic P10 P11 Cordless Vacuum Cleaner',
        price: 90.21,
        
    },
    {
        img: "./new_page/img19.jpg",
        title: 'Y70 Bluetooth 5.1 Wireless Earphone TWS In-Ear Earbuds',
        price: 101.21,
        
    },
    {
        img: "./new_page/img20.jpg",
        title: 'OOLACTIVE LF-0402 Bike Phone Front Frame Bag Bicycle',
        price: 200.24,
        
    },
    {
        img: "./new_page/img21.jpg",
        title: 'Home&Styling Folding Kitchen Scales Stainless Steel White',
        price: 105.21,
        
    },
    {
        img: "./new_page/img22.jpg",
        title: 'Smart Voice-Activated Luminous Phone Case, Anti-Fal',
        price: 55.26,
        
    },
    {
        img: "./new_page/img23.jpg",
        title: 'Jimmy JV53/JV51/JV83/JV65/JV63/JV',
        price: 35.26,
        
    },
    {
        img: "./new_page/img23.jpg",
        title: 'HINOVO MPC1-IP 14 Strong Magnetic Charging Mobile',
        price: 22.26,
        
    },
]



function append(BS_new_data) {
    
    container.innerHTML = null;

    BS_new_data.forEach((e) => {
        
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = e.img;

        let title = document.createElement("p");
        title.innerHTML = e.title;

        let price = document.createElement('h4');
        price.innerText = '€' + e.price;
        
        let fav = document.createElement("div");

        let like = document.createElement('p');
        like.innerHTML = "❤️";

        let ship = document.createElement('p');
        ship.innerText = "Free Shipping";

        fav.append(like, ship);

        div.append(img, title, price,fav);
        container.append(div);

    });


}

append(BS_new_data);




const filter = (BS_new_append) => {
    
    let normal = document.getElementById("BS_Normal");

    normal.addEventListener('click', () => {
        
        append(BS_new_append);
    });

    let new_Data = [...BS_new_append];

    let a_to_z = document.getElementById("BS_a_to_z");


    a_to_z.addEventListener('click', () => {
        
        new_Data.sort((a, b) => {
            return a.title[0].localeCompare(b.title[0])
        });
        append(new_Data)

    });

    let z_to_a = document.getElementById("BS_z_to_a");

    z_to_a.addEventListener('click', () => {
        
        new_Data.sort((a, b) => {
            return b.title[0].localeCompare(a.title[0])
        });
        append(new_Data)

    });


    let Lowp = document.getElementById("BS_Low");

    Lowp.addEventListener('click', () => {
        
        new_Data.sort((a, b) => {
            return +a.price-(+b.price)
        });
        append(new_Data)

    });

    let Highp = document.getElementById("BS_High");

    Highp.addEventListener('click', () => {
        
        new_Data.sort((a, b) => {
            return +b.price-(+a.price)
        });
        append(new_Data)

    });

    

    let price_range = document.getElementById("BS_range");
    // let ranged_data = [...new_Data];
    price_range.addEventListener('click', () => {
        let min_val = document.getElementById("BS_min").value;
        let max_val = document.getElementById("BS_max").value;
        let x = new_Data.filter((e) => {
            return +min_val<=+e.price && +e.price<=max_val;
        });
        append(x);
    });

    
    
}

filter(BS_new_data);

let nav_logo = document.getElementById("nav_logo").addEventListener("click",function(){
    window.location.href ="index.html"
  })






