import React from "react";


function Register(props) {
  let btnText, passBoxType;
  let btnClasses = ["btn", "m-1"];

  if (props.showPass === true) {
    btnText = "Hide Password";
    passBoxType = "text";
    btnClasses.push("btn-danger");
  } else {
    btnText = "Show Password";
    passBoxType = "password";
    btnClasses.push("btn-success");
  }

  

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
          <input type={passBoxType} name="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary m-1">
          Register
        </button>
        <button
          type="button"
          className={btnClasses.join(" ")}
          onClick={props.click}
        >
          {btnText}
        </button>
      </form>
    </div>
  );
}
export default Register;
