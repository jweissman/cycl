import Cycl from "./Cycl";

describe(Cycl, () => {
    let cycl: Cycl = new Cycl();
    describe('a simple command language for Cypress', () => {
        it('gets', () => {
            expect(
                cycl.interpret(`get(#list > li)`)
            ).toEqual(
                `cy.get('#list>li')`
            )
        })

        it('expects', () => {
            expect(
                cycl.interpret(`get(#list > li).should("have.length", 2)`)
            ).toEqual(
                `cy.get('#list>li').should('have.length', 2)`
            )
        })

        test.todo("clicks")
        test.todo("finds")
    })

    test.todo('generates a working cy spec')
})