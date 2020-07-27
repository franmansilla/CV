import {useState, useEffect} from 'react';
const api='http://localhost:3000/data';
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