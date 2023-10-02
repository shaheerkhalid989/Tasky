require('dotenv').config();
const user = require('../models/userModel');
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET_KEY;

module.exports = {
    createUser,
    getAllUser,
    loginUser,
}

async function createUser(req, res){
    try{
        const {UserEmail} = req.body;
        const userDB = await user.findOne({UserEmail});
        // console.log(userDB);
        if(userDB != null)
        {
            if(UserEmail === userDB.UserEmail){
                return res
                .status(409)
                .send("Email already exist");
            }  
        }
        else{
            const newUser = await user.create(req.body);
            if(!newUser){ return res.status(401).json({msg: "Failed to create User"});}
            // res.send("Registered Succesfully");
            res.json({
                msg : "User Created Succussfully",
            })
        }
    }
    catch(err){
        // console.log(err)
        res.send(err.message);
    }
}

async function loginUser (req, res) {
    const { UserEmail, Password } = req.body;
    try {
      const myUser = await user.findOne({ UserEmail });
  
      if (!myUser) {
        return res
          .status(404)
          .json({ message: "Authentication failed. User not found." });
      }
  
      if (myUser.Password != Password) {
        return res
          .status(401)
          .json({ message: "Authentication failed. Incorrect password." });
      }
        // var token = GenerateToken(user);
      
        res.status(200).json({ 
            message: "Authentication successful",
            token : await myUser.generateToken()
            // userId: myUser._id.toString(),
        });
    } catch (err) {
      res.status(500).json({ error: err.message});
  }
};

async function getAllUser(req, res){
    try{
        let users = await user.find();
        res.json(users);
    }
    catch(err){
        res.status(500).send("Server error");
    }
}

// async function updateUser(req, res){
//     try{
//         const {UserEmail} = req.body;
//         let userDB = await user.findOneAndUpdate({UserEmail}, {$set: req.body},{new: true});
//         res.send("Updated Succesfully");

//         // const id = req.params;
//         // // let updatedUser = await user.updateOne({_id: req.params.userId}, {...req.body});
//         // let updatedUser = await user.findByIdAndUpdate(id, req.body, {new : true});
//         // res.json(updatedUser);
//     }
//     catch(err){
//         res.status(404).send("Cannot find the user.");
//     }
// }


// async function deleteUser(req, res){
//     try{
//         // const {UserEmail} = req.body;
//         const id = req.params;
//         let deletedUser = await user.deleteOne({_id: id});
//         res.sendStatus(204).json(deletedUser).send("Deleted Succesfully");
//     }
//     catch(err){
//         res.status(404).send("Cannot find the user.");
//     }
// }


// async function adminDashboard(req, res){
//     return res.status(200).json({message : "Admin "});
// }

// async function showMessage(req, res){
//     res.send('Hello World');
// }
// async function requireRoles(roles){
//     return (req, res, next) =>{
//         const userRole = require.user.Role;
//         if(roles.include(userRole)){
//             next();
//         }
//         else{
//             res.status(403).json({message : "Permission denied"});
//         }
//     }
// }
