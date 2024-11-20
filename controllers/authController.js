const authService = require('../services/authService');

exports.signup = async (req, res) => {
    console.log("signUp")
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        console.log(req.body);
        const user = await authService.signup(req.body.username,req.body.email,req.body.password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const { token, user } = await authService.login(email, password);
        res.status(200).json({ message: 'Login successful', token, user });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};



