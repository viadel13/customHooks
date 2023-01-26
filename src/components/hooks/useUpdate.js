import { useEffect } from "react"

const useUpdate = (text) =>{

    // console.log('composant UseUpdate est monte');
    
    useEffect(()=>{
        document.title = `titre : ${text}`
    }, [text]);




}       

export default useUpdate;