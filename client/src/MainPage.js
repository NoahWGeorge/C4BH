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
          <div className="user-participant">Welcome, C4BH Admin</div>
          <button className="signout-button" onClick={handleSignOut}>Sign Out</button> 
        </div>
      </header>
      <main>
      <div className="button-container">
        <div className='button-col'>
          <button className="query-button">Use Cases</button>
        </div>
        <div className='button-col'>
          <button className="query-button">FTP Log</button>
          <button className="query-button"onClick={HandleMirthQuery}>Mirth Log</button>
          <button className="query-button" onClick={handleQueryMPI}>Clinical Data Repo</button>
        </div>
        <div className='button-col'>
        <button className="query-button">Rules Engine</button>
        </div>
        <div className='button-col'>
        <button className="query-button" onClick={HandleNetworkQuery}>Network</button>
        </div>
        


      </div>
      </main>
    </div>
  );
};

export default MainPage;


