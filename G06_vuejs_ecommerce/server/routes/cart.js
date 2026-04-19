const router = require('express').Router();
// In-memory cart (per session) — replace with DB-backed session in production
const carts = {};
router.get('/:sessionId',   (req,res) => res.json(carts[req.params.sessionId] || []));
router.post('/:sessionId',  (req,res) => {
  const { sessionId } = req.params;
  if (!carts[sessionId]) carts[sessionId] = [];
  carts[sessionId].push(req.body);
  res.json(carts[sessionId]);
});
router.delete('/:sessionId',(req,res) => { delete carts[req.params.sessionId]; res.json({ok:true}); });
module.exports = router;
