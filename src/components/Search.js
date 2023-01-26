import {React} from 'react'

const Search = (props) => {
    
    const{search} = props
    const{searchHandle} = props


//   console.log('composant Search est monte');

  return (
    <div className='App'>
        <input 
            type='text'
            placeholder='search...'
            value={search}
            onChange={searchHandle}
        />
        <hr />
        {/* {
            users.filter((i) =>{
                return i.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            }).map((i)=>{
                return <p key={i.id}>{i.name}</p>
            })
        } */}
    </div>
  )
}

export default Search
