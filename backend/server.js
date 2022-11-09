import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./models/db.model.js";
import SequelizeStore from "connect-session-sequelize";

import CompanyRoute from './routes/company.router.js';
import ReportRoute from './routes/report.router.js';

dotenv.config()
// global.__basedir = __dirname + "/..";

const app = express();

const SessionStore = SequelizeStore(session.Store);

const store = new SessionStore({
    db: db
});

(async() => {
    await db.sync();
})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto',
        maxAge: 3600000
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json()); // parses incoming requests with JSON payloads

app.use(CompanyRoute);
app.use(ReportRoute);

store.sync();

const listener = app.listen(process.env.APP_PORT || 6868, () => {
    console.log('App is listening on port ' + listener.address().port)
});
