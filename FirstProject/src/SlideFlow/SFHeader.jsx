const SFHeader = () => {
  return (
    <div className="bg-white h-20 rounded-full w-[80%] p-5 flex justify-between items-center">
        <div className="text-2xl font-bold">SlideFlow</div>
        <div className="w-1/2">
          <ul className="flex justify-around font-semibold">
            <li>Home</li>
            <li>Features</li>
            <li>Templates</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="bg-black text-white px-5 py-2 rounded-full">Sign In</div>
    </div>
  )
}

export default SFHeader
