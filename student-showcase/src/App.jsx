import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Student Showcase</h1>
      <p>Vite + React.js Web Project</p>
    </header>
  );
}

function Profile() {
  return (
    <section className="profile">
      <div className="avatar">JG</div>

      <div>
        <h2>Jonalyn Gingo</h2>
        <p>BS Information Technology Student</p>
        <p>
          Welcome to my personal student showcase website.
          This project was created using Vite and React.js.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MySQL"
  ];

  return (
    <section className="card">
      <h2>My Skills</h2>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Subjects() {
  const subjects = [
    "Web Systems",
    "Integrative Programming",
    "Advanced Database",
    "Technopreneurship"
  ];

  return (
    <section className="card">
      <h2>My Subjects</h2>

      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="container">
      <Header />

      <Profile />

      <Skills />

      <Subjects />

      <section className="card">
        <h2>React Interaction</h2>

        <button onClick={() => setShowMessage(!showMessage)}>
          {showMessage ? "Hide Message" : "Click Me"}
        </button>

        {showMessage && (
          <p className="message">
            Hello! This message is displayed using React state.
          </p>
        )}
      </section>

      <footer>
        <p>Created with Vite + React.js</p>
      </footer>
    </div>
  );
}

export default App;