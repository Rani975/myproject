// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminHome.css';
// // import plantImage from './image.png';  // Ensure this path is correct

// const AdminHome = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="admin-home">
//       <header className="admin-header">
//         <div className="header-left">
//           <div className="header-box" onClick={() => navigate('/admin/home')}>
//             <span>B.planet</span>
//           </div>
//         </div>
//         <div className="header-right">
//           <div className="header-box" onClick={() => navigate('/admin/contact')}>
//             <span>Contact us</span>
//           </div>
//           <div className="header-box" onClick={() => navigate('/')}>
//             <span>Login</span>
//           </div>
//         </div>
//       </header>
//       <div className="admin-content">
//         <div className="top-section">
//           <img src= "/loginimg.png" alt="Plants" className="plant-image" />
//           <div className="heading-box">
//             <h1>Heading</h1>
//           </div>
//         </div>
//         <div className="bottom-section">
//           <h5>Featured Product</h5>
//           {/* Add more content here if needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminHome.css';


// const AdminHome = () => {
//   const navigate = useNavigate();
//   const [heading, setHeading] = useState('Heading');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleInputChange = (event) => {
//     setHeading(event.target.value);
//   };

//   const handleInputBlur = () => {
//     setIsEditing(false);
//   };

//   return (
//     <div className="admin-home">
//       <header className="admin-header">
//         <div className="header-left">
//           <div className="header-box" onClick={() => navigate('/admin/home')}>
//             <span>B.planet</span>
//           </div>
//           </div>
        
        
//           <div className="header-box" onClick={() => navigate('/admin/contact')}>
//             <span>Contact us</span>
//           </div>
//           <div className="header-box" onClick={() => navigate('/')}>
//             <span>Login</span>
//           </div>
        
//       </header>
//       <div className="admin-content">
//         <div className="top-section">
//         <img src="/heroimage2.png" alt="Hero" className="hero-img2" />
//         <img src="/heroimage1.png" alt="Hero" className="hero-img1" />
         
//           <div className="heading-box">
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={heading}
//                 onChange={handleInputChange}
//                 onBlur={handleInputBlur}
//                 autoFocus
//                 className="heading-input"
//               />
//             ) : (
//               <h1 onClick={handleEditClick}>{heading}</h1>
//             )}
//           </div>
//         </div>
//         </div>
//         <div className="bottom-section">
//           <h5>Featured Product</h5>
//           {/* Add more content here if needed */}
//         </div>
        
//       </div>
    
//   );
// };

// export default AdminHome;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminHome.css';

// const AdminHome = () => {
//   const navigate = useNavigate();
//   const [heading, setHeading] = useState('Heading');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleInputChange = (event) => {
//     setHeading(event.target.value);
//   };

//   const handleInputBlur = () => {
//     setIsEditing(false);
//   };

//   return (
//     <div className="admin-home">
        
//       <div className="admin-content">
     
//     <div className="top-section">
//           <header className="admin-header">
//             <div className="header-left">
//               <div className="header-box" onClick={() => navigate('/admin/home')}>
//                 <span style={{border:'1px ', borderRadius:'0px', fontSize:'20px',fontWeight:'bold'}}>B.planet</span>
//               </div>
//             </div>
//             <div className="header-right">
//               <div className="header-box" onClick={() => navigate('/admin/contact')}>
//                 <span>Contact us</span>
//               </div>
//               <div className="header-box" onClick={() => navigate('/')}>
//                 <span>Login</span>
//               </div>
//             </div>
//           </header>
//           <img src="/heroimage2.png" alt="Hero" className="hero-img2" />
//           <img src="/heroimage1.png" alt="Hero" className="hero-img1" />
//           <div className="heading-box">
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={heading}
//                 onChange={handleInputChange}
//                 onBlur={handleInputBlur}
//                 autoFocus
//                 className="heading-input"
//               />
//             ) : (
//               <h1 onClick={handleEditClick}>{heading}</h1>
//             )}
//           </div>
//         </div>
//         <div className="bottom-section">
//           <h5>Featured Product</h5>
//           {/* Add more content here if needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHome.css';

const AdminHome = () => {
  const navigate = useNavigate();
  const [heading, setHeading] = useState('Heading');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setHeading(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="admin-home">
      {/* New heading added outside the top-section */}
      <header className="home-page-heading">
        <h1> Home Page</h1>
      </header>

      <div className="admin-content">
        <div className="top-section">
          <header className="admin-header">
            <div className="header-left">
              <div className="header-box" onClick={() => navigate('/admin/home')}>
                <span style={{border:'1px ', borderRadius:'0px', fontSize:'20px',fontWeight:'bold'}}>B.planet</span>
              </div>
            </div>
            <div className="header-right">
              <div className="header-box" onClick={() => navigate('/admin/contact')}>
                <span>Contact us</span>
              </div>
              <div className="header-box" onClick={() => navigate('/')}>
                <span>Login</span>
              </div>
            </div>
          </header>
          <img src="/heroimage2.png" alt="Hero" className="hero-img2" />
          <img src="/heroimage1.png" alt="Hero" className="hero-img1" />
          <div className="heading-box">
            {isEditing ? (
              <input
                type="text"
                value={heading}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                autoFocus
                className="heading-input"
              />
            ) : (
              <h1 onClick={handleEditClick}>{heading}</h1>
            )}
          </div>
        </div>
        <div className="bottom-section">
          <h5>Featured Product</h5>
          {/* Add more content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
