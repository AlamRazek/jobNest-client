import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DeleteJob = () => {
  const data = useLoaderData();
  const [cart, setCart] = useState();
  const { _id } = data;

  const ConfirmDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        axios
          .delete(`http://localhost:5000/delete/${_id}`)
          .then((res) => {
            console.log(res?.data);
            if (res?.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Cart been deleted.", "success");
              const remaining = cart.filter((crt) => crt._id !== _id);
              setCart(remaining);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div>
      <button>Delete Job</button>
    </div>
  );
};

export default DeleteJob;
