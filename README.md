# Interface-of-things
All code and documentation of the IoT project 2018

## Chatbot
Gemaakt via chatfuel.com

## Aansturen van arduino
* linken vanuit Chatfuel via de JSON-blok naar: https://guarded-oasis-73364.herokuapp.com/api?field1={{kleur}}
* Op deze express server staat het programaatje: app.js
* Dit stuurt de info door naar https://thingspeak.com/channels/432121
* en stuurt een bericht terug naar Chatfuel in Json
* App.js bevat ook de code om thinkspeak info opnieu uit te lezen
