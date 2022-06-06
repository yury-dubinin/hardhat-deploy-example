# hardhat-deploy-example
Basic usage of Hardhat contract deployment and value change 

to instal the project
- npm i

to make bash script executable
- chmod +x deploy.sh

to run hh deployment
- npx hardhat run scripts/deploy.js --network hardhat

to run with bash
- ./deploy.sh hardhat
- ./deploy.sh kovan

to build image
- docker build -f ./Dockerfile . -t chainlink/test:0.0.1

Execution example screenshot:
![image](https://user-images.githubusercontent.com/62520712/171932177-efe66a48-f2a6-46cf-9bf2-46fbeac21c0c.png)

