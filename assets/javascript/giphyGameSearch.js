//creating a jquery function that will load the initial buttons on html page upon page loaded

$(function(){
    populateButtons(searchArray,'searchButton','#buttonsArea');
    console.log("Page Loaded");
})

// creating a strings array that holds the initial list of the food which will be populated on the buttons
// array of initial food list 
var searchArray = ["Swimming"," Fencing","Cycling","Athletics","Boxing","Hockey","Badminton","Taekwondo"];

// creating a function that populates all the search terms listed in the array, it also
// takes the argument to add the class to each button and the div where the buttons will be added to

function populateButtons(searchArray,classToAdd,areaToAddTo){

    // we need to empty out the button area since this function will add any new button as well
    // Not emptying out the area will add the copies of the buttons
    // Deleting the food buttons prior to adding new food buttons
  // (this is necessary otherwise we will have repeat buttons)

    $(areaToAddTo).empty();
    // Looping through the array of game
    for(var i = 0; i<searchArray.length;i++){
        // Then dynamicaly generating buttons for each game in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $('<button>');
        // Adding a class
        a.addClass(classToAdd);
         // Adding a data-attribute with a value of the game at index i
        a.attr('data-type',searchArray[i]);
        // Providing the button's text with a value of the game at index i
        a.text(searchArray[i]);
        // Adding the button to the HTML
        $(areaToAddTo).append(a);
    }
}







$(document).on('click','.searchButton',function(){
// $('#searches').empty();
var type = $(this).data('type');
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

// making api call

$.ajax({url:queryURL,method:'GET'})
    .then(function(response){
       for(var i=0;i<response.data.length;i++){
           var searchDiv = $('<div class ="search-item">');
           // rating variable stores the rating of the current gif we are looping through
           var rating = response.data[i].rating;
           // referencing paragraph tag which contains the text of rating and our rating variable
           var p =$('<p>').text('Rating: '+rating);

           // creating two new variables animated and still which will hold our still and animated gifs
            // getting animated and still gifs and storing them into the variables
           var animated = response.data[i].images.fixed_height.url;
           var still = response.data[i].images.fixed_height_still.url;

           // referencing to an image tag

           var image = $('<img>');
           // modifying the image tag, starting with still image since all the images loaded first will be still
           image.attr('src', still);
           // data-still attribute equals to variable still
           image.attr('data-still', still);
           // data-animated attribute equals to variable animated
           image.attr('data-animated',animated);
           // data-state attribute is string still
           image.attr('data-state','still');
           // adding a class to image
           image.addClass('searchImage');
           // appending paragraph to searchDiv variable
           searchDiv.append(p);
           // appending image to searchDiv variable
           searchDiv.prepend(image);
           //appending searchDiv to gifSearches area
           $('#searches').prepend(searchDiv);


       }
    })
})

$(document).on('click','.searchImage',function(){
    var state = $(this).attr('data-state');
    if(state=='still'){
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else{
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
    }   
})
// adding a new button to the page
$('#addSearch').on('click',function(event){
    event.preventDefault();
    var newSearch = $('input').val().trim();  
    
    
    // pushing a new search to the array
    searchArray.push(newSearch);
    populateButtons(searchArray,'searchButton','#buttonsArea');
   
    // will prevent from reloading the page
})