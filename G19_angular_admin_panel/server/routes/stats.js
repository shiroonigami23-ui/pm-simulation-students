const router = require('express').Router();
const User   = require('../models/User');
router.get('/', async(req,res)=>{
  try {
    const [total,active,admins] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({active:true}),
      User.countDocuments({role:'admin'}),
    ]);
    const weekAgo = new Date(Date.now()-7*24*60*60*1000);
    const newWeek = await User.countDocuments({createdAt:{$gte:weekAgo}});
    res.json({users:total,active,admins,newWeek});
  } catch(e){res.status(500).json({error:e.message});}
});
module.exports=router;
