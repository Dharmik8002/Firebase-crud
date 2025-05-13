import React from "react";
// import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import MyState from "./context/MyState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItems from "./pages/AddItems";
import EditItems from "./pages/EditItems";


// import ViewItems from "./pages/ViewItems";

function App() {
  return (
    <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/additems" element={<AddItems />} />
            <Route path="/edititems" element={<EditItems />} />
            {/* <Route path="/viewitems" element={<ViewItems />} /> */}
          </Routes>
        </BrowserRouter>
      </MyState>
      <ToastContainer />
    </>
  );
}

export default App;
