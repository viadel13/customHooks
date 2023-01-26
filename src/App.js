// import axios from 'axios'
// import Bouton from "./components/Bouton";

import Contacts from "./components/Contacts";

const App = () => { 

  // console.log('composant App est monte');

  return (
    <div>
      <h1 className="display-2 text-center">Mes contacts</h1>
      <Contacts />
      {/* <Bouton /> */}
    </div>
  )
}

export default App
