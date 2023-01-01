import React, { useContext, useState } from "react";
import axios from "axios";
import { BackendAPIContext } from "../ContextAI/BackendAPI";
export default function AddProduct() {
  const d = useContext(BackendAPIContext);
  const [img, setImg] = useState();
  const [data, setdata] = useState({
    FirstName: "",
    LastName: "",
    MobileNumber: "",
    Email: "",
    Addres: "",
    ProductID: "",
    ProductName: "",
    ProductFeatures: "",
    ProductDesc: "",
    Price: 0,
    PriceAfterDiscount: 0,
    SellerName: "",
    Warranty: 0,
    ContactForWaranty: "",
    imageurl: "",
    isApproved: 0,
    isDeleted: 0,
  });
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    let key = e.target.name;
    let value = URL.createObjectURL(file);
    setdata({ ...data, [key]: value });
  };
  const handlechange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setdata({ ...data, [key]: value });
  };
  const addProduct = () => {
    //
    axios({
      method: "post",
      url: d.url + "AddNewProduct",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        // document.getElementById("tologin").click();
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <>
      <form>
        <div className="container">
          <div className="font-semibold text-center text-blue-400 text-2xl underline decoration-wavy decoration-green-400 underline-offset-4">
            {" "}
            Enter Product Details
          </div>
          <div className="lg:text-right lg:pr-10 lg:ml-80 lg:mr-[20%] bg-gray-200 rounded-t-xl mt-10 space-y-7 ml-10 mr-10">
            Please fill the boxes marked with asterisk(
            <span className="text-red-600">*</span>)
          </div>
          <div className="lg:ml-80 lg:mr-[20%] bg-gray-200 lg:pl-10 lg:pr-10 lg:pb-10 pb-5 rounded-b-xl grid grid-cols-2 space-y-7 ml-10 mr-10">
            <label htmlFor="Name" className="ml-3 mt-7">
              First Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="FirstName"
              value={data.FirstName}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            <label htmlFor="Name" className="ml-3">
              Last Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="LastName"
              value={data.LastName}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="Name" className="ml-3">
              Mobile Number<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="MobileNumber"
              value={data.MobileNumber}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="Name" className="ml-3">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="Email"
              value={data.Email}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="Address" className="ml-3">
              Address<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="Addres"
              value={data.Addres}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="ProductID" className="ml-3">
              Product ID<span className="text-red-600">*</span>
            </label>
            <input
              type="string"
              name="ProductID"
              value={data.ProductID}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="ProductName" className="ml-3">
              Product Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="ProductName"
              value={data.ProductName}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="Featires" className="ml-3">
              Product Features<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="ProductFeatures"
              value={data.ProductFeatures}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="Desc" className="ml-3">
              Product Description<span className="text-red-600">*</span>
            </label>
            <textarea
              type="text"
              name="ProductDesc"
              value={data.ProductDesc}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="UsuPri" className="ml-3">
              Price<span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="Price"
              value={data.Price}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="PriceAfD" className="ml-3">
              Price after Discount<span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="PriceAfterDiscount"
              value={data.PriceAfterDiscount}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="SellerName" className="ml-3">
              Seller Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="SellerName"
              value={data.SellerName}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
            <label htmlFor="PriceAfD" className="ml-3">
              Warranty (in number of months)
            </label>
            <input
              type="number"
              name="Warranty"
              value={data.Warranty}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            <label htmlFor="PriceAfD" className="ml-3">
              Contact for Warranty(Incase there is)
            </label>
            <input
              type="text"
              name="ContactForWaranty"
              value={data.ContactForWaranty}
              onChange={handlechange}
              className="lg:w-auto w-[155px] form-control block px-2 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            {/* grid grid-flow-row auto-rows-max */}
            <div className="pt-4 ml-3">
              <input type="file" name="imageurl" onChange={onImageChange} />
            </div>
            <img src={img} alt="" />
          </div>
          <div>
            <button
              type="button"
              onClick={addProduct}
              className="lg:ml-[45%] ml-[35%] bg-blue-400 rounded-md p-1 text-white m-10 hover:bg-blue-500"
            >
              {" "}
              Add Product
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
