import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import PostRequest from "../helpers/PostRequest";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";
import Form from "../components/Form";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  const getPostData = async () => {
    try {
      let { data } = await PostRequest({
        url: `/apis/blog/posts/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setPost(data.data);
      setTitle(data.data.title);
      setContent(data.data.content);
      setImgUrl(data.data.imgUrl);
      setCategoryId(data.data.categoryId);
      console.log(data.data, "aaaaaaaaaaaa");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: "error",
      });
    }
  };
  const getCategory = async () => {
    try {
      let { data } = await PostRequest({
        url: "/apis/blog/categories",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setCategoryList(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePost = async (e) => {
    e.preventDefault();
    const dataBody = { title, content, imgUrl, categoryId };
    try {
      await PostRequest({
        url: `/apis/blog/posts/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: dataBody,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: "error",
      });
    }
  };
  useEffect(() => {
    getPostData();
    // console.log(post);
  }, []);
  useEffect(() => {
    getCategory();
    console.log(categoryList);
  }, [setCategoryList]);
  return (
    // <form onSubmit={editPost}>
    //   <div className="mb-8">
    //     <h3 className="text-gray-800 text-3xl font-extrabold">Edit Post</h3>
    //   </div>

    //   <div>
    //     <label className="text-gray-800 text-[15px] mb-2 block">Title</label>
    //     <div className="relative flex items-center">
    //       <input
    //         value={title}
    //         onChange={(e) => {
    //           setTitle(e.target.value);
    //         }}
    //         name="title"
    //         type="text"
    //         required
    //         className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
    //         placeholder="Enter title"
    //       />
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="#bbb"
    //         viewBox="0 -960 960 960"
    //         className="w-[18px] h-[18px] absolute right-4"
    //       >
    //         <path d="M200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm69-80h422q-44-39-99.5-59.5T480-280q-56 0-112.5 20.5T269-200Zm211-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z" />
    //       </svg>
    //     </div>
    //   </div>

    //   <div className="mt-4">
    //     <label className="text-gray-800 text-[15px] mb-2 block">Content</label>
    //     <div className="relative flex items-center">
    //       <input
    //         value={content}
    //         onChange={(e) => {
    //           setContent(e.target.value);
    //         }}
    //         name="content"
    //         type="text"
    //         required
    //         className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
    //         placeholder="Enter content"
    //       />
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="#bbb"
    //         stroke="#bbb"
    //         className="w-[18px] h-[18px] absolute right-4"
    //         viewBox="0 0 682.667 682.667"
    //       >
    //         <defs>
    //           <clipPath id="a" clipPathUnits="userSpaceOnUse">
    //             <path d="M0 512h512V0H0Z" data-original="#000000"></path>
    //           </clipPath>
    //         </defs>
    //         <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
    //           <path
    //             fill="none"
    //             strokeMiterlimit="10"
    //             strokeWidth="40"
    //             d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
    //             data-original="#000000"
    //           ></path>
    //           <path
    //             d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
    //             data-original="#000000"
    //           ></path>
    //         </g>
    //       </svg>
    //     </div>
    //   </div>

    //   <div className="mt-4">
    //     <label className="text-gray-800 text-[15px] mb-2 block">
    //       Image URL
    //     </label>
    //     <div className="relative flex items-center">
    //       <input
    //         value={imgUrl}
    //         onChange={(e) => {
    //           setImgUrl(e.target.value);
    //         }}
    //         name="imgUrl"
    //         type="text"
    //         required
    //         className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
    //         placeholder="Enter imgUrl"
    //       />
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="#bbb"
    //         stroke="#bbb"
    //         className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
    //         viewBox="0 0 128 128"
    //       >
    //         <path
    //           d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
    //           data-original="#000000"
    //         ></path>
    //       </svg>
    //     </div>
    //   </div>

    //   <div className="mt-4">
    //     <label htmlFor="cars">Choose Category:</label>

    //     <select
    //       name="categoryId"
    //       value={categoryId}
    //       onChange={(e) => {
    //         setCategoryId(e.target.value);
    //       }}
    //       id="cars"
    //       className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
    //     >
    //       {categoryList.map((item) => {
    //         return (
    //           <option
    //             key={categoryId}
    //             value={item.id}
    //             selected={categoryId === item.id}
    //             className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer"
    //           >
    //             {item.name}
    //           </option>
    //         );
    //       })}
    //     </select>
    //   </div>

    //   <div className="mt-8">
    //     <Button type={"submit"} name={"Edit Post"} />
    //   </div>
    // </form>
    <Form title={title} handlePost={handlePost} content={content}  imgUrl={imgUrl} categoryId={categoryId} setTitle={setTitle} setContent={setContent} setImgUrl={setImgUrl} setCategoryId={setCategoryId} categoryList={categoryList} setCategoryList={setCategoryList} />
  );
};
export default EditPost;
