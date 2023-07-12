// import dependencies
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
// import route
const pokemonRoute = require("./routes/pokemon.routes.js");

// constructing our server
dotenv.config();
const server = express();
const PORT = process.env.PORT || 4000;

// defining middleware
server.use(express.json());
server.use(cors());

// use routes
server.get("/", (req, res) => {
	res.send({
		message:
			"This is the official Pokedex Server. To learn more about this Server, feel free to read our documentation!",
	});
});
server.use("/pokemon", pokemonRoute);

// run server
server.listen(PORT, () => {
	console.log(`Serving running on localhost:${PORT}`);
});
