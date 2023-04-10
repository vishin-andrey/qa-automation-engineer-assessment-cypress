# QA Automation Engineer Assessment
## Task 2: Write an end-to-end automation script using Cypress
### Engineer Name: Andrey Vishin

#### Case Steps:
1. Load the page: https://www.wnba.com/standings/
2. Set the season to 2018
3. Assert that the number of table records is 12
4. Iterate over the table and print the team names in column 2 using cypress log API

#### Main assessment file: 
- [This file](cypress/e2e/assessment.cy.js) includes the end-to-end autotest, developed for the assessment.

#### Note:
- Snippets in the [e2e.js](cypress/support/e2e.js) file were added to hide out-of-scope exceptions and to hide XHR requests from the command log
