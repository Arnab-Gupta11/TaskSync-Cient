import axios from "axios";
//https://inventohub.vercel.app
//https://inventohub.vercel.app
const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
