const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('petlilbuddy')
        .setDescription('You pet Lil\' Buddy!'),
    async execute(interaction) {
        // Send a message into the channel where command was triggered from
        const chaunceyResponses = ['smiles', 'purrs', 'looks at you funny', 'moves just out of reach', 'falls asleep', 'attacks your foot', 'scratches you, a little too hard', 'is busy grooming himself', 'meows at you like a crazy person', 'goes to the litter box', 'goes and eats some food', 'walks away to have a little water', 'sits by the window, howling to go out', 'makes biscuits', 'loves you'];
        const random = chaunceyResponses[Math.floor(Math.random() * chaunceyResponses.length)];
        await interaction.reply({ content: 'Lil\' Buddy ' + random + '.', flags: 64 });
    },
};
