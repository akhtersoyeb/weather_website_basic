# Steps to follow : 
1. clone this repo in your local machine 
2. after cloning add ".env" file under weather_news folder
3. in .env file you have to add to lines(it will be discussed later)
4. go to https://openweathermap.org/api and sign up to get a api key, this is one of your api key
5. to get the other api key visit https://weatherstack.com/ - sign up and you will get your api key
6. last step - in your .env file add the following two lines :
```
WEATHER_STACK_API_KEY=your weather stack api key
OPENMAP_API_KEY=open weather map api key
```

# Check if everything is ok :
1. on your terminal or cmd go to weather_news folder
2. type - node server.js
3. open your browser and search - localhost:3000
