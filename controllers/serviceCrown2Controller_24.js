const Category_24 = require("../models/Category_24");

exports.getCategories = async (req, res) => {
    try {
        return await Category_24.fetchAll();
    } catch (err) {
        console.log("getCategories", err);
    }
};