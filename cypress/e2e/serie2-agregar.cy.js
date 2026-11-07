
describe("Serie II - Prueba 2: Agregar producto", () => {

  it("Agrega un producto y verifica la tabla", () => {
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

    cy.get("#nombre").type("Mouse Gamer");
    cy.get("#precio").type("150");
    cy.get("#stock").type("10");
    cy.get("#btn-guardar").click();

    cy.get(".fila-producto").should("have.length", 5);
    cy.get(".col-nombre").should("contain", "Mouse Gamer");

    cy.screenshot("02-producto-agregado");
  });

});
