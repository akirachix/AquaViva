#define THINGER_SERIAL_DEBUG
#include <ESP8266WiFi.h>
#include <HCSR04.h>
#include <ThingerESP8266.h>
#include "arduino_secrets.h"

ThingerESP8266 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

int value = 0;
/* Declare variables to use with button state detection */

String meshState;
// ultasonic definitions
//ultrasonic one
#define echoPin1 D5
#define trigPin1 D6
UltraSonicDistanceSensor distanceSensor1(trigPin1, echoPin1);
//O JUST CHANGE THE PINS ACCORDING TO HOW YOU CONNECTED THEM

//ultrasonic two
#define echoPin2 D7
#define trigPin2 D4
UltraSonicDistanceSensor distanceSensor2(trigPin2, echoPin2);
//ultrasonic three
#define echoPin3 D2
#define trigPin3 D1
UltraSonicDistanceSensor distanceSensor3(trigPin3, echoPin3);
long duration;
int distance;

void ultraState1(){
  Serial.println("ULTRSTATE1");
 
  int distance1 = calculateDistance1();
  Serial.println(distance1);
}

void ultraState2(){
  Serial.println("ULTRASTATE2");
 int distance2 = calculateDistance2();
 Serial.println(distance2);
}

void ultraState3(){
  Serial.println("ULTRASTATE3");
  int distance3= calculateDistance3();
  Serial.println(distance3);
}


void setup() {
  
pinMode(trigPin1, OUTPUT);                                                     
pinMode(echoPin1, INPUT);
pinMode(BUILTIN_LED, OUTPUT); // Initialize the BUILTIN_LED pin as an output

pinMode(trigPin2, OUTPUT);
pinMode(echoPin2, INPUT);

pinMode(trigPin3, OUTPUT);
pinMode(echoPin3, INPUT);

// add WiFi credentials
  thing.add_wifi(SSID, SSID_PASSWORD);
  
Serial.begin(115200);

thing["data"]>>[](pson &out)
{
out["distance1"]=calculateDistance1();
out["distance2"]=calculateDistance2();
out["distance3"]=calculateDistance3();
out["mesh state"]= meshState;
};

}
void loop() {
  thing.handle();
  ultraState1();
  ultraState2();
  ultraState3();
 int distance1 = calculateDistance1();
  if(distance1 > 0  && distance1 < 10){
    Serial.println("Mesh 1 is empty");
    meshState="Mesh 1 is empty";
     //! Now input the message that the recipient should receive from Thingspeak
  }
   if(distance1  > 45 && distance1 <75){
    Serial.println("Mesh 1 is halfway full");
    meshState="Mesh 1 is halfway  full";
     //! Now input the message that the recipient should receive from Thingspeak
  }
  if (distance1 > 80 /*&& distance1 < 100*/){    // The distance values are arbitrary. Adjust accordingly.
    Serial.println("Mesh 1 is full");
meshState="Mesh 1 is full";
    //! Now input the message that the recipient should receive from Thingspeak
  }


int distance2 = calculateDistance2();
  if(distance2 > 0  && distance2 < 40){
    Serial.println("Mesh 2 is empty");
    meshState="Mesh 2 is empty";
    
     //! Now input the message that the recipient should receive from Thingspeak
  }
    if(distance2  > 45 && distance2 <75){
    Serial.println("Mesh 2 is halfway full");
    meshState="Mesh 2 is halfway full";
     //! Now input the message that the recipient should receive from Thingspeak
  }
  if(distance2 > 80 ){    // The distance values are arbitrary. Adjust accordingly.
    Serial.println("Mesh 2 is full");
    meshState="Mesh 2 is full";
    //! Now input the message that the recipient should receive from Thingspeak
  }


  int distance3 = calculateDistance3();
  if(distance3 > 0  && distance3 < 40){
    Serial.println("Mesh 3 is empty");
    meshState="Mesh 3 is empty";
     //! Now input the message that the recipient should receive from Thingspeak
  }
    if(distance3  > 45 && distance3 <75){
    Serial.println("Mesh 3 is halfway full");
    meshState="Mesh 3 is halfway  full";
     //! Now input the message that the recipient should receive from Thingspeak
  }
  if (distance3 > 80){    // The distance values are arbitrary. Adjust accordingly.
    Serial.println("Mesh 3 is full");
meshState="Mesh 3 is full";
    //! Now input the message that the recipient should receive from Thingspeak
  }
  
}


// Calculate the distance
int calculateDistance1(){
      //clears the trigPin condition i.e. nothing is too close to the trigPin for it to emit the ultrasound
  digitalWrite(trigPin1, LOW);
  //delayMicroseconds(2);
  
  digitalWrite(trigPin1, HIGH);
  //delayMicroseconds(15);
  digitalWrite(trigPin1, LOW);
  // Reads the echoPin, returns the soundwave travel time in Microseconds
  duration = pulseIn(echoPin1, HIGH);
  
 distance = distanceSensor1.measureDistanceCm();
  return distance;
  }

  
  int calculateDistance2(){
      //clears the trigPin condition i.e. nothing is too close to the trigPin for it to emit the ultrasound
  digitalWrite(trigPin2, LOW);
  //delayMicroseconds(2);
  
  digitalWrite(trigPin2, HIGH);
  //delayMicroseconds(15);
  digitalWrite(trigPin2, LOW);
  // Reads the echoPin, returns the soundwave travel time in Microseconds
  duration = pulseIn(echoPin2, HIGH);
  
  distance = distanceSensor2.measureDistanceCm();
  return distance;
 
  }


int calculateDistance3(){
      //clears the trigPin condition i.e. nothing is too close to the trigPin for it to emit the ultrasound
  digitalWrite(trigPin3, LOW);
  //delayMicroseconds(2);
  
  digitalWrite(trigPin3, HIGH);
  //delayMicroseconds(15);
  digitalWrite(trigPin3, LOW);
  // Reads the echoPin, returns the soundwave travel time in Microseconds
  duration = pulseIn(echoPin3, HIGH);
  
  distance = distanceSensor3.measureDistanceCm();
  return distance;
  }

  
