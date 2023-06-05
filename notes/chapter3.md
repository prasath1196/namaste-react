# Chapter 3 notes 

## npm scripts
    1. Refer scripts section in package.json 
    2. npm run start and npm start are same - but this is available only for the keyword "start"

## React Elements
    1. They are kind of equivalent to dom element 
    2. A react element is not an html element. React.createElement returns an object 
    3. When the react element is rendered to the DOM, then it becomes an HTML element

## JSX
    1. JSX is a javascript syntax which makes it easier to create react elements 
    2. JSX is convention where we merge HTML and JS together
    3. JSX is not html inside javascript. JSX is not html. JSX has a html like syntax.
    4. Follows camel case for attributes
    5. JSX allows us to write 
    6. JSX takes care of injection attack by sanitizing the data, by preventing cross site scripting

## ECMA Script - ES6 
    1. This is the script browser's understand (Javascript engine) - not only ES6 but also other versions of ECMA Script 

## Transpilation
    1. When we write JSX code, it gets transpiled to javascript syntax
    2. This transpilation is done usually by package like babel 

## Babel 
    1. Babel is a javascript compile/transpiler that can take JSX syntax and convert it to ES6 syntax/React Syntax
    2. Babel also transpile ES6 syntax to pure vanilla javascript sytnax 

## React components
    1. Everything in react is a component 
    2. Class Based Components and Functional Components  -  types of components
    3. Class Based Components are outdated 

## React Functional Components 
    1. They are just normal javascript function which return a piece of JSX element i.e a react element 
    2. React convention to name components is to start with capital letter s

## Component Composition 
    1. Putting a component into another component 

## React Fragments
    1. To workaround the limitation of jsx, where a JSX can have only one parent, we can use react Fragment
    2. It behaves like a empty tag

### <> - Empty tags - Another representation of empty tag
    1. To workaround the limitation of jsx, where a JSX can have only one parent, we can use <> tag

# Homework

- Explore various tags in ES6
- Can we have multiple roots
- Can we have an empty tag inside empty tag
