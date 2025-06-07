const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productosRoutes = require('./routes/productosRoutes');
const deseosRoutes = require('./routes/deseosRoutes');

const app = express();

// Middleware CORS simplificado y efectivo
app.use(cors({
  origin: true, // Permite cualquier origen (en desarrollo)
  credentials: true
}));

app.use(bodyParser.json());

// Rutas
app.use('/api/productos', productosRoutes);
app.use('/api/deseos', deseosRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});