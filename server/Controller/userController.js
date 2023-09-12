const User = require("../Models/User");
const jwt = require('jsonwebtoken');
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(email, password)
        if (!email || !password) {
            return res.status(400).json({ status: false, "message": "Email and password not found" })
        }
        const findUser = await User.findOne({ email: email });
        if (findUser) {
            return res.status(400).json({ status: false, "message": "User with this email already exsists" })
        }
        if (name) {
            const createUser = new User({ name, email, password });
            const saveUser = await createUser.save();
            if (!saveUser) {
                return res.status(401).json({ status: false, "message": "user not saved in db" });
            }
            return res.status(200).json({ status: true, "message": "User created sucessfully" })
        }
        const user = new User({ email, password });
        const saveUser = await user.save();
        if (!saveUser) {
            return res.status(401).json({ status: false, "message": "user not saved in db" });
        }
        return res.status(200).json({ status: true, "message": "User created sucessfully" })
    } catch (err) {
        return res.status(500).json({ status: false, "message": err.message })
    }
}
exports.signIneUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    try {
        if (!email || !password) {
            return res.status(400).json({ "error": "Email and password not found" })
        }
        const findUser = await User.findOne({ email: email });
        // console.log(findUser)
        if (!findUser) {
            return res.status(403).json({ "status": false, "error": "User with this email does not exsists" });
        }
        if (password !== findUser.password) {
            return res.status(404).json({ "status": false, "error": "Email or password incorrect" });
        }
        const token = jwt.sign({ id: findUser._id }, process.env.TOKEN);
        res.status(200).json({
            status: true,
            data: findUser,
            jwt_token: token,
            message: "User Signed in"
        })
    } catch (err) {
        return res.status(500).json({ "status": false, "error": err.message })
    }
}
exports.getUserData = async (req, res) => {
    try {
        const { user_id } = req.body;
        console.log(user_id)
        if (!user_id) {
            return res.status(400).json({ "error": "user_id not found" })
        }
        const findUser = await User.findOne({ _id: user_id });
        console.log(findUser)
        if (!findUser) {
            return res.status(404).json({ "error": "User with this id does not exsists" });
        }
        res.status(200).json({
            data: findUser,
            "message": "Data found"
        })
    } catch (err) {
        return res.status(500).json({ "error": err.message })
    }
}
exports.changePassword = async (req, res) => {
    try {
        const { user_id, current_password, new_password } = req.query;
        console.log(user_id, current_password, new_password)
        if (!user_id || !current_password || !new_password) {
            return res.json({ status: false, message: "user_id, current_password or new_password not found" })
        }
        const findUser = await User.findOne({ _id: user_id });
        if (!findUser) {
            return res.json({ status: false, message: "User with this id does not exsists" });
        }
        console.log(findUser.password)
        if (findUser.password !== current_password) {
            return res.json({ status: false, message: "Current Password Did not matched" });
        }
        const filter = { _id: user_id };
        const update = { $set: { password: new_password } };
        const updateUser = await User.updateOne(filter, update)
        console.log(updateUser)
        if(!updateUser){
            return res.json({ status: false, message: "Password was not changed try again" });
        }
        res.status(200).json({
            status: true,
            message: "Password Changed Sucessfully"
        })
    } catch (err) {
        return res.status(500).json({  status: false, message: err.message })
    }
}