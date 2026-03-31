# Васильев Станислав - Сайт-визитка

Пиксельный сайт-визитка разработчика в стиле ретро-игр 90-х годов.

## 🎮 Особенности дизайна

- **Левая половина** - тематика Lineage 2 с анимированным персонажем
- **Правая половина** - космическая тематика Роскосмоса со сверкающими звёздами
- **Центральная панель** - информация о разработчике, стек технологий и проекты

## ✨ Анимации

### Персонаж (Lineage 2):
- Дыхание (постоянно)
- Осмотр по сторонам
- Поправка шляпы (каждые 10-15 секунд)
- Отряхивание от пыли (каждые 15-20 секунд)
- Свечение меча

### Космос (Роскосмос):
- Мерцающие звёзды
- Падающая звезда каждые 20 секунд
- Вращающиеся орбитальные кольца
- Орбiting спутник

## 🛠 Технологии

- **Python** - основной язык
- **FastAPI** - веб-фреймворк
- **PostgreSQL** - база данных
- **Docker** - контейнеризация
- **React + TypeScript** - фронтенд

## 📁 Структура проекта

```
├── src/
│   ├── components/
│   │   └── sections/
│   │       ├── LineageSide.tsx    # Левая половина (Lineage 2)
│   │       ├── SpaceSide.tsx      # Правая половина (Роскосмос)
│   │       └── CenterInfo.tsx     # Центральная панель
│   ├── App.tsx                    # Главный компонент
│   └── index.css                  # Стили
├── public/
│   └── images/
│       └── character.png          # Изображение персонажа
└── dist/                          # Сборка для деплоя
```

## 🚀 Как добавить новый проект

Откройте файл `src/components/sections/CenterInfo.tsx` и добавьте проект в массив `projects`:

```typescript
const projects: Project[] = [
  // ... существующие проекты
  {
    id: 6,  // следующий ID
    name: "Название проекта",
    description: "Описание проекта",
    tech: ["Python", "FastAPI", "React"],  // используемые технологии
    link: "https://github.com/..."  // ссылка (опционально)
  },
];
```

## 📱 Контакты

- **Телефон:** +7 (915) 105-26-80
- **Email:** uperman5@yandex.ru

## 🌐 Деплой на GitHub Pages

### 1. Создайте репозиторий на GitHub

### 2. Загрузите файлы

```bash
# Инициализируйте git
git init
git add .
git commit -m "Initial commit"

# Привяжите к удалённому репозиторию
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### 3. Настройте GitHub Pages

1. Перейдите в **Settings** репозитория
2. Выберите раздел **Pages** (слева)
3. В разделе **Source** выберите **Deploy from a branch**
4. Выберите ветку `main` и папку `/root`
5. Нажмите **Save**

### 4. Альтернативный способ (GitHub Actions)

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Copy images
        run: cp -r public/images dist/
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 5. Локальная сборка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Копирование изображений
npm run build && cp -r public/images dist/
```

## 📄 Лицензия

© 2024 Васильев Станислав. Все права защищены.
