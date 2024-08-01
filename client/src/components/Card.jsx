import { Link, Navigate } from "react-router-dom";

function Card(props) {
  let { item, getDetail } = props;

  function HandleClick() {
    Navigate('/pub/post')
  }
  return (
    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img
    //       className="rounded-t-lg"
    //       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGddu_m_h3DvvzDiMIGSlWJuZS7UsYfEprJA&s"
    //       alt=""
    //     />
    //   </a>
    //   <div className="p-5">
    //     <a href="#">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {item.title}
    //       </h5>
    //     </a>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {item.content}
    //     </p>
    //     <a
    //       href="#"
    //       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       onClick={HandleClick}
    //     >
    //       Read more
    //       <svg
    //         className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 14 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M1 5h12m0 0L9 1m4 4L9 9"
    //         />
    //       </svg>
    //     </a>
    //   </div>
    // </div>
    <div className="flex flex-col items-stretch bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="basis-1/4 max-h-14 flex items-center gap-2 px-6">
        <h3 className="text-xl text-gray-800 font-bold flex-1">{item.title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          className="cursor-pointer fill-blue-600 shrink-0"
          viewBox="0 0 64 64"
        >
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"
          ></path>
        </svg>
      </div>

      <div className="basis-1/2 ">
        <img src={item.imgUrl} className="w-full my-6" />
      </div>

      <div className="basis-1/4 flex flex-col justify-between px-6">
        <p className="text-sm text-gray-600 leading-relaxed truncate">
          {item.content}
        </p>

        <div className="mt-8 flex items-center justify-end flex-wrap gap-4">
          <Link
          to={`/pub/posts/${item.id}`}
            type="button"
            className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none"
          >
            See Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
