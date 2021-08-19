import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


const API = "http://localhost:8002/bots"

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);


  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(bots => setBots(bots))
  }, [])

  function handleAddBot(botToAdd) {
    const botInArmy = botArmy.find(
      bot => bot.id === botToAdd.id
    );
    if (!botInArmy) {
      setBotArmy([...botArmy, botToAdd])
    }
  }

  function handleRemoveBot(botToRemove) {
    setBotArmy((botArmy) => 
    botArmy.filter((bot) => bot.id !== botToRemove.id))
  }

  function handleButton(removeBot) {
    setBots(bots => 
      bots.filter(bot => bot.id !== removeBot.id))
  }

  return (
    <div>
      <YourBotArmy bots={botArmy} 
      onRemoveBot={handleRemoveBot} 
      onRemoveButton={handleButton}/>
      <BotCollection bots={bots} 
      onAddBot={handleAddBot} 
      
      />
    </div>
  )
}

export default BotsPage;
