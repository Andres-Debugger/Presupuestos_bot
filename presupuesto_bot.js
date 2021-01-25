const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("All Ok!");
 }); 

client.on("message", message =>{
  if (message.content.startsWith("!presupuesto" && message.content.length > 20) ){
    let canal = client.channels.find(channel => channel.id === ("798538174317592586"));
    canal.send("Hola, ya <@"+ 790971521178402826 +"estan trabajando para recomendarte los mejores componentes y ayudarte en lo que nesecites, te estaremos enviando el resultado final lo antes posible, agradecemos tu comprenscion y pasiencia, mucha suerte!! :revolving_hearts: ");
    let user = message.mentions.users.first();
    user.send("Tienes un presupuesto por hacer")

  }
  else if(message.content.startsWith("!presupuesto") && message.content.length < 18){ 
  let canal = client.channels.find(channel => channel.id === ("798538174317592586"));
  canal.send("Hola,muchas gracias por conctactarnos, pero debes darnos mas espesificaciones para poder elegir los mejores componentes para ti, por favor vuelve a escrir el comando y luego se un poco mas espesifico, por ejemplo podrias colocar algo como !presupuesto de 500$ para una pc de edicion de videos, y nosotros nos ponderemos a trabajar para entregarte tu presuouesto lo antes posibole :nerd: :smile: ");
  }
  }
);

 client.login("Tu Token va aqui");