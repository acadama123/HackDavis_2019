var choice;
var clothingB, foodB, bookB, furnitureB = true;
var map = document.getElementById("map");
var markerAr = [];
var numMarkers = 0;
var autocomplete;
var locName;
var locPos;

$(document).ready(function(){

    $("#ClothingButton").click(function(){
        
        var b = document.getElementById("ClothingButton");
        
        var location = document.getElementById("location");
    
        locName = location.value;
    
        var request = {
            query: locName,
            fields: ['name', 'geometry'],
        };
    
        var service = new google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                locPos = results[0].geometry.location;
            }
        });

        if (clothingB) {
            
            b.style.backgroundColor = "red";
            
            choice = "clothing donation near me";
                        
            var request = {
                location: locPos,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(locPos);  
            map.setZoom(9);

    
            clothingB = false;
        } else {
            choice = "";
            
            while (numMarkers > 0) {
                numMarkers--;   
                markerAr[numMarkers].setMap(null);
                markerAr[numMarkers] = null;
                markerAr.pop();
            }
            
            clothingB = true;
            b.style.backgroundColor = "";

        }        
        
    });
    
    $("#FoodButton").click(function(){

        var b = document.getElementById("FoodButton");

        var location = document.getElementById("location");
    
        locName = location.value;
    
        var request = {
            query: locName,
            fields: ['name', 'geometry'],
        };
    
        var service = new google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                locPos = results[0].geometry.location;
            }
        });        
        
        if (foodB) {
            
            b.style.backgroundColor = "red";
            
            choice = "food donation near me";
                        
            var request = {
                location: locPos,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(locPos);
            map.setZoom(9);

    
            foodB = false;
        } else {
            choice = "";
            
            while (numMarkers > 0) {
                numMarkers--;   
                markerAr[numMarkers].setMap(null);
                markerAr[numMarkers] = null;
                markerAr.pop();
            }
            
            foodB = true;
            b.style.backgroundColor = "";

        }
        
        
    });
    
    $("#BookButton").click(function(){

        var b = document.getElementById("BookButton");
 
        var location = document.getElementById("location");
    
        locName = location.value;
    
        var request = {
            query: locName,
            fields: ['name', 'geometry'],
        };
    
        var service = new google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                locPos = results[0].geometry.location;
            }
        });        
        
        if (bookB) {
            
            b.style.backgroundColor = "red";
            
            choice = "book donation near me";
                        
            var request = {
                location: locPos,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(locPos);
            map.setZoom(9);

    
            bookB = false;
        } else {
            choice = "";
            
            while (numMarkers > 0) {
                numMarkers--;   
                markerAr[numMarkers].setMap(null);
                markerAr[numMarkers] = null;
                markerAr.pop();
            }
            
            bookB = true;
            b.style.backgroundColor = "";

        }
        
        
    });
   
    
    $("#FurnitureButton").click(function(){

        var b = document.getElementById("FurnitureButton");

        var location = document.getElementById("location");
    
        locName = location.value;
    
        var request = {
            query: locName,
            fields: ['name', 'geometry'],
        };
    
        var service = new google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                locPos = results[0].geometry.location;
            }
        });        
        
        if (furnitureB) {
            
            b.style.backgroundColor = "red";
            
            choice = "furniture donation near me";
                        
            var request = {
                location: locPos,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(locPos);
            map.setZoom(9);

    
            furnitureB = false;
        } else {
            choice = "";
            
            while (numMarkers > 0) {
                numMarkers--;   
                markerAr[numMarkers].setMap(null);
                markerAr[numMarkers] = null;
                markerAr.pop();
            }
            
            furnitureB = true;
            b.style.backgroundColor = "";

        }
        
    });

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                
                var marker = new google.maps.Marker({
                    position: place.geometry.location,
                    title: place.name
                });
            
                marker.setMap(map);
                
                markerAr.push(marker);
                numMarkers++;

            }
        }
    }
    
    
});


