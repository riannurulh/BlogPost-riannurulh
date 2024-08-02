const Button = ({name,type}) => {
  return(<button
    // type="submit"
    type={type}
    className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
  >
    {name}
  </button>)
};
export default Button;
