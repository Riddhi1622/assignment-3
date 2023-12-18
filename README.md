Name -Vikram Singh
Student Id- 101501507

Steps for run project 
1 - Go to backend folder and open ternminal in backend Folder  run 'npm install' command
2 - Change .env file ALCHEMY_API_KEY ,METAMASK_PRIVATE_KEY with your own Keys
3 - Run command 'npx hardhat compile' to compile the smart contract
4 - Now run command  'npx hardhat run scripts/deploy.js --network sepolia' to deploy it on sepolia network
5 - After deployment copy contract address and paste it in frontend/src/app.js file 
6 - Open terminal in fronted folder and run 'npm install' after completion run 'npm start' # assignment-3
