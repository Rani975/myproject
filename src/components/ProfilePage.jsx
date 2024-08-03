
// import React from 'react';
// import './ProfilePage.css';

// const ProfilePage = () => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   if (!user) {
//     return <div>User not found</div>;
//   }

//   return (
//     <div className="profile-container">
//       <h1>B.Planet</h1>
//       <div className="profile-card">
//         <img src="/path/to/user-image.jpg" alt="User" className="profile-image" />
//         <h2>{user.email}</h2> {/* Adjusted to match available property */}
//         <p>Email: {user.email}</p>
//         <p>Role: {user.role}</p>
      
//         {/* Add other user details as needed */}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="profile-container">
      <h1>B.Planet</h1>
      <div className="profile-card">
        <img src="/path/to/user-image.jpg" alt="User" className="profile-image" />
        <h2>{user.email}</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        {/* Add other user details as needed */}
        <button onClick={handleLogout} className="button">Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
