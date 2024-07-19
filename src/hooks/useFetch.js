import { useState, useEffect } from "react";


let useFetch = (url) => {
    
    let [data, setDatas] = useState([]);
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(false)

    useEffect(()=>{
        
        setLoading(true)
        
        fetch(url)
        .then(res => res.json())
        .then(result => {
            setDatas(result)
            setLoading(false)
        })
        .catch(e => {
            setError(true)
            setLoading(false)
            console.log(e);
        })
    
    }, [url]);

    return {data, loading, error}
}

export default useFetch

