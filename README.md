# Basic Typescript Template
Basic typescript template with dev server. Perfect for creating webcomonents and 
basic libraries

## Getting started



* `git clone https://github.com/klyngen/typescript-template your-project-name`
* `npm install`
* `npm start`
* `npm test`


## Adding eslint

Running the following command adds eslint to the project
`npm install -D eslint; npx eslint --init`


## Basic component development
This template is to simplify creating projects using LIT-element and adds a simple style-loader to enable writing styles outside of the component

```typescript
// Import the styles
import styles from './test-style.scss';
export class TestWebComponent extends HTMLElement {

  // Add styles to the component
  static styles = [styles];

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <h1>Typescript starter</h1>
      <ul>
        <li>Tip #1: run *npm run test*</li>
        <li>Tip #2: run *install lit*</li>
      </ul>
    `;
  }
}

```

## Make component generation easier with `lit-gen`
[Lit generator repo](https://github.com/klyngen/lit-gen/blob/main/package.json)
Install lit-gen using the following command
`npm install -g lit-generator`

And your are able to create scaffolding for components with styles using a simple:
`lit-gen component my-awesome-web-component`

