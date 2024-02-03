const Joi = require('joi');
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const characters = [
  { id: 1, name: 'Luke Skywalker' },
  { id: 2, name: 'C-3P0' },
  { id: 3, name: 'Darth Vader' },
  // ... other characters
];

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/api/characters', (req, res) => {
  res.send(characters);
});

app.post('/api/characters', async (req, res) => {
  const characterName = req.body.name;

  const characterExists = characters.some((c) => c.name === characterName);
  if (characterExists) {
    res.status(404).send('The character already exists');
    return;
  }

  try {
    const swapiResponse = await axios.get(`https://swapi.dev/api/people/?search=${characterName}`);
    const swapiCharacters = swapiResponse.data.results;

    if (swapiCharacters.length === 0) {
      res.status(404).send('The character does not exist on swapi.dev');
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
    return;
  }

  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const character = {
    id: characters.length + 1,
    name: req.body.name
  };
  characters.push(character);
  res.send(character);
});


app.put('/api/characters/swap', (req, res) => {
  const { characterId1, characterId2 } = req.body;

  const character1 = characters.find(c => c.id === characterId1);
  const character2 = characters.find(c => c.id === characterId2);

  if (!character1 || !character2) {
    return res.status(404).send('Characters not found');
  }

  // Swap the characters
  [character1.name, character2.name] = [character2.name, character1.name];

  res.send('Characters swapped successfully');
});

app.get('/api/characters/:id', (req, res) => {
  const character = characters.find(c => c.id === parseInt(req.params.id));
  if (!character) res.status(404).send('The character does not exist');
  res.send(character);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening ${port}...`));
