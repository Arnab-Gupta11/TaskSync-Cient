import DashboardTitle from "../../../components/Shared/DashboardTitle/DashboardTitle";
import SecondaryBtn from "../../../components/Shared/SecondaryBtn/SecondaryBtn";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import useAuth from "../../../hooks/useAuth";
const MyTask = () => {
  const { user } = useAuth();
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
