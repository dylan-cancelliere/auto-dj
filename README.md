# AutoDJ

## What is AutoDJ?
The inspiration for **AutoDJ** came from the frustration that insues whenever I'm with a few friends and we can't decide what music to play.  **AutoDJ** is an app that lets you join a lobby with your friends, add songs to a queue, and then vote on them.  The songs with the most votes get played first, and the songs with the least get played last.  Mostly this is just an excuse so that when someone complains about my music taste I can say they should have downvoted it and maybe it wouldn't have played.

## Tech Stack
**AutoDJ** uses plain old [React](https://reactjs.org/) for the frontend, and [NodeJS](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) for the backend.  The plan is to transition to [React Native](https://reactnative.dev/) in the future for better mobile support, but that's still a while out.

## Setup
If you want to run **AutoDJ** on your machine, the following steps should get you up and running fairly quickly (Eventually the site will be hosted on [AutoDJ.io](https://www.autodj.io))

1. Clone the repo
2. Navigate to the directory and run `npm install` in the root directory
  * Note that you might need to run `npm install` again in the client subfolder, but not running that on setup didn't seem to affect anything on my machine during testing, but ymmv
3. Go back to the root directory and run `npm run dev`.  By default, this will start a server at `localhost:5000` and run the page at `localhost:3000` (so you should type in `localhost:3000` in your browser if you want to go to the site)

That's it!  You should be able to click the **Login with Spotify** button to get authenticated, and then you're good to go!

Feel free to contact me [@dylan-cancelliere](https://github.com/dylan-cancelliere) if you have any questions, or open an issue/pr if you want to help out.
