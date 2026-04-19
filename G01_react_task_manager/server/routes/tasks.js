const router = require('express').Router();
const Task = require('../models/Task');
router.get('/', async (req,res) => {{ try {{res.json(await Task.find().sort({{createdAt:-1}}));}} catch(e){{res.status(500).json({{error:e.message}});}} }});
router.post('/', async (req,res) => {{ try {{const t=new Task(req.body);await t.save();res.status(201).json(t);}} catch(e){{res.status(400).json({{error:e.message}});}} }});
router.patch('/:id', async (req,res) => {{ try {{res.json(await Task.findByIdAndUpdate(req.params.id,req.body,{{new:true}}));}} catch(e){{res.status(400).json({{error:e.message}});}} }});
router.delete('/:id', async (req,res) => {{ try {{await Task.findByIdAndDelete(req.params.id);res.json({{ok:true}});}} catch(e){{res.status(500).json({{error:e.message}});}} }});
module.exports = router;
