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

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/upload", {
      name: name,
      phone: phone,
      email: email,
      address: address,
      country: country,
      state: state,
      city: city,
      pinCode: pincode,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container border rounded  my-2 ">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Form</h1>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
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
          <label for="exampleInputPassword1">Phone</label>
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
          <label for="exampleInputPassword1">Email</label>
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
          <label for="exampleInputPassword1">address</label>
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
          <label for="exampleInputPassword1">country</label>
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
          <label for="exampleInputPassword1">state</label>
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
          <label for="exampleInputPassword1">city</label>
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
          <label for="exampleInputPassword1">pincode</label>
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
          <label for="exampleFormControlFile1">upload file</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
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
