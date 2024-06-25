<h1>Conduit QA Assessment by Tinika Pasinetti</h1>

This automation suite contains UI and API tests created using Cypress Automation framework with Cucumber BDD Framework for ease of reading UI tests.
It follows the Page Object Model where each screen has a POM file and a step definition file for its elements and actions.

<h2>To run using terminal</h2>
<ol>
  <li>Clone the repository</li>
  <li>Open terminal</li>
  <li>Navigate to the project folder</li>
</ol>
<h3>Run all API tests</h3>

```
npx cypress run --spec "cypress/e2e/api_tests/**.js
```

<h3>Run all UI tests</h3>

```
npx cypress run --spec "cypress/e2e/features/**.js
```

<h3>Run entire suite of UI and API tests</h3>

```
npx cypress run
```

</br>

<h2>To run using Cypress runner in browser</h2>
<ol>
  <li>Clone the repository</li>
  <li>Open the repository in VS Code</li>
  <li>Run: 
    ```
    npm install
    ``` 
    to install dependencies</li>
  <li>Open terminal within the project root folder</li>
  <li>Run: 'npx cypress open' to open the Cypress Runner</li>
  <li>Select E2E Testing, select your desired browser, and click 'Start E2E Testing in {browser}</li>
  <li>On the spec screen, select which spec you want to run and it'll open up and run automatically</li>

