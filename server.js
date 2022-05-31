
describe('TODO api testing', () => {
    let todoItem;
    it('fetches Todo items - GET', () => {
        cy.request('https://chercher.tech/sample/api/product/read').as('todoRequest');
        cy.get('@todoRequest').then(todos => {
            expect(todos.status).to.eq(200);
            // assert.isArray(todos.body, 'Todos Response is an array')
        });
    });
    it('verify the request returns 50 items', () => {
        cy.request('https://chercher.tech/sample/api/product/read').its('body.records').as('length');
        cy.get('@length').then(leng => {
            expect(leng.length).to.eq(60)
        })
      })

      it.only('verify the request returns 50 items', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').then( ({ body }) => {
  
            expect(body[0].id).to.eq(1) // check first item in array
            expect(body[3].email).to.eq('Lew@alysha.tv') // check first item in array
            expect(body[7].name).to.eq('et omnis dolorem') // check first item in array

          })
          cy.request('https://jsonplaceholder.cypress.io/comments').then( ({ status }) => {
                expect(status).to.eq(200)

          })
          cy.request({
            method: 'POST', 
            url: 'https://jsonplaceholder.cypress.io/comments', 
            body: {
              name: 'space travel plan'
            }
          }).then( ({ status }) => {
            console.log(status) // 201
          })
      })
 });

