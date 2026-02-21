# Лабораторная работа 06 — Маршрутизация в React (React Router)

## Описание

Проект содержит реализацию лабораторных работ **6.1** и **6.2**.  
Цель — освоить клиентскую маршрутизацию в React с помощью React Router:

- Настройка маршрутов через `createBrowserRouter` и `RouterProvider`
- Общий layout с навигацией (`NavLink`, `Outlet`)
- Динамические маршруты (`/courses/:id`)
- Загрузка данных до отрисовки страницы (loaders) и `useLoaderData`
- Работа с query-параметрами (`useSearchParams`) и обработка ошибок (`errorElement`)

Проект разработан с использованием Vite, React и TypeScript.

---

## Используемые технологии

- React  
- React Router DOM (v6)  
- TypeScript  
- Vite  
- Node.js  
- npm  

---

## Структура проекта

### 6.1 — базовая маршрутизация

```
6.1/
├── index.html
├── src/
│   ├── main.tsx          # createBrowserRouter, RouterProvider
│   ├── index.css
│   ├── Layout.tsx        # навигация (NavLink), Outlet
│   └── pages/
│       ├── Home.tsx
│       ├── Courses.tsx   # список курсов (статичный)
│       ├── About.tsx
│       └── NotFound.tsx  # 404, Link на главную
```

### 6.2 — динамические маршруты и loaders

```
6.2/
├── index.html
├── src/
│   ├── main.tsx          # маршрут courses/:id с loader и errorElement
│   ├── index.css
│   ├── data.ts           # данные курсов, getCourseById
│   ├── Layout.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── Courses.tsx   # сортировка через useSearchParams, Link на курс
│       ├── CourseDetail.tsx  # useLoaderData, useParams
│       ├── About.tsx
│       └── NotFound.tsx
```

---

## Лабораторная работа 6.1 — базовая маршрутизация

### Реализованные функции

- Маршрутизация через `createBrowserRouter`: корневой маршрут `/` с `Layout`, дочерние `index` (Home), `courses`, `about`, `*` (NotFound).
- Компонент **Layout**: навигация с `NavLink` (to, end), стили для активной ссылки, вывод дочернего контента через `Outlet`, общий footer.
- Страницы **Home**, **Courses** (простой список), **About**, **NotFound** с ссылкой «Back home» через `Link`.

### Ключевые концепции

- `RouterProvider` и дерево маршрутов.
- Вложенные маршруты: родитель с `element: <Layout />`, дети рендерятся в `<Outlet />`.
- `NavLink` и свойство `isActive` для подсветки текущей страницы.
- Маршрут `path: "*"` для обработки несуществующих путей (404).

---

## Лабораторная работа 6.2 — динамические маршруты и loaders

### Реализованные функции

- Динамический маршрут **courses/:id** с компонентом `CourseDetail`.
- **Loader**: асинхронная загрузка курса по `params.id`, при отсутствии курса — `throw new Error()`; данные доступны в компоненте через `useLoaderData()`.
- **errorElement** для маршрута курса: отображение сообщения об ошибке при неверном id.
- Страница **Courses**: список курсов с сортировкой по названию; порядок хранится в URL через `useSearchParams` (например `?sort=asc` / `?sort=desc`), переход на страницу курса через `Link to={/courses/${id}}`.
- Файл **data.ts**: тип `Course`, массив `courses`, функция `getCourseById(id)`.

### Ключевые концепции

- Динамический сегмент `:id` и получение значения в компоненте через `useParams()`.
- Loader выполняется до рендера страницы; результат доступен через `useLoaderData()`.
- При `throw` в loader отображается `errorElement` маршрута.
- `useSearchParams()` для чтения и изменения query-параметров без перезагрузки страницы.
- Импорт типов: `import type { Course } from "../data"` для интерфейсов, чтобы не требовать runtime-экспорт.

---

## Как запустить проект

- **6.1** — в папке `6.1`:
  - `npm install`
  - `npm run dev`

- **6.2** — в папке `6.2`:
  - `npm install`
  - `npm run dev`

Сборка: `npm run build` (в соответствующей папке).
