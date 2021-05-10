$("form").submit(false);

$("#BotaoEnvio").on("click", function(){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=r5LnLwMinlok81VvbfMWdL1CEPPjLps2AyERVgtS&date=`+
            $("#InputData")[0].value,
        
        success: function(DadosNasa){
            if(DadosNasa.media_type == "image"){
                $(".Video").addClass("Oculto");
                $(".Imagem").removeClass("Oculto")
                $(".Imagem").html(`<img id="Foto" class="ImagemRecebida" src="${DadosNasa.url}">`);
            }
            else
            {
                $(".Imagem").addClass("Oculto");
                $(".Video").removeClass("Oculto")
                
                $(".Video").html(`<iframe class="VideoNasa" id="Video" src="${DadosNasa.url}" frameborder="0"></iframe>`)
            }

            $(".Informacoes").html(`
            <h1 class="Titulo" id="titulo">${DadosNasa.title}</h1>
            <h2 class="Data" id="data">${DadosNasa.date}</h2>
            <p class="Descricao" id=descricao>${DadosNasa.explanation}</p>`);

        },    
        error: function(){
            alert("Insira uma data Válida")
        }



    })
})