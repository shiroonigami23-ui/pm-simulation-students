const router = require('express').Router();
const User   = require('../models/User');
router.get('/',    async(req,res)=>{try{res.json(await User.find());}catch(e){res.status(500).json({error:e.message});}});
router.patch('/:id',async(req,res)=>{try{res.json(await User.findByIdAndUpdate(req.params.id,req.body,{new:true}));}catch(e){res.status(400).json({error:e.message});}});
router.delete('/:id',async(req,res)=>{try{await User.findByIdAndDelete(req.params.id);res.json({ok:true});}catch(e){res.status(500).json({error:e.message});}});
module.exports=router;
