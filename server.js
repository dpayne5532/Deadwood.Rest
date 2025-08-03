const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000

var quoteBox = [

  {"quote": "I drink what I'm able. If that comes too much, that's the day's affair and the liquor's.", "by": "Calamity Jane"},
  {"quote": "This happens to be a rig and contraption of my own devising against repeated accidental falls which has temporarily malfunctioned.", "by": "Calamity Jane"},
  {"quote": "If I had that mug on me I believe I’d cut down getting told how butt f***in' ugly I was by not staring at strangers.", "by": "Calamity Jane"},
  {"quote": "I don't drink where I'm the only fucking one with balls.", "by": "Calamity Jane"},
  {"quote": "I won't be a drunk where he's buried, and I can't stay sober.", "by": "Calamity Jane"},
  {"quote": "Every day takes figuring out all over again how to fucking live.", "by": "Calamity Jane"},
  {"quote": "If I had that mug on me I believe I’d cut down gettin told how butt fuckin ugly I was by not staring at strangers.", "by": "Calamity Jane"},
  {"quote": "I dreamt last night that I was climbing a creek-bank, which is often required of a drunk...", "by": "Calamity Jane"},
  {"quote": "Yeah, I'm gonna be Queen Hooker. You're a keen fucking student of the human scene, Charlie!", "by": "Calamity Jane"},
  {"quote": "This happens to be a rig and contraption of my own devising against repeated accidental falls which has temporarily malfunctioned.", "by": "Calamity Jane"},

  {"quote": "Welcome to fucking Deadwood!", "by": "Al Swearengen"},
  {"quote": "Don't forget to kill Tim.", "by": "Al Swearengen"},
  {"quote": "You see me empty, sir, do not pause and inquire. Simply assume and refill.", "by": "Al Swearengen"},
  {"quote": "God rest the souls of that poor family… and pussy's half price for the next 15 minutes.", "by": "Al Swearengen"},
  {"quote": "In life you have to do a lot of things you don’t f**king want to do. Many times, that’s what the f**k life is… one vile f**king task after another.", "by": "Al Swearengen"},
  {"quote": "Announcing your plans is a good way to hear God laugh.", "by": "Al Swearengen"},
  {"quote": "The world ends when you’re dead. Until then, you got more punishment in store. Stand it like a man… and give some back.", "by": "Al Swearengen"},
  {"quote": "You can't slit the throat of everyone whose character it would improve.", "by": "Al Swearengen"},
  {"quote": "Change ain't looking for friends. Change calls the tune we all dance to.", "by": "Al Swearengen"},
  {"quote": "Bloodletting on my premises that I ain't approved I take as a fucking affront. It puts me off my feed.", "by": "Al Swearengen"},
  {"quote": "Yeah, the cut throats and the pigs. But who wants all that blood spilled, judge, huh? Isn't there a simpler way of not pissing off the big vipers?", "by": "Al Swearengen"},
  {"quote": "The direction of my thoughts–with the sustained fucking stupidity that you’re exhibiting, I hesitate to voice them–is that you might want to train for Phil’s former position.", "by": "Al Swearengen"},
  {"quote": "Pain or damage don't end the world. Or despair or fucking beatings. The world ends when you're dead. Until then, you got more punishment in store. Stand it like a man... and give some back.", "by": "Al Swearengen"},

  {"quote": "No law either against me breaking your fucking jaw if you don't quit it.", "by": "Seth Bullock"},
  {"quote": "Every bully I've ever met can't shut his fucking mouth. Except when he's afraid.", "by": "Seth Bullock"},
  {"quote": "You pie-faced cocksucker, get in here and account for your insult.", "by": "Seth Bullock"},
  {"quote": "People angry at their difficulties often act like fucking idiots.", "by": "Seth Bullock"},
  {"quote": "Any more gunplay gets answered. You call the law in Sampson, you don't get to call it off just cause you're liquored up and popular on payday.", "by": "Seth Bullock"},

  {"quote": "Sure you wanna quit playing, Jack? The game's always between you and getting called a cunt.", "by": "Wild Bill Hickok"},
  {"quote": "That dropped eye of yours looks like the hood on a cunt to me, Jack. When you talk, your mouth looks like a cunt moving.", "by": "Wild Bill Hickok"},
  {"quote": "Some goddamn point a man's due to stop arguing with his-self and feeling twice the goddamn fool he knows he is 'cause he can't be something he tries to be every goddamn day without once getting to dinnertime and fucking it up. I don't want to fight it anymore, understand me Charlie? And I don't want you pissing in my ear about it. Can you let me go to hell the way I want to?.", "by": "Wild Bill Hickok"},
  
  {"quote": "San Francisco Cocksucker!", "by": "Mr. Wu"},
  {"quote": "Heng Dai 🤞", "by": "Mr. Wu"},

  {"quote": "Sayin' questions in that tone and pointin' your finger at me will get you told to fuck yourself.", "by": "Cy Tolliver"},

  {"quote": "My bicycle masters boardwalk and quagmire with aplomb. Those that doubt me... suck cock by choice.", "by": "Tom Nuttall"},

  {"quote": "Fuck every fuckin' one of you. I wish I was a fuckin' tree.", "by": "Trixie"},
  {"quote": "Tread lightly who lives in hope of pussy.", "by": "Trixie"},
  {"quote": "The bank's founder and president, Chief Officer as well, of air-headed smugness and headlong plunges unawares into the fucking abyss.", "by": "Trixie"},

  {"quote": "Oh I speak French...", "by": "Joanie"}


]

app.use(express.static(path.join(__dirname, 'public')));


// --- Middleware: Request Logger ---
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    let clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (clientIp?.includes(',')) {
      clientIp = clientIp.split(',')[0].trim();
    }


    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} ${res.statusCode} - ${clientIp} (${duration}ms)\n`;
    fs.appendFile(path.join(__dirname, 'access.log'), logEntry, err => {
      if (err) console.error('Logging failed:', err);
    });
  });
  next();
});


// --- Routes ---
app.get('/', (req, res) => {
  const ind = Math.floor(Math.random() * quoteBox.length);
  const result = quoteBox[ind];
  result.for = "Kayla";
  res.json(result);
});

app.get('/al', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Al Swearengen');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  res.json(result);
});

app.get('/jane', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Calamity Jane');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  res.json(result);
});

app.get('/bullock', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Seth Bullock');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  res.json(result);
});

app.get('/joanie', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Joanie');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  res.json(result);
});

app.get('/trixie', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Trixie');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  res.json(result);
});

app.get('/wu', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Mr. Wu');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  res.json(result);
});

app.get('/wildbill', (req, res) => {
  const filtered = quoteBox.filter(q => q.by === 'Wild Bill Hickok');
  const result = filtered[Math.floor(Math.random() * filtered.length)];
  result.for = "Kayla";
  res.json(result);
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`-----=====||||    Server Listening On PORT ${PORT}    ||||=====-----`);
});