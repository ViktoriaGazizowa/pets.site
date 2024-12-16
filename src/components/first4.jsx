
import React, { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        // Проверяем, является ли введенный email валидным
        if (validateEmail(email)) {
            setSuccessMessage('Вы успешно подписались на новости!');
            setEmail(''); // Очищаем поле ввода после успешной подписки
        } else {
            setSuccessMessage('Пожалуйста, введите корректный email.');
        }
    };

    const validateEmail = (email) => {
        // Простейшая проверка email
        const re = /^[^s@]+@[^s@]+.[^s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
            <center>
                <form className="w-50 m-auto p-3" style={{ minWidth: 300 }} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Обновляем состояние при вводе
                        />
                        <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Подписаться</button>
                </form>
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            </center>
        </div>
    );
}

export default Footer;