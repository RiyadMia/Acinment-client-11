import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/ShearePage/Header/Header";
import Footer from "./Components/ShearePage/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import CheckoutDatail from "./Checkout/CheckoutDatail/CheckoutDatail";
import Login from "./Components/Login&Signup/Login/Login";
import Signup from "./Components/Login&Signup/Signup/Signup";
import RequireAuth from "./Components/Login&Signup/RequireAuth/RequireAuth";
import Blogs from "./Components/Pages/Blogs/Blogs";
import AllService from "./Components/Pages/All Service/AllService";
import AddItems from "./Components/Pages/AddItems/AddItems";
import Manage from "./Components/Pages/Manage/Manage";
import MyItems from "./Components/Pages/MyItems/MyItems";
import Abouts from "./Components/Pages/Abouts/Abouts";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Chackout from "./Checkout/Checkout/Chackout";
import { ToastContainer } from "react-toastify";
import Orders from "./Components/Pages/Orders/Orders";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/checkoutdatail/:checkoutdatailId"
          element={
            <RequireAuth>
              <CheckoutDatail></CheckoutDatail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/Allservice" element={<AllService></AllService>}></Route>
        <Route
          path="/addItems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <Manage></Manage>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/chackout/:checkoutdatailId"
          element={<Chackout></Chackout>}
        ></Route>
        <Route path="/abouts" element={<Abouts></Abouts>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
