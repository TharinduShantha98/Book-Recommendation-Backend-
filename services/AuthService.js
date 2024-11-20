const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();


const secretKey = process.env.SECRET_KEY;

class AuthService {
    async signup(name, email, password) {
        if (!password) {
            throw new Error("Password is required");
        }
        console.log('name', name);
        console.log('email', email);
        console.log('password', password);


        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({name, email, password: hashedPassword });
        try {
            return await user.save();
        } catch (error) {
            console.error('Error saving user:', error.message);
            throw new Error('Error saving user');
        }
    }


    async login(email, password) {
        console.log(email,' ',password );
        const user = await User.findOne({ email });

        console.log(user);

        if (!user) throw new Error('User not found!');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials!');

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1d' });
        return { token};
    }
}

module.exports = new AuthService();