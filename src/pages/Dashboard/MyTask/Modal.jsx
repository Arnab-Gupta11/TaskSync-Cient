/* eslint-disable react/prop-types */
// import Swal from "sweetalert2";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";

// import { useState } from "react";
const Modal = ({ createTask, user }) => {
  // const { _id, name, image, rating, authore_name, quantity, short_description, category } = loadedData;
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data.title);
    console.log(data.desc);
    console.log(data.priority);
    try {
      toast.success("User signin successfully");
      reset();
      // Navigate(location?.state ? location.state : "/dashboard/my-task");
    } catch (err) {
      toast.error(err.message);
    }

    return {};
  };

  return (
    <div>
      <dialog id={createTask} className="modal modal-bottom rounded-md sm:modal-middle">
        <div className="modal-box bg-white rounded-md">
          <div className="modal-action justify-between mb-5 items-center">
            <h3 className="font-bold text-3xl text-center text-[#0A3D53]">Add Task</h3>
            <form method="dialog">
              <button className="btn bg-none rounded-full">
                <div className="text-[#2F75D0] text-3xl font-bold">
                  <RxCross1 />
                </div>
              </button>
            </form>
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
                // placeholder="Title"
                name="title"
                className="px-4 py-3 rounded-md border border-gray-200 outline-none mb-4"
                {...register("title", { required: true })}
              />
              {errors.title && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Title is required</span>}
            </div>
            {/* priority */}
            <div className="form-control">
              <label className="text-[#0A3D53] font-medium mb-2" htmlFor="">
                Title
              </label>
              <select className="select px-4 py-3 rounded-md border border-gray-200 outline-none mb-4" {...register("priority", { required: true })}>
                <option value="" disabled selected>
                  Priority
                </option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
              {errors.title && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Title is required</span>}
            </div>
            {/* Description */}
            <div className="form-control">
              <label className="text-[#0A3D53] font-medium mb-2" htmlFor="">
                Description
              </label>
              <textarea
                type="text"
                // placeholder="Full name"
                name="desc"
                className="px-4 py-3 rounded-md border border-gray-200 outline-none mb-4"
                {...register("desc", { required: true })}
                id=""
                cols="30"
                rows="5"
              ></textarea>
              {errors.desc && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Description is required</span>}
            </div>
            {/* button */}
            <div className="form-control mt-6 p-0 w-full">
              <button
                className="px-8 py-2 rounded-md font-medium hover:shadow-sm hover:bg-[#2765b7] hover:duration-150  bg-[#2F75D0] text-white"
                type="submit"
              >
                Submit
              </button>
              {/* <SecondaryBtn>Login</SecondaryBtn> */}
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
