import Link from "next/link"
import Image from "next/image";
import Laptop from "../image/9.png"
import ac from "../image/ac2.jpeg"
import fridge from "../image/fridge.jpeg"
import plazma from "../image/tv.jpeg"
import iphone from "../image/iphone.jpg"
import ac2 from "../image/ac2.jpg"
import oven from "../image/oven2.jpg"





export default function Item(){
    const items = [
        { id: 1, title: "MacBook Pro", description: "Apple's high-performance laptop.",price:10000,image:Laptop},
        { id: 2, title: "Gree AC", description: "Inverter With AI Tech",price:50000,image:ac2 },
        { id: 3, title: "Fridge", description: "0 Valtage with New Tech", price:80000,image:fridge},
        { id: 4, title: "Plazma", description: "8K Display.",price:100000,image:plazma },
        { id: 5, title: "Iphone", description: "1 TB Storage Rose Gold.",price:100000,image:iphone},
        { id: 6, title: "Oven", description: "Without Using Electricity.",price:100000,image:oven},


    ];

    return(
        <div className="py-10 px-8">
            <h1 className="text-3xl font-bold ">Electronic Sell 2024</h1>
            
            <div className='mt-7 grid grid-cols-3 gap-7'>
                {
                    items.map((item)=>{
                        return(
                            <div className="border border-blue-600 rounded-lg py-3 px-5">
                                <div className="h-[150px]">

                                 <Image src={item.image} alt={item.title} width={200} height={200} className="object-contain h-full w-full"  />


                                </div>

                                <div  className="flex flex-col gap-3">

                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <h3 className="text-lg font-semibold">RS:{item.price}</h3>
                                 <p  className="text-gray-700">{item.description}</p>
                                 
                                 <Link href={`/D_page/${item.id}`}>
  <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
    Add To Cart
  </button>
                                 </Link>


                                </div>
                                 
                            </div>
                           

                        )
                    })
                }
          
                
            </div>
        </div>
    )
}