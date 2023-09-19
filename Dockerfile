# selecionando a imagem base da nossa imagem
FROM node:alpine as build

# selecionar uma pasta de trabalho
WORKDIR /app

# copiar os arquivos do meu projeto para dentro da imagem
COPY . .

#baixar as deps
RUN npm install

# construir o build da aplicacao front-end (/dist)
RUN npm run build

# seleciona a imagem base do nginx
FROM nginx:alpine

# copiar os arquivos de build do vite e colocar dentro da pasta nginx
COPY --from=build /app/dist /usr/share/nginx/html

# expor uma porta
EXPOSE 80

# inicie o servidor => executado no docker run
CMD [ "nginx", "-g", "daemon off;" ];

