import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Shared/Logo/Logo";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import imageUpload from "../../api/utils";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const navigate = useNavigate();
  // const axiosPublic = useAxiosPublic();
  const { registerUser, updateUserProfile, googleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //email password register
  const onSubmit = async (data) => {
    const image = data.image[0];
    try {
      //1.upload image
      const imageData = await imageUpload(image);
      // 2.user registration
      await registerUser(data.email, data.password);

      //3.Update user profile
      await updateUserProfile(data.name, imageData?.data?.display_url);

      // const currentUser = {
      //   email: data.email,
      //   name: data.name,
      //   role: "guest",
      //   status: "verified",
      // };
      // await axiosPublic.post(`/users`, currentUser);

      toast.success("User signup successfully");
      reset();
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }

    return {};
  };

  //Google sign in
  const handleGoogleLogin = async () => {
    try {
      // 2.user registration
      const result = await googleSignIn();
      console.log("🚀 ~ file: Register.jsx:55 ~ handleGoogleLogin ~ result:", result);

      // 4.Save User
      // const currentUser = {
      //   email: result?.user?.email,
      //   name: result?.user?.displayName,
      //   role: "guest",
      //   status: "verified",
      // };
      // await axiosPublic.post(`/users`, currentUser);

      toast.success("User signup successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const shadow = {
    boxShadow: "0px 0px 25px  #d3dce6",
  };
  return (
    <div className="min-h-screen bg-[#E3DEFC] py-12 font-roboto ">
      <Toaster></Toaster>
      <div className="w-11/12  md:10/12 lg:w-4/12  text-[#1B2850] bg-base-100 rounded-lg mx-auto" style={shadow}>
        <div className="text-center mb-3 ">
          <div className=" bg-[#0A3D53] py-7 flex justify-center rounded-t-lg">
            <Logo />
          </div>
          <h1 className="text-xl md:text-4xl lg:px-5 font-bold pt-10 text-[#0A3D53]">Create Account</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Full name"
                name="name"
                className="px-4 py-3 rounded-lg bg-[#efedff] outline-[#9fa0a3]  mb-4"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Name is required</span>}
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="px-4 py-3 rounded-lg bg-[#efedff] outline-[#9fa0a3]  mb-4"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Email is required</span>}
            </div>
            <div className="form-control">
              <input
                className="px-4 py-3 rounded-lg bg-[#efedff] outline-[#9fa0a3]  mb-4"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                accept="image/*"
                {...register("image", { required: true })}
              />
              <p className=" text-sm text-gray-500 mb-4" id="file_input_help ">
                Upload image (PNG, JPG ){errors.image && <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Image is required</span>}
              </p>
            </div>
            <div className="form-control mb-4">
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="px-4 py-3 w-full rounded-lg bg-[#efedff] outline-[#9fa0a3]  mb-4"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">Password is required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700 text-xs font-medium mt-0 mb-3 ml-1">
                    Password must contain at least 6 characters, at least 1 capital letter, and at least 1 special character.
                  </span>
                )}
              </div>
            </div>

            <p>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="ml-3">
                Accept our term and condition
              </label>
            </p>
            <div className="form-control mt-6 p-0 w-full">
              <button
                className="px-8 py-2 rounded-md font-medium hover:shadow-sm hover:bg-[#2765b7] hover:duration-150  bg-[#2F75D0] text-white"
                type="submit"
              >
                Sign Up
              </button>
              {/* <SecondaryBtn>Login</SecondaryBtn> */}
            </div>
          </form>

          <hr className="my-5 bg-[#1B2850]" />
          <div>
            <div className="flex items-center px-4 py-3 w-full rounded-lg justify-center text-lg gap-2 border border-[#2F75D0] shadow-md hover:shadow-md hover:shadow-[#2F75D0]">
              <div className="">
                <FcGoogle></FcGoogle>
              </div>

              <button onClick={handleGoogleLogin} className="text-[#706F6F] font-medium">
                Sign in with Google
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <label className="label text-neutral font-medium">Already have an account?</label>
            <Link to="/login" className="text-[#2F75D0] text-base link link-hover ml-2 font-semibold">
              Please Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
