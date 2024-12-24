import React, { useState } from "react";
import './Register.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Nome é obrigatório";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "E-mail inválido";
        }
        if (!formData.password || formData.password.length < 6) {
            newErrors.password = "A senha deve ter pelo menos 6 caracteres";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "As senhas não coincidem";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const response = await fetch('http://localhost:5000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const data = await response.json();
                if (response.ok) {
                    setSuccessMessage('Registro realizado com sucesso!');
                    setErrors({});
                } else {
                    console.error('Erro no registro:', data.message);
                }
            } catch (error) {
                console.error('Erro na solicitação:', error);
            }
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme a senha"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

                <button type="submit">Registrar</button>

                {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;
