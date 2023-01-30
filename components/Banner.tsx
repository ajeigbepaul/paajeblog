

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">
                Be-Natural Blog
            </h1>
            <h2 className="mt-5 md:mt-0 text-1xl">
                welcome to {" "}
                <span className="underline decoration-4 decoration-orange-300">
                Be-Natural 
                </span>{" "}
                all for your body and skin
            </h2>

        </div>
        <h2 className="mt-5 max-w-sm md:mt-2 text-gray-500 font-sans ">New product features| Natural Skin blog| Healthy living</h2>
    </div>
  )
}

export default Banner