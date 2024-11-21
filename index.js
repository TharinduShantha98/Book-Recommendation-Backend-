const User = require('./models/userModel');
const connectToDb  = require('./config/db')
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const { authenticateJWT } = require('./middlewares/authMiddleware');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const { Client, GatewayIntentBits } = require('discord.js');
const { handleCommand } = require('./routes/botRoutes');
require('dotenv').config();


const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const app = express();

//const client =  new Discord.Client();

app.use(express.json());

connectToDb();
app.get('/protect',authenticateJWT, (req, res) => {
    res.send('Hello, Node.js!')
});

app.use('/api/auth', authRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/reviews', reviewRoutes);



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Enables access to guild-related events
        GatewayIntentBits.GuildMessages, // Enables access to message-related events in guilds
        GatewayIntentBits.MessageContent, // Enables access to message content
    ],
});


const prefix = '!';

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
   
    console.log(command, args)
    try {
        await handleCommand(command, message, args);
    } catch (err) {
        console.error(err);
        message.reply('An error occurred while executing the command.');
    }
        

   
    
});



client.once('ready', () => {
    console.log('Bot is ready!');
});


// Log in the bot using your token
client.login(process.env.DISCORD_TOKEN);











const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



