
const Category=require('../models/category.model')


const categoryCtrl = {};

categoryCtrl.getCategories = async (req, res) => {
    await Category.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

categoryCtrl.getCategory = async (req, res) => {
    const cat = req.params.cat;
    await Category.find({name: cat})
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

categoryCtrl.addCategory = async (req,res)=> {
    const myCategory = new Category(req.body);
    await myCategory.save()
        .then(() => {
            res.json({message: 'category Successfully Inserted'})
        })
        .catch(err => res.send(err.message));
}
module.exports = categoryCtrl;