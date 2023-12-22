import DashboardTitle from "../../../components/Shared/DashboardTitle/DashboardTitle";
import SecondaryBtn from "../../../components/Shared/SecondaryBtn/SecondaryBtn";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import MyTaskList from "./MyTaskList";
const MyTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [myData, setMyData] = useState([]);

  // using Promises
  useEffect(() => {
    axiosPublic.get(`/tasks/?email=${user.email}`).then((response) => setMyData(response.data));
  }, [axiosPublic, user.email]);
  console.log(myData);
  return (
    <div>
      <div className="flex justify-between items-center">
        <DashboardTitle>My Task</DashboardTitle>
        <SecondaryBtn>
          <span className="flex items-center gap-2 " onClick={() => document.getElementById("createTask").showModal()}>
            <FaPlus size={13} /> Create
          </span>
        </SecondaryBtn>
      </div>
      <div className="divider"></div>

      <div className="min-h-screen bg-white rounded-md">
        <div>
          {myData.map((task) => (
            <div key={task._id}>
              <MyTaskList task={task}></MyTaskList>
              <div className="divider mt-0 mb-0"></div>{" "}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div>
          <h2 className="text-2xl font-medium">Create and manage your task efficiently</h2>
          <div className="flex justify-center mt-5">
            <SecondaryBtn>
              <span className="flex items-center gap-2">
                <FaPlus size={13} /> Create
              </span>
            </SecondaryBtn>
          </div>
        </div>
      </div> */}
      <Modal createTask={"createTask"} user={user}></Modal>
    </div>
  );
};

export default MyTask;
