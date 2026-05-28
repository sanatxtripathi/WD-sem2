import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

function Student({ name, course, marks }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Student Information</h1>

      <Student name="Rahul Sharma" course="CSE" marks={80} />
      <Student name="Anita Verma" course="IT" marks={92} />
      <Student name="Rohan Gupta" course="Electronics" marks={78} />
        <p>
          NAME: SANAT TRIPATHI <br />
          ROLL.NO: 2503201000989 <br />
          SECTION: CSE 26
        </p>
    </div>
  )
}

export default App
