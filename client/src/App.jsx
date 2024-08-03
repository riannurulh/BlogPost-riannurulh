import HomePage from "./HomePage.jsx";
// import DetailPage from "./pages/DetailPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import Category from "./components/Category.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children:[
      {
        path: "/pub/posts",
        element:<HomePage/>
      },
      {
        path: "/pub/posts/:id",
        element:<DetailPage/>
      }

    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
