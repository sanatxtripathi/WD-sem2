import { useState } from 'react'
import './App.css'

function App(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [registeredUser, setRegisteredUser] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Name is required"
    }
    if (!email.includes("@")) {
      formErrors.email = "Enter a valid email address"
    }
    if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters"
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setRegisteredUser({ name, email });
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  }

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Register</button>
        </form>

        {registeredUser && (
          <div className="apiData">
            <h2>Registered User</h2>
            <p>
              <span className="user-label">Name:</span> {registeredUser.name}<br/>
              <span className="user-label">Email:</span> {registeredUser.email}
            </p>
          </div>
        )}
    </div>
  );
}

export default App;