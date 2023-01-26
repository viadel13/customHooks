import { useEffect, useState } from "react"

const useFecth = (url) =>{

    const[loading, setLoading] = useState(true)
    const[datas, setDatas] = useState([])

    useEffect(()=>{
       fetch(url)
      .then(response => response.json())
      .then(json => {
        setDatas(json)
        setLoading(false)
      })
      .catch(error=>console.log(error.message))
    }, [url])

    return {datas, loading}
}

export default useFecth