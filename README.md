# Librairie de composants sur Nextjs


## Installation
Pour installer le projet, il suffit de cloner le repo dans le dossier de votre choix.
Vous trouverez 3 dossiers :

 1. Une application Nextjs de test
 2. Le package buildé
 3. Le dossier src (package avant build)

Pour tester vos composants en temps réel :

 1. Dans le dossier src, dist et demo, initialisez avec ***npm***

 2. Rendez vous dans le dossier src :
	`cd src`
	`npm run watch`

La dernière ligne de commande permet de re-compiler le package à chaque changement dans un fichier .js ou .css. Ainsi, le package installé en local dans l'application Nextjs sera également mis à jour à chaque changement.

 3. Ouvrez une nouvelle instance de console et rendez vous dans le dossier demo :
 `cd ..`
 `cd demo`
 `npm run dev`
Il suffit à présent de modifier les fichiers de styles dans src pour voir le changement en tant réel dans le navigateur et ainsi faire vos tests.

## Choix d'outils
**ui-library-exemple** est pour le moment initialisé via ***npm***. La principale raison se trouve dans le problème de cache imposé par ***yarn***. Pour avoir un changement en temps réel dans le navigateur, il fallait désinstaller le package installé en local, supprimer le cache et tout réinstaller. La solution pour utiliser ***yarn*** et obtenir un résultat satisfaisant n'est pas encore trouvée (même en utilisant **[yarn cache clean](https://yarnpkg.com/cli/cache/clean)**).

### Sass
**ui-library-exemple**  passe par [le pré-processeur SASS](https://sass-lang.com/). Chaque composant dispose de son fichier .scss qui sont importés dans **index.scss** puis ignorés lors du build. Une fois le build effectué, le fichier **index.scss** sera converti en un seul et unique fichier .css qui comprend la totalité du code css (La compilation se fait automatiquement lors de les modifications sont sauvegardées sur un fichier .scss).

Le choix d'utiliser SASS s'est fait pour deux raisons :

 - La première est de partir à la découverte d'une technologie de stylisation populaire et modulable. Grâce à SASS, on peut utiliser des variables, des boucles, des conditions, gérer simplement la nidification et traiter l'import de manière efficace.

- La seconde est de garantir le plus facilement possible l'import du css d'un package dans un projet Nextjs tout en gardant la découpe des fichiers de style suivant les composants. Ainsi, il suffit d'importer uniquement le fichier css compilé par SASS (qui comprends tous les classes du projet) et l'intégrer dans le fichier **_app.js** du projet Nextjs.
On évite ici le seul et unique fichier css qui comprends la totalité du style des divers composants. Il en ressort un code plus clair et facile à maintenir.

À noter que nous utilisons ici des fichiers *.scss* au lieu de *.sass* afin de conserver une syntaxe déjà maitrisée en utilisant les accolades et non l'indentation.

## Difficultés et solutions

 1. **Créer un package fonctionnel sur une application React**
 Après avoir réuni de nombreuses sources afin de créer un package fonctionnel sur une app React, j'ai suivi [ce tutoriel](https://www.telerik.com/blogs/ultimate-guide-to-building-ui-component-library-part-2-environment). Le rédacteur donne les réponses claires afin créer de simples composants réutilisables. C'est ici que j'ai rencontré le problème de cache avec ***yarn***.

 2. **Créer un package fonctionnel sur une application Next**
 Importer le package locale sur une application React s'est fait sans difficulté. Cependant, dès qu'il s'agit d'une application Next, tout ne se gère pas facilement en locale. Je me suis retrouvée face à une erreur majeure lors du rechargement de la page :

> Module not found: "react"

J'ai trouvé quelques piste sur [cette issue github](https://github.com/vercel/next.js/issues/20266). C'est la [dernière solution](https://github.com/vercel/next.js/issues/20266#issuecomment-808156359) proposée qui a fonctionné pour moi, en couplant avec l'initialisation d'un dossier ***node_module*** dans le dossier **dist**.

 3. **Automatiser le build**
 Le [tutoriel](https://www.telerik.com/blogs/ultimate-guide-to-building-ui-component-library-part-2-environment) de création de package donne les base d'automatisation du build à chaque changement. Mais il me manquait l'automatisation du lancement du build pour **SASS**. En décomposant la ligne de script proposée dans le tutoriel, j'ai pu mettre en place mon propre script pour gérer le build de **SASS** vers du css.