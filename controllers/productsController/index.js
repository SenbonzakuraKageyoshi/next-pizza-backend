import { Product, SelectedProduct } from '../../models/models.js';

const getAllProducts = async (req, res) => {
    try {
        let { page, limit, productCategory } = req.query;

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

const selectProduct = async (req, res) => {
    try {
        const { ProductId, UserId } = req.body;

        await SelectedProduct.create({ProductId, UserId});

        res.json({message: 'Продукт добавлен в корзину'})
    } catch (error) {
        console.log(error);
        res.json({message: 'Не удалось добавить продукт в корзину'})
    }
}

const getAllSelectedProducts = async (req, res) => {
    try {
        const { UserId } = req.body;

        const selectedProducts = await SelectedProduct.findAll({where: { UserId }, include: [{ model: Product }]});

        res.json(selectedProducts);
    } catch (error) {
        console.log(error);
        res.json({message: 'Не удалось получить продукты из корзины'})
    }
};

export {
    getAllProducts, selectProduct, getAllSelectedProducts
}