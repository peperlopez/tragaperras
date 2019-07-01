var posicion1;
var posicion2;
var posicion3;
var creditos =0;
var puntos = 100;
var x = document.getElementById("myAudio");
var y = document.getElementById("error"); 


//Definir evento click del boton id="tirar"
    document.getElementById("iniciar").onclick=function(){
	if (puntos > 1){
	
	
	document.getElementById("puntos").value= puntos;
    document.getElementById("creditos").value= creditos;
    puntos -=10;
	creditos +=1;

	posicion1 = Math.round((Math.random()*5)+1);
	document.getElementById("bombo1").src="/tragaperras/"+posicion1+".png";
	posicion2 = Math.round((Math.random()*5)+1);
	document.getElementById("bombo2").src="/tragaperras/"+posicion2+".png";
	posicion3 =Math.round((Math.random()*5)+1);
	document.getElementById("bombo3").src="/tragaperras/"+posicion3+".png";
	console.log("La combinacion resultante es : "+posicion1+posicion2+posicion3);
	  if (posicion1==6 && posicion2==6 && posicion3==6) {

          puntos = puntos + 500;
          document.getElementById("mensaje").value= ("Premio 500 puntos");

          document.getElementById("puntos").value= puntos;
          x.play();
      }

       else if (posicion1==5 && posicion2==5 && posicion3==5) {

           puntos = puntos + 250;
           document.getElementById("mensaje").value= ("Premio 250 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
      }



      else if (posicion1==5 && posicion2==5 && posicion3==1) {

          puntos = puntos + 150;
          document.getElementById("mensaje").value= ("Premio 150 puntos");
          document.getElementById("puntos").value= puntos;
    	  x.play();
          


      }

       else if (posicion1==5 && posicion2==5 && posicion3==2){
    	   
           puntos = puntos + 150;
           document.getElementById("mensaje").value= ("Premio 150 puntos");
           document.getElementById("puntos").value= puntos;
     	  x.play();

       }
       else if (posicion1==5 && posicion2==5 && posicion3==3){
           puntos = puntos + 150;
           document.getElementById("mensaje").value= ("Premio 150 puntos");
           document.getElementById("puntos").value= puntos;
x.play();


    	   
       }
       else if (posicion1==5 && posicion2==5 && posicion3==4){
           puntos = puntos + 150;
           document.getElementById("mensaje").value= ("Premio 150 puntos");
           document.getElementById("puntos").value= puntos;
           x.play();

    	   
       }
       else if (posicion1==5 && posicion2==5 && posicion3==6){
           puntos = puntos + 150;
           document.getElementById("mensaje").value= ("Premio 150 puntos");
           document.getElementById("puntos").value= puntos;
           x.play();

    	   
       }
       else if (posicion1==4 && posicion2==4 && posicion3==1){
           puntos = puntos + 60;
           document.getElementById("mensaje").value= ("Premio 60 puntos");
           document.getElementById("puntos").value= puntos;
           x.play();

       }
       else if (posicion1==4 && posicion2==4 && posicion3==2){
           
           puntos = puntos + 60;
           document.getElementById("mensaje").value= ("Premio 60 puntos");

           document.getElementById("puntos").value= puntos;
           x.play();

       }
       else if (posicion1==4 && posicion2==4 && posicion3==3){
           puntos = puntos + 60;
           document.getElementById("mensaje").value= ("Premio 60 puntos");

           document.getElementById("puntos").value= puntos;
           x.play();

    	   
       }
       else if (posicion1==4 && posicion2==4 && posicion3==4){
           puntos = puntos + 60;
           document.getElementById("mensaje").value= ("Premio 60 puntos");

           document.getElementById("puntos").value= puntos;
           x.play();

    	   
       }else if (posicion1==4 && posicion2==4 && posicion3==5){
          
           puntos = puntos + 60;
           document.getElementById("mensaje").value= ("Premio 60 puntos");
           document.getElementById("puntos").value= puntos;
     	  x.play();

       }else if (posicion1==4 && posicion2==4 && posicion3==6){
           puntos = puntos + 60;
           document.getElementById("mensaje").value= ("Premio 60 puntos");
           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }else if (posicion1==3 && posicion2==3 && posicion3==1){
           puntos = puntos + 40;
           document.getElementById("mensaje").value= ("Premio 40 puntos");
           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }else if (posicion1==3 && posicion2==3 && posicion3==2){
           puntos = puntos + 40;
           document.getElementById("mensaje").value= ("Premio 40 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
    	   
       }else if (posicion1==3 && posicion2==3 && posicion3==3){
           puntos = puntos + 50;
           document.getElementById("mensaje").value= ("Premio 50 puntos");
          document.getElementById("puntos").value= puntos;
    	  x.play();
    	   
       }else if (posicion1==3 && posicion2==3 && posicion3==4){
    	   alert ("Premio has ganado 40 puntos ");
           puntos = puntos + 40;
           document.getElementById("mensaje").value= ("Premio 40 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
    	   
       }else if (posicion1==3 && posicion2==3 && posicion3==5){
           puntos = puntos + 40;
           document.getElementById("mensaje").value= ("Premio 40 puntos");
           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }
       else if (posicion1==3 && posicion2==3 && posicion3==6){
           puntos = puntos + 40;
           document.getElementById("mensaje").value= ("Premio 40 puntos");
           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }else if (posicion1==2 && posicion2==2 && posicion3==1){
           puntos = puntos + 15;
           document.getElementById("mensaje").value= ("Premio 15 puntos");

           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }else if (posicion1==2 && posicion2==2 && posicion3==2){
           puntos = puntos + 30;
           document.getElementById("mensaje").value= ("Premio 30 puntos");

           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }else if (posicion1==2 && posicion2==2 && posicion3==3){
           puntos = puntos + 15;
           document.getElementById("mensaje").value= ("Premio 15 puntos");

           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }else if (posicion1==2 && posicion2==2 && posicion3==4){
           puntos = puntos + 15;
           document.getElementById("mensaje").value= ("Premio 15 puntos");

           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }else if (posicion1==2 && posicion2==2 && posicion3==5){
           puntos = puntos + 15;
           document.getElementById("mensaje").value= ("Premio 15 puntos");

           document.getElementById("puntos").value= puntos;
     	  x.play();
    	   
       }else if (posicion1==2 && posicion2==2 && posicion3==6){
           puntos = puntos + 15;
           document.getElementById("mensaje").value= ("Premio 15 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==1 && posicion3==1){
           puntos = puntos + 10;
           document.getElementById("mensaje").value= ("Premio 10 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
    	   
       }else if (posicion1==1 && posicion2==1 && posicion3==2){
           puntos = puntos + 5;
           document.getElementById("mensaje").value= ("Premio 5 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
    	  
       }else if (posicion1==1 && posicion2==1 && posicion3==3){
           puntos = puntos + 5;
           document.getElementById("mensaje").value= ("Premio 5 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
    	   
       }else if (posicion1==1 && posicion2==1 && posicion3==4){
           puntos = puntos + 5;
           document.getElementById("mensaje").value= ("Premio 5 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
    	   
       }else if (posicion1==1 && posicion2==1 && posicion3==5){
           puntos = puntos + 5;
           document.getElementById("mensaje").value= ("Premio 5 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
    	   
       }else if (posicion1==1 && posicion2==1 && posicion3==6){
           puntos = puntos + 5;
           document.getElementById("mensaje").value= ("Premio 5 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==2 && posicion3==1){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==2 && posicion3==2){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==2 && posicion3==3){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==2 && posicion3==4){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==2 && posicion3==5){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==2 && posicion3==6){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==3 && posicion3==6){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==3 && posicion3==5){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==3 && posicion3==4){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==3 && posicion3==3){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==3 && posicion3==2){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==3 && posicion3==1){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==4 && posicion3==1){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==4 && posicion3==2){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==4 && posicion3==3){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==4 && posicion3==4){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==4 && posicion3==5){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==4 && posicion3==6){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==5 && posicion3==1){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==5 && posicion3==2){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==5 && posicion3==3){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==5 && posicion3==4){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==5 && posicion3==5){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==5 && posicion3==6){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==6 && posicion3==1){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==6 && posicion3==2){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==6 && posicion3==3){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==6 && posicion3==4){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==6 && posicion3==5){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }else if (posicion1==1 && posicion2==6 && posicion3==6){
           puntos = puntos + 2;
           document.getElementById("mensaje").value= ("Premio 2 puntos");
     	  x.play();

           document.getElementById("puntos").value= puntos;
       }
       
            else {
    	   
           document.getElementById("mensaje").value= ("Combinacion no ganadora ;/");
           y.play();

       }
      
	}

	

	

}





