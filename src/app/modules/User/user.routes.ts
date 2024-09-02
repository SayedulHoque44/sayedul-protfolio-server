
import express from "express"
import { getMyProfile, loginUser, UpdateUser } from "./user.services"

const router = express.Router()



router.post('/login',loginUser)
router.patch('/:id',UpdateUser)
router.get('/',getMyProfile)



export  const UserRoutes = router