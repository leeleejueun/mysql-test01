import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { DbContext } from './MyContext';


const List = () => {
    const { data, dataFun } = useContext(DbContext);
    //const [data, setData] = useState([]);
    const router = useRouter();

    function dataget() {
        dataFun('get')
        // axios.get('/api')
        //     .then(res => {
        //         setData(res.data);
        //     })
    }

    function dataDelete(id) {
        dataFun('delete',{id})
        // axios.delete(`/api/${id}`);
        // dataget();
        window.location.reload();
    }
    useEffect(dataget,[])
    return (
        <>
            <article>
                <h2>LIST</h2>
                <ul>
                    {
                        data&&data.map(obj => (
                            <li key={obj.id}>
                                {obj.name} / {obj.email} / {obj.date}
                                <button onClick={() => router.push({ pathname: '/src/Update', query: obj })}>수정</button>
                                <button onClick={() => dataDelete(obj.id)}>삭제</button>
                            </li>
                        ))
                    }
                    
                </ul>
                    <Link href='./src/Write'>글쓰기</Link>
            </article>
        </>
    )
}

export default List

