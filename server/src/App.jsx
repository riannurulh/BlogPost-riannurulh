
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
  } from "react-router-dom";
import Login from "./pages/Login";
import LoginRegisterTemplate from "./pages/LoginRegisterTemplate";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/Edit";
import PatchImage from "./pages/PatchImage";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

  const router = createBrowserRouter([
    {
      element: <Sidebar/>,
      loader: () => {
        console.log(localStorage.getItem('access_token'));
        if (!localStorage.getItem('access_token')) {
          return redirect('/login')
        }
  
        return null;
      },
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/category',
          element: <Category/>
        },
        {
          element: <LoginRegisterTemplate/>,
          children:[
            {
              path:'/create-post',
              element:<CreatePost/>
            },
            {
              path:'/post/edit/:id',
              element:<EditPost/>
            },
            {
              path:'/register',
              element: <Register/>
            },
          ]
        },
      ]
    },
    {
      path:'/post/patch-img/:id',
      element: <PatchImage/>,
      loader: () => {
        if (!localStorage.getItem('access_token')) {
          return redirect('/login')
        }
  
        return null;
      },
    },
    {
      element: <LoginRegisterTemplate/>,
      loader: () => {
        if (localStorage.getItem('access_token')) {
          return redirect('/')
        }
  
        return null;
      },
      children:[
        {
          path:'/login',
          element: <Login/>
        },
      ]
    },
    {
      path:'*',
      element: <NotFound/>
    },
    
  ]);

  const App = ()=>{
     return <RouterProvider router={router} />
  }

  export default App