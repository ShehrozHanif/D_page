import Search from '@/app/Ui/page'
import Acount from '@/app/(Font)/Acount/page'
import Shopping from '@/app/(Font)/Shopping/page'
import Heart from '@/app/(Font)/Heart/page'
import Dropdown from '@/app/(Font)/Dropdown/page'
import Logo from '@/app/(Font)/Logo/page'
import React from 'react'

const Navbar = () => {
  return (
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
  )
}

export default Navbar
