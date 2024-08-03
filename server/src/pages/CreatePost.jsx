import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import PostRequest from "../helpers/PostRequest";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";
import Form from "../components/Form";

const CreatePost = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();
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
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: "error",
      });
    }
  };
  const handlePost = async (e) => {
    e.preventDefault();
    const dataBody = { title, content, imgUrl, categoryId };
    try {
      await PostRequest({
        url: "/apis/blog/posts",
        method: "POST",
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
    getCategory();
  }, [setCategoryList]);
  return (
    <Form
      title={title}
      handlePost={handlePost}
      content={content}
      imgUrl={imgUrl}
      categoryId={categoryId}
      setTitle={setTitle}
      setContent={setContent}
      setImgUrl={setImgUrl}
      setCategoryId={setCategoryId}
      categoryList={categoryList}
      setCategoryList={setCategoryList}
    />
  );
};
export default CreatePost;
