# Node API

This repo is for learning purpose. My first project using nodeJs and in this application I built a simple crud project using express and mongoDb.

## Getting Started

### Prerequisites

If you don't have nodeJs instaled on your machine follow the next steps:

```
// Ubuntu
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install nodejs

// macOS
brew install node

// Windows 
choco install nodejs

```

### Installing

Firt clone the repositort
```
git clone https://github.com/geraldobraz/node-api.git
```
Then type the follow commands:

```
cd node-api
npm install
npm run start-watch
```

## Deployment

For this project I decided to use a the [zeit](https://zeit.co) to deploy my application on [node-api](https://node-api.geraldobraz.now.sh/)

To deploy your application you need to run the following commands:

```
npm install -g now
now
```
## Built With

* [nodeJs](https://nodejs.org/en/)
* [express](https://expressjs.com/)
* [mongoDb](https://www.mongodb.com/)
* [Zeit](https://zeit.co/)

## Authors

* **Geraldo Braz** - *Initial work* - [geraldobraz](https://github.com/geraldobraz)
