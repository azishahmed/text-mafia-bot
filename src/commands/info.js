// info.js: Provides information about the bot.
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    // Basic command info
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Display info about Text-Based Mafia Bot'),

    /**
     * Execute the "info" command.
     *
     * @param {Object} options - Options object containing required parameters.
     * @param {import('discord.js').CommandInteraction} options.interaction - The interaction object that triggered the command.
     * @param {import('discord.js').Client} options.client - The Discord client instance.
     * @param {Object} options.handler - Custom handler for additional functionality.
     */
    run: async ({ interaction, client, handler }) => {
        // NOTE: Don't mess with the indentation!
        // I know it looks ugly, but the Discord parser messes up if there's any unnecessary indentation.
        return interaction.reply({
            content: `## The Text-Based Mafia Bot
Play a game of mafia right in the comfort of your Discord server, without the need for voice chat!

### Requirements to run the \`start-mafia-game\` command:
- The user calling the command must have the \`Manage Channels\` permission.
- A game of mafia can have a maximum of 10 players.
- There cannot be two games of Mafia in progress at the same time in the same server.
- There must not be another channel named \`tb-mafia-bot-game\` in the server. Either there's a game already going on, or you need to rename that channel.
- The bot must have these permissions at the channel level:
  - \`View Channel\`
  - \`Send Messages\`
  - \`Manage Messages\`
- The bot must have these permissions at the server level:
  - \`Manage Roles\`
  - \`Manage Channels\``,
            ephemeral: true,
        });
    },
};
