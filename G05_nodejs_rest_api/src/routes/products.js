const router = require('express').Router();
const auth   = require('../middleware/auth');
const Product= require('../models/Product');

router.get('/',    async (req,res) => { try{res.json(await Product.find());}catch(e){res.status(500).json({error:e.message});} });
router.get('/:id', async (req,res) => { try{const p=await Product.findById(req.params.id);if(!p)return res.status(404).json({error:'Not found'});res.json(p);}catch(e){res.status(400).json({error:e.message});} });
router.post('/',   auth, async (req,res) => { try{const p=new Product(req.body);await p.save();res.status(201).json(p);}catch(e){res.status(400).json({error:e.message});} });
router.put('/:id', auth, async (req,res) => { try{const p=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});res.json(p);}catch(e){res.status(400).json({error:e.message});} });
router.delete('/:id',auth,async(req,res)=>{ try{await Product.findByIdAndDelete(req.params.id);res.json({ok:true});}catch(e){res.status(500).json({error:e.message});} });

module.exports = router;
