// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });
//   const loginUser = async (e) => {
//     e.preventDefault();
//     const { email, password } = data;
//     try {
//       const { data } = await axios.post("/login", {
//         email,
//         password,
//       });
//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         setData({});
//         navigate("/dashboard");
//       }
//     } catch (error) {}
//   };

//   return (
//     <div className="">
//       <form onSubmit={loginUser}>
//         <label> Email</label>
//         <input
//           type="email"
//           placeholder="enter email..."
//           value={data.name}
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//         />
//         <label> Pssword</label>
//         <input
//           type="password"
//           placeholder="enter password..."
//           value={data.password}
//           onChange={(e) => setData({ ...data, password: e.target.value })}
//         />
//         <button type="submit" className="text-white bg-black border-0 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form onSubmit={loginUser}>
        <div className="flex flex-col">
          <Header />
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Email"
            value={data.name}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            className="w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-black-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <div className="relative mb-4">
          <button
            type="submit"
            className="font-inter w-full text-white bg-black border-0 py-2 px-6 rounded text-lg"
          >
            Login
          </button>
        </div>
        <div className="relative mb-4">
          <a
            href="/registercopy"
            className="w-full inline-flex justify-center text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg"
          >
            Create new account
          </a>
        </div>
      </form>
    </div>
  );
}

// // USSING LOGIN.CSS
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import "../login.css";

// export default function Login() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });
//   const loginUser = async (e) => {
//     e.preventDefault();
//     const { email, password } = data;
//     try {
//       const { data } = await axios.post("/login", {
//         email,
//         password,
//       });
//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         setData({});
//         navigate("/dashboard");
//       }
//     } catch (error) {}
//   };

//   return (
//     <div id="reg_form_box">
//       <form>
//         <div class="container">
//           <div class="form-group">
//             <label for="firstname">First name</label>
//             <input type="text" name="firstname" id="firstname" required />
//           </div>
//           <div class="form-group">
//             <label for="lastname">Surname</label>
//             <input type="text" name="lastname" id="lastname" required />
//           </div>
//         </div>
//         <div class="form-group">
//           <label for="email">Mobile number or email address</label>
//           <input type="text" name="reg_email__" id="email" required />
//         </div>
//         <div class="form-group">
//           <label for="password">New password</label>
//           <input type="password" name="reg_passwd__" id="password" required />
//         </div>
//         <div class="form-group">
//           <label for="birthday">Date of birth</label>
//           <div class="container">
//             <select name="birthday_day" id="day" required>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//               <option value="6">6</option>
//               <option value="7">7</option>
//               <option value="8">8</option>
//               <option value="9">9</option>
//               <option value="10">10</option>
//               <option value="11">11</option>
//               <option value="12">12</option>
//               <option value="13">13</option>
//               <option value="14">14</option>
//               <option value="15">15</option>
//               <option value="16">16</option>
//               <option value="17">17</option>
//               <option value="18">18</option>
//               <option value="19">19</option>
//               <option value="20">20</option>
//               <option value="21">21</option>
//               <option value="22">22</option>
//               <option value="23">23</option>
//               <option value="24">24</option>
//               <option value="25">25</option>
//               <option value="26">26</option>
//               <option value="27">27</option>
//               <option value="28">28</option>
//               <option value="29">29</option>
//               <option value="30">30</option>
//               <option value="31">31</option>
//             </select>
//             <select name="birthday_month" id="month" required>
//               <option value="1">Jan</option>
//               <option value="2">Feb</option>
//               <option value="3">Mar</option>
//               <option value="4">Apr</option>
//               <option value="5">May</option>
//               <option value="6">Jun</option>
//               <option value="7">Jul</option>
//               <option value="8">Aug</option>
//               <option value="9">Sep</option>
//               <option value="10">Oct</option>
//               <option value="11">Nov</option>
//               <option value="12">Dec</option>
//             </select>
//             <select name="birthday_year" id="year" required>
//               <option value="2024">2024</option>
//               <option value="2023">2023</option>
//               <option value="2022">2022</option>
//               <option value="2021">2021</option>
//               <option value="2020">2020</option>
//               <option value="2019">2019</option>
//               <option value="2018">2018</option>
//               <option value="2017">2017</option>
//               <option value="2016">2016</option>
//               <option value="2015">2015</option>
//               <option value="2014">2014</option>
//               <option value="2013">2013</option>
//               <option value="2012">2012</option>
//               <option value="2011">2011</option>
//               <option value="2010">2010</option>
//               <option value="2009">2009</option>
//               <option value="2008">2008</option>
//               <option value="2007">2007</option>
//               <option value="2006">2006</option>
//               <option value="2005">2005</option>
//               <option value="2004">2004</option>
//               <option value="2003">2003</option>
//               <option value="2002">2002</option>
//               <option value="2001">2001</option>
//               <option value="2000">2000</option>
//               <option value="1999">1999</option>
//               <option value="1998">1998</option>
//               <option value="1997">1997</option>
//               <option value="1996">1996</option>
//               <option value="1995">1995</option>
//               <option value="1994">1994</option>
//               <option value="1993">1993</option>
//               <option value="1992">1992</option>
//               <option value="1991">1991</option>
//               <option value="1990">1990</option>
//               <option value="1989">1989</option>
//               <option value="1988">1988</option>
//               <option value="1987">1987</option>
//               <option value="1986">1986</option>
//               <option value="1985">1985</option>
//               <option value="1984">1984</option>
//               <option value="1983">1983</option>
//               <option value="1982">1982</option>
//               <option value="1981">1981</option>
//               <option value="1980">1980</option>
//               <option value="1979">1979</option>
//               <option value="1978">1978</option>
//               <option value="1977">1977</option>
//               <option value="1976">1976</option>
//               <option value="1975">1975</option>
//               <option value="1974">1974</option>
//               <option value="1973">1973</option>
//               <option value="1972">1972</option>
//               <option value="1971">1971</option>
//               <option value="1970">1970</option>
//               <option value="1969">1969</option>
//               <option value="1968">1968</option>
//               <option value="1967">1967</option>
//               <option value="1966">1966</option>
//               <option value="1965">1965</option>
//               <option value="1964">1964</option>
//               <option value="1963">1963</option>
//               <option value="1962">1962</option>
//               <option value="1961">1961</option>
//               <option value="1960">1960</option>
//               <option value="1959">1959</option>
//               <option value="1958">1958</option>
//               <option value="1957">1957</option>
//               <option value="1956">1956</option>
//               <option value="1955">1955</option>
//               <option value="1954">1954</option>
//               <option value="1953">1953</option>
//               <option value="1952">1952</option>
//               <option value="1951">1951</option>
//               <option value="1950">1950</option>
//               <option value="1949">1949</option>
//               <option value="1948">1948</option>
//               <option value="1947">1947</option>
//               <option value="1946">1946</option>
//               <option value="1945">1945</option>
//               <option value="1944">1944</option>
//               <option value="1943">1943</option>
//               <option value="1942">1942</option>
//               <option value="1941">1941</option>
//               <option value="1940">1940</option>
//               <option value="1939">1939</option>
//               <option value="1938">1938</option>
//               <option value="1937">1937</option>
//               <option value="1936">1936</option>
//               <option value="1935">1935</option>
//               <option value="1934">1934</option>
//               <option value="1933">1933</option>
//               <option value="1932">1932</option>
//               <option value="1931">1931</option>
//               <option value="1930">1930</option>
//               <option value="1929">1929</option>
//               <option value="1928">1928</option>
//               <option value="1927">1927</option>
//               <option value="1926">1926</option>
//               <option value="1925">1925</option>
//               <option value="1924">1924</option>
//               <option value="1923">1923</option>
//               <option value="1922">1922</option>
//               <option value="1921">1921</option>
//               <option value="1920">1920</option>
//               <option value="1919">1919</option>
//               <option value="1918">1918</option>
//               <option value="1917">1917</option>
//               <option value="1916">1916</option>
//               <option value="1915">1915</option>
//               <option value="1914">1914</option>
//               <option value="1913">1913</option>
//               <option value="1912">1912</option>
//               <option value="1911">1911</option>
//               <option value="1910">1910</option>
//               <option value="1909">1909</option>
//               <option value="1908">1908</option>
//               <option value="1907">1907</option>
//               <option value="1906">1906</option>
//               <option value="1905">1905</option>
//             </select>
//           </div>
//         </div>
//         <div class="second-container">
//           <div class="form-group">
//             <label>Gender</label>
//             <select name="gender" id="gender" required>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>
//           <div class="form-group">
//             <label>Sing up as</label>
//             <select name="role" id="role" required>
//               <option value="job-seeker">Job Seeker</option>
//               <option value="employer">Employer</option>
//             </select>
//           </div>
//         </div>

//         <div class="btn-container">
//           <button class="btn sign-up">Sign Up</button>
//         </div>
//         <div>
//           <a href="/login">Already have an account?</a>
//         </div>
//       </form>
//     </div>
//   );
// }

// USING TAILWIND

// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });
//   const loginUser = async (e) => {
//     e.preventDefault();
//     const { email, password } = data;
//     try {
//       const { data } = await axios.post("/login", {
//         email,
//         password,
//       });
//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         setData({});
//         navigate("/dashboard");
//       }
//     } catch (error) {}
//   };

//   return (
//     <div
//       id="reg_form_box"
//       className="w-full max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md"
//     >
//       <form onSubmit={loginUser}>
//         <div className="container flex flex-col gap-4">
//           <div className="form-group flex-1">
//             <label htmlFor="firstname" className="block mb-1 font-bold">
//               First name
//             </label>
//             <input
//               type="text"
//               name="firstname"
//               id="firstname"
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="form-group flex-1">
//             <label htmlFor="lastname" className="block mb-1 font-bold">
//               Surname
//             </label>
//             <input
//               type="text"
//               name="lastname"
//               id="lastname"
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//         </div>
//         <div className="form-group mt-4">
//           <label htmlFor="email" className="block mb-1 font-bold">
//             Mobile number or email address
//           </label>
//           <input
//             type="text"
//             name="reg_email__"
//             id="email"
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="form-group mt-4">
//           <label htmlFor="password" className="block mb-1 font-bold">
//             New password
//           </label>
//           <input
//             type="password"
//             name="reg_passwd__"
//             id="password"
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="form-group mt-4">
//           <label htmlFor="birthday" className="block mb-1 font-bold">
//             Date of birth
//           </label>
//           <div className="container flex gap-4 justify-center">
//             <select
//               name="birthday_day"
//               id="day"
//               required
//               className="p-2 border border-gray-300 rounded"
//             >
//               {Array.from({ length: 31 }, (_, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select
//               name="birthday_month"
//               id="month"
//               required
//               className="p-2 border border-gray-300 rounded"
//             >
//               {[
//                 "Jan",
//                 "Feb",
//                 "Mar",
//                 "Apr",
//                 "May",
//                 "Jun",
//                 "Jul",
//                 "Aug",
//                 "Sep",
//                 "Oct",
//                 "Nov",
//                 "Dec",
//               ].map((month, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {month}
//                 </option>
//               ))}
//             </select>
//             <select
//               name="birthday_year"
//               id="year"
//               required
//               className="p-2 border border-gray-300 rounded"
//             >
//               {Array.from({ length: 115 }, (_, i) => (
//                 <option key={2024 - i} value={2024 - i}>
//                   {2024 - i}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <div className="second-container mt-4 flex gap-4">
//           <div className="form-group flex-1">
//             <label className="block mb-1 font-bold">Gender</label>
//             <select
//               name="gender"
//               id="gender"
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>
//           <div className="form-group flex-1">
//             <label className="block mb-1 font-bold">Sign up as</label>
//             <select
//               name="role"
//               id="role"
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="job-seeker">Job Seeker</option>
//               <option value="employer">Employer</option>
//             </select>
//           </div>
//         </div>

//         <div className="btn-container mt-4 flex justify-center gap-4">
//           <button className="btn bg-green-500 text-white py-3 px-4 rounded hover:bg-green-600">
//             Sign Up
//           </button>
//         </div>
//         <div className="mt-4 text-center">
//           <a href="/login" className="text-gray-600 hover:text-gray-800">
//             Already have an account?
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }
