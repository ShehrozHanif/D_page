
"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Laptop from "../../../image/9.png";
import ac from "../../../image/ac2.jpeg";
import fridge from "../../../image/fridge.jpeg";
import plazma from "../../../image/Tv2.jpeg";
import oven from "../../../image/oven.jpeg";
import iphone from "../../../image/iphone.jpg";
import Lap2 from "../../../image/newlap-2.jpg"
import Lap3 from "../../../image/newlap3.png"
import ac2 from "../../../image/ac2.jpg"
import ac3 from "../../../image/ac3.jpg"
import ac4 from "../../../image/ac4.jpg"
import f3 from "../../../image/f3.jpg"
import f4 from "../../../image/f4.jpg"
import p2 from "../../../image/p2.jpg"
import p4 from "../../../image/p4.jpeg"
import i3 from "../../../image/i3.jpg"
import i4 from "../../../image/i4.jpg"
import oven2 from "../../../image/oven2.jpg";
import oven3 from "../../../image/oven3.jpg";
import o4 from "../../../image/o4.jpg";












interface Iprops {
  params: {
    child: string;
  };
}

export default function Page({ params }: Iprops) {
  const items = [
    { 
      id: 1, 
      title: "MacBook Pro", 
      description: "Apple's high-performance laptop.", 
      price: 10000, 
      image: Laptop, 
      images: [Laptop, Lap2, Lap3] // additional images for gallery
    },
    { 
      id: 2, 
      title: "Gree AC", 
      description: "Inverter With AI Tech", 
      price: 50000, 
      image: ac2, 
      images: [ac2, ac3, ac4] 
    },
    { 
      id: 3, 
      title: "Fridge", 
      description: "0 Voltage with New Tech", 
      price: 80000, 
      image: fridge, 
      images: [fridge, f3 , f4] 
    },
    { 
      id: 4, 
      title: "Plazma", 
      description: "8K Display.", 
      price: 100000, 
      image: plazma, 
      images: [plazma, p2, p4] 
    },
    { 
      id: 5, 
      title: "Iphone", 
      description: "1 TB Storage Rose Gold.", 
      price: 100000, 
      image: iphone, 
      images: [iphone, i3, i4] 
    },
    { 
      id: 6, 
      title: "Oven", 
      description: "Without Using Electricity.", 
      price: 100000, 
      image: oven2, 
      images: [oven2, oven3 , o4] 
    }
  ];

  const itemId = parseInt(params.child);
  const item = items.find((l) => l.id === itemId);

  // Handle missing item
  if (!item) {
    return <div className="text-center text-xl text-red-500">Product Not Found</div>;
  }

  // State for the main image
  const [mainImage, setMainImage] = useState(item.image);

  return (
    <div className="max-w-4xl mx-auto py-10 px-5 sm:px-10">
      <div className="border border-blue-600 rounded-lg p-5 shadow-lg">
        {/* Main image section */}
        <div className="h-[300px] flex justify-center items-center">
          <Image src={mainImage} alt={item.title} width={300} height={300} className="object-contain" />
        </div>

        {/* Thumbnail images */}
        <div className="flex justify-center gap-3 mt-5">
          {item.images.map((imgSrc, index) => (
            <div key={index} className="cursor-pointer">
              <Image 
                src={imgSrc} 
                alt={`Thumbnail ${index + 1}`} 
                width={80} 
                height={80} 
                className={`object-contain border ${mainImage === imgSrc ? 'border-blue-600' : 'border-gray-300'} rounded`}
                onClick={() => setMainImage(imgSrc)} 
              />
            </div>
          ))}
        </div>

        {/* Product info */}
        <div className="mt-5 flex flex-col items-center text-center gap-3">
          <h2 className="text-3xl font-bold">{item.title}</h2>
          <h3 className="text-2xl font-semibold text-blue-600">RS: {item.price}</h3>
          <p className="text-lg text-gray-700">{item.description}</p>

          <ul className="list-disc list-inside text-left text-gray-600 mt-4">
            <li>High-performance Processor</li>
            <li>Long Battery Life</li>
            <li>Lightweight and Portable</li>
          </ul>

          <div className="flex justify-center gap-1 mt-3">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <Link href={`/D_page`}>
            <button className="mt-5 bg-blue-600 text-white py-3 px-8 rounded hover:bg-blue-700 transition duration-300 ease-in-out flex items-center">
              
           
              
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
