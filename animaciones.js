$(window).on("load",animacion);

function animacion(JQuery){
	$("#logo").fadeIn(4100, function(){
		
$( this ).animate(
    {
        marginTop: [ "0px", "linear" ]
    },
 
    1600, function(){
		
		$("#portaRetrato").fadeIn(2800, function(){
			
			$("#contenedorMenor > h3").fadeIn(3000, function(){
				
				$("#contenedorMenor > div").show("slow", function(){
					$("#contenedorMenor > div > a").css({
    backgroundColor: "#1a2b5a",
    color: "white"
});
				});
				
			});
			
		});
		
		
	}

	
	
);
		
	});
	
	
	
}