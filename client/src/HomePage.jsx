// import { useState } from "react";

import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";

// import Navbar from "./components/navbar";

function HomePage() {
  const [post, setPost] = useState([
    {
      id: 1,
      title: "Advancements in AI Technology",
      content:
        "An exploration of the latest advancements in artificial intelligence.",
      imgUrl: "http://example.com/img6.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 2,
      title: "The Future of Quantum Computing",
      content: "A look into the potential and challenges of quantum computing.",
      imgUrl: "http://example.com/img7.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 3,
      title: "5G Network Expansion",
      content:
        "How the expansion of 5G networks will impact various industries.",
      imgUrl: "http://example.com/img8.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 4,
      title: "AI in Healthcare",
      content:
        "Examining how artificial intelligence is revolutionizing healthcare.",
      imgUrl: "http://example.com/img9.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 5,
      title: "The Rise of Augmented Reality",
      content:
        "How augmented reality is changing the way we interact with digital content.",
      imgUrl: "http://example.com/img10.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 6,
      title: "Investment Strategies for 2024",
      content: "Key investment strategies to consider for the upcoming year.",
      imgUrl: "http://example.com/img11.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 2,
      authorId: 2,
    },
    {
      id: 7,
      title: "Tech Stocks to Watch in 2024",
      content: "An analysis of promising tech stocks for 2024.",
      imgUrl: "http://example.com/img12.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 2,
      authorId: 2,
    },
    {
      id: 8,
      title: "Cryptocurrency Trends in 2024",
      content: "Predictions and trends for cryptocurrency in the new year.",
      imgUrl: "http://example.com/img13.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 2,
      authorId: 2,
    },
    {
      id: 9,
      title: "Navigating Economic Uncertainty",
      content: "Tips for managing investments during uncertain economic times.",
      imgUrl: "http://example.com/img14.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 2,
      authorId: 2,
    },
    {
      id: 10,
      title: "Emerging Market Opportunities",
      content: "Opportunities and risks in emerging markets for 2024.",
      imgUrl: "http://example.com/img15.jpg",
      createdAt: "2024-07-27T08:31:27.829Z",
      updatedAt: "2024-07-27T08:31:27.829Z",
      categoryId: 2,
      authorId: 2,
    },
  ]);
  const [isDetail, setIsDetail] = useState(false);
  const [seeDetail, setSeeDetail] = useState({});

  function getDetail(post) {
    setSeeDetail(post);
    setIsDetail(true);
  }
  function hideDetail() {
    setIsDetail(false);
  }
  return (
    <div className="">
      <Navbar />

      {/* bagian card */}
      {isDetail && <DetailPage seeDetail={seeDetail} hideDetail={hideDetail}/>}
      <div className="mt-5 max-w-screen-xl flex gap-4 flex-wrap items-center justify-center mx-auto p-4">
        {post.map((item) => {
          return <Card key={item.id} item={item} getDetail={getDetail}/>;
        })}
      </div>
    </div>
  );
}

export default HomePage;
