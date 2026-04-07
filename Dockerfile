# Dockerfile

# 1) Сборка фронта
FROM node:20-alpine AS builder

WORKDIR /app

# зависимости + devDependencies (иначе vite не соберётся)
COPY package*.json ./
RUN npm ci

# исходники + сборка через tsc -b && vite build
COPY . .
RUN npm run build

# 2) Запуск через Vite preview / serve
FROM node:20-alpine

WORKDIR /app

# копируем собранный dist
COPY --from=builder /app/dist .

# устанавливаем serve глобально
RUN npm install -g serve

# порт, на который включен CMD
EXPOSE 5000

# vite preview запущен на 5000 порту
CMD ["serve", "-s", "-l", "5000"]