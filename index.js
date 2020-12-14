const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

global.__basedir = __dirname;

const app = express();

app.use(
	cors({
		credentials: true,
		origin: true,
	})
);

app.use(
	express.urlencoded({
		extended: true,
	})
);

routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
