import React, { useState } from 'react';

function Register({ onRegister }) {
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro, por ahora simplemente pasamos los datos al componente principal.
    onRegister(registerData);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Registro</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-600">Username:</label>
        <input
          type="text"
          name="username"
          value={registerData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <label className="block text-sm font-medium text-gray-600 mt-2">Email:</label>
        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <label className="block text-sm font-medium text-gray-600 mt-2">Password:</label>
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
