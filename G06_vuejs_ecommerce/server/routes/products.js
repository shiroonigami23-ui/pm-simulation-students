const router = require('express').Router();
const Product = require('../models/Product');
router.get('/', async (req,res)=>{try{res.json(await Product.find());}catch(e){res.status(500).json({error:e.message});}});
router.post('/', async (req,res)=>{try{const p=new Product(req.body);await p.save();res.status(201).json(p);}catch(e){res.status(400).json({error:e.message});}});
module.exports = router;
