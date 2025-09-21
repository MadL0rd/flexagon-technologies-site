# Flexagon Technologies

Витрина IT-студии Flexagon Technologies на Astro.

## Локальный запуск

```bash
npm install
npm run dev
```

Сборка статической версии выполняется командой:

```bash
npm run build
```

## Контент

- Главная страница: `src/content/home/home.md`
- Блог: Markdown-файлы в `src/content/blog`

Коллекции описаны в `src/content/config.ts`, что обеспечивает типизацию данных в шаблонах Astro.

## Деплой

GitHub Actions (`.github/workflows/deploy.yml`) собирает проект и выкладывает его на GitHub Pages при каждом пуше в ветку `main`.
