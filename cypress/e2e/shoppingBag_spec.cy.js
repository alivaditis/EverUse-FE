// TEST SHOPPING BAG PAGE //

/* eslint-disable no-undef */
describe("Shopping Bag Page", () => {
  beforeEach(() => {
    cy.stubRequestsDynamically();
    cy.visit("http://localhost:3000/#products");
    cy.wait("@GetAllItems");
  });

  it("Should show shopping bag details", () => {
    cy.stubRequestsDynamically();
    cy.get(".card").contains("Bracelet").click();
    cy.wait("@braceletGetItemGQL");
    cy.get("label").contains("M").click();
    cy.get("#colorOptions").select("Moss");
    cy.get("#quantityOptions").select("2");
    cy.get("button").contains("Add to Bag").click();

    cy.get("label").contains("S").click();
    cy.get("#colorOptions").select("Orange Plaid");
    cy.get("#quantityOptions").select("3");
    cy.get("button").contains("Add to Bag").click();
    
    cy.go("back");
    // Refactor once word spacing is fixed
    cy.get(".card").contains("DogLeash").click();
    // Refactor once onesize auto-select is done
    cy.get("label").contains("One Size").click();
    cy.get("#colorOptions").select("Lime");
    cy.get("#quantityOptions").select("1");
    cy.get("button").contains("Add to Bag").click();

    cy.get("button").contains("Cart").click();
    // cy.get("h1").contains("EverUse");
    // cy.get("h2").contains("Shopping Bag");
    // cy.get(".bag__items").children().should("have.length", 3);
    // cy.get(".bag__items")
    //   .children()
    //   .first()
    //   .get(".item__title")
    //   .contains("bracelet")
    //   .get("p")
    //   .contains("Size: M")
    //   .get("p")
    //   .contains("Color: moss")
    //   .get("p")
    //   .contains("Unit Price: $10")
    //   .get(".item__quantity")
    //   .contains("2")
    //   .get(".item__price")
    //   .contains("$20.00");
    // cy.get(".bag__items")
    //   .children()
    //   .last()
    //   .get(".item__title")
    //   .contains("leash")
    //   .get("p")
    //   .contains("Size: onesize")
    //   .get("p")
    //   .contains("Color: lime")
    //   .get("p")
    //   .contains("Unit Price: $20")
    //   .get(".item__quantity")
    //   .contains("1")
    //   .get(".item__price")
    //   .contains("$20.00");
    // cy.get("h3").contains("Request Summary");
    // cy.get("p").contains("Order Subtotal:");
    // cy.get(".bag__total").contains("$70.00");
    // cy.get(".bag__button").contains("Continue to Request");
  });

  // it("Should change quantities and prices", () => {
  //   cy.get(".counter__plus")
  //     .first()
  //     .click()
  //     .get(".counter__plus")
  //     .first()
  //     .click()
  //     .get(".item__price")
  //     .first()
  //     .contains("$40.00")
  //     .get(".bag__total")
  //     .contains("$90.00");
  //   cy.get(".counter__minus")
  //     .first()
  //     .click()
  //     .get(".item__price")
  //     .first()
  //     .contains("$30.00")
  //     .get(".bag__total")
  //     .contains("$80.00");

  //   cy.get(".counter__plus")
  //     .last()
  //     .click()
  //     .get(".counter__plus")
  //     .last()
  //     .click()
  //     .get(".item__price")
  //     .last()
  //     .contains("$60.00")
  //     .get(".bag__total")
  //     .contains("$120.00");
  //   cy.get(".counter__minus")
  //     .last()
  //     .click()
  //     .get(".item__price")
  //     .last()
  //     .contains("$40.00")
  //     .get(".bag__total")
  //     .contains("$100.00");
  // });

  // it("Should delete items and redirect to products section of landing page", () => {
  //   cy.get(".item__delete")
  //     .first()
  //     .click()
  //     .get(".bag__total")
  //     .contains("$50.00");
  //   cy.get(".item__delete")
  //     .last()
  //     .click()
  //     .get(".bag__total")
  //     .contains("$30.00");
  //   cy.get(".item__delete")
  //     .click()
  //     .get("h3")
  //     .contains("Your shopping bag is empty.")
  //     .get(".bag__button")
  //     .contains("Continue Shopping")
  //     .click();
  //   cy.url().should("eq", "http://localhost:3000/#products");
  // });
});
