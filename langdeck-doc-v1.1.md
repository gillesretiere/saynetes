# Langdeck Documentation

## Installation
### Installation Node.js et npm
```
sudo apt update
sudo apt upgrade
sudo apt install nodejs npm -y
```


### Tailwind CSS

The installation of TailwindCSS v3 and v4 is different. You were expecting the v3 installation, but v4 is the new latest version. For v3 installation, use:
(source : [https://stackoverflow.com/questions/79383705/cannot-build-frontend-using-vite-tailwindcss-with-postcss](url))

```
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install postcss@latest
```

### Initialisation (optionnel)
Il faut maintenant exécuter `npm i`, une version courte de `npm install` à l'intérieur du répertoire où se trouve package.json. Cela permet de générer le dossier node_modules.
```
npm i
```

### Préparation de l'environnement sur un autre port HTTP
Se connecter au VPS 2 et aller dans le dossier src du projet.
Par défaut, le port 3000 est utilisé. Si jamais il est nécessaire d'utiliser un autre port, il est probable que le port en question n'est pas ouvert par le système. Pour déclarer au système l'ouverture d'un port (par exemple le port 3001) : 
```
sudo ufw status
sudo ufw allow 3001

```
- Lancement de npm sur un autre port 
```
PORT=3001 npm start
```

 

### Lancement de react-script
```
cd ~/projects/venv/langdeck/src/frontend
nohup npm start >nohup_react.out 2>nohup_react.err &
echo $! > save_pid.txt

```

### Arrêt de react-script
```
cat save_pid.txt | xargs kill -9

```

En cas de processus zombie persistant sur le port 3000 : 
```
npx kill-port 3000
```

## Compilation
- Compilation et création d'un Build React Lorsque le projet est stable et sans erreurs, il est temps de le déployer sur un serveur. Pour cela, il faut d'abord générer un build du projet, c'est-à-dire une arborescence de fichiers binaires, ainsi que d'autres fichiers statiques, essentiels au projet.

`npm run build`

![][image1]

## Déploiement VPS d'intégration (Debian 11)
Ce VPS héberge hammer-marteau.com
```console
ssh -Y gre@vps-993f2b9f.vps.ovh.net
```
### Mise à jour de la webapp sur Linux
La webapp est déployée dans le répertoire '/var/www/html'.
Ce répertoire est attribué à l'utilisateur 'www-data'.
Pour pouvoir transférer les fichiers depuis Filezilla, qui n'accepte pas les commandes sudo, il faut changer les accès : 
```console
sudo chgrp gre /var/www/html
sudo chown gre /var/www/html
sudo chmod -R 755 /var/www/html
```
Une fois les transferts effectués, penser à rétablir les droits initiaux : 
```zsh
sudo chgrp www-data /var/www/html
sudo chown www-data /var/www/html
```
### Transfert des fichiers par SFTP
- Protocole : SFTP
- Hôte : 51.91.8.112
- Type d'authentification : normale
- Utilisateur : gre

## Déploiement VPS de PROD (Debian 12)
Ce VPS héberge saynetes.fr
```console
ssh -Y langdeck@vps-347cc0b1.vps.ovh.net
```
### Mise à jour de la webapp sur Linux
La webapp est déployée dans le répertoire '/var/www/html'.
Ce répertoire est attribué à l'utilisateur 'www-data'.
Pour pouvoir transférer les fichiers depuis Filezilla, qui n'accepte pas les commandes sudo, il faut changer les accès : 
```console
sudo chgrp langdeck /var/www/html
sudo chown langdeck /var/www/html
sudo chmod -R 755 /var/www/html

### Transfert des fichiers
Utiliser Filezilla
Copier le contenu du dossier build (sauf favicon.ico) dans /var/www/html
```
Une fois les transferts effectués, penser à rétablir les droits initiaux : 
```zsh
sudo chgrp www-data /var/www/html
sudo chown www-data /var/www/html
```
### Transfert des fichiers par SFTP
- Protocole : SFTP
- Hôte : 51.195.103.17
- Type d'authentification : normale
- Utilisateur : langdeck


## Développement

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAYAAABRGWr/AAAET0lEQVR4Xu3d3aqVVRTG8Qe9oD6s7iCR8hqMxDI/0IIgEpIOg65AKIgOvYeIyjqIKOsqOvDIIPpOJ4LKM5bLPddac8wxxnx+8D+R/b7vmPPdB669134XICIiIiIiIiIiIiIiIiIiD52737f3+7+j9vXtOCnqPdibPqKPIOlchb2RM7oCCetv2BsWoTaXBHAR9uZE7gLEHd+EjMlgX8Jueua+gxzcGdiNrlT7T7ns6TnYja3cS5Cd3IDdzBW6CTmy47AbuGJtH2SLX2A3beVuQzbijVKPksfw5ijb8k7Cbop6cqexMN4M9fSWo1c8+7XUKyVevOqvvFdhF6127xQK48Wq/SuJF6kOVym8OHX4SvgRdmHq8P2M5I7BLkqNK/VLal6MGl9Kn8MuRI3vUyTzIuwilF8nkAgPr/xL4Tzs4Mq/s0iAh85U8/GGf89aaF/DDpyh32Hx12TsFgLjYbO0idfTF0YXEg+ZpW3ehf36jIXDA0bvHxzN27DHZiuUS7ADRq/Hm7DHZ+otBMLDRa8XH5+xMHiwqP2HfnyOrIUQ9YlL3MrfKK2/EAAPFbVefHyFpsrySqEXH1+ly5iIh4lYLz6+WtPwINHq9S/sOao1DQ8SqV7th3R8jopNcR12kCj14uMrdw0T8BBR6tVeUvI5queOB4hQrz9gz7FC7niA2fXi41fKHQ8ws16/wZ5jpdzxALPqdRf2HKvl6g3YAWbUi49fNdc3c7dnzvMA3vW6A3uOVfsGjvji3vX6FfYcq+eGL+xZRbxGj9zwhb2qitfpkRu+sEeV8Vo9csMXHl11vF6P3PCFR7YCXrNHbvjCo6uO1+uRG76wR5XxWj1ywxf2qipep0du+MKeVcRr9MgNX9i7XvoJrs2NfjeUu/YcHTf6rXPuXoczHmBWvfR+lgl4gJn10jvlnPEAs+vFx6+UOx4gQr307n4nPECUeunvhhx8ADtElHrx8ZV7H5PwIJHqpb91HowHiVYvPUVhIB4kYr34+GpNcwV2mIj14uOrdBGT8UBR68XHV2g6Pa0yRyGeVtnwYFFb+RsmDB4ser34+IyFcQF2uOj1yP7s/jZ/KDxg9I76qSDvwB6brXB4wCxto88bGoiHzNIm+iSzwb6CHTZDVT8j0fU5LLvggTPV6NNXHZ2DHVr59xqS4MGVf2k8Czu88ut5JPMZ7CLU+D5BUrwQNb60jsEuRo3rOJL7AXZR6vDdRhG8MHX4SuHFqcNVEi9S7V9Zp2AXq3bvJBbAi1b9LaO9xOPFq6OX/iXyLngT1NNb1suwm6Ge3CsQsynKJo/hzVGPkg2+h92olfsJspV++figJV/x7OoG7Aau0E3ITp6B3czKvQDZ2xnYja1UuD8vreAL2I3O3C3IcLzpGRNn52FvQuTavBJA1Icf/wkJ6zLsDZvRJUg6V2Fv5Ig+hJR1Fg+eMsA3fVvt690/2ElEREREREREREREREREJKx7ZLEq/S1DM2sAAAAASUVORK5CYII=>

## Configuration avancée
### Audios
#### Enregistrement avec Adobe Audition
#### Suppression des bruits de fond
#### Gestion des fichiers dans Google Drive

### Images et illustrations
#### Filtres Photoshop

### Pipeline d'alimentation des données

#### Partie Airtable

#### Scripts Python

#### Partie Google Sheets

#### Partie MongoDB

### Envoi de messages avec Resend
#### Configuration
##### Paramétrage DNS Zone dans OVH
La configuration des diverses entrées du domaine hammer-marteau.com doit être adaptée pour une autoriser Resend à envoyer des emails.
Ces 3 entrées doivent être créées (SPF TXT, SPF MX, DKIM TXT) : 

```console
send.hammer-marteau.com. 0	TXT	"v=spf1 include:amazonses.com ~all"
send.hammer-marteau.com. 0	MX	10 feedback-smtp.eu-west-1.amazonses.com.
resend._domainkey.hammer-marteau.com. 0	TXT	"p=MIG...QAB"
```
Ensuite, il faire une vérification dans Resend pour s'assurer que les entrées sont valides et opérationnelles.
https://resend.com/domains/e5b8398c-ff9f-430b-b27d-1f958931b4f5


## Troubleshooting
### npm : problème de résolution de module
Lorsque vous travaillez sur des applications React, rencontrer des erreurs de résolution de module peut être frustrant. Une erreur courante est :

**'Cannot find module 'ajv/dist/compile/codegen'**

Cette erreur se produit généralement en raison de paquets manquants ou non appariés dans votre répertoire node_modules. Voici un guide étape par étape pour résoudre et résoudre efficacement ce problème.

```
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
npm install ajv@latest ajv-keywords@latest
```

Source : [https://dev.to/vuyokazimkane/quick-guide-resolving-cannot-find-module-ajvdistcompilecodegen-in-react-4fbc](url)


## Outils
### Commandes utiles sous Linux
- Recherche d'un pattern dans les sources

`grep -Ril "some pattern here" .`

