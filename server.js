const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

// Initialize App
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Frontend')));

// ==========================================
// MONGODB SETUP 
// ==========================================
// Connect when ready:
// mongoose.connect('mongodb://localhost:27017/autoleads')
// .then(() => console.log('MongoDB Connected successfully!'))
// .catch(err => console.error('MongoDB connection error:', err));

// const leadSchema = new mongoose.Schema({ name: String, type: String, budget: String, score: String, date: { type: Date, default: Date.new } });
// const Lead = mongoose.model('Lead', leadSchema);

// ==========================================
// WEBSOCKETS (Real-time Dashboard)
// ==========================================
io.on('connection', (socket) => {
    console.log('Admin connected to dashboard:', socket.id);
    
    // Simulate initial data load when a client connects
    socket.emit('initial_data', [
        { name: "Demo Lead 1", type: "SUV", budget: "15 lakh", score: "Hot" },
        { name: "Demo Lead 2", type: "Sedan", budget: "10 lakh", score: "Warm" }
    ]);

    socket.on('disconnect', () => console.log('Admin disconnected'));
});

// ==========================================
// API ROUTES
// ==========================================

// Serve Frontend Pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Frontend', 'login.html')));
app.get('/index', (req, res) => res.sendFile(path.join(__dirname, 'Frontend', 'index.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'Frontend', 'dashboard.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'Frontend', 'admin.html')));

// Simple mock JWT Login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if(email === 'admin@autoleads.ai' && password === 'admin123') {
        const token = jwt.sign({ user: email }, 'mtech_super_secret', { expiresIn: '1h' });
        return res.json({ success: true, token, redirect: '/dashboard' });
    }
    res.status(401).json({ success: false, message: 'Invalid Credentials.' });
});

// Webhook endpoint for n8n to send processed data back to the server
app.post('/api/webhook/n8n-response', async (req, res) => {
    const processedLead = req.body;
    
    console.log("New lead received from n8n:", processedLead);

    // 1. Database Save Example (Uncomment when MongoDB is running)
    // await Lead.create(processedLead);
    
    // 2. Push real-time update to Dashboard instantly
    io.emit('new_lead_processed', processedLead);
    
    res.status(200).json({ success: true, message: "Lead captured and pushed to dashboard via WebSockets." });
});

// Start Server
server.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Server Online`);
    console.log(`🌐 Accessible at http://localhost:${PORT}`);
    console.log(`=========================================`);
});
