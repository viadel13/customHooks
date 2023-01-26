
const Table = ({resultat}) =>{

    return(
        <>
            <table className="table table-bordered ">
                <thead>
                    <tr className="bg-success text-center text-white">
                        <th scope="col">name</th>
                        <th scope="col">userName</th>
                        <th scope="col">email</th>
                        <th scope="col">adress</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       resultat.map(({id, name, username, email, address})=>{
                            return(
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{address.city} {address.street} {address.suite} {address.zipcode}</td>
                                </tr>
                            )
                        })
                      
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;