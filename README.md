Wefund Coding Challenge: Folder structure with file count​ !!

Hey!

1. To implement this project on your machine, please make sure you have NodeJS installed first of all as the program is made on that.

To install Node --> https://nodejs.org/en/download/

2. Once you have Node installed, please clone this project on to your machine using whatever Git clone method you prefer (SH or CLI or HTTPS)

3. Once you have cloned the project, open the project directory in your terminal and type the following commands :
   `npm i` --> to install required dependencies to run the project
   `npm start` --> a script that runs the React build framework to build the project.

4. Once you type `npm start`, please wait as it will automtically open the localhost server in your default browser.

5. Once the project is loaded, you will see a single Button on the page, click that and Voila! (You can refresh the page to see the input API give different responses which results in different folder structures every time!)




Side Notes -->

1. Based on the library I have used in React, you can see in every folder structure I have the top parent folder named "HeadNode". It is because of how the library operates as it only takes one apex node. But inside that we have the exact folder structure that's being asked for. Hope that's okay :) 

2. Sometimes when you click on the button, it will load a null Folder Structure. That's not an issue with the code but the API that I am fetching data from somtimes returns 400 status randomly causing null data. So just refresh the page and click the button again.