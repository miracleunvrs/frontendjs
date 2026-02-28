import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  // Состояния для данных, загрузки и ошибок 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Создаем AbortController для отмены запроса 
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchUserData = async () => {
      setLoading(true);
      setError(null); // Сброс ошибки перед новым запросом

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal } // Привязываем сигнал к запросу
        );

        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        // Если ошибка вызвана отменой запроса, не обновляем состояние
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

    // 2. Функция очистки 
    // Вызывается при размонтировании компонента или перед следующим запуском эффекта
    return () => {
      abortController.abort();
    };
    
    // userId в массиве зависимостей: эффект сработает при каждом изменении id 
  }, [userId]); 

  /* Отработка UI состояний */
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p style={{ color: 'red' }}>Ошибка: {error}</p>;
  if (!user) return null;

  return (
    <div style={{ border: '1px solid blue', padding: '15px', borderRadius: '8px' }}>
      <h3>Профиль пользователя</h3>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Город:</strong> {user.address?.city}</p>
    </div>
  );
};

export default UserProfile;