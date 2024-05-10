import User from '../models/User.js'

// create new user 
export const createUser = async (req, res) => {

    const newUser = new User(req.body)
    try {
        const saveUser = await newUser.save();
        res.status(200).json({
            sussess: true,
            message: 'Successfully created',
            data: saveUser
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'Failđe to create'
        })
    }
}
// update 
export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({
            sussess: true,
            message: 'Successfully update',
            data: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'Failed to update',
        })
    }
}

// delete
export const deleteUser = async (req, res) => {

    const id = req.params.id

    try {
        const deleteUser = await User.findByIdAndDelete(id)

        res.status(200).json({
            sussess: true,
            message: 'Successfully delete',
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'Failed to delete',
        })
    }
}
// getSingleUser 

export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id);

        res.status(200).json({
            sussess: true,
            message: 'Successfully',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'not found',
        })
    }
}
// getAllUser
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({});

        res.status(200).json({
            sussess: true,
            count: users.length,
            message: 'Successfully',
            data: users
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'not found',
        })
    }
}

// get User by Search 

export const getUserBySearch = async (req, res) => {

    // i mean case sensitive : phân biệt chữ hoa thường

    const username = new RegExp(req.query.username, 'i')

    try {
        const users = await User.find({
            username: username,
        })
        res.status(200).json({
            sussess: true,
            count: users.length,
            message: 'Successfully',
            dSearchata: users
        })

    } catch (error) {
        res.status(404).json({
            sussess: false,
            message: 'not found',
        })
    }
}

export const getUserCount = async (req, res) => {

    try {
        const userCount = await User.estimatedDocumentCount();

        res.status(200).json({
            sussess: true,
            message: 'Successfully',
            count: userCount
        })

    } catch (error) {
        res.status(404).json({
            sussess: false,
            message: 'not found',
        })
    }
} 