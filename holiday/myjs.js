var imageArray = [
"https://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg	", "https://vignette4.wikia.nocookie.net/starwars/images/d/dd/Yodalukedagobah.png/revision/latest?cb=20130324024419", "https://images.hellogiggles.com/uploads/2016/04/24031713/why-luke-skywalker-left-r2d2-behind-in-star-wars-7-the-force-awakens-797755.jpg", "https://screenrant.com/wp-content/uploads/darth-vader-10-most-dangerous-star-wars-villains.jpeg", "https://www.goliath.com/wp-content/uploads/2015/11/Star-Wars-Battlefront-Cover-Poster-Wallpaper-HD.jpg", "https://img.lum.dolimg.com/v1/images/open-uri20150608-27674-70be49_7dc0de33.jpeg?region=0%2C0%2C1200%2C675", "https://www.telegraph.co.uk/content/dam/film/starwars/star%20wars%20a%20new%20hope%201_edit-xlarge.jpg","https://1nova.com/wallpapers/wp-content/uploads/sites/34/2014/12/Darth-Vader-Vs-Obi-Wan-Kenobi.jpg", "https://i.ytimg.com/vi/_RWWKFqv7EM/maxresdefault.jpg","https://www.gunaxin.com/wp-content/uploads/2015/12/Star-Wars-Episode-VII-The-Force-Awakens-HD-Wallpaper-Finn-Rey-and-Poe.png"
];
var currentIndex = 0;

function renderImage(){
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();


function forwardImage(){
	currentIndex++;
	renderImage();
}

function backImage(){
	currentIndex--;
	renderImage();
}

  document.addEventListener('keydown', function(event) {
        if (event.keyCode == 39){
              forwardImage();
        }
        else if (event.keyCode == 37){
              backImage();
        }
  });

var name = prompt("What's your name?");
var outputString = "May the 4th be with you, " + name + "!";
$('h1').html(outputString);

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Alien friends', 'Nationality'],
          ['Earth',     10],
          ['Tatooine',      6],
          ['Mars',  6],
          ['Naboo',    7]
        ]);

            var chartWidth = $('body').width()*0.5;
            
        var options = {
          title: 'My friends nationalities',
              backgroundColor: '#ADD5F7',
              width: chartWidth,
              colors: ['#EEEFF4', '#9FBCBF', '#647678', '#77C4D3'],    
              pieSliceTextStyle: { 
                    color: 'black',
                    fontName: '"Roboto", Arial, Serif'

              },
              
              titleTextStyle: {
              color: '#647678',
              fontName: "'Roboto', Arial, Serif",
                    fontSize: 16
                    
        },
              legend: {
                  textStyle: {
                        color: '#647678',
                        fontName: "'Roboto', Arial, Serif",
                        fontSize: 14 
                  }
                   
              }
             

        
        };

              var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
   
          
$(window).resize(function() {  
      drawChart();
                });
                 
      };





