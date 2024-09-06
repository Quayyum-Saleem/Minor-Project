import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='register'>
    <div class="registration-container">
      <br></br>
      <br></br>
      <br></br>
        <h1>Create Account</h1>
        <form action="/register" method="POST">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" ></input>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" ></input>
            </div>
            <div class="input-group">
                <label for="college">College Name</label>
                <input type="college" id="college" name="college" ></input>
            </div>
            <div class="input-group">
                <label for="Branch">Branch</label>
                <input type="Branch" id="Branch" name="Branch" ></input>
            </div>
            <div class="input-group">
                <label for="phone">Phone No</label>
                <input type="phone" id="phone" name="phone" ></input>
            </div>
            <button type="submit" class="register-button">Register</button>
        </form>
        <p>Already have an account? <a href="#">Login here</a></p>
    </div>
    </div>
  )
}

export default Contact
