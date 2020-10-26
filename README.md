# Status-Cats-Discord
Allows you to get status code images from https://http.cat

This is currently a WIP and by no means finished!

You can add it to your Discord by following [this link](https://discord.com/api/oauth2/authorize?client_id=769939298371108895&permissions=2048&scope=bot)

![](https://user-images.githubusercontent.com/7063963/97112557-d6f61600-16dc-11eb-883c-7d4dee21541d.jpg)

# Usage
You can use a command like `!status 303` and if possible, it'll return the image from https://http.cat

# Limitations
* Currently this only runs off my local machine but I'll get it online in the coming days
* At the moment this relys on the data coming back from the url to be an unfurl. Which with a successful (200) status code returned from the server, is fine. With an unsuccessful, it redirects to a 404 page and this won't unfurl.
  - I need to modify this to just do a http get instead and if its a 200, send the url, if not, send back a "not valid"
