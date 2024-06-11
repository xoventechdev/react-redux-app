import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setValue } from "../../redux/state/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const customRef = useRef();
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-center">Counter App</h3>
      </div>
      <div className="card-body">
        <h1>{count}</h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="btn p-2 btn-primary"
        >
          Increase
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="btn p-2 mx-2 btn-warning"
        >
          Decrease
        </button>
        <div className="mt-3 ">
          <input ref={customRef} className="form-control w-50" type="number" />
          <button
            onClick={() => {
              dispatch(setValue(customRef.current.value));
            }}
            className="btn w-50 p-2 mt-1 btn-dark"
          >
            Set Value
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
