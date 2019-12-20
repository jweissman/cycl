import Cycl from "./Cycl";

describe(Cycl, () => {
    let cycl: Cycl = new Cycl();
    describe('a simple command language for Cypress', () => {
        it('visits', () => {
            expect(cycl.interpret(`visit("localhost:12345")`)).toEqual(
                `cy.visit('localhost:12345')`
            )
        })

        it('gets', () => {
            expect(cycl.interpret(`get(#list > li);`)).toEqual(
                `cy.get('#list>li')`
            )
        })

        it('contains', () => {
            expect(cycl.interpret('contains("okay")')).toEqual(
                `cy.contains('okay')`
            )
        })

        describe('expects', () => {
            it('binary', () => {
                expect(cycl.interpret(`get(#list > li).should("have.length", 2);`)).toEqual(
                    `cy.get('#list>li').should('have.length', 2)`
                )
            })

            test.todo('unary')
        })

        it("clicks", () => {
            expect(cycl.interpret('get(.button).click')).toEqual(
                `cy.get('.button').click()`
            )
        })

        it('comments', () => {
            expect(cycl.interpret("// ignored")).toEqual('')
        })

        it('urls', () => {
            expect(cycl.interpret("url.should(\"include\", '/commands/actions')")).toEqual(
                `cy.url().should('include', '/commands/actions')`
            )
        })

        xit("types", () => {
            expect(cycl.interpret("get('.form-control').type('fake@email').should('have.value', 'fake@email')")).toEqual(
                `cy.get('form-control').type('fake@email.com').should('have.value', 'fake@email')`
            )
        })

        test.todo("finds")
    })

    test.todo('generates a working cy spec')
})