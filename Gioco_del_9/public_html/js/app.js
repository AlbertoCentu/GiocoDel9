var APP = {

    ls_inizio: ["A", "B", "C", "D", "E", "F", "G", "H", ""],

    //ls_inizio: ["", "", "", "", "", "", "", "", ""],

    //ls_posizioni: [0, 1, 2, 3, 4, 5, 6, 7, 8],

    ls_fine: ["A", "B", "C", "D", "E", "F", "G", "H", ""],
    
    mossa: 0, 

    posVicine: {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4, 6],
        4: [1, 3, 5, 7],
        5: [2, 4, 8],
        6: [3, 7],
        7: [4, 6, 8],
        8: [5, 7]
    },

    printer: function ()
    {
        for (var i = 0; i < 9; i++) {
            $('#but' + i).html(APP.ls_inizio[i]);
        }
    },

    mixer: function (array) {

        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    },

    callBack_start: function (event)
    {
        APP.ls_inizio = APP.mixer(APP.ls_inizio);
        APP.printer();
        APP.check_fine();
        APP.mossa = 0;
        $('#msg').html('');
        $('#ris').html("");
    },

    check_fine: function ()
    {
        var esito = true;
        for (var i = 0; i < APP.ls_inizio.length; i++){
            if (APP.ls_inizio[i] !== APP.ls_fine[i]) {
                var esito = false;
            }
        }

        if (esito === true) {
            $('#ris').html('Hai vinto!');
        }
    },

    callBack_change0: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[0];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[0].length; i++) {
            if (posX == APP.posVicine[0][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
                APP.mossa += 1; 
            }
        }
        
        APP.printer();
        $('#msg').html('Mossa ' + APP.mossa);
    },

    callBack_change1: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[1];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[1].length; i++) {
            if (posX == APP.posVicine[1][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
                APP.mossa += 1; 
            }
        }
        
        APP.printer();
        $('#msg').html('Mossa ' + APP.mossa);

    },

    callBack_change2: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[2];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[2].length; i++) {
            if (posX == APP.posVicine[2][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
                APP.mossa += 1; 
            }
        }
        
        APP.printer();
        $('#msg').html('Mossa ' + APP.mossa);

    },

    callBack_change3: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[3];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[3].length; i++) {
            if (posX == APP.posVicine[3][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
                APP.mossa += 1; 
            }
        }
        
        APP.printer();
        $('#msg').html('Mossa ' + APP.mossa);

    },

    callBack_change4: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[4];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[4].length; i++) {
            if (posX == APP.posVicine[4][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
                APP.mossa += 1; 
            }
        }
        
        APP.printer();
        $('#msg').html('Mossa ' + APP.mossa);

    },

    callBack_change5: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[5];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[5].length; i++) {
            if (posX == APP.posVicine[5][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
                APP.mossa += 1; 
            }
        }
        
        APP.printer();
        $('#msg').html('Mossa ' + APP.mossa);

    },

    callBack_change6: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[6];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[6].length; i++) {
            if (posX == APP.posVicine[6][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
                APP.mossa += 1; 
            }
        }
        
        APP.printer();
        $('#msg').html('Mossa ' + APP.mossa);

    },

    callBack_change7: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[7];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[7].length; i++) {
            if (posX == APP.posVicine[7][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
                APP.mossa += 1; 
            }
        }
        
        APP.printer();
        $('#msg').html('Mossa ' + APP.mossa);


    },

    callBack_change8: function (event)
    {
        var x = "";
        var posX = APP.ls_inizio.indexOf(x);
        var change = APP.ls_inizio[8];
        var posChange = APP.ls_inizio.indexOf(change);

        for (var i = 0; i < APP.posVicine[8].length; i++) {
            if (posX == APP.posVicine[8][i]) {
                APP.ls_inizio[posX] = change;
                APP.ls_inizio[posChange] = x;
            APP.mossa += 1; 
            }
        }
        
        APP.printer();
        APP.check_fine();
        $('#msg').html('Mossa ' + APP.mossa);

    },

    /*__________________________________________________________________*/

    init_callBack_start_Click: function () {
        $("#start").on('click', APP.callBack_start);
    },

    init_callBack_change0_Click: function () {
        $("#but0").on('click', APP.callBack_change0);
    },

    init_callBack_change1_Click: function () {
        $("#but1").on('click', APP.callBack_change1);
    },

    init_callBack_change2_Click: function () {
        $("#but2").on('click', APP.callBack_change2);
    },

    init_callBack_change3_Click: function () {
        $("#but3").on('click', APP.callBack_change3);
    },

    init_callBack_change4_Click: function () {
        $("#but4").on('click', APP.callBack_change4);
    },

    init_callBack_change5_Click: function () {
        $("#but5").on('click', APP.callBack_change5);
    },

    init_callBack_change6_Click: function () {
        $("#but6").on('click', APP.callBack_change6);
    },

    init_callBack_change7_Click: function () {
        $("#but7").on('click', APP.callBack_change7);
    },

    init_callBack_change8_Click: function () {
        $("#but8").on('click', APP.callBack_change8);
    },

    /*___________________________________________________________________*/

    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback: function () {
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

$(document).ready(function () {
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});