cy.intercept('POST', 'https://everuse-be-b6017dbfcc94.herokuapp.com/graphql*', (req) => {
      // Queries
      if (hasOperationName(req, 'GetAllItems')) {
        aliasQuery(req, 'GetAllItems')
        const fixtureName = fixtureMap['GetAllItems'];
        req.reply((res) => {
          res.send({
            fixture: fixtureName, // Use the fixture for the response
            statusCode: 201
          });
        });
      }
  }
)