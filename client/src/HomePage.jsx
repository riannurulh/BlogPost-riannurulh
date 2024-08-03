// import { useState } from "react";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import PostRequest from "./helpers/PostRequest";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";

function HomePage() {
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState([]);
  const [sort, setSort] = useState('ASC');
  const [selectCategory, setSelectCategory] = useState("");
  const [searchPost, setSearchPost] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const ReadAllPubPost = async () => {
    try {
      let { data } = await PostRequest({
        url: `/apis/pub/blog/posts?page=${currentPage}&q=${searchPost}&i=${selectCategory}&sort=${sort}`,
        method: "GET",
      });
      console.log(data.data.query.length, "awokawok");
      setPost(data.data.query);
      setTotalPage(data.data.pagination.totalPage);
      // let { dataCategory } = await PostRequest({
      //   url: '/apis/pub/blog/categories',
      //   method: "GET",
      // });
      // console.log(dataCategory, "catcatcat");
      // setCategory(dataCategory.data);
    } catch (error) {
      console.log(error);
    }
  };
  const ReadAllCategory = async () => {
    try {
      let { data } = await PostRequest({
        url: `/apis/pub/blog/categories`,
        method: "GET",
      });
      console.log(data, "catcatcat");
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const NextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const PreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  // function getDetail(post) {
  //   setSeeDetail(post);
  //   setIsDetail(true);
  // }
  // function hideDetail() {
  //   setIsDetail(false);
  // }

  useEffect(() => {
    ReadAllPubPost();
    ReadAllCategory();
    console.log(category);
  }, []);
  useEffect(() => {
    ReadAllPubPost();
    ReadAllCategory();
  }, [currentPage]);
  useEffect(() => {
    ReadAllPubPost();
    ReadAllCategory();
  }, [searchPost]);
  useEffect(() => {
    ReadAllPubPost();
    ReadAllCategory();
  }, [selectCategory]);
  useEffect(() => {
    ReadAllPubPost();
    ReadAllCategory();
  }, [sort]);
  return (
    <div className="">
      <div className="flex">
        <div className="basis-1/3"></div>
        <SearchBar
          ReadSearchPubPost={ReadAllPubPost}
          searchPost={searchPost}
          setSearchPost={setSearchPost}
        />
        <div className=" basis-1/3 px-4 py-3 mt-9 flex gap-2 justify-end">
          <span className="px-5 py-2.5">Sort : </span>
          <button
            type="button"
            onClick={()=>{setSort('DESC')}}
            className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border visited:bg-blue-700 visited:text-white border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
          >
            newest
          </button>
          <button
            type="button"
            onClick={()=>{setSort('ASC')}}
            className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border visited:bg-blue-700 visited:text-white border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
          >
            lastest
          </button>
        </div>
      </div>

      {/* bagian card */}
      {/* {isDetail && <DetailPage seeDetail={seeDetail} hideDetail={hideDetail} />} */}
      {/* {!isDetail && (
      )} */}
      <div className="flex justify-center gap-1 mt-5">
        <button
          type="button"
          onClick={() => {
            setSelectCategory("");
          }}
          className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border visited:bg-blue-700 visited:text-white border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
        >
          All
        </button>
        {category.map((item) => {
          return (
            <Category
              key={item.id}
              item={item}
              setSelectCategory={setSelectCategory}
            />
          );
        })}
      </div>
      <div className="mt-5 min-h-max max-w-screen-xl flex  items-stretch gap-4 flex-wrap justify-center mx-auto p-4">
        {post.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        NextPage={NextPage}
        totalPage={totalPage}
        PreviousPage={PreviousPage}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
