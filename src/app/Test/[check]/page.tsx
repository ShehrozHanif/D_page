import Search from "@/app/Ui/page"
import Acount from "@/app/(Font)/Acount/page"
import Shopping from "@/app/(Font)/Shopping/page"
import Heart from "@/app/(Font)/Heart/page"
import Dropdown from "@/app/(Font)/Dropdown/page"
import Logo from "@/app/(Font)/Logo/page"
import Item from "../../../Component/Products"

export default function Check(){
    return(
        <>
        {/* Navbar */}
        <div className="grid grid-flow-col auto-cols-auto h-28">
            {/* Logo */}

            <div className="bg-slate-500 flex justify-center items-center h-28">
            <Logo/>
            </div>
           


            {/* Search Box */}
            <div className="bg-slate-500 flex justify-center items-center h-28">

                <span className="relative left-9">
                 <Search/>
                </span>


             <input
             type="text"
             placeholder="Search entire store here..."
             style={{ width: '550px' }} // Adjust the width as needed
             className="pl-10 pr-16 px-4 py-2 text-black bg-white  rounded-full focus:outline-none h-14"
             />

             <span className="relative right-14 border-l-4 border-gray-300 pl-1">
                All 
             </span>

             <span className="relative right-12">
                <Dropdown/>
             </span>






            </div>




            {/* Buttons */}

          <div className="bg-slate-500 flex  items-center justify-between h-28">
            <div className="grid grid-cols-3 gap-4">

                {/* Button 1 */}


              <div className=" h-14 w-32 flex justify-center items-center hover:bg-teal-700 border border-white rounded-full">
                 <span className="">
                    <Acount/>
                 </span>
                 <span className="font-bold text-white">
                   My Account
                 </span>
              </div>


              {/* Button-2 */}

               <div className=" h-14 w-32 flex justify-center items-center hover:bg-teal-700 border border-white rounded-full">
                  <span className="relative right-1">
                    <Shopping/>
                  </span>
                  <span className="font-bold text-white">
                   My Wish List
                  </span>
               </div>


               {/* Button-3 */}

              <div className=" h-14 w-32 flex justify-center items-center hover:bg-teal-700 border border-white rounded-full">
                <span className="relative right-1">
                    <Heart/>
                </span>

                <span className="font-bold text-white">
                My Cart
                </span>
        

              </div>
            </div>
          </div>



        </div>


            {/* Content Section */}
<div className="flex h-full">
  {/* Sidebar: Fixed size, no shrinking */}
  <div className="bg-gray-800 w-64  text-white flex-col flex-shrink-0 p-4 relative pt-16">
    <p className="border mb-3">Category</p>
    <p className="border mb-3">Color</p>
    <p className="border mb-3">Graphic Series</p>
    <p className="border mb-3">Refresh Rate</p>
    <p className="border mb-3">Warranty</p>
    <p className="border mb-3">Generation</p>
    <p className="border mb-3">Condition</p>
    <p className="border mb-3">Processor</p>
    <p className="border mb-3">Laptop Type</p>
    <p className="border mb-3">Brand</p>
    <p className="border mb-3">SSD</p>
    <p className="border mb-3">Price</p>
    <p className="border mb-3">Screen Size</p>
    <p className="border mb-3">RAM</p>
    <p className="border mb-3">Operating System</p>
    <p className="border mb-3">Graphics</p>
  </div>

  {/* Main Content: Grows and shrinks */}
  <div className="bg-white flex-grow p-4">
    <h1 className="text-6xl font-bold pt-2">New Laptops</h1>
    <p className="text-slate-400 pt-1">Items 1-20 of 94</p>

    <Item/>

    {/* Grid Container - Centered */}
    {/* <div className="flex justify-evenly  h-[550px] relative top-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-slate-600 p-4 text-white w-96">01</div>
        <div className="bg-slate-500 p-4 text-white">02</div>
        <div className="bg-slate-400 p-4 text-black">03</div>
        <div className="bg-slate-300 p-4 text-black">04</div>
        <div className="bg-slate-200 p-4 text-black">05</div>
        <div className="bg-slate-200 p-4 text-black">05</div>

      </div>
    </div> */}
  </div>
</div>
      
     


     

  







     {/* Footer */}

     <div >

      <div className="bg-slate-700 flex justify-center items-center font-bold h-12 text-white">

         Back To Top

      </div>  

      {/* Second Section */}

      <div  className="bg-slate-500 flex  justify-evenly items-start pt-2  h-full">

        <div className="flex flex-col">
            
        
              <p className="font-bold text-white">Get to Know Us</p>
              <a href="#" className="text-white">Careers</a>
              <a href="#" className="text-white">Blog</a>  
              <a href="#" className="text-white">About Laptop Wala </a>  
              <a href="#" className="text-white">Investor Relations</a>  
              <a href="#" className="text-white">Laptop Wala Devices</a>  
              <a href="#" className="text-white">Laptop Wala  Science</a>  

        </div>


        <div className="flex flex-col">
                <p className="font-bold text-white">Make Money with Us</p>
                <a href="#" className="text-white">Sell products on Laptop Wala </a>
                <a href="#" className="text-white">Sell on Laptop Wala Business</a>  
                <a href="#" className="text-white">Sell apps on Laptop Wala </a>  
                <a href="#" className="text-white">Become an Affiliate</a>  
                <a href="#" className="text-white">Advertise Your Products</a>  
                <a href="#" className="text-white">Self-Publish with Us</a>
                <a href="#" className="text-white">Host an Laptop Wala Hub</a>
                <a href="#" className="text-white">›See More Make Money with Us</a> 
        </div>





        <div className="flex flex-col">
                <p className="font-bold text-white">LapTopWALA Payment Products</p>
                <a href="#" className="text-white">Laptop Wala Business Card</a>
                <a href="#" className="text-white">Shop with Points</a>  
                <a href="#" className="text-white">Reload Your Balance</a>  
                <a href="#" className="text-white">Laptop Wala Currency Converter</a>  
        </div>


        <div className="flex flex-col">

               <p className="font-bold text-white">LAPTOPWAL Currency Converter</p>
                <a href="#" className="text-white">Laptop Wala and COVID-19</a>
                <a href="#" className="text-white">Your Account</a>  
                <a href="#" className="text-white">Your Orders</a>  
                <a href="#" className="text-white">Shipping Rates & Policies</a>  
                <a href="#" className="text-white">Returns & Replacements</a>  
                <a href="#" className="text-white" >Manage Your Content and Devices</a>  
                <a href="#" className="text-white">Help</a>
              

        </div>

      </div>



     </div>




        </>
    )
}