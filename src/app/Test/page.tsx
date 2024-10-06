import Search from "../Ui/page"
import Dropdown from "../(Font)/Dropdown/page"

export default function Laptop(){
    return(
       <>
       {/* Content Section */}
<div className="flex h-screen">
  {/* Sidebar: Fixed size, no shrinking */}
  <div className="bg-gray-800 w-64 h-full text-white flex-col flex-shrink-0 p-4 relative pt-16">
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

    {/* Grid Container - Centered */}
    <div className="flex justify-evenly  h-full">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-slate-600 p-4 text-white w-80">01</div>
        <div className="bg-slate-500 p-4 text-white">02</div>
        <div className="bg-slate-400 p-4 text-black">03</div>
        <div className="bg-slate-300 p-4 text-black">04</div>
        <div className="bg-slate-200 p-4 text-black">05</div>
        <div className="bg-slate-200 p-4 text-black">05</div>

      </div>
    </div>
  </div>
</div>

       </>
    )
}

