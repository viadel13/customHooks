import {useEffect, useState} from 'react'
import useUpdate from './hooks/useUpdate';

function Bouton() {

    // console.log('composant Bouton est monte');

    const[text, setText] = useState('')
    const[change, setChange] = useState(null)

    useEffect(()=>{
      change ?
      setText('bonjour')
      :
      setText('Bonsoir')
    }, [change])

    useUpdate(text)

  return (
    <button onClick={() => setChange(!change)}>Cliquez ici</button>
  )
}

export default Bouton
