Text-Based Mafia Bot
====================

Overview
--------

The **Text-Based Mafia Bot** is a Discord bot designed for playing the Mafia game entirely through text commands. This bot facilitates a fun and interactive game experience without requiring voice communication, allowing players to participate in day and night phases, vote, and perform role-specific actions.

Add the Bot to Your Server
--------------------------

Click here to add the bot to your Discord server.

Getting Started with Development
--------------------------------

Follow these steps to set up and run the bot on your local machine.

### Prerequisites

*   Node.js installed (LTS version recommended)
    
*   A Discord account and server
    
*   A bot token from the Discord Developer Portal
    

### Setup Instructions

1.  **Create a Discord Bot Token**
    
    *   Set up a bot through the Discord Developer Portal.
        
    *   For guidance, refer to [this tutorial](https://youtu.be/KZ3tIGHU314?si=6hSMe6iZLwZkR_-3).
        
2.  git clone https://github.com/RanaFahad01/text-mafia-bot.git
    
3.  npm install
    
4.  **Configure the Environment**
    
    *   Create a file named .env inside the src/ directory.
        
    *   TOKEN=YOUR\_TOKEN\_HERE
        
5.  node index.jsThe bot should now be active and connected to your Discord server.
    

Features
--------

*   **Text-Based Gameplay:** Play the Mafia game entirely through text commands.
    
*   **Automated Phases:** The bot manages the night and day cycles, including voting and actions.
    
*   **Role Management:** Assigns roles randomly to players, such as Mafia, Detective, Doctor, or Villager.
    
*   **Scalable:** Can be played with multiple players in a single Discord channel.
    

Commands
--------

Below are the key commands to interact with the bot:

*   **!startgame** - Start a new Mafia game.
    
*   **!join** - Join the current game.
    
*   **!leave** - Leave the ongoing game.
    
*   **!vote \[player\]** - Vote to eliminate a player during the day phase.
    
*   **!action \[target\]** - Perform a role-specific action (e.g., investigate or protect).
    
*   **!status** - View the current game status.
    
*   **!endgame** - End the ongoing game.
    

Contributing
------------

Contributions are welcome! Follow these steps to contribute:

1.  Fork the repository on GitHub.
    
2.  Create a feature branch for your changes.
    
3.  Implement and test your changes locally.
    
4.  Open a pull request with a detailed description of your changes.
    

License
-------

This project is licensed under the MIT License. See the LICENSE file for more details.

Troubleshooting
---------------

### Common Issues

*   **Bot Not Responding:**
    
    *   Ensure the bot token is correctly set in the .env file.
        
    *   Verify that the bot has the necessary permissions in your Discord server.
        
*   **Command Errors:**
    
    *   Check the bot’s logs for errors.
        
    *   Ensure all dependencies are installed by running npm install.
        

### Support

If you encounter any issues, feel free to raise an issue in the [GitHub repository](https://github.com/RanaFahad01/text-mafia-bot/issues).
