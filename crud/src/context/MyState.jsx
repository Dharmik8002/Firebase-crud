import React, { useEffect, useState } from "react";
import CrudContext from "./CrudContext";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { fireDB } from "../firebase";
import { toast } from "react-toastify";

const MyState = (props) => {
  const [shopping, setShopping] = useState({
    name: "",
    image: "",
    details: "",
    price: "",
    size: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // fetch all the data first from db

  const [allItems, setAllItems] = useState([]);

  const getItems = async () => {
    try {
      const q = query(collection(fireDB, "shopping"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let shoppingArray = [];
        QuerySnapshot.forEach((doc) => {
          // get data and id
          shoppingArray.push({ ...doc.data(), id: doc.id });
        });
        setAllItems(shoppingArray);
      });

      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  // Add produts data by addform function

  const addProduct = async () => {
    const { name, image, details, price, size } = shopping;
    if (
      name.trim() === "" ||
      image.trim() === "" ||
      details.trim() === "" ||
      price.trim() === "" ||
      size.trim() === ""
    ) {
      toast.error("Please fill all the fields");
    }

    // Shopping data refrence
    const shoppingRef = collection(fireDB, "shopping");

    try {
      await addDoc(shoppingRef, shopping);
      getItems();
      toast.success("products added successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      setShopping("");
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };

  // Upadet products data by edit function

  // fetch all the items

  const fetchEditHandal = (item) => {
    setShopping(item);
  };

  // Update function

  const editProductsData = async () => {
    try {
      // setdoc for fet data from db
      await setDoc(doc(fireDB, "shopping", shopping.id), shopping);
      getItems();
      toast.success("product Update Successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      setShopping("");
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };

  //View Produts

  const [selectedItem, setSelectedItem] = useState([]);

  const getSingleProductView = async (id) => {
    try {
      const docRef = doc(fireDB, "shopping", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSelectedItem({ ...docSnap.data(), id: docSnap.id });
      } else {
        toast.error("Product not found"); // Will trigger if the ID doesn't exist
      }
    } catch (error) {
      console.error("Firestore error:", error); // See exact issue in console
      toast.error("Failed to fetch product");
    }
  };

  // Delete products data

  const deleteProducts = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "shopping", item.id));
      toast.success("Products Successfully Deleted");
      getItems();
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };

  // Search the products and filter
  const [search, setSearch] = useState("");
  return (
    <>
      <CrudContext.Provider
        value={{
          shopping,
          setShopping,
          allItems,
          getItems,
          addProduct,
          fetchEditHandal,
          editProductsData,
          selectedItem,
          getSingleProductView,
          deleteProducts,
          search,
          setSearch,
        }}
      >
        {props.children}
      </CrudContext.Provider>
    </>
  );
};

export default MyState;
