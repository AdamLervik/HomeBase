$(document).ready(function(){
   getCurrent('85d49b20630564a260edaa42c21a9a99');
   getForecast('85d49b20630564a260edaa42c21a9a99');
   }, 60000);

function getCurrent(l){
	$.ajax({
	  url : "http://api.openweathermap.org/data/2.5/weather?id=5786899&units=imperial&APPID="+l,
	  dataType : "jsonp",
	  success : function(parsed_json){
	  	  var obsTime = parsed_json['dt'];
	  	  var curCondition = parsed_json.weather[0].description;
		  var relHumid = parsed_json.main.humidity;
		  var currentTemp = parsed_json.main.temp;
		  var windMPH = parsed_json.wind.speed;
		  var windDegrees = parsed_json['wind']['deg'];
		  var weekday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
		  var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
		  var obsTimeUTC = new Date(obsTime);
		  	obsTimeUTC.setTime(obsTime * 1000);
		  var formatteddate = weekday[obsTimeUTC.getDay()] + ' ' + monthname[obsTimeUTC.getMonth()] + ' ' + obsTimeUTC.getDate() + ', ' + obsTimeUTC.getFullYear(); 
		  var formattedtime = obsTimeUTC.getHours() + ':' + obsTimeUTC.getMinutes(); + ':' + obsTimeUTC.getSeconds();
		  $('#observeDate').html(formatteddate);
		  $('#observeTime').html(formattedtime);
		  $('#condition').html(curCondition);
		  $('#relativehumidity').html(relHumid);
		  $('#wind').html('Wind Speed: '+windMPH+'MPH');
		  $('#winddeg').html(windDegrees);
		  $('#temperature').html(currentTemp+'°');
	  }
	});
}

function getForecast(l){
	$.ajax({
	  url : "http://api.openweathermap.org/data/2.5/forecast/city?id=5786899&cnt=5&units=imperial&APPID="+l,
	  dataType : "jsonp",
	  success : function(parsed_json){
	  	  var obsTime = parsed_json['dt'];
	  	  var curCondition = parsed_json.weather[0].description;
		  var relHumid = parsed_json.main.humidity;
		  var currentTemp = parsed_json.main.temp;
		  var windMPH = parsed_json.wind.speed;
		  var windDegrees = parsed_json['wind']['deg'];
		  var weekday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
		  var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
		  var obsTimeUTC = new Date(obsTime);
		  	obsTimeUTC.setTime(obsTime * 1000);
		  var formatteddate = weekday[obsTimeUTC.getDay()] + ' ' + monthname[obsTimeUTC.getMonth()] + ' ' + obsTimeUTC.getDate() + ', ' + obsTimeUTC.getFullYear(); 
		  var formattedtime = obsTimeUTC.getHours() + ':' + obsTimeUTC.getMinutes(); + ':' + obsTimeUTC.getSeconds();
		  $('#observeDate').html(formatteddate);
		  $('#observeTime').html(formattedtime);
		  $('#condition').html(curCondition);
		  $('#relativehumidity').html(relHumid);
		  $('#wind').html('Wind Speed: '+windMPH+'MPH');
		  $('#winddeg').html(windDegrees);
		  $('#temperature').html(currentTemp+'°');
	  }
	});
}

$(document).ready(function(){
// Create two variable with the names of the months and days in an array
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year    
$('#headerDate').html(dayNames[newDate.getDay()] + ', ' + monthNames[newDate.getMonth()] + ' ' + newDate.getDate()  + ', ' + newDate.getFullYear());

setInterval( function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	$("#seconds").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
setInterval( function() {
	// Create a newDate() object and extract the minutes of the current time on the visitor's
	var minutes = new Date().getMinutes();
	// Add a leading zero to the minutes value
	$("#minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

setInterval( function() {
	// Create a newDate() object and extract the hours of the current time on the visitor's
	var hours = new Date().getHours();
	// Add a leading zero to the hours value
	$("#hours").html(( hours > 12 ? -12 + hours : hours ));
    }, 1000);
	
setInterval( function() {
	$(".point").fadeOut().fadeIn();
    },1000);


	
});