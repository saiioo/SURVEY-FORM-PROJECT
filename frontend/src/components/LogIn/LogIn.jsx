
import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import './LogIn.css';

function Login() {
  const styles = {
    backgroundColor : "red",
    width: "150px",
    padding:"5px 10px",
    colo:"white",
    margin:" 20px auto 0px auto"
  }
  const [direct, setDirect] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const handleFormSubmit = async(event) => {
      event.preventDefault();
      try {
        const url = "http://localhost:8080/user/login";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        localStorage.setItem(
          'userdetails',
          JSON.stringify(res.message.userdetails)
        );
        setDirect(true)
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
  };

  return (
    <div className="main-container">
      <div className="welcome-container">
        <h1 className="welcome-header">Survey Page</h1>
        <h1 className="welcome-text">Best Surveys Will be here</h1>
        <p className="welcome-info">Sign in to continue access pages</p>
        <p className="welcome-register"> Don’t Have An Account</p>
        <Link className="link-btn" to='/signupPage'> Resgister</Link>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h2>Sign In</h2>
          <p>Sign in to continue access pages</p>
        </div>
        <div className="form-body">
          <form onSubmit={handleFormSubmit}>
            <label>
              <input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
              className="email-input" 
               />
            </label>
            <label>
              <input 
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="password-input" 
              />
            </label>
            {error && <div style={styles} className="error_msg">{error}</div>}
            <button type="submit" id="signin-button">Sign In</button>
          </form>
          {direct && <Navigate to={'/surveys'}/>}
        </div>
      </div>
    </div>
  );
}

export default Login;












// import React, { useState } from "react";
// import { Link, Navigate } from 'react-router-dom';
// import axios from 'axios'
// import './LogIn.css'

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [direct,Setdirect] = useState(false)
//   const [err,setError] = useState(false)
// const handleFormSubmit = async (event) => {
//   console.log(password, email);
//   event.preventDefault();

//   try {
//     const response = await axios.post('http://localhost:8080/user/login', {
//       email,
//       password,
//     })
//     const data = response.data

//     if (response.status === 200) {
//       Setdirect(true)
//       localStorage.setItem('token', data.message.token);
//       localStorage.setItem(
//         'userdetails',
//         JSON.stringify(data.message.userdetails)
//       );
//     } else {
//       setError(true)
//       console.log('i came here');
//       alert('Invalid email or password')
//       console.log(data.error);
//     }
//   } catch (error) {
//     console.log('I came all the way down');
//     console.log(error.message);
//   }
// };
//   return (
//     <div className="main-container">
//       <div className="welcome-container">
//         <h1 className="welcome-header">Survey Page</h1>
//         <h1 className="welcome-text">Best Surveys Will be here</h1>
//         <p className="welcome-info">Sign in to continue access pages</p>
//         <p className="welcome-register"> Don’t Have An Account</p>
//         <Link className="link-btn" to='/signupPage'> Resgister</Link>
//       </div>
//         <div className="form-container">
//       <div className="form-header">
//           <h2>Sign In</h2>
//           <p>Sign in to continue access pages</p>
//         </div>
//         <div className="form-body">
//           <form onSubmit={handleFormSubmit}>
//             <label>
//               <input placeholder="email" type="email" name="email" className="email-input" value={email} onChange={(event) => setEmail(event.target.value)} />
//             </label>
//             <label>
//               <input placeholder="password" type="password" name="password" className="password-input" value={password} onChange={(event) => setPassword(event.target.value)} />
//             </label>
//             {err && <p>Inavlid password or email</p>}
//             <button type="submit" id="signin-button">Sign In</button>
//           </form>
//           {direct && <Navigate to={'/surveys'}/>}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login;






// import React, { useState } from "react";
// import { Link, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import './LogIn.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [direct, setDirect] = useState(false);
//   const [error, setError] = useState('');

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:8080/user/login', { email, password })
//       .then((response) => {
//         const data = response.data;
//         if (response.status === 200) {
//           setDirect(true);
//           localStorage.setItem('token', data.message.token);
//           localStorage.setItem('userdetails', JSON.stringify(data.message.userdetails));
//         } else if(response.status === 404) {
//           setError('Invalid email or password');
//           console.log(data.error);
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         console.log(error)
//       });
//   };

//   return (
//     <div className="main-container">
//       <div className="welcome-container">
//         <h1 className="welcome-header">Survey Page</h1>
//         <h1 className="welcome-text">Best Surveys Will be here</h1>
//         <p className="welcome-info">Sign in to continue access pages</p>
//         <p className="welcome-register"> Don’t Have An Account</p>
//         <Link className="link-btn" to='/signupPage'> Resgister</Link>
//       </div>
//       <div className="form-container">
//         <div className="form-header">
//           <h2>Sign In</h2>
//           <p>Sign in to continue access pages</p>
//         </div>
//         <div className="form-body">
//           <form onSubmit={handleFormSubmit}>
//             <label>
//               <input placeholder="email" type="email" name="email" className="email-input" value={email} onChange={(event) => setEmail(event.target.value)} />
//             </label>
//             <label>
//               <input placeholder="password" type="password" name="password" className="password-input" value={password} onChange={(event) => setPassword(event.target.value)} />
//             </label>
//             {error && <p>{error}</p>}
//             <button type="submit" id="signin-button">Sign In</button>
//           </form>
//           {direct && <Navigate to={'/surveys'}/>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


