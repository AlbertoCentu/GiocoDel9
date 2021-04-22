var APP={
    
    //ls_inizio: ["A","H","C","G","X","E","F","B","D"],
    
    ls_inizio: ["A","B","C","D","E","F","G","X","H"],
    
    ls_fine: ["A","B","C","D","E","F","G","H","X"],
    
    //ls_posizioni: [4],
    
    posVicine: {
            0: [1, 3], 
            1: [0, 2, 4],
            2: [1, 5],
            3: [0, 4],
            4: [1, 3, 5, 7],
            5: [2, 4, 8],
            6: [3, 7],
            7: [4, 6, 8],
            8: [5, 7]
        },
    
    printer: function()
    {
        for (var i = 0; i < 9; i++) {
            $('#but' + i).html(APP.ls_inizio[i]);
        }
        console.log(APP.ls_inizio[1]);
    },
    
    callBack_start : function (event )
    {
       APP.printer();
    },
    
    check_fine: function()
    {
        var esito = true;
        for (var i = 0; i < APP.ls_inizio.length; i++);
            if (APP.ls_inizio[i] !== APP.ls_fine[i]){
                var esito = false;
                return;
            }
        
        if (esito === true){
            $('#ris').html("Hai vinto!");
        }
    },
    
    callBack_change0: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[0];
        var posChange = APP.ls_inizio.indexOf(change);
                
        for (var i = 0; i < APP.posVicine[0].length; i++){
            if (posX == APP.posVicine[0][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        //APP.ls_inizio[posX] = change;
        //APP.ls_inizio[posChange] = x;
        
        APP.printer();
 
    },
    
    callBack_change1: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[1];
        var posChange = APP.ls_inizio.indexOf(change);
        
        for (var i = 0; i < APP.posVicine[1].length; i++){
            if (posX == APP.posVicine[1][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        APP.printer();

    },
    
    callBack_change2: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[2];
        var posChange = APP.ls_inizio.indexOf(change);
        
        for (var i = 0; i < APP.posVicine[2].length; i++){
            if (posX == APP.posVicine[2][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        APP.printer();
        
    },
    
    callBack_change3: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[3];
        var posChange = APP.ls_inizio.indexOf(change);
        
        for (var i = 0; i < APP.posVicine[3].length; i++){
            if (posX == APP.posVicine[3][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        APP.printer();
        
    },
    
    callBack_change4: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[4];
        var posChange = APP.ls_inizio.indexOf(change);
        
        for (var i = 0; i < APP.posVicine[4].length; i++){
            if (posX == APP.posVicine[4][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        APP.printer();
        
    },
    
    callBack_change5: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[5];
        var posChange = APP.ls_inizio.indexOf(change);
        
        for (var i = 0; i < APP.posVicine[5].length; i++){
            if (posX == APP.posVicine[5][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        APP.printer();
        
    },
    
    callBack_change6: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[6];
        var posChange = APP.ls_inizio.indexOf(change);
        
        for (var i = 0; i < APP.posVicine[6].length; i++){
            if (posX == APP.posVicine[6][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        APP.printer();
        
    },
    
    callBack_change7: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[7];
        var posChange = APP.ls_inizio.indexOf(change);
        
        for (var i = 0; i < APP.posVicine[7].length; i++){
            if (posX == APP.posVicine[7][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        APP.printer();
        APP.check_fine();
        
    },
    
    callBack_change8: function(event)
    {   
        var x = "X";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[8];
        var posChange = APP.ls_inizio.indexOf(change);
        
        for (var i = 0; i < APP.posVicine[8].length; i++){
            if (posX == APP.posVicine[8][i]){
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            }
        }
        
        APP.printer();
        
        $('#posx').html("posizione iniziale di x: " + posX);
        $('#posc').html("posizione iniziale della lettera " + change + ": " + posChange);
        
    },
   
/*__________________________________________________________________*/
     
    init_callBack_start_Click : function(){
        $("#start").on('click', APP.callBack_start);
    },
    
    init_callBack_change0_Click: function(){
        $("#but0").on('click', APP.callBack_change0);
    },
    
    init_callBack_change1_Click: function(){
        $("#but1").on('click', APP.callBack_change1);
    },
    
    init_callBack_change2_Click: function(){
        $("#but2").on('click', APP.callBack_change2);
    },
    
    init_callBack_change3_Click: function(){
        $("#but3").on('click', APP.callBack_change3);
    },
    
    init_callBack_change4_Click: function(){
        $("#but4").on('click', APP.callBack_change4);
    },
    
    init_callBack_change5_Click: function(){
        $("#but5").on('click', APP.callBack_change5);
    },
    
    init_callBack_change6_Click: function(){
        $("#but6").on('click', APP.callBack_change6);
    },
    
    init_callBack_change7_Click: function(){
        $("#but7").on('click', APP.callBack_change7);
    },
    
    init_callBack_change8_Click: function(){
        $("#but8").on('click', APP.callBack_change8);
    },
       
/*___________________________________________________________________*/
    
    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback :  function (){
        APP.init_callBack_start_Click();
        APP.init_callBack_change0_Click();
        APP.init_callBack_change1_Click();
        APP.init_callBack_change2_Click();
        APP.init_callBack_change3_Click();
        APP.init_callBack_change4_Click();
        APP.init_callBack_change5_Click();
        APP.init_callBack_change6_Click();
        APP.init_callBack_change7_Click();
        APP.init_callBack_change8_Click();
    }    
};

/*____________________main()__________________________________________*/

$(document).ready( function(){
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});