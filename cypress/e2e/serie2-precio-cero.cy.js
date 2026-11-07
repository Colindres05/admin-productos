
describe("Serie II - Prueba 3: Validacion precio", () => {

  it("No permite agregar productos con precio 0", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.clear();
      }
    });

    cy.get("#usuario").type("admin");
    cy.get("#clave").type("1234");
    cy.get("#btn-login").click();

    cy.get("#admin").should("be.visible");

    cy.get(".fila-producto").should("have.length", 4);

    cy.get("#nombre").type("Producto Invalido");
    cy.get("#precio").type("0");
    cy.get("#stock").type("5");
    cy.get("#btn-guardar").click();

    cy.get("#form-msg").should("contain", "precio");
    cy.get(".fila-producto").should("have.length", 4);

    cy.screenshot("03-validacion-precio-cero");
  });

});
