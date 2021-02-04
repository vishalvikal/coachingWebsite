const express = require('express')
const app     = express();
const cors    = require('cors')
const bodyParser = require('body-parser')
const PORT       = 8081
const errorHandler = require('./handlers/erroHandler')
const authRoutes = require('./routes/authRoutes');
const dashInfoRoute   = require('./routes/dashInfo');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/user/auth/', authRoutes)
app.use('/api/user/:id/dashinfo',dashInfoRoute)

app.use((req, res, next) => {
  let err = new Error("Not found");
  next(err);
})
app.use(errorHandler);

app.listen(PORT, ()=>{
  console.log(`server has started on ${PORT}`)
})