import { userService } from '../services/userService.js';

export const getProfile = (req, res) => {
    const userId = req?.params?.id; 
        userService.getProfile(userId, (err, user) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        return res.json({ user });
    });
};

export const updateProfile = (req, res) => {
    const userId = req.user.userId; // From JWT token
    const updatedData = req.body;
    userService.updateProfile(userId, updatedData, (err, updatedUser) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        return res.json({ updatedUser });
    });
};
