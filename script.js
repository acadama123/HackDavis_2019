var choice;
var clothingB, foodB, bookB, hairB, furnitureB = true;
var map = document.getElementById("map");
var markerAr = [];
var numMarkers = 0;

$(document).ready(function(){
    
    $("#ClothingButton").click(function(){
        
        var b = document.getElementById("ClothingButton");
        
        if (clothingB) {
            
            b.style.backgroundColor = "red";
            
            choice = "clothing donation near me";
            
            var Davis = new google.maps.LatLng(38.5382,-121.7617);
            
            var request = {
                location: Davis,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(Davis);
            map.setZoom(10);

    
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
        
        if (foodB) {
            
            b.style.backgroundColor = "red";
            
            choice = "food donation near me";
            
            var Davis = new google.maps.LatLng(38.5382,-121.7617);
            
            var request = {
                location: Davis,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(Davis);
            map.setZoom(10);

    
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
        
        if (bookB) {
            
            b.style.backgroundColor = "red";
            
            choice = "book donation near me";
            
            var Davis = new google.maps.LatLng(38.5382,-121.7617);
            
            var request = {
                location: Davis,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(Davis);
            map.setZoom(10);

    
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
    
    $("#HairButton").click(function(){


        var b = document.getElementById("HairButton");
        
        if (hairB) {
            
            b.style.backgroundColor = "red";
            
            choice = "hair donation near me";
            
            var Davis = new google.maps.LatLng(38.5382,-121.7617);
            
            var request = {
                location: Davis,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(Davis);
            map.setZoom(10);

    
            hairB = false;
        } else {
            choice = "";
            
            while (numMarkers > 0) {
                numMarkers--;   
                markerAr[numMarkers].setMap(null);
                markerAr[numMarkers] = null;
                markerAr.pop();
            }
            
            hairB = true;
            b.style.backgroundColor = "";

        }
        
     
    });
    
    
    $("#FurnitureButton").click(function(){


        var b = document.getElementById("FurnitureButton");
        
        if (furnitureB) {
            
            b.style.backgroundColor = "red";
            
            choice = "furniture donation near me";
            
            var Davis = new google.maps.LatLng(38.5382,-121.7617);
            
            var request = {
                location: Davis,
                radius: 1,
                query: choice
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
            
            map.setCenter(Davis);
            map.setZoom(10);

    
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


