# Chapter 2 notes

## Package.json 
    1. Package.json is a configuration for npm 
    2. npm is a package manager that add dependencies to our project 

## Bundler 
    1. Helps to minify, cleaned and packages the application code properly so that it can be pushed to production
    Example: webpack, parcel 

## -D in npm install 
    1. There are two types of dependencies. 
        a. dev dependencies - needed in dev mode
        b. normal dependencies -  needed in both dev and prod mode
    2. - D is telling npm to mark the package to be installed as dev dependency 
        npm install -D parcel

## Difference between tilde and carrot symbol

    1. Carrot upgrades minor version automatically and tilde upgrades major version 

## package.json and package-lock.json 

    1. package-lock.json keeps track of exact version that is being installed while package.json can have carrot or tilde 

## What is integrity inside parcel config (ssh)

    1. To avoid dependencies issues in production and development 

## Node Modules

    1. Contains the actual packages that are installed in the application

## Transitive dependencies 

    1. When a package is dependent on another package and that package on others and so on.

## Do we need to push node modules to git ?

    1. No - Node modules can be downloaded with package.json and package-lock.json using npm install 

## npx parcel index.html 
    1. npx means executing a package 
    2. npx parcel index.html means execute parcel with source file index.html - gets a development build for the app and hosts in localhost:1234 by default 

## CDN links are not a great way to include a package -  why ?

    1. Added network calls
    2. Version management becomes a problem


## Installing react and react dom 

    1. npm i react 
    2. npm i react-dom


## Debugging - Browser scripts cannot have imports or exports 

    1. This is happening because we are using import in app.js. And a normal browser script does not understand import.
    2. To fix this, we need to set the script type as module 

## Hot Module Replacement 

    1. Replaces the module code automatically in browser when a file is saved.
    2. Parcel uses an file watching algorithm that is written in C++ which is listening to changes in files.
    3. Whenever a file change occurs, it rebuilds the app 

## Parcel Cache 

    1. Parcel cache's the file and fetches and build from there when there are changes 

## Differential bundling 

    1. Parcel bundles for different/ older browsers 

## Tree Shaking
    1. Remove un used code

# Homework

- Consistent hashing
- Code Splitting

