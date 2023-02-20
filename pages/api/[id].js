
import { executeQuery } from './db';

const handler = async (req, res) => {

  const { method, body, query } = req;

  //insert
  const seletDataId = async () => {
    let data = await executeQuery(
      'select * from mytest where id=?', [query.id]
    )
    res.json(data)
  }

  //업데이트
  const updateDataId = async () => {
    let { name, email, date } = body;
    let data = await executeQuery(
      'update mytest set name=?,email=?,date=? where id=?',
      [name, email, date, query.id]
    )
    res.json(data)
  }
  //삭제
  const deleteData = async () => {
    let data = await executeQuery(
      'delete from mytest where id=?', [query.id]
    )
    res.json(data);
  }
  switch (method) {
    case "GET": seletDataId(); break;
    case "PUT": updateDataId(); break;
    case "DELETE": deleteData(); break;
  }
}
export default handler;
//insert
// let data = await executeQuery(
//   'insert into mytest (name, email, date) value(?,?,?)',
//   ['콩돌이', 'df', '2013']
// )

//삭제
// let data = await executeQuery(
//   'delete from mytest where id=?', [3]
// )

//업데이트
// let data = await executeQuery(
//   'update mytest set name=? where id=?',
//   ['콩콩이', 4]
// )

//DESC : 내림차순
//ASC : 오름차순










// import { executeQuery } from './db';

// const handler = async (req, res) => {
//   let id = req.query.id //이름 같은걸로 매칭되게 js파일명 설정해주기
//   let data = await executeQuery('select * from mytest where id=?', [id]);
//   res.json(data);

//   //get[id], put, delete 

// }

// export default handler;

