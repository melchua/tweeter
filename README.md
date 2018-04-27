# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This was based on starter code from Lighthouse labs that laid out a structure with some routes defined. Using the structure I built out a Twitter clone.

The twitter clone allows the user to compose a tweet. When the user clicks on the "Tweet" button, the page updates itself without refreshing (using ajax); the new tweet is saved to a MongoDB.

This uses jQuery, AJAX, Node, Express and MongoDB.

## Screenshots

![Compose Tweet](https://github.com/melchua/tweeter/blob/master/docs/tweeter-composetweet.png?)

![Compose Hidden](https://github.com/melchua/tweeter/blob/master/docs/tweeter-hiddencompose.png)

![Hilighted Tweet](https://github.com/melchua/tweeter/blob/master/docs/tweeter-highlighted.png)

![Hilighted Tweet](https://github.com/melchua/tweeter/blob/master/docs/tweeter-highlighted.png)

![Initial Tweeter Window](https://github.com/melchua/tweeter/blob/master/docs/tweeter-main.png)

![Too Many Characters](https://github.com/melchua/tweeter/blob/master/docs/tweeter-toomanychars.png)


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
- mongodb
