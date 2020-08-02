import {useState, useEffect} from 'react';
const api='https://us-central1-arepa-dev-api.cloudfunctions.net/api';
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