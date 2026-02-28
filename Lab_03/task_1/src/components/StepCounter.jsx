import { useState } from "react";

const StepCounter = ({initialValue = 0, step = 1}) => {
    // Состояние для хранения текущего значения счетчика
    const [count, setCount] = useState(initialValue);

    // Состояние для хранения истории значений счетчика
    const [history, setHistory] = useState([initialValue]);

    // Состояние для хранения количества операций
    const [operationCount, setOperationCount] = useState(0);

    const handleUpdate = (isIncrement) => {
    const newValue = isIncrement ? count + step : count - step;
    
    setCount(newValue); // Обновляем текущее число
    setHistory((prevHistory) => [...prevHistory, newValue]); // Добавляем в историю
    setOperationCount((prevCount) => prevCount + 1); // Увеличиваем счетчик операций
  };

    const handleReset = () => {
        setCount(initialValue);
        setHistory([initialValue]);
        setOperationCount(0);
    }



    return (
        <div>
            <h1>Счетчик: шаг {step}</h1>
            <h2>Текущее значение: {count}</h2>
            <h3>Количество операций: {operationCount}</h3>
            <button onClick={() => handleUpdate(true)}>Increment (+{step})</button>
            <button onClick={() => handleUpdate(false)}>Decrement (-{step})</button>
            <button onClick={handleReset}>Reset</button>

            <h4>Последние изменения: </h4>
            <ul>
                {history.slice(-5).reverse().map((val, index) => (
                <li key={index}>{val}</li>
                ))}
            </ul>
        </div>
    )
}

export default StepCounter;