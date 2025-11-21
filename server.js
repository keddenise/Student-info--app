// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));

// Replace these with your actual information
const studentInfo = {
  fullName: "Khate Denise A. Gonzales",
  classSection: "BA4105 - Section A",
  quotation: "Life asks nothing of us but to show up, feel it fully, and live it consciously; until the day we can't."
};

// Route to display student information
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Student Information</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #efede9 0%, #e6e4df 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.12);
          padding: 50px;
          max-width: 600px;
          width: 100%;
          animation: slideIn 0.6s ease-out;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        h1 {
          color: #04345a;
          margin-bottom: 10px;
          font-size: 2.5em;
          text-align: center;
          font-weight: 900;
        }
        
        .subtitle {
          text-align: center;
          color: #e29965;
          font-size: 0.9em;
          margin-bottom: 40px;
          font-weight: 500;
        }
        
        .info-card {
          background: #f8f9fa;
          border-left: 5px solid #e29965;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .info-card:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 32px rgba(226, 153, 101, 0.15);
        }
        
        .info-label {
          font-weight: 600;
          color: #e29965;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        
        .info-value {
          font-size: 1.3em;
          color: #04345a;
          line-height: 1.6;
          font-weight: 500;
        }
        
        .quote-card {
          background: linear-gradient(135deg, #04345a 0%, #032847 100%);
          color: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          margin-top: 30px;
          font-size: 1.1em;
          font-style: italic;
          line-height: 1.8;
          box-shadow: 0 16px 64px rgba(4, 52, 90, 0.2);
        }
        
        .quote-icon {
          font-size: 2em;
          margin-bottom: 15px;
        }
        
        footer {
          text-align: center;
          color: #999;
          margin-top: 40px;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📚 Student Information</h1>
        <p class="subtitle">Node.js Express Application</p>
        
        <div class="info-card">
          <div class="info-label">👤 Full Name</div>
          <div class="info-value">${studentInfo.fullName}</div>
        </div>
        
        <div class="info-card">
          <div class="info-label">📖 Class Section</div>
          <div class="info-value">${studentInfo.classSection}</div>
        </div>
        
        <div class="quote-card">
          <div class="quote-icon">✨</div>
          <div>"${studentInfo.quotation}"</div>
        </div>
        
        <footer>
          <p>Deployed with ❤️ using Node.js, Express, and Render</p>
        </footer>
      </div>
    </body>
    </html>
  `);
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
