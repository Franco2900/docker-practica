# Usa la imagen más ligera de Node como imagen base
FROM node:alpine  

# Solo informa a otras personas que se va a usar el puerto 500
EXPOSE 500

# Copia los archivos del proyecto en la carpeta app (la ubicación usada en el primer parámetro depende del atributo context en el archivo docker-compose)
COPY ./ /app

# Establece el directorio de trabajo dentro del contenedor. 
# Todas las instrucciones siguientes asumen que se va a trabajar dentro de dicha carpeta
WORKDIR /app      

# Comando de consola que indica a Node ejecutar el archivo app.js
CMD ["node", "app.js"]