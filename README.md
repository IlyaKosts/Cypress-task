# Cypress-task-T
 
## Installing cypress

   First of all, in order to run these tests you need to install cypress. You can
   do it by using npm:
```bash
npm install cypress --save-dev
```
The process should look something like this:

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

Then, you will need to install such plugins:
```bash
npm i cypress-real-events
```
and
```bash
npm install -D cypress-xpath
```
After all these steps, you will need to add configurations to "../support/e2e.js" file:

```bash
require('cypress-xpath')
```
```bash
import "cypress-real-events/support"
```
Now, finally, we have everything we need to run tests in cypress.

## Run our tests

We can execute tests in cypress by two ways: from command line and from test runner.
For execution from the command line, you should run:
```bash
./node_modules/.bin/cypress run
```
or
```bash
npx cypress run
```

For execution from from the Test Runner(the best option I think, at least because of the very comfortable GUI), you should run:
```bash
./node_modules/.bin/cypress open
```
or
```bash
npx cypress open
```

All information was taken from the resource: "https://www.cypress.io/".
