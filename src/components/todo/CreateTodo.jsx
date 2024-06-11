import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddItem } from "../../redux/state/todoSlice";

const CreateTodo = () => {
  const taskInput = useRef();
  const dispatch = useDispatch();
  return (
    <div className="row mx-3 mt-2">
      <div className="col-md-10">
        <input ref={taskInput} type="text" className="form-control" />
      </div>
      <div className="col-md-2">
        <button
          onClick={() => dispatch(AddItem(taskInput.current.value))}
          className="btn btn-primary"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
