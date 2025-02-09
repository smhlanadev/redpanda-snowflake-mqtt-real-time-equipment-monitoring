const mqtt = require('mqtt');

const options = {
  username: '<username>',
  password: '<password>',
};

const client = mqtt.connect('tls://<cluster_url>:8883', options);

client.on('message', function(topic, message) {
  console.log(String.fromCharCode.apply(null, message));
});

client.on('connect', () => {
  console.log('Connected!');
});

client.on('error', (error) => {
  console.log('Error:', error);
});

client.subscribe('temperature');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function publish(factory, equipmentId) {
  let temperature = (Math.random() * (100 - 30) + 30).toFixed(2);
  let timestamp = new Date().toISOString();
  const message = `{"FACTORY":"${factory}","EQUIPMENT_ID":"${equipmentId}","TEMPERATURE":"${temperature}","TIMESTAMP":"${timestamp}"}`;
  client.publish('temperature', message);
}

async function publishMessages() {
  for (let i = 1; i <= 1000; i++) {
    await delay(1000);
    publish("Riverton", "RVT-CNC-001");
    publish("Riverton", "RVT-HYD-001");
    publish("Riverton", "RVT-WLD-001");
    publish("Ironvale", "IRV-CNC-001");
    publish("Ironvale", "IRV-HYD-001");
    publish("Ironvale", "IRV-WLD-001");
    publish("Mechburg", "MCB-CNC-001");
    publish("Mechburg", "MCB-HYD-001");
    publish("Mechburg", "MCB-WLD-001");
  }
}

publishMessages();
