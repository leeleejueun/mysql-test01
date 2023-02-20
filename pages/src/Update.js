import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { DbContext } from './MyContext';

const Update = () => {
    const {dataFun} = useContext(DbContext);
    const router = useRouter();
    const { query } = router;


    let initial = { id: query.id, name: query.name, email: query.email, date: query.date }
    const [inputValue, setValue] = useState(initial);

    function valueChange(e) {
        let t = e.target;
        setValue((obj) => {
            return { ...obj, [t.name]: t.value }
        })
    }
    function create(e) {
        e.preventDefault();
        //get, post, put, delete
        dataFun('post',{...inputValue })
        // axios.put(`/api/${query.id}`, { ...inputValue })
        router.push('/');
    }
    return (
        <div>
            <form onSubmit={create}>
                <p><input value={inputValue.name} onChange={valueChange} type="text" placeholder='이름' name="name" /></p>
                <p><input value={inputValue.email} onChange={valueChange} type="email" placeholder='메일' name="email" /></p>
                <p><input value={inputValue.date} onChange={valueChange} type="text" placeholder='연락처' name="date" /></p>
                <p><input type="submit" value="저장" /></p>
            </form>
        </div>
    )
}

export default Update