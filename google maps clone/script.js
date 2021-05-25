 
  mapboxgl.accessToken = 'pk.eyJ1IjoicHJvZ3JhbW1lcjAxIiwiYSI6ImNrajQ3bmhvazAxMHEycWwwbmhpeHk1YWgifQ.ZQ2ckoka54ZjhMRNrHzraQ';
  mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true
    );

    var map ;

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    })
  
    function successLocation(position) {
      setupMap([position.coords.longitude, position.coords.latitude])
    }
    function errorLocation() {
      setupMap([31.30520,30.06635])
    }
    function setupMap(center){

        map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15,
        center: center
         });

          map.addControl(new mapboxgl.NavigationControl());

          var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken
          })

          map.addControl(directions, "top-right")
    }


 
   

    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');

    function switchLayer(layer) {
        var layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
    }



    



  