import "./test.component";

describe("test-test-component", () => {
  it("is registered", (done) => {
    window.customElements.whenDefined("test-component").then(() => {
      done();
    });
  });
});
