import {useState, useEffect} from 'react';
const api='https://github.com/franmansilla/CV/blob/develop/src/hooks/db.json';
const useGetData =()=> {
    const [mydata, setdata]= useState([]);


    useEffect(()=>{
        fetch(api)
            .then(response=>response.json())
            .then(data=>setdata(data))
    },[]);

    return mydata;
}

export default useGetData;