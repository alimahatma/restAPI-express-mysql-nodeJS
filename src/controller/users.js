const UserModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers();
        res.json({
            message: 'Get all user success',
            data: data
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        });
    }
}


const createNewUser = async (req, res) => {
    const {body} = req;

    try {
        await UserModel.createNewUser(body);
        res.json({
            message: 'CREATE new user success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        });
    }
};

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser', idUser);
    res.json({
        message: 'UPDATE user sucess',
        data: req.body,
    })
}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        data: {
            message: 'DELETE user success',
            id: idUser,
            name: "Gibran",
            email: "gibran@gmail.com",
            address: "mataram"
        }
    })

}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}