import Image from "next/image"
import Cart from "../../../image/cart.png"

export default function Shopping(){
    return(
        <>
           <Image src={Cart} alt="Laptop" className="w-[20px] h-[20px] "/>
       </>
    )
}