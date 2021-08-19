import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRemoveBot }) {
  //your bot army code here...
  const botList = bots.map(bot => (
    <BotCard key={bot.id} bot={bot} onBotClick={onRemoveBot} />
  ))
  
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botList}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
