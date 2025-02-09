# Real-Time Equipment Monitoring with MQTT, Redpanda, and Snowflake  

## 🚀 Overview  
This repository contains the code  and scripts for setting up and running a **real-time equipment monitoring pipeline** using **MQTT, Redpanda, and Snowflake** to track and visualize temperature data from industrial machines. The pipeline ingests sensor data via **MQTT.js**, streams it through **Redpanda**, and stores it in **Snowflake** for real-time analytics and visualization with **Snowflake Dashboards**.  

## 🏗️ Architecture

![architecture_diagram](https://github.com/user-attachments/assets/204658fc-af76-4462-8849-9daad472ec46)

1. **MQTT.js** → Simulates IoT temperature sensors publishing data to an MQTT broker.  
2. **Redpanda Connect (MQTT Source Connector)** → Streams the sensor data from MQTT to Redpanda.  
3. **Redpanda Connect (Snowflake Sink Connector)** → Forwards real-time data from Redpanda to Snowflake.  
4. **Snowflake** → Stores the machine temperature readings for analysis.  
5. **Snowflake Dashboard** → Provides a dashboard for visualizing temperature data.  
