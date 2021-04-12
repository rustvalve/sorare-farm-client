import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const players = gql`
  query {
    players(slugs: ["eric-fernando-botteghin"]) {
      displayName
      cards {
        nodes {
          price
          user {
            nickname
          }
          userOwner {
            price
          }
        }
      }
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(players);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {data.players.map(
        ({ displayName }: { displayName: string }, key: number) => (
          <div key={key}>
            <p>{displayName}</p>
          </div>
        )
      )}
    </div>
  );
}
