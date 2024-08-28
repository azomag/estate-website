import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To handle errors
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('http://localhost:3001/register', { username, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
        setError('Failed to sign up. Please try again.');
      });
  }

  return (
    <div className="w-full pt-40 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-200 rounded-2xl px-10 py-10 shadow-lg">
          <h1 className="text-2xl font-medium pb-6 text-center text-gray-700">Sign Up</h1>

          {error && <p className="text-red-500 text-sm pb-4">{error}</p>}

          <div className="flex flex-col w-[300px] ">
            <label htmlFor="username" className="text-gray-600 pl-1 text-sm font-medium">Your Name :</label>
            <input type="text" name="username" id="username" className="py-3 text-sm outline-none px-5 text-black border-yellow-600 border rounded-xl my-2"
              placeholder="Enter your name"
              onChange={(e) => setuserName(e.target.value)} />
          </div>
          <div className="flex flex-col w-[300px] ">
            <label htmlFor="email" className="text-gray-600 pl-1 text-sm font-medium">Email :</label>
            <input type="email" name="email" id="email" className="py-3 text-sm outline-none px-5 text-black border-yellow-600 border rounded-xl my-2"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="flex flex-col w-[300px]">
            <label htmlFor="password" className="text-gray-600 pl-1 text-sm font-medium">Password :</label>
            <input type="password" name="password" id="password" className="py-3 text-sm outline-none px-5 text-black border border-yellow-600 rounded-xl my-2"
              placeholder="*************"
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="pt-5">
            <button type="submit" className="py-2 px-10 hover:bg-yellow-400 duration-300 text-white hover:text-black rounded-xl bg-yellow-600">Sign Up</button>
          </div>

          <p className="text-sm pt-5 capitalize flex justify-center items-center text-gray-500">I have an account <Link to="/login" className="px-2 hover:underline text-yellow-600 duration-300">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
