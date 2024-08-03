// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const users = [
//     { id: 1, email: "user1@example.com", password: "password1", role: "user" },
//     { id: 2, email: "user2@example.com", password: "password2", role: "user" },
//     { id: 3, email: "admin@example.com", password: "adminpassword", role: "admin" }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//       setError('');
//       navigate('/');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className='pg1'>
//       <h1>Login Page </h1>
//       <h2>B.Planet</h2>
//     <div className="lgncontainer">
      
//       <div className="login-box">
    
//         <div className="login-content">
        
//           <div className='backimg'>
//           <div className="plant-image">
//             <img src="/loginimg.png" alt="Plant" />
//           </div>
//           </div>
          
//           <div className="form-container">
            
//             <div className="login-header">
             
//               Login
//               <p className="welcome-text">Welcome back!!</p>
            
//             <form className="form" onSubmit={handleSubmit}>
//               <label className="label">
//                 Email
//                 <p></p>
//                 <input
//                   type="email"
//                   name="email"
//                   className="input"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </label>
//               <label className="label">
//                 Password
//                 <p></p>
//                 <input
//                   type="password"
//                   name="password"
//                   className="input"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </label>
//               {error && <p className="error-message">{error}</p>}
//               <button type="submit" className="button">Login</button>
//             </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const users = [
//     { id: 1, email: "user1@example.com", password: "password1", role: "user" },
//     { id: 2, email: "user2@example.com", password: "password2", role: "user" },
//     { id: 3, email: "admin@example.com", password: "adminpassword", role: "admin" }
//   ];

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('user');
//     console.log('Logged in user:', loggedInUser);
//     if (loggedInUser) {
//       navigate('/');
//     }
//   }, [navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user = users.find(u => u.email === email && u.password === password);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Found user:', user);

//     if (user) {
//       setError('');
//       localStorage.setItem('user', JSON.stringify(user));
//       navigate('/');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className='pg1'>
//       <h1>Login Page</h1>
//       <h2>B.Planet</h2>
//       <div className="lgncontainer">
//         <div className="login-box">
//           <div className="login-content">
//             <div className='backimg'>
//               <div className="plant-image">
//                 <img src="/loginimg.png" alt="Plant" />
//               </div>
//             </div>
//             <div className="form-container">
//               <div className="login-header">
//                 Login
//                 <p className="welcome-text">Welcome back!!</p>
//                 <form className="form" onSubmit={handleSubmit}>
//                   <label className="label">
//                     Email
//                     <p></p>
//                     <input
//                       type="email"
//                       name="email"
//                       className="input"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </label>
//                   <label className="label">
//                     Password
//                     <p></p>
//                     <input
//                       type="password"
//                       name="password"
//                       className="input"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </label>
//                   {error && <p className="error-message">{error}</p>}
//                   <button type="submit" className="button">Login</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    { id: 1, email: "user1@example.com", password: "password1", role: "user" },
    { id: 2, email: "user2@example.com", password: "password2", role: "user" },
    { id: 3, email: "admin@example.com", password: "adminpassword", role: "admin" }
  ];

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      setError('');
      localStorage.setItem('user', JSON.stringify(user));
      if (user.role === 'admin') {
        navigate('/admin/home');
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='pg1'>
      <h1>Login Page</h1>
      <h2>B.Planet</h2>
      <div className="lgncontainer">
        <div className="login-box">
          <div className="login-content">
            <div className='backimg'>
              <div className="plant-image">
                <img src="/loginimg.png" alt="Plant" />
              </div>
            </div>
            <div className="form-container">
              <div className="login-header">
                Login
                <p className="welcome-text">Welcome back!!</p>
                <form className="form" onSubmit={handleSubmit}>
                  <label className="label">
                    Email
                    <p></p>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className="label">
                    Password
                    <p></p>
                    <input
                      type="password"
                      name="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  {error && <p className="error-message">{error}</p>}
                  <button type="submit" className="button">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const users = [
//     { id: 1, email: "user1@example.com", password: "password1", role: "user" },
//     { id: 2, email: "user2@example.com", password: "password2", role: "user" },
//     { id: 3, email: "admin@example.com", password: "adminpassword", role: "admin" }
//   ];

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('user');
//     if (loggedInUser) {
//       const user = JSON.parse(loggedInUser);
//       if (user.role === 'admin') {
//         navigate('/admin/home');
//       } else {
//         navigate('/');
//       }
//     }
//   }, [navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//       setError('');
//       localStorage.setItem('user', JSON.stringify(user));
//       if (user.role === 'admin') {
//         navigate('/admin/home');
//       } else {
//         navigate('/');
//       }
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//     <div className='pg1'>
//       <h1>Login Page</h1>
//       <h2>B.Planet</h2>
//       <div className="lgncontainer">
//         <div className="login-box">
//           <div className="login-content">
//             <div className='backimg'>
//               <div className="plant-image">
//                 <img src="/loginimg.png" alt="Plant" />
//               </div>
//             </div>
//             <div className="form-container">
//               <div className="login-header">
//                 Login
//                 <p className="welcome-text">Welcome back!!</p>
//                 <form className="form" onSubmit={handleSubmit}>
//                   <label className="label">
//                     Email
//                     <p></p>
//                     <input
//                       type="email"
//                       name="email"
//                       className="input"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </label>
//                   <label className="label">
//                     Password
//                     <p></p>
//                     <input
//                       type="password"
//                       name="password"
//                       className="input"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </label>
//                   {error && <p className="error-message">{error}</p>}
//                   <button type="submit" className="button">Login</button>
//                 </form>
//                 <button onClick={handleLogout} className="button">Logout</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

