const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    body.operationName === operationName
  )
}

// Alias query if operationName matches
const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  }
}

// Alias mutation if operationName matches
const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`
  }
}

export {fixtureMap, aliasMutation, aliasQuery, hasOperationName}