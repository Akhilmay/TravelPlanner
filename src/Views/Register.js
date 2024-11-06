import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
  const [confirmPassword, setConfirmPassword]= useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contact: '',
    isAdmin: false,
    isRegistrationSuccessful: false
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister();
  };

  const checkValidation = async() =>{

  }

  const handleRegister = async () => {
    try {
      const UserData = {
        password: formData.password,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,

        contact: formData.contact
      }
      const AdminData = {
        password: formData.password,
        email: formData.email,
        name: formData.name,
        contact: formData.contact
      }
      const req = { data: UserData, schema: "UserInfo" }
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });
      if (response.ok) {
        const data = await response.json();
        if (true) {
          const req = { userId: data.insertedId, }
          const response = await fetch('http://localhost:3001/api/add/Wallet', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
          });
          if (response.ok) {
            window.location.href = "./login";
          }
        }
        else {
          window.location.href = "./login";
        }

      }
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <section>
      <div class="bg-w">
        <Link to="/login">
          <button class="button-header-color button-header mr-l-15">Login</button>
        </Link>
      </div>
      <div class="register-container">

        <h2 class="c-w">Register</h2>
        <form onSubmit={handleSubmit}>

          {/* isAdmin radio button */}
          {/* <label class="label-style-register c-w">
            <input class="margins checkbox-style"
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
            />
            isAdmin
          </label>
          <br /> */}

          {/* Basic fields */}
          <label class="label-style-register c-w">
            First Name:
            <input class="input-text-box-login margins mr-l-100" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <br />
          <label class="label-style-register c-w">
            Last Name:
            <input class="input-text-box-login margins mr-l-100" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <br />
          

          <label class="label-style-register c-w">
            Email:
            <input class="input-text-box-login margins mr-l-100" type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />

          <label class="label-style-register c-w">
            Password:
            <input class="input-text-box-login margins mr-l-73"  type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <br/>

          <label class="label-style-register c-w">
            Confirm Password:
            <input class="input-text-box-login margins" type="password" name="password" value={confirmPassword} onChange={(event)=> setConfirmPassword(event.target.value)} />
          </label>
          <br />



          {formData.password && confirmPassword &&  formData.password != confirmPassword && <label class="c-r"> Password is not matching, please reenter</label>}
          <br/>


          <label class="label-style-register c-w">
            Contact:
            <input class="input-text-box-login margins mr-l-86" type="text" name="contact" value={formData.contact} onChange={handleChange} />
          </label>
          <br />
                      

         <button type="submit" class="margins login-btn">Register</button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
