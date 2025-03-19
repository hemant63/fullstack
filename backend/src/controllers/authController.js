import { authService } from '../services/authService.js';

export const login = (req, res) => {
    const { email, phoneNo, password } = req.body;
    authService.login(email, phoneNo, password, (err, token) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        return res.json({ token });
    });
};

export const register = (req, res) => {
    const { email, phoneNo, password } = req.body;
    authService.register(email, phoneNo ,password, (err, user) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        return res.status(201).json({ user });
    });
};
