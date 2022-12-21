const { InteractionResponseType } = require('discord-interactions');
module.exports = {
	name: "greatings_ping",
	description: "Great Tricksy... she will great you back :>",
	options: [],
	async execute(interaction, res) {
		return res.send({
			type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
				content: `Ayo ${interaction.member.user.username}what´s up!`,
			},
		});
	}
}