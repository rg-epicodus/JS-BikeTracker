import { bikeFinder } from "./../js/bike.js";

$(document).ready(function() {

  function displayBikes(bikeArray) {
    //loop through bike array and display on screen in nice format
    bikeArray.forEach(function(bike) {

      $('#bikeInfo').append('<p>' + bike.title + "- Stolen on: " + bike.date_stolen);
    });
  }
  function displayBikeData(dataObject, location) {
    $('#bikeStolenData').text(`Bikes stolen in ${location}: ${dataObject.stolen}`);
  }

  $('#userInputLocation').submit(function(evt) {
    evt.preventDefault();
    let location = $("input[name='userInputLocation']").val();
    let distance = $("input[name='userInputDistance']").val();
    let color = $("input[name='userInputColor']").val();
    $("input").val("");

    bikeFinder.findBikesByLocation(location, distance, displayBikes, displayBikeData);
  });

  let homies = [
                           { lat: 45.511798, lng: -122.694901 },
                           { lat: 45.516007, lng: -122.682562 },
                           { lat: 45.519397, lng: -122.653176 }
                         ];
  let pickles = {lat: 45.5231, lng: -122.6765} ;

  function initializeMap(ourLocation, arrayOfLocations) {
    let ourMap = new google.maps.Map(document.getElementById('bikeMap'), {
      center: ourLocation,
      zoom: 10
    });
    arrayOfLocations.forEach(function(location) {
      new google.maps.Marker({
         position: location,
         map: ourMap,
         title: 'Bike!'
      });
    });
  }

  initializeMap(pickles, homies);







});
