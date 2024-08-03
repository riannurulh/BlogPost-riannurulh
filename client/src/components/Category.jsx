const Category = (props) => {
  const { item,setSelectCategory } = props;
  return (
    <button
      type="button"
      onClick={()=>{setSelectCategory(item.name)}}
      className="px-5 py-2 rounded-lg text-sm tracking-wider font-medium border visited:bg-blue-700 visited:text-white border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300 focus:bg-blue-900 "
    >
      {item.name}
    </button>
  );
};

export default Category;
