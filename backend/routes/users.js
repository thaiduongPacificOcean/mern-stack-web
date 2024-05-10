import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, getUserCount, updateUser } from '../controller/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// create new User 

router.post('/', createUser)

// update User 

router.put('/:id', verifyUser, updateUser)

// delete User 

router.delete('/:id', verifyUser, deleteUser)

// get single User 

router.get('/:id', verifyUser, getSingleUser)

// get all User 

router.get('/', verifyAdmin, getAllUser)

// get User count 

router.get('/search/getUserCount', getUserCount);


export default router;
