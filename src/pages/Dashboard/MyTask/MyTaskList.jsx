/* eslint-disable react/prop-types */
import { FaRegCalendarAlt, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
const MyTaskList = ({ task }) => {
  const axiosPublic = useAxiosPublic();
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/id/${task._id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.deletedCount > 0) {
            Swal.fire("Task deleted successfully");
            // const remainig = carts.filter((borrow) => borrow._id !== _id);
            // setCarts(remainig);
          }
          location.reload();
        });
      }
    });
  };
  return (
    <div>
      <div className="card w-full">
        <div className="card-body  py-2">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{task.title}</h2>
            <div className="flex gap-3 items-center">
              <Link to={`/dashboard/my-task/${task._id}`}>
                <span className="text-green-500 cursor-pointer hover:scale-150">
                  <FaRegEdit size={20} />
                </span>
              </Link>
              <span className="text-red-500 cursor-pointer hover:scale-150" onClick={handleDelete}>
                <RiDeleteBinLine size={20} />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h5 className="flex gap-1 items-center">
              <FaRegCalendarAlt />
              {task.deadline}
            </h5>
            <span className="bg-gray-300 px-3 py-1 rounded-md">{task.priority}</span>
          </div>
          <p>{task.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyTaskList;
