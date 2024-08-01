function Pagination(props) {
  const { currentPage, NextPage, PreviousPage, totalPage } = props;
  console.log(currentPage);
  return (
    <div className="font-[sans-serif] flex mx-auto border-2 divide-x-2 border-black rounded w-max mt-4">
      {currentPage !== 1 && (
        <button
          type="submit"
          onClick={() => {
            PreviousPage();
          }}
          className="px-5 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-[#333] min-w-[110px] hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-current mr-3"
            viewBox="0 0 55.753 55.753"
          >
            <path
              d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
              data-original="#000000"
            />
          </svg>
          Previous
        </button>
      )}
      {currentPage !== totalPage && (
        <button
          type="submit"
          onClick={() => {
            NextPage();
          }}
          className="px-5 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-[#333] min-w-[110px] hover:bg-gray-50"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-current ml-3 rotate-180"
            viewBox="0 0 55.753 55.753"
          >
            <path
              d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
              data-original="#000000"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Pagination;
