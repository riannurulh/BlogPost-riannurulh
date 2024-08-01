import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostRequest from "../helpers/PostRequest";

function DetailPage() {
  // const { seeDetail,hideDetail } = props;
  // function handleClick() {
  //   hideDetail()
  // }
  const {id} = useParams()
  const [post, setPost] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        let { data } = await PostRequest({
          url: `/apis/pub/blog/posts/${id}`,
          method: "GET",
        });
        setPost(data.data);
        console.log(post);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])
  return (
    <div>
      <div className="max-w-3xl my-4 px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
        <div className="max-w-2xl">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl">
                {post.title}
              </h2>
            </div>

            <figure>
              <img
                className="mx-auto w-3/4 object-cover rounded-xl "
                src={post.imgUrl}
                alt="Blog Image"
              />
            </figure>

            <p className="text-lg text-gray-800">{post.content}</p>
          </div>
          {/* <!-- End Content --> */}
        </div>
        <div className="flex justify-center mt-4">

        <Link
        to='/pub/posts'
          type="button"
          className=" py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 active:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-400 dark:hover:bg-red-900 dark:focus:bg-red-900 dark:active:bg-red-900"
        >
          Back to list
        </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
