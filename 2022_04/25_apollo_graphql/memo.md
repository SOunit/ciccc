# sample code

https://github.com/M-0921/react600

# Apollo client

- work good with react@17
- error with react@18 for now
- crate react app
- install apollo client
- add `ApolloProvider` to App.js
- add `gql` `InMemoryCache` from `@apollo/client`
- setup apollo client

```
const client = new ApolloClient({
    uri: "https://graphql.org/swapi-graphql",
    cache: new InMemoryCache()
})
```

- fetch data via apollo client

```
client.query({query: gql`
    query {
        allFilms {
            films{
                title
                director
                id
            }
        }
    }
`}).then((data) => {
    console.log(data)
})
```

## graphql apollo data access in react

- use `ApolloProvider` to hold app-wide data
- use `useQuery` `gql` from `@apollo/client`

# swapi

- graphql basic

# hasura

- instance graphql server
- heroku has postgresql

## setup

- open console in hasura
- data
- create heroku database in hasura page
- create table in hasura page

### id

- select uuid
- gen_random_uuid() for uuid by hasura

## query

- just select field in hasura GraphQL screen
