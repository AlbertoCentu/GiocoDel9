/* 
 * App che simula una calcolatrice
 * 
 */
/* Dizionario Applicazione ad evnti in Javascript */

var APP={
    
    ls_inizio: ["A","H","C","G","X","E","F","B","D"],
    
    posVicine: {
            0: [1, 3], 
            1: [0, 2, 4],
            2: [1, 5],
            3: [0, 4],
            4: [1, 3, 5, 7],
            5: [4, 8],
            6: [3, 7],
            7: [4, 6, 8],
            8: [5, 7]
        },
    
    printer: function()
    {
        for (var i = 0; i < 9; i++) {
            $('#' + i).html(APP.ls_inizio[i]);
        }
    },
    
    callBack_start : function (event )
    {  
       APP.printer();
    },
    
    callBack_change: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = $('#char').val();
        var posChange = APP.ls_inizio.indexOf(change);
        APP.ls_inizio[posX] = change;
        APP.ls_inizio[posChange] = x;
        
        APP.printer();
        
        $('#posx').html(posX);
        $('#posc').html(posChange);
        
    },
   
/*__________________________________________________________________*/
     
    init_callBack_start_Click : function(){
        $("#start").on('click', APP.callBack_start);
    },
    
    init_callBack_change_Click: function(){
        $("#change").on('click', APP.callBack_change);
    },
       
/*___________________________________________________________________*/
    
    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback :  function (){
        APP.init_callBack_start_Click();
        APP.init_callBack_change_Click();
        //APP.ls_inizio;
    }    
};

/*____________________main()__________________________________________*/

$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});
