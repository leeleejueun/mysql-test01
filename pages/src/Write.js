import React, { useContext, useState } from 'react'
import HeadMeta from './HeadMeta'
import { useRouter } from 'next/router';
import Layout from './Layout';
import axios from 'axios';
import { DbContext } from './MyContext';

const Write = () => {
    // const {dataFun} = useContext(DbContext);
    const router = useRouter();
    const initial = { name: '', email: '', date: '' }
    const [inputValue, setValue] = useState(initial);
    function valueChange(e) {
        let t = e.target;
        setValue((obj) => {
            return { ...obj, [t.name]: t.value }
        })
    }
    function create(e) {
        e.preventDefault();
        dataFun('post',{...inputValue})
        //axios.post('/api', {...inputValue})
        router.push('/');
    }
    return (
        <Layout>
            <HeadMeta title= "write" />
            <div>
                <form onSubmit={create}>
                    <p><input onChange={valueChange} type="text" placeholder='이름' name="name" /></p>
                    <p><input onChange={valueChange} type="email" placeholder='메일' name="email" /></p>
                    <p><input onChange={valueChange} type="text" placeholder='연락처' name="date" /></p>
                    <p><input type="submit" value="저장" /></p>
                </form>
            </div>
        </Layout>
    )
}

export default Write