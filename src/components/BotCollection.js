import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddBot, onRemoveButton }) {
  // Your code here
  const allBots = bots.map((bot) => (
    <BotCard key={bot.id} 
    bot={bot} 
    onBotClick={onAddBot} 
    onRemoveButton={onRemoveButton}
    />
  ))

  
  return (
    <div className="ui four column grid">
      <div className="row">
        {allBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
