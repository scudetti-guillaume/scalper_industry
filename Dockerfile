# Utilisez une image de base avec Node.js préinstallé
# Utilisez une image Node.js plus récente
FROM node:16-alpine

# Créez et définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez les fichiers nécessaires pour l'installation des dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez tous les fichiers de l'application (y compris les fichiers générés)
COPY . .

# Générez les fichiers statiques pour l'application Nuxt.js
RUN npm run generate

# Exposez le port sur lequel l'application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]