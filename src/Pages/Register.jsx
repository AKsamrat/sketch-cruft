import { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from './../Provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../Firebase/Firebase.config';
const auth = getAuth(app);

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state ? location.state : '/';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password } = data;
    if (password.length < 6) {
      setRegisterError('Password Should be minium 6 Charecter');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Minimun add one upper case');
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError('Minimun add one lower case');
      return;
    }
    setRegisterError('');
    setSuccess('');
    createUser(email, password)
      .then(result => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: data.photo,
        }).then(result => {
          toast('successfully register');
          navigate(from, { replace: true });
          // if (result.user) {
          // }
        });
      })
      .catch(error => {
        toast('Email and Pass Problem');
      });
    reset();
  };

  return (
    <div
      className=" lg:pl-32 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('frame2.webp')`,
        // opacity: 10,
      }}
    >
      <div className="flex flex-col max-w-2xl p-6 rounded-md sm:p-10  text-[#FA8072] my-12 px-5 md:px-[50px] lg:px-[80px] mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm dark:text-gray-600">
            Please Register your Account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="space-y-12"
        >
          <div className="space-y-4 *:font-semibold">
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Your Name
              </label>
              <input
                {...register('name', { required: true })}
                required
                type="text"
                name="name"
                id="name"
                placeholder="A k samrat"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label className="block mb-2 text-sm">Photo Url</label>
              <input
                {...register('photo', { required: true })}
                required
                type="text"
                name="photo"
                id="photo"
                placeholder="photo Url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.photo && <span>This field is required</span>}
            </div>
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <input
                {...register('email', { required: true })}
                required
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
              </div>
              <div className="relative">
                <input
                  {...register('password', { required: true })}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  required
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 dark:text-gray-800"
                />
                <span
                  className="absolute top-3 right-2"
                  onClick={() => setPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              {registerError ? (
                <p className="text-md font-semibold text-red-600">
                  {registerError}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <input type="checkbox" name="terms" id="" />{' '}
          <label>
            <a href="">Accept our terms and Condition</a>
          </label>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-[#FA8072] text-gray-50"
              >
                Register
              </button>
            </div>
          </div>
        </form>
        <p className="px-6 text-sm text-center text-gray-600 pt-3 ">
          Already have account
          <Link
            to={'/login'}
            rel="noopener noreferrer"
            href="#"
            className="hover:underline text-[#FA8072] font-bold text-xl "
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
