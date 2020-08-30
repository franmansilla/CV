import {useState, useEffect} from 'react';
const api='https://franmansilla.github.io/api-json/api.json';
const useGetData =()=> {
    const [mydata, setdata]= useState([]);


    useEffect(()=>{
        fetch(api)
            .then(response=>response.json())
            .then(data=>setdata(data.data))
    },[]);

    return mydata;
}

export default useGetData;
