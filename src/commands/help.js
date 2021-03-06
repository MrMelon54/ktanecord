const { embed } = require('../utils')
const config = require('../../config.json')

module.exports.run = (client, message, args) => {
    message.channel.send(embed.getEmbed("Help",{
			helpCMD: `\`${config.token}help\``,
			pingCMD: `\`${config.token}ping\``,
			repoCMD: `\`${config.token}repo\``,
			statsCMD: `\`${config.token}tp stats [player] [streamer]\``,
			statsValue: `<:Twitch:702495822281048129> Shows player statistics on Twitch Plays (For a list of streamers use \`${config.token}tp streamers\`)`,
			b: '\u200b'
		}))
}
