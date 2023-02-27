const express = require('express')
const app = express()

var quoteBox = [

  {"quote": "I drink what I'm able. If that comes too much, that's the day's affair and the liquor's.", "by": "Calamity Jane"},
  {"quote": "This happens to be a rig and contraption of my own devising against repeated accidental falls which has temporarily malfunctioned.", "by": "Calamity Jane"},
  {"quote": "If I had that mug on me I believe I’d cut down getting told how butt f***in' ugly I was by not staring at strangers.", "by": "Calamity Jane"},
  {"quote": "I don't drink where I'm the only fucking one with balls.", "by": "Calamity Jane"},
  {"quote": "I won't be a drunk where he's buried, and I can't stay sober.", "by": "Calamity Jane"},
  {"quote": "Every day takes figuring out all over again how to fucking live.", "by": "Calamity Jane"},
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

  {"quote": "No law either against me breaking your fucking jaw if you don't quit it.", "by": "Seth Bullock"},
  {"quote": "Every bully I've ever met can't shut his fucking mouth. Except when he's afraid.", "by": "Seth Bullock"},
  {"quote": "You pie-faced cocksucker, get in here and account for your insult.", "by": "Seth Bullock"},
  {"quote": "People angry at their difficulties often act like fucking idiots.", "by": "Seth Bullock"},

]

// app.use(express.json)

app.get('/', (req, res) => {
  var ind = quoteBox.length * Math.random()
  ind = Math.floor(ind)
  res.json(quoteBox[ind])
})

app.get('/al', (req, res) => {
  var newBox = quoteBox.filter(q => q.by === 'Al Swearengen')
  var ind = newBox.length * Math.random()
  ind = Math.floor(ind)
  res.json(newBox[ind])
})

app.get('/jane', (req, res) => {
  var newBox = quoteBox.filter(q => q.by === 'Calamity Jane')
  var ind = newBox.length * Math.random()
  ind = Math.floor(ind)
  res.json(newBox[ind])
})

app.get('/bullock', (req, res) => {
  var newBox = quoteBox.filter(q => q.by === 'Seth Bullock')
  var ind = newBox.length * Math.random()
  ind = Math.floor(ind)
  res.json(newBox[ind])
})








var PORT = process.env.PORT || 3010

app.listen(PORT, () => console.log(`-----=====||||    Server Listening On PORT ${PORT}    ||||=====-----`))