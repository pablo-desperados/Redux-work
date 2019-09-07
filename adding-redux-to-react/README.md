# Getting started

To get this app to run locally, please execute the following commands on your terminal:
```
yarn install
yarn start
```
***

If you run into any problems, especifically with the ```node-sass``` module being missing, delete node_modules and run the following:

```
npm install
npm install node-sass
```
# Why I made this
This is my first time using Redux inside a React App. I created a Store, a middleware function, and the neccesary setup to use Redux independently on the different React components.

I this app Redux is being injected into the components to avoid passing props from the parent component to it's children.
