function DetailPage(props) {
  const { seeDetail,hideDetail } = props;
  function handleClick() {
    hideDetail()
  }
  return (
    <div>
      <div className="max-w-3xl my-4 px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
        <div className="max-w-2xl">
          {/* <!-- Avatar Media --> */}

          {/* <!-- End Avatar Media --> */}

          {/* <!-- Content --> */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl">
                {seeDetail.title}
              </h2>
            </div>

            <figure>
              <img
                className="mx-auto w-3/4 object-cover rounded-xl "
                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                alt="Blog Image"
              />
            </figure>

            <p className="text-lg text-gray-800">{seeDetail.content}</p>
          </div>
          {/* <!-- End Content --> */}
        </div>
        <div className="flex justify-center mt-4">

        <button
          type="button"
          className=" py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 active:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-400 dark:hover:bg-red-900 dark:focus:bg-red-900 dark:active:bg-red-900"
          onClick={handleClick}
        >
          Hide Details
        </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
