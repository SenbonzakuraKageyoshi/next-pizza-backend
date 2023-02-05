import { Order } from "../../models/models.js";

export const createOrder = async (req, res) => {
    try {
        const { UserId, orderData } = req.body;

        await Order.create({UserId, orderData});

        res.json({message: 'Заказ создан'});
    } catch (error) {
        res.json({message: 'Не удалось создать заказ'});
    }
};