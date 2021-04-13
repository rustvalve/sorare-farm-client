import React from "react";
import Player from "../Player/Player";

export default function PlayersList({ players }: { players: Array<Player> }) {
  return (
    <div>
      {players.map((player: Player, key: number) => (
        <Player player={player} key={key} />
      ))}
    </div>
  );
}
