# SHMU Test task (EMG Visualization)

Веб-приложение для визуализации данных мышечной активности (EMG), загружаемых из файлов формата `.xlsx`. 

---

## Технологический стек

* **Frontend**: React 18 (TypeScript)
* **Сборка**: Vite
* **State Management & API**: Redux Toolkit + RTK Query
* **Графики**: ApexCharts
* **Стилизация**: SCSS
* **Линтинг**: ESLint

---

## Установка и запуск

### 1. Установка зависимостей
Убедитесь, что у вас установлена Node.js (рекомендуется v18+).
```bash
npm install
```

### 2. Настройка окружения
Для работы необходимо создать `.env.local` в корне проектв и указать путь для работы с API
1. Создаем файл `.env.local`.
2. Добавляем переменную:
```.env.local
VITE_API_URL=http://localhost:8000/api/
```

### 3. Запуск приложения
```bash
npm run dev
```

---

## Параллельная работа с Backend
* Backend доступен по адресу: http://localhost:8000
* Frontend доступен по адресу: http://localhost:5173


