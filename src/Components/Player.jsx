import React, { useState } from 'react'

export default function Player({name,symbol,handlePlayerNameChange}) {
    const[ playerName,setPlayerName]=useState(name)
    const [isEditing,setIsEditing]=useState(false);
    const handlePlayerName=(e)=>{
        setPlayerName(e.target.value)
    }
    const handleEditing=()=>{
        setIsEditing((isEditing)=> !isEditing)
        if(isEditing){
            handlePlayerNameChange(playerName,symbol)
        }
    }
  return (
    <div>
        <div className='w-1/2 h-1/2 bg-green-500 mx-auto flex justify-evenly py-3 '>
       {isEditing &&<input className='pl-2' type="text" value={playerName} onChange={handlePlayerName} />}
        {!isEditing &&<h1 className=''>{playerName}</h1>}
        <h1>{symbol}</h1>
        <button className='border px-3 text-white bg-black rounded-md' onClick={handleEditing}>{isEditing?"Save":"Edit"}</button>
        </div>
    </div>
  )
}
