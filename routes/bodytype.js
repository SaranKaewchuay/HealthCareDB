const express = require('express');
const router = express.Router();
const bodyTypeController = require('../controller/bodytype');

// path
router.post('/add-bodytype', bodyTypeController.addBodyType);

router.get('/bodytype', bodyTypeController.getAllBodyType);

router.get('/getBodyTypeById/:p_id', bodyTypeController.getBodyTypeById);


// // ดึงข้อสินค้าที่มีแบรนด์นี้ออกมา
// router.get('/brand/:p_brand_id', productController.getProductBrand);

// router.post('/edit-products', productController.editProduct);

// router.get('/delete-products', productController.deleteProduct)

// // ไม่อยากใช้แล้ว
// router.get('/get-brands', productController.getAllBrands);

module.exports = router;