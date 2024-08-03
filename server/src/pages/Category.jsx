import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PostRequest from "../helpers/PostRequest";
import Swal from "sweetalert2";

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategory = async () => {
    try {
      let { data } = await PostRequest({
        url: "/apis/blog/categories",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(data);
      setCategoryList(data.data);
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
  }, []);
  return (
    <div className="font-sans overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              No
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Id
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Category Name
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
          {categoryList.map((item, idx) => {
            return (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-4 text-[15px] text-gray-800">{idx + 1}</td>
                <td className="p-4 text-[15px] text-gray-800">{item.id}</td>
                <td className="p-4 text-[15px] text-gray-800">{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
