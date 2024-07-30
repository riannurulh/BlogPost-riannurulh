function DetailPage() {
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
                Announcing a free plan for small teams
              </h2>
            </div>

            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                alt="Blog Image"
              />
            </figure>

            <p className="text-lg text-gray-800">
              As weve grown, weve seen how Preline has helped companies such as
              Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their
              designers closer together to create amazing things. Weve also
              learned that when the culture of sharing is brought in earlier,
              the better teams adapt and communicate with one another.
            </p>
          </div>
          {/* <!-- End Content --> */}
        </div>
      </div>
      {/* <!-- End Blog Article --> */}

      {/* <!-- Sticky Share Group --> */}
      
    </div>
  );
}

export default DetailPage
