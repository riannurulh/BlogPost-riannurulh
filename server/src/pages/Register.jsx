import { Link } from "react-router-dom";

function Register() {

  return (
    <form>
      <div className="mb-8">
        <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
        <p className="text-sm mt-4 text-gray-800">
          Already have an account{" "}
          <Link
            to="/"
            href="javascript:void(0);"
            className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
          >
            Login here
          </Link>
        </p>
      </div>

      <div>
        <label className="text-gray-800 text-[15px] mb-2 block">Username</label>
        <div className="relative flex items-center">
          <input
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
            name="username"
            type="text"
            required
            className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
            placeholder="Enter username"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            viewBox="0 -960 960 960"
            className="w-[18px] h-[18px] absolute right-4"
          >
            <path d="M200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm69-80h422q-44-39-99.5-59.5T480-280q-56 0-112.5 20.5T269-200Zm211-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z" />
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-gray-800 text-[15px] mb-2 block">Email</label>
        <div className="relative flex items-center">
          <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
            name="email"
            type="email"
            required
            className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
            placeholder="Enter email"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-4"
            viewBox="0 0 682.667 682.667"
          >
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
              </clipPath>
            </defs>
            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
              <path
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="40"
                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                data-original="#000000"
              ></path>
              <path
                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-gray-800 text-[15px] mb-2 block">Password</label>
        <div className="relative flex items-center">
          <input
            name="password"
            type="password"
            required
            className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
            placeholder="Enter password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
            viewBox="0 0 128 128"
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-gray-800 text-[15px] mb-2 block">
          Phone Number
        </label>
        <div className="relative flex items-center">
          <input
          value={phoneNumber}
          onChange={(e)=>{setPhoneNumber(e.target.value)}}
            name="phone number"
            type="text"
            required
            className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
            placeholder="Enter phone number"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#bbb"
            className="w-[18px] h-[18px] absolute right-4"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-gray-800 text-[15px] mb-2 block">Address</label>
        <div className="relative flex items-center">
          <input
            name="address"
            type="text"
            required
            className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
            placeholder="Enter address"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#bbb"
            className="w-[18px] h-[18px] absolute right-4"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="button"
          className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          Register
        </button>
      </div>
    </form>
  );
}
export default Register;
