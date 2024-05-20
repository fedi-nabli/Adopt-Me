import './App.css'
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './screens/aboutus'
import ContactUs from './screens/contactus'
import SocialMedia from './screens/socialmedia';
import PostPage from './screens/postpage';
import Shop from './screens/shop';
import ShopItem from './screens/ShopItem';
import Header from './components/Header';
import Login from './screens/Login';
import Register from './screens/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SocialMedia />,
  },
  {
    path: "/post/create",
    element: <PostPage />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "shop/item/:id",
    element: <ShopItem />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
