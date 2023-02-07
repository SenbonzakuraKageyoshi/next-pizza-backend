import { Order } from "../../models/models.js";

const createOrder = async (req, res) => {
    try {
        const { UserId, orderData } = req.body;

        await Order.create({UserId, orderData});

        res.json({message: 'Заказ создан'});
    } catch (error) {
        res.json({message: 'Не удалось создать заказ'});
    }
};

const getOrders = async (req, res) => {
    try {
        const { UserId } = req.body;

        const orders = await Order.findAll({where: { UserId }});

        res.json(orders);
    } catch (error) {
        res.json({message: 'Не удалось получить заказы'});
    }
};

export {
    createOrder,
    getOrders
}