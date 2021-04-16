/* 
 * App che simula una calcolatrice
 * 
 */
/* Dizionario Applicazione ad evnti in Javascript */
//global var ls_inizio = ["A","H","C","G","X","E","F","B","D"];

var APP={
    
    //ls_inizio: ["A","H","C","G","X","E","F","B","D"],
    
    callBack_start : function (event )
    {  
       var inizio = ["A","H","C","G","X","E","F","B","D"];
       $('#0').html(inizio[0]);
       $('#1').html(inizio[1]);
       $('#2').html(inizio[2]);
       $('#3').html(inizio[3]);
       $('#4').html(inizio[4]);
       $('#5').html(inizio[5]);
       $('#6').html(inizio[6]);
       $('#7').html(inizio[7]);
       $('#8').html(inizio[8]);
    },
    
    callBack_change: function(event)
    {
        var posVicine = {
            0: [1, 3], 
            1: [0, 2, 4],
            2: [1, 5],
            3: [0, 4],
            4: [1, 3, 5, 7],
            5: [4, 8],
            6: [3, 7],
            7: [4, 6, 8],
            8: [5, 7]};
        
        var x = "X";
        var posX = inizio.indexOf(x);
        var change = ("$char").val();
        var posChange = inizio.indexOf(change);
        
        inizio[posX] = change;
        inizio[posChange] = x;
        
       $('#0').html(inizio[0]);
       $('#1').html(inizio[1]);
       $('#2').html(inizio[2]);
       $('#3').html(inizio[3]);
       $('#4').html(inizio[4]);
       $('#5').html(inizio[5]);
       $('#6').html(inizio[6]);
       $('#7').html(inizio[7]);
       $('#8').html(inizio[8]);
        
        //$("posx").html(posX);
        //$("posc").html(posChange);
        
    },
   
/*__________________________________________________________________*/
   
    // Bind di callBack_start con click su button #start   
    init_callBack_start_Click : function(){
        $("#start").on('click', APP.callBack_start);
        $("#change").on('click', APP.callBack_change);
    },
       
/*___________________________________________________________________*/
    
    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback :  function (){
        APP.init_callBack_start_Click();
        APP.init_callBack_start_Click();
    }    
};

/*____________________main()__________________________________________*/

$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});
