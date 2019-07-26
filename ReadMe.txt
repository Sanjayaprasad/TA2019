// Clone the project using the below url

git clone https://github.com/Sanjayaprasad/TA2019.git

//Change the directory to TA2019

cd TA2019

//specify path to start mongoose server by editing mongoServer.sh

vim mongoServer.sh
mongod -dbpath <YOUR Path>/ShoppingCart/db/data

//Start the mongoose server by running the script

sh mongoServer.sh

//Open new terminal and Inside your project folder run

mongo < insertData.sh

//Start node server 

node server

//open browser and run "localhost:3000" to see your app up and running

//To run Protractor test

cd test
protractor conf.js
