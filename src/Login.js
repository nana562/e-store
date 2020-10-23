import React, { useState } from "react";
import Navbar from './Navbar'

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addLogin(name);
    setName("");
  }
  return (
      <div className="login">
        <div className="login-box">
          <h1>LOGIN</h1>
    <   form onSubmit={handleSubmit}>
            <input type="email"  placeholder="Email" id="new-todo-input" className="input input__lg form-control" name="text" autoComplete="off" value={name} onChange={handleChange} />
      <br/>
            <input type="password" placeholder="Password" id="new-todo-input" className="input input__lg form-control" name="text" autoComplete="off"  />
        <br/>
            <button type="submit" className="btn btn-primary" value={Navbar}>login</button>
        <br/>
            <span>Or login with</span>
        <br/>
            <button type="submit" className="btn btn-primary">Facebook</button><button type="submit" className="btn btn-primary">Google</button>
    </form>
    </div>
    </div>
  );
}

export default Form;