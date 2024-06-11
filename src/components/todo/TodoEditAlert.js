import Swal from "sweetalert2";
import store from "../../redux/store/store";
import { EditItem } from "../../redux/state/todoSlice";

export const TodoEditAlert = (i, item) => {
  Swal.fire({
    title: "Update Task",
    input: "text",
    inputLabel: "Your title id here",
    inputValue: item,
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(EditItem({ index: i, task: result.value }));
      Swal.fire({
        title: "Updated!",
        text: "Your task has been updated.",
        icon: "success",
      });
    }
  });
};
