const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const shiftRoutes = require('./routes/shift.routes');
const swapRoutes = require('./routes/swap.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} на ${req.url}`);
    next();
});


app.use('/users', userRoutes);
app.use('/shifts', shiftRoutes);
app.use('/swaps', swapRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Система активована</h1>');
});


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Внутрішня помилка сервера';

    console.error(`❌ Помилка: ${status} - ${message}`);

    res.status(status).json({
        success: false,
        status: status,
        message: message
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер на http://localhost:${PORT}`);
});
const ApiError = require("./utils/ApiError");


app.use((req, res) => {
    res.status(404).json({
        error: {
            code: "NOT_FOUND",
            message: "Route not found"
        }
    });
});


app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({
            error: {
                code: err.code,
                message: err.message,
                details: err.details
            }
        });
    }

    console.error(err);

    res.status(500).json({
        error: {
            code: "INTERNAL_ERROR",
            message: "Internal server error"
        }
    });
});