const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public directory
app.use(express.static('public'));

// API Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Serve HTML for all other routes
app.get('*', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Express on Vercel</title>
                <style>
                    body {
                        font-family: -apple-system, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        margin: 0;
                        background: #f0f2f5;
                    }
                    .container {
                        text-align: center;
                        padding: 2rem;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    h1 { color: #1a73e8; }
                    .api-link {
                        display: inline-block;
                        margin-top: 1rem;
                        padding: 0.5rem 1rem;
                        background: #1a73e8;
                        color: white;
                        text-decoration: none;
                        border-radius: 4px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Express on Vercel</h1>
                    <p>Your app is running successfully!</p>
                    <a href="/api" class="api-link">Try the API</a>
                </div>
            </body>
        </html>
    `);
});

module.exports = app;