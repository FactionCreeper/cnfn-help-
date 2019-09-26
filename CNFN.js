const { Client, Util } = require('discord.js');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("TOKEN");

bot.on("ready", function() {
console.log(`${bot.user.username} is Online!`);
//cd FactionCreeperBot
//node FactionCreeper.js
bot.user.setActivity("!.Help")
});

bot.on("message", function(message) {
	if(message.content.toLowerCase() == "!!!.dm") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`Attempting to DM through selfbot API`)
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send(`${member1} 
			_____________________________________
			Welcome to our server Have a great day, invite your friends to gain more ability on the server :3 
			https://discord.gg/sr2eBEQ
			https://imgur.com/NqPnaKu
			_____________________________________
			And if you are already in these discords please advertise/spread it! :smile:`)
		
		});
	}
	});

bot.on("guildMemberAdd", member => {

	var role = member.guild.roles.find ("name", "Homan");
	member.addRole (role);

});

	bot.on('message', function(message){

		if(message.content == '!!!.fr') 
		{ 
			let memberRole = message.member.guild.roles.find("name" , "Bot");
			message.member.addRole(memberRole);
			}
		});
	
	bot.on("message", function(message) {

		if(message.content === 'ping')  
		{
			message.channel.send('Pong!');
			}
	});

	bot.on("message", function(message) {

		if(message.content === 'hi') 
		{
			message.reply('Hello!');
			}
		});
	
	bot.on("message", function(message) {

		if(message.content === '!.invite') 
		{
			message.channel.send('https://discordapp.com/oauth2/authorize?client_id=602614829307527188&scope=bot&permissions=8');
			}
		if(message.content === '!.Invite') 
		{
			message.channel.send('https://discordapp.com/oauth2/authorize?client_id=602614829307527188&scope=bot&permissions=8');
			}
		});	

	bot.on("message", function(message) {

		if(message.content === '!.discord')
		{
			message.channel.send(`
			-------------------------------
Welcome to our server Have a great day, invite your friends to gain more ability on the server :3 
https://discord.gg/sr2eBEQ
https://imgur.com/NqPnaKu
-------------------------------`);
			}
		if(message.content === '!.Discord')
		{
			message.channel.send(`
			-------------------------------
Welcome to our server Have a great day, invite your friends to gain more ability on the server :3 
https://discord.gg/sr2eBEQ
https://imgur.com/NqPnaKu
-------------------------------`);
			}
		});
		
		bot.on("message", function(message) {

		if(message.content === '!.Help')
		{
			message.channel.send('```|!.help|!.invite|!.discord|!.play```')
			}
		if(message.content === '!.help')
		{
			message.channel.send('```|!.help|!.invite|!.discord|!.play|```')
			}
		});

		bot.on('message', message => {
			// Ignore messages that aren't from a guild
			if (!message.guild) return;
		  
			// If the message content starts with "!kick"
			if (message.content.startsWith('!!!.kick')) {
			  // Assuming we mention someone in the message, this will return the user
			  // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
			  const user = message.mentions.users.first();
			  // If we have a user mentioned
			  if (user) {
				// Now we get the member from the user
				const member = message.guild.member(user);
				// If the member is in the guild
				if (member) {
				  /**
				   * Kick the member
				   * Make sure you run this on a member, not a user!
				   * There are big differences between a user and a member
				   */
				  member.kick('Optional reason that will display in the audit logs').then(() => {
					// We let the message author know we were able to kick the person
					message.reply(`Successfully kicked ${user}`);
				  }).catch(err => {
					// An error happened
					// This is generally due to the bot not being able to kick the member,
					// either due to missing permissions or role hierarchy
					message.reply('I was unable to kick the member');
					// Log the error
					console.error(err);
				  });
				} else {
				  // The mentioned user isn't in this guild
				  message.reply('That user isn\'t in this guild!');
				}
			  // Otherwise, if no user was mentioned
			  } else {
				message.reply('You didn\'t mention the user to kick!');
			  }
			}
			});
			
			bot.on('message', message => {
				// Ignore messages that aren't from a guild
				if (!message.guild) return;
			
				// If the message content starts with "!!!.ban"
				if (message.content.startsWith('!!!.ban')) {
					// Assuming we mention someone in the message, this will return the user
					// Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
					const user = message.mentions.users.first();
					// If we have a user mentioned
					if (user) {
						// Now we get the member from the user
						const member = message.guild.member(user);
						// If the member is in the guild
						if (member) {
							/**
							 * Ban the member
							 * Make sure you run this on a member, not a user!
							 * There are big differences between a user and a member
							 */
							member.ban('Optional reason that will display in the audit logs').then(() => {
								// We let the message author know we were able to Ban the person
								message.reply(`Successfully Banned ${user}`);
							}).catch(err => {
								// An error happened
								// This is generally due to the bot not being able to Ban the member,
								// either due to missing permissions or role hierarchy
								message.reply('I was unable to ban the member');
								// Log the error
								console.error(err);
							});
						} else {
							// The mentioned user isn't in this guild
							message.reply('That user isn\'t in this guild!');
						}
					// Otherwise, if no user was mentioned
					} else {
						message.reply('You didn\'t mention the user to ban!');
					}
				}
				});

				bot.on('message', message => {
					// Voice only works in guilds, if the message does not come from a guild,
					// we ignore it
					if (!message.guild) return;
				
					if (message.content === '!.joinvc') {
						// Only try to join the sender's voice channel if they are in one themselves
						if (message.member.voiceChannel) {
							message.member.voiceChannel.join()
								.then(connection => { // Connection is an instance of VoiceConnection
									message.reply('I have successfully connected to the channel!');
								})
								.catch(console.log);
						} else {
							message.reply('You need to join a voice channel first!');
						}
					}

					if (!message.guild) return;
				
					if (message.content === '!.joinVC') {
						// Only try to join the sender's voice channel if they are in one themselves
						if (message.member.voiceChannel) {
							message.member.voiceChannel.join()
								.then(connection => { // Connection is an instance of VoiceConnection
									message.reply('I have successfully connected to the channel!');
								})
								.catch(console.log);
						} else {
							message.reply('You need to join a voice channel first!');
						}
					}
				});

				bot.on('message', message => {
					// Voice only works in guilds, if the message does not come from a guild,
					// we ignore it
					if (!message.guild) return;
				
					if (message.content === '!.leavevc') {
						// Only try to Leave the sender's voice channel if they are in one themselves
						if (message.member.voiceChannel) {
							message.member.voiceChannel.leave()
								.then(connection => { // Connection is an instance of VoiceConnection
									message.reply('I have successfully Disconnected from the channel!');
								})
								.catch(console.log);
						} else {
							message.reply('You need to join a voice channel first!');
						}
					}

					if (!message.guild) return;
				
					if (message.content === '!.leaveVC') {
						// Only try to Leave the sender's voice channel if they are in one themselves
						if (message.member.voiceChannel) {
							message.member.voiceChannel.leave()
								.then(connection => { // Connection is an instance of VoiceConnection
									message.reply('I have successfully Disconnected from the channel!');
								})
								.catch(console.log);
						} else {
							message.reply('You need to join a voice channel first!');
						}
					}
				});

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try { 
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}

client.login(TOKEN);
