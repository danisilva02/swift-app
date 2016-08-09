var map;
var todosMarkers;
gmarkers1 = [];

function initMap() {
	
	

	
 
 
  posicao = {lat: -23.55052, lng: -46.632309}; 
  map = new google.maps.Map(document.getElementById('map'), {
    center: posicao,
    zoom: 12
  });

	//var iconBase = 'http://gruporai.clientes.ananke.com.br/sunny/site_temp/sunny/images/';
	
	
	
	
	for(var i = 0;beaches.length >= i; i++ ){
		
	var myLatLng = {lat: beaches[i][5], lng: beaches[i][6]};
	var loja = beaches[i][0];
	var endereco = beaches[i][1];
	var cidade = beaches[i][3];
	var cep = beaches[i][2];
	var tel = beaches[i][4];
		
		
	var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
	category: loja,
	//icon: iconBase + 'pins_sunny.png',
	draggable: false,
	animation: google.maps.Animation.DROP,
    title: beaches[i][0]
  });
  
  gmarkers1.push(marker);
  
  function clearMarkers(){
		
			 for (i = 0; i < gmarkers1.length; i++) {
			 if (gmarkers1[i].getMap() != null) gmarkers1[i].setMap(null);
			 else gmarkers1[i].setMap(map);
        }
			
}
  
  
  filterMarkers = function (category,gmarkers1) {
	  
	    var loja = category;
	    var cidade = document.getElementById("opt_cidade").value;
		var estado = document.getElementById("opt_estado").value;
		var LO = document.getElementById("opt_loja").value;
		//var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
		//var contact = JSON.parse(LO);
		console.log(cidade);
		
		
		
		var arrLojasCidade = [];
		var arrLojas = [];
		
	    var valor = cidade;
		
			for(var i = 0;beaches.length >= i; i++ ){
			
            var verifica = jQuery.inArray(valor,beaches[i]);
			
            if (verifica >= 0) {
				
				console.log("tem ---->" + beaches[i])
				arrLojasCidade.push(beaches[i]);
				
				
				console.log(gmarkers1);
				
            } else {
				
                
				//console.log("nao tem --->" + beaches[i])
				
            }
		}
		
		//console.log(arrLojas);
		
		for(var i = 0;arrLojasCidade.length >= i; i++ ){
			
		var verifica1 = jQuery.inArray(loja,arrLojasCidade[i]);
		
		 if (verifica1 >= 0) {
			
				arrLojas.push(arrLojasCidade[i]);
				
				console.log("tem  a loja ---->" + arrLojas[i]);
				
				
				for (i = 0;i < beaches.length;i++) {
						gmarkers1[i].setMap(null);
				}
				
            } else {
				
                //arrLojas.push(arrLojasCidade[i]);
				
				//console.log("nao tem --->" + arrLojasCidade[i])
				
            }
			
			
		}
		
		//console.log(arrLojas);
		//console.log(arrLojas[0][5]);
		//console.log(arrLojas[0][6]);
		//console.log(arrLojas[2]);
		
		if(arrLojas.length <= 1){
			
		
		
		//marker.setMap(null);
		
		//map.setCenter(new google.maps.LatLng( arrLojas[0][5], arrLojas[0][6] ) );
		//map.setCenter(new google.maps.LatLng(arrLojas[0][5],arrLojas[0][6]));
		//clearMarkers();
		
		map.setCenter({lat: arrLojas[0][5], lng: arrLojas[0][6]});
		map.setZoom(15)
		 
		

        
		
		}else{
			
		map.setCenter({lat: arrLojas[0][5], lng: arrLojas[0][6]});
		map.setZoom(15)	
		//console.log(arrLojas[0]);	
			
		//clearMarkers();	
			
		//console.log("limpa o mapa"+ arrLojas.length);
		//var bounds = null;
        //var bounds = new google.maps.LatLngBounds();
		//var scopeMarkers = [];	
		
		//map.setCenter({lat: arrLojas[0][5], lng: arrLojas[0][6]});
		//map.setZoom(15)
		
		//for(var i = 0;arrLojas.length > i; i++ ){
		
		//console.log(arrLojas[i][0]);
		//var LatLngN = {lat: arrLojas[i][5], lng: arrLojas[i][6]};
		//var loja = arrLojas[i][0];
		//var endereco = arrLojas[i][1];
		//var cidade = arrLojas[i][3];
		//var cep = arrLojas[i][2];
		//var tel = arrLojas[i][4];
		
		
		//var marker = new google.maps.Marker({
		//map: map,
		//position: LatLngN,
		//category: loja,
		//icon: iconBase + 'pins_sunny.png',
		//draggable: false,
		//animation: google.maps.Animation.DROP,
		//title: arrLojas[i][0]
	  	//});
		
		//scopeMarkers.push(marker);
		
		//}
		
		//google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
        //return function() {
         //  infowindow.setContent(content);
        //   infowindow.open(map,marker);
        //};
       
	   // })(marker,content,infowindow));
		
		//for (i = 0; i < scopeMarkers.length; i++) {
		//	console.log(scopeMarkers);
       //     bounds.extend(scopeMarkers[i].getPosition());
       // }
       //     map.fitBounds(bounds);
		
		//clearMarkers();
		//marker.setMap(null);
  		
			
		}
		
		
		//console.log("-->"+beaches[0][1]);
		//console.log("-->"+beaches[0][2]);
		//console.log("-->"+beaches[0][3]);
		//console.log("-->"+beaches[0][4]);
		//console.log("-->"+beaches[0][5]);
		//console.log("-->"+beaches[0][6]);
		
		//========================== vai para a cidade ===============================
		geocoder = new google.maps.Geocoder();

     var address = loja;

     geocoder.geocode({
         'address': address + ', Brasil', 'region': 'BR'
     }, function (results, status) {

         if (status == google.maps.GeocoderStatus.OK) {

          var latitude = results[0].geometry.location.lat();

          var longitude = results[0].geometry.location.lng();

          map.setCenter({lat: latitude, lng: longitude});
		  map.setZoom(15)
		  
		 }
		 
	 });
	//========================== FIM vai para a cidade ===============================
		//console.log(cidade);
		//console.log(estado);
		//console.log(loja);
		//console.log(beaches[i][0]);
		
	
    
}
  
  marker.addListener('click', toggleBounce);
  
  var content = '<h6>' + loja + '</h6></br>' + '<p>' + endereco + '</p></br>'  + '<p>'+ 'CEP' + cep  +  '/' + cidade + '</p></br>' + '<p>' + tel + '</p></br>'

  var infowindow = new google.maps.InfoWindow()

  google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
    })(marker,content,infowindow)); 
	
}



  
  function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
	
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

}



function CarregarCidadeLista(ESTADO)
{
                                              
                $('#select_cidade').html('');
                                              
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
                 
                  
                  //alert(xhttp.responseText);
                  var retorno = xhttp.responseText;
                  //alert(retorno);
                  document.getElementById("select_cidade").innerHTML = xhttp.responseText;
                  //$('#opt_cidade').append(retorno);
                  //$('#CaixaCidadeEscola').innerHTML = retorno;          
    }
  }
  xhttp.open("GET", "AjaxCidade.asp?ESTADO="+ESTADO, true);
  xhttp.send();
 
}

function CarregarLojaLista(CIDADE)
{
                                              
                $('#select_lojas').html('');
                                              
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
                 
                  
                  //alert(xhttp.responseText);
                  var retorno = xhttp.responseText;
                  //alert(retorno);
                  document.getElementById("select_lojas").innerHTML = xhttp.responseText;
                  //$('#opt_cidade').append(retorno);
                  //$('#CaixaCidadeEscola').innerHTML = retorno;          
    }
  }
  xhttp.open("GET", "AjaxLojas.asp?CIDADE="+CIDADE, true);
  xhttp.send();
 
}

