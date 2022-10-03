import React, { useState, useEffect } from "react";
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
  let newList = list.map((task) => {
    return { label: task, done: false };
  });
  useEffect(() => {
    const URL = "https://assets.breatheco.de/apis/fake/todos/user/cfmunoz8";
    const configPut = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(URL, configPut)
      .then((response) => {
        console.log(response, "response");
        return response.json();
      })
      .then((data) => console.log(data, "data"))
      .catch((error) => console.log(error, "error"));
  });
  function putList() {
    const URL = "https://assets.breatheco.de/apis/fake/todos/user/cfmunoz8";
    const configPut = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([newList]),
    };
    fetch(URL, configPut)
      .then((response) => {
        console.log(response, "response");
        return response.json();
      })
      .then((data) => console.log(data, "data"))
      .catch((error) => console.log(error, "error"));
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
        <div className="card border-dark" style={{ width: "530px" }}>
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
                  putList();
                }}
              >
                Agregar Tarea
              </button>
            </div>
            <ul className="list-group list-group-flush text-dark">
              {list.map((tarea) => (
                <li className="list-group-item">
                  {tarea}
                  <button
                    id="close"
                    type="button"
                    className="btn btn-close float-end"
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
