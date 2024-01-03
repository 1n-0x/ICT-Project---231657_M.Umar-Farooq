
document.addEventListener("DOMContentLoaded", function () {
   
    const destinations = document.querySelectorAll("destinations .destination");

    destinations.forEach(destination => {
        destination.addEventListener("click", function () {
            
            alert(`You selected ${destination.querySelector("h2").textContent}`);
        });
    });

    
    const featuredDestinations = document.querySelectorAll("featured .featured-destination");

    featuredDestinations.forEach(destination => {
        destination.addEventListener("click", function () {
            
            alert(`You selected ${destination.querySelector("h3").textContent}`);
        });
    });
});




