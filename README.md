# Food Truck Finder

For those that are new to San Francisco or are just visting the Bay area, finding spots to grab a quick bite to eat can be difficult. Food trucks are a great option for snacks or a grab-n-go meal, but how do you go about finding them in a big city? Because a number of trucks either don't have their own websites or don't advertise heavily, the Food Truck Finder app can be used to help locate nearby trucks given a specifc location.

## Frameworks/Architecture
Food Truck Finder is a full-stack web application constructed using Node JS, Express, and the templating engine EJS. The app has a single view (index.ejs) and a controller (foodTrucks.js) holding the different routes used, and makes use of two third-party APIs to supply data: [Google Maps Places API](https://developers.google.com/places/web-service/intro) and the [Mobile Food Facility Permit API](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat). These technologies were chosen because I am most comfortable building apps with JavaScript-based tools, and they allow for quicker deployment.

## Trade-offs & Improvements
There are a few things that I left out in this app, along with several improvements I would like to make in the future:
* **Use of static maps** - I'm currently using static Google map images in order to show multiple food truck locations. I had originally planned to use the Google Maps Embed API in order to provide users with an iFramed map which they could move around, click on, zoom into, etc. but I later found these behaviors were only supported with a single location plotted. I'm sure there's a way to supply the dynamic map view with multiple locations, I would just need more time to research this.
* **Adding an autocomplete search feature** - Currently, the search I've provided in the app relies solely on the user's knowledge of locations in the area, and it is not very forgiving when places are misspelled or too vague. In the future, I would like to incorporate the Places API's autocomplete feature so that users would not have to be so precise with their inputs.
* **Reconfigure proximity calculations** - The app is set up to show only the 9 closest food trucks given a particular location, but the way I'm determining the proximity here is a little less than precise. The Places and Mobile Food Facility API's both offered latitude and longitude fields so I used these in order to determine how close a food truck was from a particular location. I would definitely like to explore Google's Directions API to see how mileage and driving/walking routes could potentially be used here instead.
* **Overall scalabilty** - While I tried to build much of the app with scalability in mind, time constraints had a tendency to push me towards a working solution for (at the very least) the present. When looking through the Mobile Food Facility API data, it's obviously limited to San Francisco food trucks, but also represents trucks mainly concentrated in the Mission District. With the relatively small set of operating trucks, I was able to run loops through the entire dataset without taking too much of a performance hit. This solution, however, is not scalable with data extending beyond the Mission District or San Francisco. In the future, I would need to request from the API service, only the information needed for trucks actually being displayed given a specific destination.
* **Supporting multiple devices** - The app, as of now, is really only viewable on laptops and desktops. I would like to adjust the styling in order to support viewing on tablets and mobile devices as well.

## Links
[Food Truck Finder hosted on Heroku](https://paige-food-truck-finder.herokuapp.com/)

[My portfolio](http://paigeboyer.com/)

Below is another project I've completed for a friend's wedding website:
[Georgia & Maxwell's Wedding Website](http://www.georgiaandmaxwell.com/)

[GitHub Repo (front end)](https://github.com/paige1381/georgia-maxwell-wedding)

[GitHub Repo (back end)](https://github.com/paige1381/georgia_maxwell_wedding_api)
