// JavaScript Document

$(document).ready(function(e)
{
	$(".checkbox").click(function(e)
	{
		if($(this).css("background-position") == "0px 0px")
		{
			$(this).css("background-position", "34px 0px");
		} else {
			$(this).css("background-position", "0px 0px");	
		}
	});
	
	
	$(".botao:eq(0)").click(function(e)
	{
        // window.location.href = "adesao.html";
    });
	
	$(".botao:eq(1)").click(function(e)
	{
		if($("#nome").val() != "" && $("#telefone").val() != "" && $("#email").val() != "" && $('#confirmo').is(':checked') == true && $("#data-nascimento").val() != "")
		{
			
			
			
		}
		
    });
	
	
	$("#passo-seguinte div").click(function(e) {
        
		$("#passo1").slideUp("fast");
		
    });
	
	
});