import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  return (
    <div className="container container-fluid bg-light">
      <div className="">
        <h1>Mi lista de tareas</h1>
        <h2>¿Qué me falta por hacer?</h2>
      </div>
      <div>
        <div className="card" style={{ width: "530px" }}>
          <div className="card-header">
            <input
              type="text"
              style={{ width: "500px" }}
              placeholder="Escribe aquí tu tarea pendiente"
              onKeyDown={(event) => setTask(event.target.value)}
              onKeyUp={(sameEvent) => setList(list.concat(sameEvent))}
            ></input>
          </div>
          <ul className="list-group list-group-flush">
            {list.map((task) => (
              <li className="list-group-item">{task}</li>
            ))}
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
