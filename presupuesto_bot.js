const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("All Ok!");
 }); 

client.on("message", message =>{
  if (message.content.startsWith("!presupuesto") && message.content.length > 30){
    message.channel.send("Hola, ya estamos trabajando para recomendarte los mejores componentes y ayudarte en lo que nesecites, te estaremos enviando el resultado final lo antes posible, agradecemos tu comprenscion y pasiencia, mucha suerte!! :revolving_hearts: ");
  }
  else if(message.content.startsWith("!presupuesto") && message.content.length < 30){ 
  message.channel.send("Hola,muchas gracias por conctactarnos, pero debes darnos mas espesificaciones para poder elegir los mejores componentes para ti, por favor vuelve a escrbir el comando y luego se un poco mas espesifico, por ejemplo podrias colocar algo como !presupuesto de 500$ para una pc de edicion de videos, y nosotros nos ponderemos a trabajar para entregarte tu presupuesto lo antes posible :nerd: :smile: ");
  }
  }
);

client.on("message", message =>{
  if (message.content.startsWith("!mencion")) {
    let user = message.mentions.users.first();
    user.send("Tienes un presupuesto nuevo pendiente!")
  }
})

 client.login("ODAzNDI5OTUzOTYxNTkwODE1.YA9qdA.yLRx4XVt8nnnuVI_9GEyLguuwSg");