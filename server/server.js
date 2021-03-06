const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const gearRouter = require('./routes/gear.router');
const consumablesRouter = require('./routes/consumables.router')
const packsRouter = require('./routes/packs.router');
const categoriesRouter = require('./routes/categories.router');
const userCustomRouter = require('./routes/usercustom.router');
const headoutsRouter = require('./routes/headouts.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/gear', gearRouter);
app.use('/api/consumables', consumablesRouter);
app.use('/api/packs', packsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/usercustom', userCustomRouter);
app.use('/api/headouts', headoutsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
