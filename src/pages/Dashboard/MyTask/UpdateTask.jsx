/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
const UpdateTask = () => {
  //   console.log(task);
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const task = useLoaderData();
  //   console.log("🚀 ~ file: updateTask.jsx:14 ~ UpdateTask ~ task:", task);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const newTask = {
      title: data.title,
      description: data.desc,
      priority: data.priority,
      deadline: data.selectedDate,
      email: user.email,
    };
    console.log("🚀 ~ file: Modal.jsx:32 ~ onSubmit ~ newTask:", newTask);
    try {
      const result = await axiosPublic.put(`/tasks/id/${task._id}`, newTask);
      if (result.data.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "Task update successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/dashboard/my-task");
      }

      reset();
    } catch (err) {
      console.log(err.message);
    }

    return {};
  };

  return (
    <div className="">
      <div className=" bg-white p-10 max-w-screen-sm mx-auto">
        <div className="justify-between mb-5 items-center">
          <h3 className="font-bold text-3xl text-center text-[#0A3D53]">Update Task</h3>
        </div>
        <div className="divider"></div>

        {/* Task create form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="form-control">
            <label className="text-[#0A3D53] font-medium mb-2" htmlFor="">
              Title
            </label>
            <input
              type="text"
              defaultValue={task.title}
              name="title"
              className="px-4 py-3 rounded-md border border-gray-200 outline-none mb-4"
              {...register("title", { required: true })}
            />
            {errors.title && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Title is required</span>}
          </div>

          {/* priority */}
          <div className="form-control">
            <label className="text-[#0A3D53] font-medium mb-2" htmlFor="">
              Priority
            </label>
            <select className="select px-4 py-3 rounded-md border border-gray-200 outline-none mb-4" {...register("priority", { required: true })}>
              <option value="" disabled selected>
                {task.priority}
              </option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
            {/* Display validation error message */}
            {errors.title && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Select Priority</span>}
          </div>

          {/* deadline */}
          <div className="form-control">
            <label htmlFor="dateInput">Deadline</label>
            <input
              type="date"
              id="dateInput"
              defaultValue={task.deadline}
              className="px-4 py-3 rounded-md border border-gray-200 outline-none mb-4"
              {...register("selectedDate", { required: "Date is required" })}
            />

            {/* Display validation error message */}
            <p className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">{errors?.selectedDate?.message}</p>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="text-[#0A3D53] font-medium mb-2" htmlFor="">
              Description
            </label>
            <textarea
              defaultValue={task.description}
              type="text"
              name="desc"
              className="px-4 py-3 rounded-md border border-gray-200 outline-none mb-4"
              {...register("desc", { required: true })}
              id=""
              cols="30"
              rows="5"
            ></textarea>
            {/* Display validation error message */}
            {errors.desc && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Description is required</span>}
          </div>

          {/* button */}
          <div className="form-control mt-6 p-0 w-full">
            <button
              className="px-8 py-2 rounded-md font-medium hover:shadow-sm hover:bg-[#2765b7] hover:duration-150  bg-[#2F75D0] text-white"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
