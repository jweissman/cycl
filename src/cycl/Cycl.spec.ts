import Cycl from "./Cycl";

describe(Cycl, () => {
    let cycl: Cycl = new Cycl();
    describe('a simple command language for Cypress', () => {
        it('visits', () => {
            expect(
                cycl.interpret(`visit("localhost:12345")`)
            ).toEqual(
                `cy.visit('localhost:12345')`
            )
        })

        it('gets', () => {
            expect(
                cycl.interpret(`get(#list > li)`)
            ).toEqual(
                `cy.get('#list>li')`
            )
        })

        it('contains', () => {
            expect(cycl.interpret('contains("okay")')).toEqual(
                `cy.contains('okay')`
            )
        })

        it('expects', () => {
            expect(
                cycl.interpret(`get(#list > li).should("have.length", 2)`)
            ).toEqual(
                `cy.get('#list>li').should('have.length', 2)`
            )
        })

        it("clicks", () => {
            expect(cycl.interpret('get(.button).click')).toEqual(
                `cy.get('.button').click()`
            )
        })
        test.todo("finds")
    })

    test.todo('generates a working cy spec')
})