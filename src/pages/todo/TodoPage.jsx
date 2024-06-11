import React from "react";
import CreateTodo from "../../components/todo/CreateTodo";
import ListTodo from "../../components/todo/ListTodo";

const TodoPage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-header">
                <h3>Todo App</h3>
              </div>
              <CreateTodo />
              <ListTodo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
