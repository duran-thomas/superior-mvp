"use client";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const servicesData = {
  services: [
    {
      name: "Basic Service",
      recommended: false,
      warranty: "500 Kms or 2 Weeks",
      recommended_interval: "Every 5,000 Kms or 3 Months",
      duration: "3 Hrs Taken",
      price: { original: 3500, discounted: 2499, currency: "JMD" },
      features: [
        "Oil Change",
        "Battery Water Top Up",
        "Tire Pressure Check",
        "Exterior Wash",
      ],
      image_url: "/img/blog/blog-details/11.jpg",
    },
    {
      name: "Standard Service",
      recommended: true,
      warranty: "1000 Kms or 1 Month",
      recommended_interval: "Every 10,000 Kms or 6 Months",
      duration: "6 Hrs Taken",
      price: { original: 4884, discounted: 3419, currency: "JMD" },
      features: [
        "Car Scanning",
        "Battery Water Top Up",
        "Interior Vacuuming (Carpet & Seats)",
        "Car Wash",
      ],
      image_url: "/img/blog/blog-details/11.jpg",
    },
    {
      name: "Premium Service",
      recommended: true,
      warranty: "2000 Kms or 2 Months",
      recommended_interval: "Every 15,000 Kms or 9 Months",
      duration: "8 Hrs Taken",
      price: { original: 7500, discounted: 5999, currency: "JMD" },
      features: [
        "Full Engine Diagnostics",
        "Synthetic Oil Change",
        "Brake Inspection & Adjustment",
        "Underbody Wash",
      ],
      image_url: "/img/blog/blog-details/11.jpg",
    },
    {
      name: "Deluxe Service",
      recommended: false,
      warranty: "2500 Kms or 3 Months",
      recommended_interval: "Every 20,000 Kms or 12 Months",
      duration: "10 Hrs Taken",
      price: { original: 9800, discounted: 8499, currency: "JMD" },
      features: [
        "Complete Engine Tune-up",
        "Transmission Fluid Check",
        "Wheel Alignment & Balancing",
        "Interior Detailing",
      ],
      image_url: "/img/blog/blog-details/11.jpg",
    },
    {
      name: "Ultimate Care Package",
      recommended: true,
      warranty: "5000 Kms or 6 Months",
      recommended_interval: "Every 30,000 Kms or 18 Months",
      duration: "12 Hrs Taken",
      price: { original: 15000, discounted: 12999, currency: "JMD" },
      features: [
        "Comprehensive Multi-Point Inspection",
        "Fuel System Cleaning",
        "Suspension Check & Repair",
        "Full Exterior & Interior Detailing",
      ],
      image_url: "/img/blog/blog-details/11.jpg",
    },
  ],

};

const addProductToCart = (product, router) => {

  let cart = localStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Product added to cart:", product);
  router.push(`/checkout`);
};


const ShopMain = ({ title, text }) => {
 const [services, setServices] = useState([]);

 const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Get the saved data from localStorage
    const savedData = localStorage.getItem("formPayload");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    // Get the saved data from localStorage
    const savedData = localStorage.getItem("formPayload");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("formData"); // Replace "yourKey" with the actual key name
  }, []);

  useEffect(() => {
    localStorage.removeItem("cart"); // Replace "yourKey" with the actual key name
  }, []);


 useEffect(() => {
   setServices(servicesData.services);
   
 }, []);

 const router = useRouter();

 return (
   <main>
     <HeroPrimary title={title || "Shop Services"} text={text || "Choose the best service for your vehicle."} />
     <section className="services-list">
     <div className="shop-container">
     <h1 className="shop-header">Our Services</h1>
     <span>
      <img style={{width: '150px', height: '150px'}} src={formData?.img} alt="Car Logo" />
     <h2>Your Car Details: {formData?.year} {formData?.brand} - {formData?.model} || {formData?.fuel}</h2>
     </span>
     <div className="service-list">
       {services.map((service, index) => (
         <div key={index} className="service-card">
           {/* {service.recommended && <span className="recommended">RECOMMENDED</span>} */}
           <img src={service.image_url} alt={service.name} className="service-image" />
           <div className="service-content">
             <h2 className="service-title">{service.name}</h2>
             <p className="service-warranty">{service.warranty} | {service.recommended_interval} | {service.duration}</p>
             {/* <p className="service-interval">{service.recommended_interval}</p>
             <p className="service-duration">⏳ {service.duration}</p> */}
             <ul className="service-features">
               {service.features.map((feature, idx) => (
                 <li key={idx}>•{feature}</li>
               ))}
             </ul>
             <div className="service-pricing">
               <span className="original-price">JMD {service.price.original}</span>
               <span className="discounted-price">JMD {service.price.discounted}</span>
             </div>
             <button className="add-to-cart" onClick={() => addProductToCart(service, router)}>
                + ADD TO CART
              </button>

           </div>
         </div>
       ))}
     </div>
   </div>
     </section>
     <style jsx>{`
       .shop-container {
 width: 80%;
 margin: auto;
 padding: 20px;
}


.shop-header {
 text-align: center;
 margin-bottom: 20px;
}


.service-list {
 display: flex;
 flex-direction: column;
 gap: 10px;
}


.service-card {
 display: flex;
 border: 1px solid #ddd;
 padding: 20px;
 border-radius: 10px;
 background: #fff;
 box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}


.service-image {
 width: 150px;
 height: 150px;
 margin-right: 20px;
 border-radius: 5px;
}


.service-content {
 flex: 1;
}


// .recommended {
//   background: green;
//   color: white;
//   padding: 5px 10px;
//   font-weight: bold;
//   border-radius: 5px;
// }


.service-title {
 font-size: 20px;
 font-weight: bold;
 margin: 0;
}


.service-pricing {
 display: flex;
 align-items: center;
 margin-top: 10px;
}


.original-price {
 text-decoration: line-through;
 margin-right: 10px;
 color: #888;
}


.discounted-price {
 font-size: 18px;
 font-weight: bold;
}


.add-to-cart {
 background: red;
 color: white;
 padding: 10px;
 border: none;
 cursor: pointer;
 font-weight: bold;
 border-radius: 5px;
 margin-top: 10px;
}


.service-features {
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 list-style: none;
 padding: 0;
}


.service-warranty {
 margin: 0;
}


     `}</style>
   </main>
 );
};


export default ShopMain;
