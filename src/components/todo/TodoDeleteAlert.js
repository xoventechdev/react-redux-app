import Swal from "sweetalert2";
import store from "../../redux/store/store";
import { RemoveItem } from "../../redux/state/todoSlice";

export const TodoDeleteAlert = (i) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(RemoveItem(i));
      Swal.fire({
        title: "Deleted!",
        text: "Your task has been deleted.",
        icon: "success",
      });
    }
  });
};
