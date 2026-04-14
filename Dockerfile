# Dockerfile
# Стадия 1: Сборка приложения
FROM node:22-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
# Устанавливаем зависимости (чистая установка для продакшена)
RUN npm ci --only=production=false

# Копируем исходный код
COPY . .

# Собираем проект. Результат будет в папке /app/dist
RUN npm run build

# Стадия 2: Запуск на веб-сервере Nginx
FROM nginx:alpine

# Копируем собранные файлы из стадии builder в папку, которую раздает Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфигурацию Nginx (создадим ее ниже)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Стартуем Nginx в foreground режиме (чтобы контейнер не выключался)
CMD ["nginx", "-g", "daemon off;"]