import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import playersConfig from './config/players';

const players = gql`
  query PlayersQuery($players: [String!]!, $cursor: String) {
    players(slugs: $players) {
      displayName
      pictureUrl
      cards(first: 20, after: $cursor) {
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            rarity
            price
            tradeableStatus
            publicSingleBuyOfferMinPrice{
              amount
            }
            latestAuction {
              bestBid {
                amount
              }
            }
            user {
              nickname
            }
            userOwner {
              price
            }
          }
          cursor
        }
      }
    }
  }
`;

export default function App() {
  const { loading, error, data, fetchMore } = useQuery(players, {
    variables: {
      players: playersConfig.slugs
    },
    //pollInterval: 1000
  });

  // data.players.forEach((player: any) => {
  //   if (player.cards)
  // })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  return (
    <div className="App">
      { data.players.map(
        (player: any, key: number) => (
          <div key={ key }>
            <div>
              <img src={ player.pictureUrl } width="200" alt=""/>
              <div>{ player.displayName }</div>
            </div>
            <div>
              { player.cards.edges.map(
                ({ node } : any, key: number) => (
                  node.tradeableStatus === 'YES' &&
                  <div key={ key }>
                    {node.price}
                  </div>
                )
              ) }
            </div>

          </div>
        )
      ) }
    </div>
  );
}
