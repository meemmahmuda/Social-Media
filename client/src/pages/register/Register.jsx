import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formvalue, setFormvalue]= useState({username:'', email:'', password:'', name:''});
  const [ setMessage]= useState('');
  const handleInput =(e)=>{
      setFormvalue({...formvalue, [e.target.name]:e.target.value});
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    console.log(formvalue);
    const formData= {username:formvalue.username, email:formvalue.email, password:formvalue.password, name:formvalue.name}; 
    const res= await axios.post("http://localhost/social_media/api/user.php",formData);
    //let jsonres= res.data.json();        
      if(res.data.success)
      {
       setMessage(res.data.success);

      }
   } 
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social<br/>Hub.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" value={formvalue.username}  onChange={ handleInput}/>
            <input type="email" placeholder="Email" name="email" value={formvalue.email}  onChange={ handleInput}/>
            <input type="password" placeholder="Password" name="password" value={formvalue.password}  onChange={ handleInput}/>
            <input type="text" placeholder="Name" name="name" value={formvalue.name}  onChange={ handleInput}/>
            <button name="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
