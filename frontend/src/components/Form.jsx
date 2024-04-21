import React from "react";
import { useState } from "react";
import Axios from "axios";


const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState();
  const [file, setFile] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !address || !country || !state || !city || !pincode) {
        alert("Please fill out all fields");
        return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("country", country);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("pinCode", pincode);
      for (let i = 0; i < file.length; i++) {
        formData.append("files", file[i]);
    }

      const response = await Axios.post("http://localhost:5000/api/upload", formData, {
          headers: {
              "Content-Type": "multipart/form-data"
          }
      });

        
        if (response.status === 200) {
            console.log(response.data);
            
            alert("Form submitted successfully!");

            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
            setCountry("");
            setState("");
            setCity("");
            setPincode("");
            setFile(null)
        } else {
            
            alert("Error submitting form. Please try again later.");
        }
    } catch (error) {
        console.log(error);
        alert("Error submitting form. Please try again later.");
    }
    

    window.location.reload();
};
const handleFileChange = (e) => {
  // setFile(e.target.files[0])
  const files = e.target.files;
  const fileList = Array.from(files); 
  setFile(fileList);
 
};

  return (
    <div className="container border rounded  my-2 ">
      <form onSubmit={handleSubmit} action="/upload" method="POST" encType="multipart/form-data">
        <h1 className="text-center">Form</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Phone</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter phone number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">country</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Country name"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">state</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter state name"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">city</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter city name"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">pincode</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter pincode"
            onChange={(e) => {
              setPincode(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">upload file</label>
          <input
            type="file"
            multiple
            className="form-control-file"
            id="exampleFormControlFile1"
            name="file"
            onChange={handleFileChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
