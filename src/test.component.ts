import styles from './test-style.scss';
export class TestWebComponent extends HTMLElement {

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
window.customElements.define("test-component", TestWebComponent);
