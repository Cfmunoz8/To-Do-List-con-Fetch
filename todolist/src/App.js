import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  return (
    <div
      className="container container-fluid bg-light pb-3 mt-3"
      style={{ width: "560px" }}
    >
      <div className="text-center">
        <h1>Mi lista de tareas</h1>
        <h2>¿Qué me falta por hacer?</h2>
      </div>
      <div>
        <div className="card" style={{ width: "530px" }}>
          <div className="card-header row">
            <input
              className="col-8"
              type="text"
              style={{ width: "350px" }}
              placeholder="Escribe aquí tu tarea pendiente"
              onChange={(event) => setTask(event.target.value)}
            ></input>
            <button
              className="btn btn-success"
              style={{ width: "150px" }}
              onClick={() => {
                setList(list.concat(`${task}`));
              }}
            >
              Agregar Tarea
            </button>
          </div>
          <ul className="list-group list-group-flush">
            {list.map((tarea) => (
              <li className="list-group-item">{tarea}</li>
            ))}
          </ul>
          <div class="card-footer">Tareas pendientes: {list.length}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
