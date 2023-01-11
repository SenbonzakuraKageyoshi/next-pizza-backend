import { Product } from '../../models/models.js';

const getAllProducts = async (req, res) => {
    try {
        let { page, limit, productCategory } = req.query;
        console.log(req.query)
        page = page || 1;
        limit = limit || 20;
        let offset = page * limit - limit;  

        const products = await Product.findAll({where: {productCategory}, limit, offset});

        res.json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Ошибка при получении продуктов'});
    }
};

export {
    getAllProducts
}