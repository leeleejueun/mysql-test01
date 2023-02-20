
import { executeQuery } from './db';

const handler = async (req, res) => {
  // DESC(내림차순), ASC(오름차순)
  const { method, body } = req;

  const seletData = async () => {
    try {
      let data = await executeQuery('select * from mytest order by id DESC', []);
      res.json(data)
    } catch (err) {
      res.send(err);
    }
  }

  const insertData = async () => {
    let { name, email, date } = body;

    let data = await executeQuery(
      'insert into mytest (name,email,date) value (?,?,?)',
      [name, email, date]
    );
    res.json(data)
  }

  switch (method) {
    case "GET": seletData(); break;
    case "POST": insertData(); break;
  }
}

export default handler;

// import { executeQuery } from './db';

// const handler = async (req, res) => {
   
//   const {method, body,query} = req;
  
//   const selectDataId = async ()=>{
//     let data = await executeQuery('select * from mytest where id=?', [query.id]);
//     res.json(data);
//   }
//   const updateDataId = async ()=>{
//     let {name, email, date} =body;
//     let data = await executeQuery('update mytest set name=?, email=?, date=? where id=?', [name,email,date,query.id]);
//     res.json(data);
//   }

//   const insertDataId = async ()=>{
//     let {name, email, date} =body;
//     let data = await executeQuery('insert into mytest (name, email, date) value (?,?,?)', [name, email, date]);
//     res.json(data);
//   }
//   const deleteDataId = async ()=>{
//     let data = await executeQuery('delete from mytest where id=?', [query.id]); 
//     res.json(data);
//   }

//   switch(method){
//     case "GET" : selectDataId() ; break;
//     case "PUT" : updateDataId() ; break;
//     case "POST" : insertDataId() ; break;
//     case "DELETE" : deleteDataId() ; break;
//   }

//   // DESC(내림차순), ASC(오름차순)
//   // let data = await executeQuery('select * from mytest order by id DESC', []); //오름차순
//   // let data = await executeQuery('select * from mytest', []); //조회
//   // let data = await executeQuery('insert into mytest (name, email, date) value (?,?,?)', ['홍순이', 'df', '2013']); //추가
//   // let data = await executeQuery('update mytest set name=? where id=?', ['콩돌이',4]); //수정
//   // let data = await executeQuery('delete from mytest where id=?', [5]); //삭제

// }

// export default handler;

