
describe("Serie II - Prueba 1: Login", () => {

  it("Inicia sesion y muestra el panel", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.clear();
      }
    });

    cy.get("#usuario").type("admin");
    cy.get("#clave").type("1234");
    cy.get("#btn-login").click();

    cy.get("#admin").should("be.visible");

    cy.screenshot("01-login-correcto");
  });

});
