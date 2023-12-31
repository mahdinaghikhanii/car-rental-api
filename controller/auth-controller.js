
const userModel = require('../model/user');

const signInUser  = (req , res) => {
    if(userModel.find((user) => user.username === req.body.username || userModel.find((userPass) => userPass.phone_number === req.body.userPass))){
        res.write(`Welcome ${req.body.username}`);
        res.end()
    }else{
        res.write("Please check your username or password");
        res.end();
    }
   
};

const signUpUser = (req , res) =>{
    if(userModel.find((user) =>  user.username === req.body.username || userModel.find((userPhone) => userPhone.phone_number === req.body.phone_number))){
      res.write("This user before register it");
      res.end();
    }else{
        let newUserObject = req.body;
        userModel.push(newUserObject);
        res.write('true');
        res.end();
    }
};

const getAllUsers = (req, res) =>{
    res.json(userModel);
    res.end();
}



exports.signUpUser = signUpUser;
exports.singInUser = signInUser;
exports.getAllUsers = getAllUsers;