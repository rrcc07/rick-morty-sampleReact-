import React from 'react'

export const Characters = ({characters, setCharacters}) => {
    const resetCharacters = () => {
        setCharacters(null)
    }
 
  return (
    <div className='characters'>
        <div>Characters</div>
        <span className='back-home' onClick={resetCharacters}> come to home</span>
        <div className='container-characters'>
            {characters.map((character, index) => (
                <div className='character-container' key={index} >
                    <div>
                        <img src={character.image} alt={character.name}></img>
                    </div>
                    <div>
                        <h3> {character.name}</h3>
                        <h6>
                            {character.status === "Alive"  ? (
                                <>
                                    <span className='alive'/>
                                    Alive
                                </>
                            ) : (
                                <>
                                    <span className='Dead'/>
                                    Dead
                                </>
                            )}
                        </h6>
                        <p>
                            <span  className='text-grey'>Episodies:</span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span  className='text-grey'>Especie:</span>
                            <span>{character.species}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className='back-home' onClick={resetCharacters}>come to home</span>
    </div>
  )
}
