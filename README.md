###About
I was bored one day and decided to see if I could find anything relating to the code exercise SpaceX uses for their internship applications. While searching GitHub, I came across two projects whose README files explained a bit about what they had to do for their exercises. They had to write a web application to display ground stations taken from NASA's Satellite Situation Center API. It also called for displaying country flags for each ground station which I achieved through the free Geoname's Geocoding API. Using the ISO-3166 alpha-2 country codes, I was able to reference [FamFamFam's flag icons](http://www.famfamfam.com/lab/icons/flags/) while creating the points on the map. I believe this only took me a couple of hours to make - probably less considering I was doing this during free time in my senior high school classes and included the time in between classes in my total. All-in-all, it was a fun challenge and definitely something I would be willing to do to get an internship. I'll probably end up playing with the SSC API a lot more once I have some extra free time - it looks like it has some pretty neat information.

---

###Screenshot | [Demo](http://spacex-ferrara.herokuapp.com/)
![Screenshot](https://rawgit.com/joshuaferrara/SpaceX/master/screenshot.png)

---

###Instructions
1. `git clone https://github.com/joshuaferrara/SpaceX.git`
2. `cd` into the `spacex` directory
3. `npm install`
4. `node server`
5. The server should now be running locally on port 3000. Give it a few seconds to download and parse the data then navigate to [http://localhost:3000/](http://localhost:3000/)

---

###Libraries used:
* [Express](https://www.npmjs.com/package/express) - NodeJS Web Server.
* [Request](https://www.npmjs.com/package/request) - Allows for easier HTTP requests.
* [Socket.io](https://www.npmjs.com/package/socket.io) - Websocket library to transfer data between the NodeJS web server and the client web page
* [xml2js](https://www.npmjs.com/package/xml2js) - Parses the XML retrieved from the SSC into a javascript object. 
* [Google Maps](https://developers.google.com/maps/)

---

###References:
* https://github.com/dylanvee/spacex
* https://github.com/cgdolan/SpaceX
* http://www.geonames.org/
