# riddleri

https://github.com/PhantomBot/PhantomBot/releases/tag/v3.4.7

1. Download PhantomBot from the link above and move all the data to this folder,
   ignoring everything that would be overwritten:

    - scripts/
    - launch.bat

1. If you have a previous PhantomBot configuration,
   **copy** and replace the following files and folders:

    - config/botlogin.txt
    - config/phantombot.db
    - dbbackup/

For developers:

1. Generate an OAuth token for your Twitch channel here:
   https://phantombot.github.io/PhantomBot/oauth/ (Connect with Twitch bot)

1. Run ./launch.bat, PhantomBot will ask you questions on your first launch

1. Refer to an existing config/botlogin.txt and your own OAuth token:

    - Bot's Twitch username: Riddleri
    - Bot's OAuth token: oauth=oauth\\:**TOKEN**, only paste the **TOKEN** part here (botlogin.txt)
    - Your own Twitch channel's OAuth token
    - Web panel username: Riddleri
    - Web panel password: Refer to botlogin.txt or use a custom one

1. You can access the PhantomBot Dashboard from https://localhost:25000

    - This will likely show a certificate warning, but since the client is local, it can be omitted
