import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5002";

export default function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/add_user", values)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container vh-100 vw-100 bg-primary">
      <div className="row">
        <h3>Add student</h3>
        <div className="d-flex justify-comtent-end">
          <Link to="/" class="btn btn-success">
            Home
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
