-- BEGIN TRANSACTION;
DROP TABLE IF EXISTS article CASCADE;
DROP TABLE IF EXISTS commentaire CASCADE;
DROP TABLE IF EXISTS auteur CASCADE ;
DROP TABLE IF EXISTS categorie CASCADE ;
DROP TABLE IF EXISTS lienArticleCategorie CASCADE ;

CREATE TABLE auteur (
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   minibio VARCHAR(250),
   id SERIAL PRIMARY KEY
);

CREATE TABLE article (
   titre VARCHAR(50) NOT NULL,
   contenu VARCHAR(500) NOT NULL,
   auteur_id SMALLINT REFERENCES auteur(id) ON UPDATE CASCADE ON DELETE CASCADE, 
	-- si mon auteur.id changes => apply change on article.auteur_id, s'il disparait => supprimer l'article lié (partant du postulat qu'un article doit tjr avoir un auteur)
   date DATE NOT NULL,
   publie BOOLEAN DEFAULT false,
   id SERIAL PRIMARY KEY
);

CREATE TABLE commentaire (
   titre VARCHAR(50) NOT NULL,
   article_id SMALLINT REFERENCES article(id) ON UPDATE CASCADE ON DELETE CASCADE,
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50) NOT NULL,
   date DATE NOT NULL,
   id SERIAL PRIMARY KEY
);

CREATE TABLE categorie (
   nom VARCHAR(50) NOT NULL,
   description VARCHAR(250) NOT NULL,
   id SERIAL PRIMARY KEY
);

CREATE TABLE lienArticleCategorie (
   article_id SMALLINT REFERENCES article(id) ON UPDATE CASCADE ON DELETE CASCADE,
   categorie_id SMALLINT REFERENCES categorie(id) ON UPDATE CASCADE ON DELETE CASCADE,
   id SERIAL PRIMARY KEY
);

