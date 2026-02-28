<div align="center">

# Lab 3 — React Components and Hooks

### Props, State, useState, useEffect

</div>

## Описание

Лабораторная работа посвящена углубленному изучению React компонентов и хуков. Включает два практических задания: создание продвинутого счетчика с историей операций и загрузку данных с внешнего API с использованием `useEffect`.

## Цели обучения

- Продвинутая работа с хуком `useState`
- Управление несколькими состояниями в компоненте
- Освоение хука `useEffect` для побочных эффектов
- Загрузка данных с внешнего API
- Работа с массивом зависимостей в `useEffect`
- Очистка эффектов (cleanup function)
- Обработка состояний загрузки и ошибок

## Задания

### Task 1 — Component with State: Advanced Counter

**Директория:** `task_1/`

Создание продвинутого счетчика с дополнительным функционалом: настраиваемый шаг изменения, история операций и статистика использования.

#### Компоненты:

**StepCounter** (`src/components/StepCounter.jsx`)
- Принимает props: `initialValue` и `step`
- Управляет тремя состояниями:
  - `count` — текущее значение счетчика
  - `history` — массив истории всех значений
  - `operationCount` — количество выполненных операций
- Кнопки увеличения/уменьшения на заданный шаг
- Кнопка сброса всех состояний
- Отображение последних 5 изменений

**Ключевые концепции:**
- Работа с несколькими состояниями
- Обновление состояния на основе предыдущего значения
- Работа с массивами в состоянии
- Использование props с значениями по умолчанию

**Запуск:**
```bash
cd Lab_3/task_1
pnpm install
pnpm dev
```

---

### Task 2 — Data Loading with useEffect

**Директория:** `task_2/`

Загрузка и отображение данных пользователей с внешнего API с использованием хука `useEffect`. Демонстрация управления жизненным циклом запросов и обработки различных состояний.

#### Компоненты:

**UserProfile** (`src/UserProfile.jsx`)
- Загрузка данных пользователя по ID
- Использование `useEffect` с зависимостями
- Три состояния: `user`, `loading`, `error`
- AbortController для отмены запросов
- Cleanup функция для предотвращения утечек памяти
- Обработка различных сценариев: загрузка, успех, ошибка

**DataLoadingApp** (`src/DataLoadingApp.jsx`)
- Главный компонент приложения
- Переключение между пользователями
- Кнопка для загрузки случайного пользователя
- Передача `userId` как prop

**Ключевые концепции:**
- Хук `useEffect` для побочных эффектов
- Массив зависимостей `[userId]`
- Cleanup функция и AbortController
- Асинхронные операции в useEffect
- Состояния загрузки (loading, error, success)

**Запуск:**
```bash
cd Lab_3/task_2
pnpm install
pnpm dev
```

## Структура проекта

```
Lab_3/
├── task_1/                  # Advanced Counter
│   ├── src/
│   │   ├── components/
│   │   │   ├── StepCounter.jsx    # Счетчик с шагом
│   │   │   └── CounterApp.jsx     # Обёртка приложения
│   │   └── App.jsx
│   ├── package.json
│   └── README.md
│
└── task_2/                  # Data Loading
    ├── src/
    │   ├── UserProfile.jsx         # Компонент профиля
    │   ├── DataLoadingApp.jsx      # Главный компонент
    │   └── App.jsx
    ├── package.json
    └── README.md
```

## Технологический стек

- **React** — библиотека для создания UI
- **JavaScript (JSX)** — язык программирования
- **Vite** — быстрый инструмент сборки
- **JSONPlaceholder API** — тестовый API для task 2
- **ESLint** — контроль качества кода

## Ключевые концепции

### 1. Множественные состояния

```jsx
const [count, setCount] = useState(0);
const [history, setHistory] = useState([]);
const [operationCount, setOperationCount] = useState(0);
```

### 2. Обновление состояния на основе предыдущего

```jsx
// Правильно
setHistory((prevHistory) => [...prevHistory, newValue]);
setOperationCount((prevCount) => prevCount + 1);

// Неправильно
setHistory([...history, newValue]); // Может привести к багам
```

### 3. Хук useEffect

```jsx
useEffect(() => {
  // Код эффекта
  fetchData();
  
  // Cleanup функция (опционально)
  return () => {
    cleanup();
  };
}, [dependency]); // Массив зависимостей
```

### 4. Загрузка данных с API

```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  const abortController = new AbortController();
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, { signal: abortController.signal });
      const data = await response.json();
      setData(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
  
  return () => abortController.abort();
}, [url]);
```

### 5. Props с значениями по умолчанию

```jsx
const StepCounter = ({ initialValue = 0, step = 1 }) => {
  // ...
};
```

## Полезные ресурсы

- [React useState Hook](https://react.dev/reference/react/useState)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)