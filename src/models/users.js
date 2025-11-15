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

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers, 
}