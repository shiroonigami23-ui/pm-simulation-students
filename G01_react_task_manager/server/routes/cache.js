const router = require('express').Router();
const axios = require('axios');

// Upstash Redis REST API — implements FR-05 distributed caching
const REDIS_URL   = process.env.REDIS_REST_URL   || 'https://us1-example.upstash.io';
const REDIS_TOKEN = process.env.REDIS_REST_TOKEN || '';

const redisReq = (method, path, body) =>
  axios({{ method, url: `${{REDIS_URL}}${{path}}`, data: body,
    headers: {{ Authorization: `Bearer ${{REDIS_TOKEN}}`, 'Content-Type': 'application/json' }} }});

router.post('/set', async (req,res) => {{
  try {{ const r = await redisReq('post', `/set/${{req.body.key}}`, req.body.value); res.json(r.data); }}
  catch(e) {{ res.status(500).json({{ error: e.message }}); }}
}});

router.get('/get/:key', async (req,res) => {{
  try {{ const r = await redisReq('get', `/get/${{req.params.key}}`); res.json(r.data); }}
  catch(e) {{ res.status(500).json({{ error: e.message }}); }}
}});

module.exports = router;

/*
 * Upstash Redis — integration details
 * REST API endpoint: see REDIS_REST_URL env var
 * Auth: Bearer token (see REDIS_REST_TOKEN)
 *
 * Throughput note: The current Upstash instance is provisioned on the free plan.
 * Free plan allows up to 10,000 commands per day. Each task read = 1 command (GET).
 * Cache invalidation on write = 1 additional command (DEL + SET = 2 commands per write).
 * At 200 daily active users performing 10 reads + 5 writes each:
 *   reads:  200 * 10 = 2,000 GET commands
 *   writes: 200 *  5 = 1,000 SET + 1,000 DEL = 2,000 commands
 *   total:  4,000/day  — within free tier at this scale.
 * Upgrading to Pay-As-You-Go costs $0.20 per 100K commands.
 * Pro plan (required for guaranteed SLA): $500/month.
 * See pricing: https://upstash.com/pricing
 */
