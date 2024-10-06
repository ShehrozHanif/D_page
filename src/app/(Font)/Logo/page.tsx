import Image from "next/image"
import Background from "../../../image/logo2.png"


export default function Logo(){
    return(
        <>
          <Image src={Background} alt="Laptop" className="w-[100px] h-[100px]"/>
        </>
    )
}