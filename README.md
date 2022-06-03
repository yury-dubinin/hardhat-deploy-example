# hardhat-deploy-example
Basic usage of Hardhat contract deployment and value change 

to instal the project
npm i

to run hh deployment
- npx hardhat run scripts/deploy.js --network hardhat

to run with bash
- chmod +x deploy.sh && ./deploy.sh hardhat
- chmod +x deploy.sh && ./deploy.sh kovan

to build image
- docker build -f ./Dockerfile . -t chainlink/test:0.0.1
