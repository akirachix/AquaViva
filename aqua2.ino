#include <ESP8266WiFi.h>
#include "ThingSpeak.h"
//#include <PubSubClient.h>
// Update these with values suitable for your network.
const char* ssid = "CodeHive";
const char* password = "codehive";
//const char* mqtt_server = "mqtt3.thingspeak.com";
//char* mqtt_username = "ICEBEBcoCjgxMR8ZEiMFNjE";
//char* mqtt_password = "S4g52szyfLLBOkIoQfw8D76O" ;
//char* clientId = "ICEBEBcoCjgxMR8ZEiMFNjE";
WiFiClient espClient;
//PubSubClient client(espClient);
const char * myWriteAPIKey = "V0Y20EPMURY03ZWU";
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE (50)
char msg[MSG_BUFFER_SIZE];
int value = 0;
/* Declare variables to use with button state detection */
/*------------------------------------------------------*/
int button1State, button2State, button3State;
#define button1 D5
#define button2 D6
#define button3 D7
/*------------------------------------------------------*/
void setup_wifi() {
delay(10);
// We start by connecting to a WiFi network
Serial.println();
Serial.print("Connecting to ");
Serial.println(ssid);
WiFi.mode(WIFI_STA);
WiFi.begin(ssid, password);
while (WiFi.status() != WL_CONNECTED) {
delay(500);
Serial.print(".");
}
randomSeed(micros());
Serial.println("");
Serial.println("WiFi connected");
Serial.println("IP address: ");
Serial.println(WiFi.localIP());
}
void callback(char* topic, byte* payload, unsigned int length) {
Serial.print("Message arrived [");
Serial.print(topic);
Serial.print("] ");
for (int i = 0; i < length; i++) {
Serial.print((char)payload[i]);
}
Serial.println();
// Switch on the LED if an 1 was received as first character
if ((char)payload[0] == '1') {
digitalWrite(BUILTIN_LED, LOW); // Turn the LED on (Note that LOW is the voltage level
// but actually the LED is on; this is because
// it is active low on the ESP-01)
} else {
digitalWrite(BUILTIN_LED, HIGH); // Turn the LED off by making the voltage HIGH
}
}
void reconnect() {
// Loop until we're reconnected
//while (!client.connected()) {
//Serial.print("Attempting MQTT connection...");
//// Create a random client ID
//// clientId += String(random(0xffff), HEX);
//// Attempt to connect
//// if (client.connect(clientId.c_str())) {
//if (client.connect(clientId, mqtt_username, mqtt_password)) {
//Serial.println("connected");
//// Once connected, publish an announcement...
////int x=random(100,500);
//int x = 100;
//String Msg = "field1="+String(x);
//client.publish("channels/1891536/publish", Msg.c_str());
//// ... and resubscribe
//client.subscribe("inTopic");
//} else {
//Serial.print("failed, rc=");
//Serial.print(client.state());
//Serial.println(" try again in 5 seconds");
//// Wait 5 seconds before retrying
//delay(5000);
//}
//}
}
void setup() {
pinMode(BUILTIN_LED, OUTPUT); // Initialize the BUILTIN_LED pin as an output
/* Initialize the three buttons */
pinMode(button1, INPUT_PULLUP);
pinMode(button2, INPUT_PULLUP);
pinMode(button3, INPUT_PULLUP);
Serial.begin(115200);
setup_wifi();
//client.setServer(mqtt_server, 1883);
//client.setCallback(callback);
ThingSpeak.begin(espClient);
}
void loop() {
//if (!client.connected()) {
//reconnect();
//}
//client.loop();
/* Read button state */
/*------------------------------------*/
button1State = digitalRead(button1);
button2State = digitalRead(button2);
button3State = digitalRead(button3);
/*------------------------------------*/
/* Publish the button states */
/*------------------------------------------------------------*/
if(button1State == 1){
Serial.println("Button 1 pressed !");
ThingSpeak.writeField(1902942, 1, 20, myWriteAPIKey);
//client.publish("channels/1891536/publish", "field1=20");
}
if(button2State == 1){
Serial.println("Button 2 pressed !");
ThingSpeak.writeField(1902942, 2, 40, myWriteAPIKey);
//client.publish("channels/1891536/publish", "field2=40");
}
if(button3State == 1){
Serial.println("Button 3 pressed !");
ThingSpeak.writeField(1902942, 3, 50, myWriteAPIKey);
//client.publish("channels/1/publish", "field3=60");
}
/*------------------------------------------------------------*/
//unsigned long now = millis();
//if (now - lastMsg > 2000) {
//lastMsg = now;
//++value;
//snprintf (msg, MSG_BUFFER_SIZE, "hello world #%ld", value);
// Serial.println(msg);
//client.publish("channels/1891536/publish", "Field1=45");
//}
}


