import  Express  from "express";
const app = Express();
const port = 6969;
import authRoutes from '../Routes/authRoutes';

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  });
  
app.use('/', authRoutes);
  
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
  