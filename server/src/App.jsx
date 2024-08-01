
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
      ]
    },
    {
      element: <LoginRegisterTemplate/>,
      children:[
        {
          path:'/login',
          element: <Login/>
        },
        {
          path:'/register',
          element: <Register/>
        },
      ]
    },
    
  ]);

  const App = ()=>{
     return <RouterProvider router={router} />
  }

  export default App