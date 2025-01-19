import express from 'express';

import cors from 'cors';
const { test } = require('../controllers/authControllers')

const router = express.Router();
router.use(
   cors({
      credentials: true,
      origin: 'http://localhost:3000'
   })
)

router.get('/', test);
export default router;