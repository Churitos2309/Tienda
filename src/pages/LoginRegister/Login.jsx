import React, { useState } from 'react';

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la autenticación, por ahora simplemente pasamos los datos al componente principal.
    onLogin(loginData);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-600">Email:</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <label className="block text-sm font-medium text-gray-600 mt-2">Password:</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
