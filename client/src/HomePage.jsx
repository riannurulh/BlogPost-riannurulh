// import { useState } from "react";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import PostRequest from "./helpers/PostRequest";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

// import Navbar from "./components/navbar";

function HomePage() {
  const [post, setPost] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [seeDetail, setSeeDetail] = useState({});
  const [searchPost, setSearchPost] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const ReadAllPubPost = async () => {
    try {
      let { data } = await PostRequest({
        url: `/apis/pub/blog/posts?page=${currentPage}`,
        method: "GET",
      });
      console.log(data.data.query.length,'awokawok');
      setPost(data.data.query);
    } catch (error) {
      console.log(error);
    }
  };
  const ReadSearchPubPost = async (e) => {
    // e.preventDefault();
    try {
      let { data } = await PostRequest({
        url: `/apis/pub/blog/posts?q=${searchPost}`,
        method: "GET",
      });
      setPost(data.data.query);
    } catch (error) {
      console.log(error);
    }
  };
  const NextPage = ()=>{
    setCurrentPage(currentPage+1)
  }
  function getDetail(post) {
    setSeeDetail(post);
    setIsDetail(true);
  }
  function hideDetail() {
    setIsDetail(false);
  }

  useEffect(() => {
    ReadAllPubPost();
  }, []);
  useEffect(() => {
    ReadAllPubPost();
  }, [currentPage]);
  useEffect(() => {
    console.log(searchPost, "masuk ni");
    ReadSearchPubPost();
  }, [searchPost]);
  return (
    <div className="">
      <Navbar
        ReadSearchPubPost={ReadSearchPubPost}
        searchPost={searchPost}
        setSearchPost={setSearchPost}
      />

      {/* bagian card */}
      {isDetail && <DetailPage seeDetail={seeDetail} hideDetail={hideDetail} />}
      {!isDetail && (
        <div className="mt-5 min-h-max max-w-screen-xl flex  items-stretch gap-4 flex-wrap justify-center mx-auto p-4">
          {post.map((item) => {
            return <Card key={item.id} item={item} getDetail={getDetail} />;
          })}
        </div>
      )}
      
      <Pagination currentPage={currentPage} NextPage={NextPage} />
      <Footer />
    </div>
  );
}

export default HomePage;
