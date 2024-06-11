import React from "react";
import { useSelector } from "react-redux";
import { TodoDeleteAlert } from "./TodoDeleteAlert";
import { TodoEditAlert } from "./TodoEditAlert";

const ListTodo = () => {
  const taskList = useSelector((state) => state.todo.value);
  return (
    <div className="row mx-3 mt-5 text-center">
      <h5>List of Task</h5>
      <div className="col-md-12">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{task}</td>
                  <td>
                    <button
                      onClick={() => TodoDeleteAlert(i)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => TodoEditAlert(i, task)}
                      className="btn btn-primary mx-1"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodo;
