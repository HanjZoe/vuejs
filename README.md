# Тестовое задание на изучения VueJS

| Заголовок 1 | 
| ----------- | 
| [Использованные технологии ](#title1)   | 
| [Запуск приложения без контененризации](#title2)    | 
| [Контенеризация в Docker](#title3)    | 
| [Использования приложения](#title4)    | 



## <a id="title1">Использованные технологии </a>

---
    
    - Vue 3
    - VueX
    - Vue-router


## <a id="title2">Запуск приложения без контейнеризации </a>

---

### Необходимый стек технологий 
 
    - Nodejs
    - npm

### Установка зависимостей проекта
```
npm install
```

### Зарпуск локального сервера бля разработки
```
npm run serve
```

### Компиляция и минификация для продакшена 
```
npm run build
```

## <a id="title3">Контенеризация в Docker </a>

---
    
#### В директории _docker лежит Dockerfile с простой, не требующий конфигурации HTTP-сервер
#### Описание содержимого Dockerfile

#### FROM node:lts-alpine  - исходный image который мы берем за основу (тут уменьшенная по размеру версия nodejs)

#### RUN npm install -g http-server - устанавливаем простой http-сервер

#### WORKDIR /app - назначаем рабочую директорию внутри контейнера

#### COPY package*.json ./ - копируем package.json и package-lock.json 

#### RUN npm install - устанавливаем зависимости проекта

#### COPY . . - копируем содержимое текущего каталога в рабочий каталог контейнера 

#### RUN npm run build - собираем приложение для продакшена с минификацией

#### EXPOSE 8080 - выдаем порт контейнеру 
#### CMD [ "http-server", "dist" ] - выполняем команды запуска http-сервера


#### Этот докер файл достаточно переместить в корневую директорию проекта и выполнить команду 
````
docker build . -t желаемое_имя:желаемый_тег
````
#### Соберестся docker images который можно запустить ввиде контейнера 
````
docker run имя_image/id_image
````

#### В той же директории лежать файлы docker-compose.yml .env и директория build

#### В build находится Dockerfile 

#### В файле .env нужно указать путь к приложению 

#### Описание содержимого docker-compose.yml
 
version: '3.3' -  версия 

networks: - описание сети нужна для запуска нескольких контейнеров в одной сети 
lifeforhost:
name: lifeforhost

services: - набор сервисов 
nodejs:
container_name: node - имя будущего контейнера 
restart: always - что будет делать контейнер при перезагрузке в данном случае включатся всегда  
build: ./build/ - ссылка на Dockerfile
volumes: 
- ${project_dir}:/app - проброс проекта в контейнер  
command: sh -c "npm install && npm run build" - выполнения команд установка зависимостей и сборка приложение для продакшена с минификацией
networks:
- lifeforhost - добавляем контейнер в сеть 
#### Для сборки
````
docker compose build
````
#### Для включения
````
docker compose up
````
## <a id="title4">Использования приложения</a>

---
### Приложения состоит технический из 1 страницы и все посты хранятся в глобальном хранилище вселдствии чего при перезагрузки страницы они пропадают 

### Есть возможно создавать новые посты редактировать удалять и смотреть 
### Поиск ищет совпадения как в заголовке статьи, так и не посредственно и в "теле" статьи

