import React from "react";

function Register(props) {
  return (
    <div className="container card p-3 mt-2 register-container ">
      <form onSubmit={props.submit}>
        <h1 style={{ textAlign: "center" }}>Registration Form</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
