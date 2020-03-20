import './prelude'
import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server'
import { v4 as uuidv4 } from 'uuid'

interface User {
  id: string
  name: string
}

let globalUser: User = {
  id: uuidv4(),
  name: 'Makiboto',
}

// Step 1 --> Actions + Resources
const typeDefs = gql`
  type Query {
    hello: String
    me: User
  }

  type Mutation {
    updateName(name: String): User
  }

  type User {
    id: String
    name: String
  }
`

// Step 2 --> Resolution
const resolvers = {
  Query: {
    hello: (): string => 'Hello from GraphQL server',

    me: (): User => globalUser,
  },
  Mutation: {
    updateName(root, { name }: { name: string }): User {
      globalUser = { ...globalUser, name }
      return globalUser
    },
  },
}

// Step 3 --> Association Q/M -> R
const schema = makeExecutableSchema({ typeDefs, resolvers })

// Step 4 --> Create server and listen
const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
  console.log(`Server is listening on ${url}`)
})
