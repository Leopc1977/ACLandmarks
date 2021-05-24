//Format ID
    //choose : [AbreviationGame][FirstLetterofTheDLC(facultative)]Choose 
        //exemple : [Syn][TLM]Choose -> #SynTLMChoose for "Syndicate The last Maharaja"
        
    //Figures : [AbreviationGame][FirstLetterofTheDLC(facultative)]Figures
        //exemple : [Syn][TLM]Figures -> SynTLMFigures
        //A figure : [Syn][TLM]Figures[name of the figures in camelCase]
        //Exemple : [Syn][TLM]Figures[DuleepSingh] -> SynTLMFiguresDuleepSingh

//Syndicate
    //DLC The last Maharaja
        //Choose
        $(document.body).on('click',"#SynTLMChoose",function(){
            $("#content").load("common/ACSyndicate/theLastMaharaja/choose.html");
        });
            //Figures
            $(document.body).on('click',"#SynTLMFigures",function(){
                $("#content").load("common/ACSyndicate/theLastMaharaja/figures.html");
            });
                //lst
                $(document.body).on('click',"#SynTLMFiguresDuleepSingh",function(){
                    $("#content").load("common/ACSyndicate/theLastMaharaja/Figures/duleepSingh.html ");
                });