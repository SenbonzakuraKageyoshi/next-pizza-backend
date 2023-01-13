import { User } from '../../models/models.js';
import jwt from 'jsonwebtoken';

const getUser = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return res.status(404).json({message: 'Пользователь не найден'})
        };

        const { id } = jwt.verify(token, '1a2b-3c4d-5e6f-7g8h');
        
        const user = await User.findOne({where: { id }});

        if(!user){
            return res.status(404).json({message: 'Пользователь не найден'})
        };

        res.json({...user.dataValues});
    } catch (error) {
        res.status(404).json({message: "Не удалось получить данные о пользователе"}); 
    };
};

export {
    getUser
};