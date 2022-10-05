import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState(""); //variable tarea
  const [list, setList] = useState([]); //variable lista de tareas

  const deleteTask = () => setList(list.filter((item) => item !== `${tarea}`));

  //funciones para mostrar tareas pendientes en footer
  function footer() {
    if (list.length == 0) return "No hay tareas pendientes, añadir tareas.";
  }
  function footer2() {
    if (list.length > 0) return `Tareas pendientes: ${list.length}`;
  }

  // función para utilizar GET
  useEffect(() => {
    getTasks();
  }, []);

  //función para ejecutar API METODO GET (mostrar lista de tareas)
  function getTasks() {
    const URL = "https://assets.breatheco.de/apis/fake/todos/user/cfmunoz8";
    const configGet = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(URL, configGet)
      .then((response) => {
        console.log(response, "response");
        return response.json();
      })
      .then((data) => console.log(data, "data"))
      .catch((error) => console.log(error, "error"));
  }

  //función para ejecutar API metodo PUT (actualizar lista de tareas)
  function putList(task) {
    let newList = list.concat(task).map((tarea) => {
      return {
        label: tarea,
        done: false,
      };
    });
    const URL = "https://assets.breatheco.de/apis/fake/todos/user/cfmunoz8";
    const configPut = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newList),
    };
    //función para mostrar como un arreglo de objetos la lista de tareas

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
            onSubmit={(event) => {
              event.preventDefault();
              setList(list.concat(`${task}`));
              putList(task);
            }}
          >
            <div className="card-header row">
              <input
                className="col-8"
                type="text"
                placeholder="Escribe aquí tu tarea pendiente"
                onChange={(event) => setTask(event.target.value)} //función para agregar una tarea a la lista de tareas
              ></input>
              <button
                className="btn btn-success ml-3 col-4"
                style={{ width: "150px" }}
                value="add task"
                type="submit"
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
                    onClick={() => {
                      setList(list.filter((item) => item !== `${tarea}`));
                      putList(); //función para eliminar una tarea de la lista en el DOM
                    }}
                  ></button>
                </li>
              ))}
            </ul>
          </form>
          <div className="card-footer">
            {footer()} {footer2()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
