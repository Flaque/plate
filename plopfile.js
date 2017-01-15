'use strict'

module.exports = function (plop) {

  plop.setGenerator('component', {
    description: "Generate a new component",
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the new component?',
        validate: (value) => {
          if (/.+/.test(value.trim())) { return true }
          return 'Component name is required.'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{componentName}}/{{componentName}}.jsx',
        templateFile: 'plopTemplates/component/component.jsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/{{componentName}}.scss',
        templateFile: 'plopTemplates/component/component.scss.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: 'src/components/{{componentName}}/{{componentName}}.spec.js',
        templateFile: 'plopTemplates/component/component.spec.hbs',
        abortOnFail: true
      }
    ],
  })
}
