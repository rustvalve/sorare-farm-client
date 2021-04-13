import React from "react";

export default function Player({ player }: { player: Player }) {
  return (
    <div>
      <div>
        <img src={player.pictureUrl} width="200" alt="" />
        <div>{player.displayName}</div>
      </div>
      <div>
        {player.cards.edges.map(
          ({ node }: any, key: number) =>
            node.tradeableStatus === "YES" && <div key={key}>{node.price}</div>
        )}
      </div>
    </div>
  );
}
