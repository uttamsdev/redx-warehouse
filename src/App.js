import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageInventories from "./Pages/ManageInventory/ManageInventories/ManageInventories";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory/:id" element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path="/manageInventories" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
