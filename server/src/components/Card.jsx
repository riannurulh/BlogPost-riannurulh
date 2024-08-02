import { Link } from "react-router-dom";
function Card(props) {
  const { item, setDeletePost, delPost } = props;
  return (
    <Link className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-1/2 max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[280px] h-full">
        <img src={item.imgUrl} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed truncate">
          {item.content}
        </p>

        <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
          <img
            src="https://readymadeui.com/profile_2.webp"
            className="w-9 h-9 rounded-full"
          />
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-800 font-semibold">
              {item.User.username}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 fill-gray-500"
            viewBox="0 0 32 32"
          >
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <form onSubmit={delPost}>
            <button
              type="submit"
              onClick={() => {
                setDeletePost(item.id);
                delPost();
              }}
              className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
            >
              <span className="border-r border-white pr-3">Delete</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11px"
                fill="currentColor"
                className="ml-3 inline"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                />
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                />
              </svg>
            </button>
          </form>

          <Link
            to={`/post/edit/${item.id}`}
            className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
          >
            <span className="border-r border-white pr-3">Edit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11px"
              fill="currentColor"
              className="ml-3 inline"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </Link>
          <button></button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
