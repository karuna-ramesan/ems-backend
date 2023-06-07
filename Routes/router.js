const express =require('express')

// create router for express
const router = new express.Router()

// import controller
const userController = require('../Controller/userController')

// import multer
const upload = require('../multerConfig/storageConfig')

// define routes for each http request
router.post('/employee/register',upload.single('user_profile'),userController.register)

// define routes for get all users
router.get('/employee/get-all-employee-details',userController.getusers)

// define routes for view profile

router.get('/employee/view-profile/:id',userController.viewprofile)
// define  a route to remove user
router.delete('/employee/delete-user/:id',userController.deleteUser)

// define route to update user
router.put('/employee/update/:id',upload.single('user_profile'),userController.editUser)


// export router
module.exports=router