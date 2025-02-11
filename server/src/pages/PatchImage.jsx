import { useState } from "react";
import PostRequest from "../helpers/PostRequest";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PatchImage = () => {
  const { id } = useParams();
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [newFile, setNewFile] = useState(null);

  const navigate = useNavigate();

  const uploadImg = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", newFile);

    try {
      await PostRequest({
        url: `/apis/blog/posts/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
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

  return (
    <div className="p-4 flex flex-col items-center w-full min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center pb-3 border-b border-gray-200">
          <div className="flex-1">
            <h3 className="text-gray-800 text-xl font-bold">Upload File</h3>
            <p className="text-gray-600 text-xs mt-1">
              Upload file to this project
            </p>
          </div>
        </div>

        <div className="rounded-lg border-2 border-gray-200 border-dashed mt-6">
          <div className="p-4 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 mb-4 fill-gray-600 inline-block"
              viewBox="0 0 32 32"
            >
              <path
                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                data-original="#000000"
              />
              <path
                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                data-original="#000000"
              />
            </svg>

            <h4 className="text-sm text-gray-600">
              Drag & Drop or{" "}
              <label
                htmlFor="chooseFile"
                className="text-blue-600 cursor-pointer"
              >
                Choose file
              </label>{" "}
              to upload
            </h4>
            <input
              type="file"
              id="chooseFile"
              className="hidden"
              onChange={(e) => {
                setNewFile(e.target.files[0]);
                setFileName(e.target.files[0].name),
                  setFileSize(e.target.files[0].size);
              }}
            />
          </div>
        </div>
        {fileName && (
          <div className="flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
            <div className="flex">
              <p className="text-xs text-gray-600 flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 mr-2 fill-current inline-block"
                >
                  <path
                    d="m433.798 106.268-96.423-91.222C327.119 5.343 313.695 0 299.577 0H116C85.673 0 61 24.673 61 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55V146.222c0-15.049-6.27-29.612-17.202-39.954zM404.661 120H330c-2.757 0-5-2.243-5-5V44.636zM396 482H116c-13.785 0-25-11.215-25-25V55c0-13.785 11.215-25 25-25h179v85c0 19.299 15.701 35 35 35h91v307c0 13.785-11.215 25-25 25z"
                    data-original="#000000"
                  />
                  <path
                    d="M363 200H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm0 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-147.28 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h72.72c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                    data-original="#000000"
                  />
                </svg>
                {fileName}{" "}
                <span className="ml-2">{`${(fileSize / 1024 / 1024).toFixed(
                  2
                )} MB`}</span>
              </p>
            </div>
          </div>
        )}

        <div className="border-t border-gray-200 pt-6 flex justify-between gap-4 mt-6">
          <div className="w-full flex justify-end">
            <Link
              to="/"
              // type="button"
              className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
            >
              Cancel
            </Link>
          </div>
          <div className="w-full flex justify-start">
            <form
              className=" px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              onSubmit={uploadImg}
            >
              <button type="submit">Import</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatchImage;
