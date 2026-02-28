import React, { useState } from 'react';
import UserProfile from './UserProfile';

const DataLoadingApp = () => {
  const [currentUserId, setCurrentUserId] = useState(1);

  // Функция для генерации случайного ID от 1 до 10
  const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setCurrentUserId(randomId);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Лабораторная 3.2: useEffect & API</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setCurrentUserId(1)}>User 1</button>
        <button onClick={() => setCurrentUserId(2)}>User 2</button>
        <button onClick={() => setCurrentUserId(3)}>User 3</button>
        <button onClick={handleRefresh} style={{ marginLeft: '20px', backgroundColor: '#e0e0e0' }}>
          Refresh (Random User)
        </button>
      </div>

      <hr />

      {/* Передаем ID в компонент. При его изменении сработает useEffect внутри UserProfile */}
      <UserProfile userId={currentUserId} />

      {/* 
        ОБЪЯСНЕНИЕ:
        userId включен в массив зависимостей useEffect, потому что эффект должен 
        заново запрашивать данные (fetch) каждый раз, когда пропс userId изменяется. 
        Cleanup функция (AbortController) гарантирует, что если мы быстро переключим 
        пользователей, старый (незавершенный) запрос будет отменен, предотвращая 
        запись некорректных данных.
      */}
    </div>
  );
};

export default DataLoadingApp;