
describe("Sesion en cache", () => {

  beforeEach(() => {
    cy.sesionDemo();
    cy.visit("/");
  });

  it("Entra sin volver a autenticarse", () => {
    cy.get("#admin").should("be.visible");
  });

  it("Reutiliza la sesion en otra prueba", () => {
    cy.get(".fila-producto").should("have.length", 4);
  });

});
