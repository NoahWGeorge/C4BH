import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useUser } from './Usercontext';
import './MainPage.css';
import logoImage from './images/C4BHLogo.png';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const MainPage = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const { user } = useUser();

  // Handler for the Sign Out button
  const handleSignOut = () => {
    navigate('/'); // Redirects to the landing page
  };

  // Handler for the Query Master Patient Index button
  const handleQueryMPI = () => {
    window.location.href = "http://logica-client.azurewebsites.net/"; // Redirects to the MPI site
  };

  // Handler for the Query Master Patient Index button
  const HandleMirthQuery = () => {
    navigate ('/Mirth'); 
  };

  // Handler for the Query Master Patient Index button
  const HandleNetworkQuery = () => {
    navigate ('/Networking'); 
  };

  return (
    <div className="main-container">
      <header className="header">
        <Logo />
        <div>
          <div className="user-participant">{user && <span>Welcome, {user.username}</span>}</div>
          <button className="signout-button" onClick={handleSignOut}>Sign Out</button> 
        </div>
      </header>
      <div className="button-container">
        <button className="query-button">Use Case</button>
        <button className="query-button"onClick={HandleMirthQuery}>Mirth Log</button>
        <button className="query-button">Rules Engine</button>
        <button className="query-button" onClick={HandleNetworkQuery}>Network</button>
        <button className="query-button">FTP Log</button>
        <button className="query-button" onClick={handleQueryMPI}>Clinical Data Repo</button>
      </div>
    </div>
  );
};

export default MainPage;


