const discord = require('discord.js');
const client = new discord.Client();

client.login('ODYzMTcwMjU1OTg3NTM5OTY4.YOi_8Q.I13gkSfMq7RDsqAD4ajqhrPQ11s');

client.on('ready', ()=>{
	console.log('Connected to the bot');
});

var test = ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.co%2Fimages%2F7a6e76cbad1dc97068297277c43eb19c%2Fraw&f=1&nofb=1',
	'encore et toujours azzu',
	'starf ...',
	'Oh non pas lui ...'];

client.on('message', msg =>{
	if (msg.content.indexOf('allan') !== -1 || msg.content.indexOf('azzu') !== -1 ) {
		let reply = Math.floor(Math.random() * 4);
		msg.channel.send(test[reply]);
	}
	if (msg.content.indexOf('oka') !== -1 || msg.content.indexOf('loic') !== -1 ) {
		msg.channel.send('ca parle d\'un bg ici ?');
	}
});
// Pour generer un nouveau tokken : https://discord.com/developers/applications/863170255987539968/bot
