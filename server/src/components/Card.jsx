function Card(props) {
  const {item} = props
  return (
    <div
    className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-1/2 max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
    <div className="min-h-[280px] h-full">
      <img src="https://readymadeui.com/cardImg.webp" className="w-full h-full object-cover" />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="mt-3 text-sm text-gray-500 leading-relaxed truncate">{item.content}
      </p>
      

      <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
        <img src='https://readymadeui.com/profile_2.webp' className="w-9 h-9 rounded-full" />
        <div className="ml-4 flex-1">
          <p className="text-sm text-gray-800 font-semibold">a</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-500" viewBox="0 0 32 32">
          <path
            d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
            data-original="#000000" />
        </svg>
      </div>
    </div>
  </div>

  );
}

export default Card
