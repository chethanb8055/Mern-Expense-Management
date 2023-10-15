const userModel = require("../models/userModel");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).json("Invalid Credentials");
    }
    // const
    res.status(200).json({
        success:true,
        user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const registerController = async(req,res) => {
    try {
        
        const newuser  = new userModel(req.body)
        await newuser.save()
        res.status(201).json({
            success:true,
            newuser,
        })
    } catch (error) {
        res.status(400).json({
            success :false ,
            error
        })
    }
};

module.exports = {
  loginController,
  registerController,
};
