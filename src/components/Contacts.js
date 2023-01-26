import {useState, useEffect} from 'react'
import useFecth from './hooks/useFecth';
import Search from './Search'
import Table from './Table';

function Contacts() {

    // console.log('composant Contact est monte');
    
    const[search, setSearch] = useState('')
    const[resultat, setResultat] = useState([])

    const{datas, loading} = useFecth('https://jsonplaceholder.typicode.com/users')

    const filterName = () =>{
       const fil = datas.filter((i)=>{
           return( 
                Object.values(i)
                .join(' ')
                .toLowerCase()
                .includes(search.toLowerCase())
            )
        })

        setResultat(fil)
        console.log(fil)
    }

    useEffect(()=>{

        if(search !== ''){
            filterName();
        }else{
            setResultat([])
        }

    }, [search])

    // console.log(users)

    const searchHandle = (e) =>{
        setSearch(e.target.value)
    }

    const message = (couleur, msg) =>{
        return(
            <p style={{color: couleur, textAlign : 'center'}}>{msg}</p>
        )
    }

  return (

    <>
        {  
            loading ? message('red', 'veuillez patienter svp ...') :

            (   <Search 
                    search = {search}
                    resultat = {resultat}
                    searchHandle = {searchHandle}
                />
            )  
        }

        {
            resultat.length === 0 && search !== '' ? message('green', 'Pas de resultat !')
            
            :

            search === '' ? message('yellow', 'acune donnee entrer')
            
            :

            <Table resultat={resultat} search={search}/>
        }
    
    </>
    
  )
}

export default Contacts
