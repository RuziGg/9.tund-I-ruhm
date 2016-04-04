(function(){
    "use strict";

    var MapsApp = function(){

        if(MapsApp.instance){
            return MapsApp.instance;
        }
        MapsApp.instance = this;
        
        this.container = null;

        this.init();
    };

    window.MapsApp = MapsApp; 
    
    MapsApp.prototype = {

        init: function(){

            console.log('MapsApp started');
            
            this.container = document.querySelector('#map-container');
			
			var awesomeType = new google.maps.StyledMapType([ { "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "stylers": [ { "color": "#ff80ff" } ] },{ "featureType": "transit", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "stylers": [ { "hue": "#00ffee" } ] },{ "featureType": "landscape", "stylers": [ { "hue": "#ff0008" } ] },{ } ], {name: "Awesome"});
			
			var options = {
				center: {lat: 59.3316202, lng: 25.3291624},
				zoom: 10,
				streetViewControl: false,
				mapTypeControlOptions:{
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, "Awesome"]
				}
			};
			
			//google .maps viide teegile
			var map = new google.maps.Map(this.container, options);
			
			//teen uues kaardi tuubi
			map.mapTypes.set("Awesome", awesomeType);
			map.setMapTypeId("Awesome");
			

        },
    }; 

    window.onload = function(){
        var app = new MapsApp();
    };

})();