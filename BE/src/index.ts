import  Express  from "express";
const App = Express();
const port = 6969;

App.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  });
  
  App.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
  