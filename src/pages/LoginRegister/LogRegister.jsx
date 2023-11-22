
import React, { useState } from 'react';
import Login from './Login';
import Register from './register';

function LogRegister() {
  const [userData, setUserData] = useState(null);

  const handleLogin = (data) => {
    setUserData(data);
  };

  const handleRegister = (data) => {
    setUserData(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Aplicación de Login y Registro</h1>
        {userData ? (
          <div>
            <h2 className="text-xl font-bold mb-2">¡Bienvenido, {userData.username}!</h2>
            <p>Email: {userData.email}</p>
            <a href="/">
            <button className='mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Ir a Home
            </button>
            </a>
          </div>
        ) : (
          <div>
            <Login onLogin={handleLogin} />
            <Register onRegister={handleRegister} />
          </div>
        )}
      </div>
    </div>
  );
}

export default LogRegister;
