/* 
 * App che simula una calcolatrice
 * 
 */
/* Dizionario Applicazione ad evnti in Javascript */

var APP={
    
    ls_inizio: ["A","H","C","G","X","E","F","B","D"],
    
    ls_fine: ["A","B","C","D","E","F","G","H","X"],
    
    ls_posizioni: [4],
    
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
            $('#but' + i).html(APP.ls_inizio[i]);
        }
    },
    
    callBack_start : function (event )
    {
       APP.printer();
    },
    
    check_fine: function()
    {
        var esito = True;
        for (var i = 0; i < APP.ls_inizio.length; i++);
            if (APP.ls_inizio[i] != APP.ls_fine[i]){
                var esito = False;
                return;
            }
        return esito;
    },
    
    callBack_change: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = $('#char').val();
        var posChange = APP.ls_inizio.indexOf(change);
        
        /*var ls_posVic = APP.posVicine[posX];
        var esito = False; 
        for (var i = 0; i < APP.posVicine[posX].length; i++){
            if (posChange === ls_posVic[i]){
                var esito = True;
                return;
            }
        }
        
        if (esito === True){
            APP.ls_inizio[posX] = change;
            APP.ls_inizio[posChange] = x;
        }*/
        
        APP.ls_inizio[posX] = change;
        APP.ls_inizio[posChange] = x;
        
        APP.printer();
        
        $('#posx').html("posizione iniziale di x: " + posX);
        $('#posc').html("posizione iniziale della lettera " + change + ": " + posChange);
        
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
    }    
};

/*____________________main()__________________________________________*/

$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});