# Generating new e2e steps

## Instructions

- Place new feature files inside `cypress/.steps`
- Run the command `yarn generate:steps`
- Move the generated folder into `cypress/integration`
- Move the feature file into `cypress/integration`
- Rename the newly generated file to `{feature-name}.spec.js`
  - eg `list-customers_steps_spec.js` -> `list-customers.spec.js`
- Optionally, common steps for your feature should be placed in `cypress/integration/common` folder and named  `{feature-name}.js`
  - eg `/cypress/integration/common/list-customers/list-customers.js`