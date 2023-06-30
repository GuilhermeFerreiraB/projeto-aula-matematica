var canvas = document.getElementById('canvas'); 
        
		var ctx = canvas.getContext('2d');
       
        var imagem = new Image();
        imagem.src = "imagens/lousa.webp";      
    
        var imagem2 = new Image();
        imagem2.src = "imagens/tuca.png";
		
		var	imagem3 = new Image();
        imagem3.src = "imagens/tucana.png";
		
		var	imagem4 = new Image();
        imagem4.src = "imagens/laranja.png";
		
		var	imagem5 = new Image();
        imagem5.src = "imagens/hat.png";
        
		i = 0;
        
		function tempo(){
            i = i + 1;
        }
		
		f = 0;
		
		function tempo2(){
			f = f + 1;
		}
		
		g = 0;
		
		function tempo3(){
			g = g + 1;
		}
		
		h = 0;
		
		function tempo4(){
			h = h + 1;
		}
		
		k = 0;
		
		function tempo5(){
			k = k + 1;
		}
		
		z = 0;
		
		function tempo6(){
			z = z + 1;
		}
			 
		
		
		ctx.drawImage(imagem,0,0,800,400);
		
		setInterval(tempo,1000);
		
		setInterval(tempo2,1000);
		
		setInterval(tempo3,1000);
		
		setInterval(tempo4,1000);
		
		setInterval(tempo5,1000);
		
		setInterval(tempo6,1000);
		
								
		function aula(){
		 			 
			 
			 
			 
			 if(z>=473){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Abraço do Tuca!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(z>=468){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Até a próxima amiguinhos!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(z>=463){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Obrigado e Parabéns!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(z>=458){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Fim da Aula!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(z>=453){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Fim dos Exercícios!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(k>=441){
			 k = -1000;
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 160,canvas.height/2,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",canvas.width/2 - 140,canvas.height/2 + 117.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);
			 ctx.drawImage(imagem4,canvas.width/2 + 160 ,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 80 ,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",canvas.width/2 + 140,canvas.height/2 + 47.5);	
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("6",130,canvas.height/2 +90);	
			 ctx.fillText("5",670,canvas.height/2 +90);
			 ctx.fillText("←",102,canvas.height/2 +155);
			 ctx.fillText("→",698,canvas.height/2 +155);
			 window.onkeydown = pressionaTecla; 
			 function pressionaTecla(tecla){
				if(tecla.keyCode == 39  ) {
					window.onkeydown = 39;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Parabéns!",canvas.width/2,130); 
					ctx.fillText("Resposta Correta!",canvas.width/2,60);
					ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 + 30,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 30,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 30 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 30 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 + 30,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("5",canvas.width/2,canvas.height/2 +154);				 
				}
				if(tecla.keyCode == 37  ) {	
					window.onkeydown = 37;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Correção:",canvas.width/2,130); 
					ctx.fillText("Resposta Incorreta!",canvas.width/2,60);
					ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 + 30,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 30,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 30 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 30 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 + 30,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("5",canvas.width/2,canvas.height/2 +154);																				 
				}
			 }
			 }
			 else if(k>=437){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 160,canvas.height/2,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",canvas.width/2 - 140,canvas.height/2 + 117.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);
			 ctx.drawImage(imagem4,canvas.width/2 + 160 ,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 80 ,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",canvas.width/2 + 140,canvas.height/2 + 47.5);	
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("6",130,canvas.height/2 +90);	
			 ctx.fillText("5",670,canvas.height/2 +90);			 
			 }
			 else if(k>=433){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 160,canvas.height/2,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",canvas.width/2 - 140,canvas.height/2 + 117.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);
			 ctx.drawImage(imagem4,canvas.width/2 + 160 ,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 80 ,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",canvas.width/2 + 140,canvas.height/2 + 47.5);	
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("6",130,canvas.height/2 +90);			 
			 }
			 else if(k>=428){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 160,canvas.height/2,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",canvas.width/2 - 140,canvas.height/2 + 117.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);
			 ctx.drawImage(imagem4,canvas.width/2 + 160 ,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 80 ,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",canvas.width/2 + 140,canvas.height/2 + 47.5);			 
			 }
			 else if(k>=424){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 160,canvas.height/2,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",canvas.width/2 - 140,canvas.height/2 + 117.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);			 
			 }
			 else if(k>=420){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 160,canvas.height/2,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",canvas.width/2 - 140,canvas.height/2 + 117.5);				 
			 }
			 else if(k>=415){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 			 
			 }
			 else if(k>=410){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Próximo Exercício!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(h>=398){
			 h = -1000;
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",canvas.width/2 - 140,canvas.height/2 + 47.5);
			 ctx.fillText("1",canvas.width/2 + 140,canvas.height/2 + 47.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);
			 ctx.drawImage(imagem4,canvas.width/2 + 120 ,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";	
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("3",130,canvas.height/2 +90);	
			 ctx.fillText("4",670,canvas.height/2 +90);	
			 ctx.font = "110px Century Gothic";
			 ctx.fillText("←",102,canvas.height/2 +155);
			 ctx.fillText("→",698,canvas.height/2 +155);
			 window.onkeydown = pressionaTecla; 
			 function pressionaTecla(tecla){
				if(tecla.keyCode == 39  ) {
					window.onkeydown = 39;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Correção:",canvas.width/2,150); 
					ctx.fillText("Resposta Incorreta!",canvas.width/2,80);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 10,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 10 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 10 ,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("3",canvas.width/2,canvas.height/2 +154);				 
				}
				if(tecla.keyCode == 37  ) {	
					window.onkeydown = 37;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Parabéns!",canvas.width/2,150); 
					ctx.fillText("Resposta Correta!",canvas.width/2,80);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 10,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 10 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 10 ,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("3",canvas.width/2,canvas.height/2 +154);																				 
				}
			 }
			 }	
			 else if(h>=394){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",canvas.width/2 - 140,canvas.height/2 + 47.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);
			 ctx.drawImage(imagem4,canvas.width/2 + 120 ,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",canvas.width/2 + 140,canvas.height/2 + 47.5);	
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("3",130,canvas.height/2 +90);	
			 ctx.fillText("4",670,canvas.height/2 +90);			 
			 }
			 else if(h>=390){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",canvas.width/2 - 140,canvas.height/2 + 47.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);
			 ctx.drawImage(imagem4,canvas.width/2 + 120 ,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",canvas.width/2 + 140,canvas.height/2 + 47.5);	
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("3",130,canvas.height/2 +90);			 
			 }
			 else if(h>=385){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",canvas.width/2 - 140,canvas.height/2 + 47.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);
			 ctx.drawImage(imagem4,canvas.width/2 + 120 ,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",canvas.width/2 + 140,canvas.height/2 + 47.5);			 
			 }
			 else if(h>=381){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",canvas.width/2 - 140,canvas.height/2 + 47.5);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",canvas.width/2,canvas.height/2 + 30);			 
			 }
			 else if(h>=377){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 120,canvas.height/2 - 70,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 200,canvas.height/2 - 70,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",canvas.width/2 - 140,canvas.height/2 + 47.5);				 
			 }
			 else if(h>=372){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Qual é o resultado?",canvas.width/2,80); 			 
			 }
			 else if(h>=367){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Próximo Exercício!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(g>=355){
			 g = -1000;
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 65,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 + 15 ,40,40);
			 ctx.font = "110px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("←",102,canvas.height/2 +155);
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("9",130,canvas.height/2 +90);	
			 ctx.font = "110px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("→",698,canvas.height/2 +155);
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("10",670,canvas.height/2 +90);
			 window.onkeydown = pressionaTecla; 
			 function pressionaTecla(tecla){
				if(tecla.keyCode == 39  ) {
					window.onkeydown = 39;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Parabéns!",canvas.width/2,130); 
					ctx.fillText("Resposta Correta!",canvas.width/2,60);
					ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 35,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 + 45 ,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("10",canvas.width/2,canvas.height/2 +154);				 
				}
				if(tecla.keyCode == 37  ) {	
					window.onkeydown = 37;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Correção:",canvas.width/2,130); 
					ctx.fillText("Resposta Incorreta!",canvas.width/2,60);
					ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 35,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 + 45 ,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("10",canvas.width/2,canvas.height/2 +154);																				 
				}
			 }
			 }
			 else if(g>=351){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 65,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 + 15 ,40,40);
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("9",130,canvas.height/2 +90);
			 ctx.fillText("10",670,canvas.height/2 +90);
			 }
			 else if(g>=347){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 65,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 + 15 ,40,40);
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("9",130,canvas.height/2 +90);
			 }
			 else if(g>=341){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 65,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 + 15 ,40,40);
			 }
			 else if(g>=336){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80);          
			 }	
			 else if(g>=331){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Próximo Exercício!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(f>=319){
			 f = -1000;
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 65,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 15 ,40,40);
			 ctx.font = "110px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("←",102,canvas.height/2 +155);
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("6",130,canvas.height/2 +90);	
			 ctx.font = "110px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("→",700,canvas.height/2 +155);
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("7",670,canvas.height/2 +90);
			 window.onkeydown = pressionaTecla; 
			 function pressionaTecla(tecla){
				if(tecla.keyCode == 39  ) {
					window.onkeydown = 39;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Correção:",canvas.width/2,130); 
					ctx.fillText("Resposta Incorreta!",canvas.width/2,60);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 35,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 45 ,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("6",canvas.width/2,canvas.height/2 +154);				 
				}
				if(tecla.keyCode == 37  ) {	
					window.onkeydown = 37;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Parabéns!",canvas.width/2,130); 
					ctx.fillText("Resposta Correta!",canvas.width/2,60);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 35,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 45 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 35 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 45 ,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("6",canvas.width/2,canvas.height/2 +154);																				 
				}
			 }
			 }	
			 else if(f>=315){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 65,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 15 ,40,40);
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("6",130,canvas.height/2 +90);
			 ctx.fillText("7",670,canvas.height/2 +90);	
			 }
			 else if(f>=311){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 65,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 15 ,40,40);
			 ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("6",130,canvas.height/2 +90);
			 }
			 else if(f>=305){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 65,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 15 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 65 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 15 ,40,40);
			 }
			 else if(f>=300){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80);          
			 }	
			 else if(f>=295){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Próximo Exercício!",canvas.width/2,canvas.height/2 + 60);  			 			 			 					 
			 }
			 else if(i>=283){
			 i = -1000;
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 30,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 30 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 30 ,40,40);
			 ctx.font = "110px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("←",102,canvas.height/2 +155);
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("4",130,canvas.height/2 +90);	
			 ctx.font = "110px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("→",700,canvas.height/2 +155);
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("3",670,canvas.height/2 +90);
			 window.onkeydown = pressionaTecla; 
			 function pressionaTecla(tecla){
				if(tecla.keyCode == 39  ) {
					window.onkeydown = 39;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Parabéns!",canvas.width/2,150); 
					ctx.fillText("Resposta Correta!",canvas.width/2,80);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 10,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 10 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 10 ,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("3",canvas.width/2,canvas.height/2 +154);				 
				}
				if(tecla.keyCode == 37  ) {	
					window.onkeydown = 37;
					ctx.clearRect(0, 0, 800, 400);
					ctx.drawImage(imagem,0,0,800,400);
					ctx.font = "50px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("Correção:",canvas.width/2,150); 
					ctx.fillText("Resposta Incorreta!",canvas.width/2,80);
					ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 10,40,40);
					ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 10 ,40,40);
					ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 10 ,40,40);
					ctx.font = "70px Century Gothic";
					ctx.fillStyle = "white";
					ctx.textAlign = "center";
					ctx.fillText("3",canvas.width/2,canvas.height/2 +154);																				 
				}
			 }
			 }	
			 else if(i>=279){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 30,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 30 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 30 ,40,40);
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("3",670,canvas.height/2 +90);	
			 ctx.fillText("4",130,canvas.height/2 +90);
			 }	
			 else if(i>=275){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 30,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 30 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 30 ,40,40);
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.font = "80px Century Gothic";
			 ctx.fillText("4",130,canvas.height/2 +90);			 
			 }	
			 else if(i>=270){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80); 
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 30,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 30 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 30 ,40,40);		 		
			 }	
			 else if(i>=265){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Quantas laranjas são?",canvas.width/2,80);          
			 }	
			 else if(i>=260){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";  
			 ctx.font = "50px Century Gothic";
			 ctx.fillText("ou",canvas.width/2,canvas.height/2 + 55);
			 ctx.font = "100px Century Gothic";	
			 ctx.fillText("←      →",canvas.width/2,canvas.height/2 + 65);
			 }
			 else if(i>=255){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("À partir das setas do teclado!",canvas.width/2,canvas.height/2 + 60);  			 
			 }	
			 else if(i>=250){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Decida qual resposta é certa!",canvas.width/2,canvas.height/2 + 60);          
			 }	
			 else if(i>=245){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Hora dos exercícios!",canvas.width/2,canvas.height/2 + 60);          
			 }	
			 else if(i>=240){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Essa foi a parte explicativa!",canvas.width/2,canvas.height/2 + 60);          
			 }	         	
			 else if(i>=236){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("7",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 - 105,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 - 105,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("Ótimo!",249,canvas.height/2 -90);			 
			 }
			 else if(i>=232){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("7",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 - 105,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 - 105,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("4 + 3 = 7",233,canvas.height/2 -90);			 
			 }
			 else if(i>=228){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("7",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 - 105,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 - 105,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("Wow!",260,canvas.height/2 -90);
			 }
			 else if(i>=224){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("7",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 - 105,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 - 105,40,40);
			 }
			 else if(i>=221){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("6",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 - 105,40,40);
			 }
			 else if(i>=218){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("5",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 }
			 else if(i>=215){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("4",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 }
			 else if(i>=212){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 }
			 else if(i>=209){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 }
			 else if(i>=206){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",630,canvas.height/2 + 140);
			 }
			 else if(i>=203){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 }
			 else if(i>=200){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,340,canvas.height/2 + 25,40,40);		 
			 }
			 else if(i>=197){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 }
			 else if(i>=194){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 }
			 else if(i>=191){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 }
			 else if(i>=188){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",130,canvas.height/2 + 140);			 
			 }
			 else if(i>=185){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,70,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);			 
			 }
			 else if(i>=182){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);			
			 }
			 else if(i>=179){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("1",130,canvas.height/2 +140);
			 }
			 else if(i>=177){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 }
			 else if(i>=173){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("5",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("Próxima!",235,canvas.height/2 -90);
			 }
			 else if(i>=169){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("5",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("3 + 2 = 5",233,canvas.height/2 -90);
			 }
			 else if(i>=165){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("5",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("Wow!",260,canvas.height/2 -90);
			 }
			 else if(i>=161){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("5",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 ctx.drawImage(imagem4,650,canvas.height/2 + 25,40,40);
			 }
			 else if(i>=158){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("4",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,570,canvas.height/2 + 25,40,40);
			 }
			 else if(i>=155){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 }
			 else if(i>=152){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 }
			 else if(i>=149){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",630,canvas.height/2 + 140);
			 }
			 else if(i>=146){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 }
			 else if(i>=143){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",360,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,380,canvas.height/2 - 40,40,40);
			 }
			 else if(i>=140){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,300,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 }
			 else if(i>=137){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 }
			 else if(i>=134){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,110,canvas.height/2 + 25,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",130,canvas.height/2 + 140);			 
			 }	 
			 else if(i>=131){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 }
			 else if(i>=128){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("1",130,canvas.height/2 +140);
			 }
			 else if(i>=126){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 }
			 else if(i>=122){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,340,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("Próxima!",235,canvas.height/2 -90);
			 }
			 else if(i>=118){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,340,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("2 + 1 = 3",233,canvas.height/2 -90);
			 }
			 else if(i>=114){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,340,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("Wow!",260,canvas.height/2 -90);
			 }
			 else if(i>=110){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,340,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("3",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,690,canvas.height/2 - 40,40,40);
			 }
			 else if(i>=107){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,340,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("2",630,canvas.height/2 + 140);
			 ctx.drawImage(imagem4,610,canvas.height/2 - 40,40,40);
			 }
			 else if(i>=104){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,340,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,530,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",630,canvas.height/2 + 140);
			 }
			 else if(i>=101){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,340,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("=",475,canvas.height/2 + 77.5);
			 }
			 else if(i>=98){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 ctx.drawImage(imagem4,340,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
			 ctx.fillText("1",360,canvas.height/2 + 140);
			 }
			 else if(i>=95){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);
			 ctx.font = "90px Century Gothic";
			 ctx.fillText("+",245,canvas.height/2 + 77.5);
			 }
			 else if(i>=92){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.drawImage(imagem4,150,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",130,canvas.height/2 + 140);			 
			 }
			 else if(i>=89){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 ctx.drawImage(imagem4,70,canvas.height/2 - 40,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("1",130,canvas.height/2 +140);
			 }
			 else if(i>=87){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 190,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 178.1,50,50);
			 }
			 else if(i>=82){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Hora de estudar somátória!",canvas.width/2,canvas.height/2 + 60);
			 }
			 else if(i>=77){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Muito bem!",canvas.width/2,canvas.height/2 + 60);
			 }	
			 else if(i>=72){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 45,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 + 35 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("10",canvas.width/2,canvas.height/2 +150);
			 ctx.font = "38px Century Gothic";
			 ctx.fillText("Wow!",260,canvas.height/2 -95);			 
			 }		
			 else if(i>=67){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 45,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 + 35 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("10",canvas.width/2,canvas.height/2 +150);				 		
			 }
			 else if(i>=62){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 180,canvas.height/2 - 45,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 140,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 100,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 140,canvas.height/2 - 45 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("9",canvas.width/2,canvas.height/2 +150);				 		
			 }
			 else if(i>=57){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 140,canvas.height/2 - 45,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 140,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 100,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 100,canvas.height/2 + 35 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("8",canvas.width/2,canvas.height/2 +150);				 		
			 }
			 else if(i>=52){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 140,canvas.height/2 - 45,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 100,canvas.height/2 - 45 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("7",canvas.width/2,canvas.height/2 +150);				 		
			 }
			 else if(i>=47){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 45,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 + 35 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("6",canvas.width/2,canvas.height/2 +150);		
			 }
			 else if(i>=42){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 45,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 45 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 45 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("5",canvas.width/2,canvas.height/2 +150);		
			 }
			 else if(i>=37){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 - 45,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 + 35 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 - 45 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("4",canvas.width/2,canvas.height/2 +150);		
			 }
			 else if(i>=32){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 100,canvas.height/2 - 20,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 20 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 60,canvas.height/2 - 20 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("3",canvas.width/2,canvas.height/2 +110);		
			 }
			 else if(i>=27){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 60,canvas.height/2 - 20 ,40,40);
			 ctx.drawImage(imagem4,canvas.width/2 + 20,canvas.height/2 - 20,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("2",canvas.width/2,canvas.height/2 +110);		
			 }
			 else if(i>=22){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);
			 ctx.drawImage(imagem4,canvas.width/2 - 20,canvas.height/2 - 20 ,40,40);
			 ctx.font = "60px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("1",canvas.width/2,canvas.height/2 +110);		
			 }
			 else if(i>=20){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 195,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 183.1,50,50);				 	
			 }			 
			 else if(i>=15){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Hora de estudar como contar!",canvas.width/2,canvas.height/2 + 60);
			 }
			 else if(i>=10){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText('Mestre em "Matemágica"!',canvas.width/2,canvas.height/2 + 60);
			 }
			 else if(i>=5){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Sou o Professor Tuca!",canvas.width/2,canvas.height/2 + 60);
			 }
			 else if(i>=0){
			 ctx.clearRect(0, 0, 800, 400);
             ctx.drawImage(imagem,0,0,800,400);
			 ctx.drawImage(imagem2,canvas.width/2 - 62.5,canvas.height/2 - 155,125,125);
			 ctx.drawImage(imagem5,canvas.width/2 - 31.5,canvas.height/2 - 143.1,50,50);
             ctx.font = "50px Century Gothic";
             ctx.fillStyle = "white";
             ctx.textAlign = "center";
			 ctx.fillText("Bem-vindos queridos alunos!",canvas.width/2,canvas.height/2 + 60);          
			 }			 		
		}		
		setInterval(aula,1);
       
        
    
		
    
        
		
		
		
		

		
	
        
        
        