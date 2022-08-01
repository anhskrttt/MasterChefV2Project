# MasterChefV2Subgraph

A subgraph for querying data from PancakeSwap MasterChefV2 contract.

## Description

Define GraphQL API to querying data, based on designed schema (see below).

## Getting Started

### Techstack

- [TheGraph](https://thegraph.com/en/): Indexing protocol for blockchain networks
- [Nodejs](https://nodejs.org/en/)/npm: javascript run time, package manager
- [GraphQL](https://graphql.org/): Query language for APIs
- [AssemblyScript](https://www.assemblyscript.org/)/Typescript: Mapping Script (A script for subgraph project)
- [MongoDB](https://www.mongodb.com/): NoSQL Database
- [Mongoose](https://mongoosejs.com/): Library for connecting MongoDB and Nodejs

### Dependencies

None

### Installing

Nothing to install yet. Just check the project's GraphQL API here: Updating...

Example GraphQL API: https://api.thegraph.com/subgraphs/name/pancakeswap/masterchef-v2
Example of GraphQL playground: https://thegraph.com/hosted-service/subgraph/pancakeswap/masterchef-v2

### Executing program

- Query example

```
query pools (first: 115) {
      id
      pair
      users {
        id
        address
        rewardDebt
      }
    }
  }
```

- Example on how to query data from GraphQL API

```
const queryPool = async () => {
  const query = `{
    pools (first: 115) {
      id
      pair
      users {
        id
        address
        rewardDebt
      }
    }
  }`
  const config = {
    headers: { "content-type": "application/json" },
    query: query,
  };

  axios
    .post("https://api.thegraph.com/subgraphs/name/pancakeswap/masterchef-v2", config)
    .then((res) => {
      console.log(res.data);

    })
    .catch((err) => {
      console.log(err);
    });
}

queryPool()
```

## Acknowledgments

Inspiration, code snippets, etc.
Updating....
