/// <reference types="cypress" />

describe("Menu App", () => {
  it("should render menu, iframe and handle path after click", () => {
    cy.visit("/");
    cy.get('[data-slug="we-connect"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/we-connect");
    });
    cy.get(".responsive-iframe")
      .should("have.attr", "title", "we-connect")
      .and("have.attr", "src", "https://www.we-conect.com/");
    cy.get('iframe[class="responsive-iframe"]')
      .its("0.contentDocument")
      .should("exist");
  });
  it("should switch to new pathname and iframe after next click", () => {
    cy.visit("/");
    cy.get('[data-slug="we-connect"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/we-connect");
    });
    cy.get('[data-slug="live-events"]').click({ force: true });
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/live-events");
    });
    cy.get(".responsive-iframe")
      .should("have.attr", "title", "live-events")
      .and("have.attr", "src", "https://www.we-conect.com/liveevents");
    cy.get('iframe[class="responsive-iframe"]')
      .its("0.contentDocument")
      .should("exist");
  });
});
