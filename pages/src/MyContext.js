import axios from 'axios';
import React, { createContext, useState } from 'react'
export const DbContext = createContext(null);

const MyContext = ({children}) => {

    const [data,setData] = useState();

    async function dataFun(type,obj){
        let trans;
        if(type=='get'){
            trans = await axios.get('/api').then(res=>res.data)
        }else if(type=='post'){
            trans = await axios.post('/api',obj)
        }else if(type=='put'){
            trans = await axios.put(`/api${obj.id}`,obj)
        }else{
            trans = await axios.delete(`/api${obj}`)
        }
        setData(trans);
    }
    dataFun('get')

    return (
        <DbContext.Provider value={{data,dataFun}}>
            {children}
        </DbContext.Provider>
    )
}

export default MyContext