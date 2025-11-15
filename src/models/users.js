const dbPool = require('../config/database');

// const getAllUsers = () => {
//     dbPool.execute('SELECT * FROM users', (err, rows) => {
//         if(err){
//             res.json({
//                 message:'connection is failed',
//             })
//         }
//         res.json({
//             message: 'connection success',
//             data: rows,
//         });
//     });
// }

//GET or READ data
const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

//POST or ADD data
const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) VALUES ('${body.name}','${body.email}','${body.address}')`;
    return dbPool.execute(SQLQuery);
};



module.exports = {
    getAllUsers, 
    createNewUser
}