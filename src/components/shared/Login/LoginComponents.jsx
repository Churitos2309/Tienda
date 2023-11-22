// src/components/LoginComponent.jsx
import React, { useState } from 'react';

function LoginComponent() {
  const [formData, setFormData] = useState({ usuario: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedo hacer algo con los datos ingresados aquí
    // En este ejemplo, simplemente mostramos una alerta con la información
    setShowAlert(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: "url(../../../../public/fondo_difuminado_login.jpg)" }}>
      <div className="flex justify-between bg-gray-200 w-full max-w-2xl">
        <div className="w-full max-w-md p-8 bg-gray-600 rounded-lg shadow-md">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-2 text-white">Usuario</label>
            <input type="text" name="usuario" placeholder="Usuario" required className="p-2 mb-4 bg-white text-gray-800" onChange={handleInputChange} />
            <label className="mb-2 text-white">Contraseña</label>
            <input type="password" placeholder="Contraseña" name="password" required className="p-2 mb-4 bg-white text-gray-800" onChange={handleInputChange} />
            <button type="submit" title="Ingresar" name="Ingresar" className="bg-green-500 text-white p-4">Login</button>
          </form>
        </div>
        <div className="text-white p-8 flex-1">
          <div className="text-4xl mb-4">Bienvenido</div>
          {showAlert && (
            <div className="bg-blue-200 text-blue-800 p-4 mb-4 rounded-md">
              ¡Bienvenido, {formData.usuario}! Tus datos fueron recibidos.
            </div>
          )}
          <hr className="mb-4 border-t border-gray-900" />
          <div className="text-lg leading-6">
            <a href="#" className="text-white">¿Perdiste tu contraseña?</a>
            <a href="#" className="text-white">¿No tienes Cuenta? Regístrate</a>
            <hr className="my-4 border-t border-gray-900" />
            <a href="/" className="text-white">« Volver</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
