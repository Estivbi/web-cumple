// Este es el código del servidor que recibe la fecha seleccionada por el usuario y la guarda en una base de datos, envía un correo electrónico, etc.
// Para ejecutar este código, necesitas tener instalado Node.js en tu computadora.
// Usa express para crear un servidor web y axios para hacer peticiones HTTP.
import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const app = express();
const { Pool } = pkg;
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: 'Obi1kenobi',
	port: 5432,
});

app.use(express.json());
// app.use(cors());
app.use(cors({origin: 'http://localhost:4321'}))

// Ruta para guardar la fecha seleccionada por el usuario "api"
app.post('/api/save-date', (req, res) => {
	const date = req.body.date;
	// Guardar la fecha en la base de datos
	pool.query('INSERT INTO dates (date) VALUES ($1)', [date], (error, results) => {
		if (error) {
			console.error(error);
			res.status(500).send('Error al guardar la fecha');
		} else {
			console.log(`Fecha seleccionada: ${date}`);
			res.status(200).send('Fecha guardada correctamente');
		}
	});
});

// Ruta para servir la aplicación web
app.listen(5000, () => console.log('Server running en http://localhost:5000/api/save-date'));