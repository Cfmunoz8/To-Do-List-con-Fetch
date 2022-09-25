import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  function footer() {
    if (list.length == 0) return "No hay tareas pendientes, añadir tareas.";
  }
  function footer2() {
    if (list.length > 0) return `Tareas pendientes: ${list.length}`;
  }
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
          <form
            onSubmit={(send) => {
              send.preventDefault();
            }}
          >
            <div className="card-header row">
              <input
                className="col-8"
                type="text"
                placeholder="Escribe aquí tu tarea pendiente"
                onChange={(event) => setTask(event.target.value)}
              ></input>
              <button
                className="btn btn-success ml-3 col-4"
                style={{ width: "150px" }}
                value="add task"
                onClick={() => {
                  setList(list.concat(`${task}`));
                }}
              >
                Agregar Tarea
              </button>
            </div>
            <ul className="list-group list-group-flush">
              {list.map((tarea) => (
                <li className="list-group-item">
                  {tarea}
                  <button
                    type="button"
                    className="btn-close float-end"
                    aria-label="Close"
                    onClick={() =>
                      setList(list.filter((item) => item !== `${tarea}`))
                    }
                  ></button>
                </li>
              ))}
            </ul>
          </form>
          <div class="card-footer">
            {footer()} {footer2()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
