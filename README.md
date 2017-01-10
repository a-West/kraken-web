Solution for Rally-28 home page using AngularJS component architecture.   
    
AngularJS1.5 (Components)
Angular Material  
ES6  
Webpack with babel
How to setup:
  
1.) drive:\Rally-28> npm install (this will install all the node packages) 
2.) drive:\Rally-28> npm run local (this will bundle the necessary assets and serve the files from localhost:8080) 
3.) drive:\Rally-28> npm run dev (this will compile the files in a minified file: /public/js/app.bundle.js)
n dev (this will compile and run a small web server with webpack watching for changes)
   
Test
npm run unit-tests (karma loads all files using unit.conf.js matching pattern ./specs/unit/**/*.spec.js)
npm run integration-tests (karma loads all files using integration.conf.js matching pattern ./specs/integration/**/*.spec.js)      
    
