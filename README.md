# GiphyGameSearch

Overview of the assignment:

In this project, I used GiPHY API to make a dynamic web page that populates with gifts of my choice. I have decided to go ahead and work on building the website where user can search for Olympics games gifs and also to start with I have already populated some of the sports options for the user to choose from in the buttons form. User would also be able to enter a new search and the GIPHY website through API will populate the results dynamically. User would also be able to pause the image and play back.

To build the app, i have used HTML/CSS, bootstrap, Javascript, JQuery library for the methods I needed to manipulate HTML. The assignment was deployed to Github pages.

How the user will use the app:

* When the html page is loaded, the buttons from my game array are populated.
* When clicking any of the populated buttons, it takes to Gihpy API and shows the giphs related to the food button I click.
* The limit of the giphs comes from the API is 10.
* When I click on any of the image, it moves.
* When I click back on the image, it stops.
* Clicking back to the still image makes the giph move again.
* I can add a new food button to the intial populated buttons on the page by typing in the text box and clicking on the submit button.
* The new button gets added to the array and loops through.
*  By clicking the newly added button from the user also brings down 10 giphs from the server as others already populated buttons from my array, and reponds the same (When clicking on the image, it moves, clicking back makes the image stop and again clicking back the image will make it move again)

Link to the app:

https://dara9234.github.io/GiphyGameSearch/