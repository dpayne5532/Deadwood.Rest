app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} ${res.statusCode} - ${req.ip} (${duration}ms)\n`;
    fs.appendFile(path.join(__dirname, 'access.log'), logEntry, err => {
      if (err) console.error('Logging failed:', err);
    });
  });
  next();
});

// --- Helper: Action Logger ---
function logAction(message) {
  const logLine = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFile(path.join(__dirname, 'access.log'), logLine, err => {
    if (err) console.error('Logging failed:', err);
  });
}

// --- Routes ---
app.get('/', (req, res) => {
  const ind = Math.floor(Math.random() * quoteBox.length);
  const result = quoteBox[ind];
  result.for = "Kayla";
  logAction("Endpoint hit: /");
  res.json(result);
});

app.get('/al', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Al Swearengen');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  logAction("Endpoint hit: /al");
  res.json(result);
});

app.get('/jane', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Calamity Jane');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  logAction("Endpoint hit: /jane");
  res.json(result);
});

app.get('/bullock', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Seth Bullock');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  logAction("Endpoint hit: /bullock");
  res.json(result);
});

app.get('/joanie', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Joanie');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  logAction("Endpoint hit: /joanie");
  res.json(result);
});

app.get('/trixie', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Trixie');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  logAction("Endpoint hit: /trixie");
  res.json(result);
});

app.get('/wu', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Mr. Wu');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  logAction("Endpoint hit: /wu");
  res.json(result);
});

app.get('/wildbill', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Wild Bill Hickok');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  logAction("Endpoint hit: /wildbill");
  res.json(result);
});


app.listen(PORT, () => {
  console.log(`-----=====||||    Server Listening On PORT ${PORT}    ||||=====-----`);
  logAction(`Server started on port ${PORT}`);
});