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
const cors = require("cors");

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const app = express();

//const client =  new Discord.Client();

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000", // Allow only this origin
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    })
  );

  
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

    try {
        const messageContent = message.content; 
        const content = messageContent.slice(prefix.length).trim();
        console.log('Content:', content);
        let args = content
            .split('_') 
            .filter((item) => item.trim() !== '') 
            .map((item) => item.trim());

        console.log('Arguments before removal:', args);
        args.shift();
        console.log('Arguments after removal:', args);
        const command = content.split(' ')[0]; 
        console.log('Command:', command);
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











const PORT = process.env.PORT || 8080; // Use Azure-assigned PORT or default to 8080 for local testing
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



