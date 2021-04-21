/* 
 * App che simula una calcolatrice
 * 
 */
/* Dizionario Applicazione ad evnti in Javascript */

var APP = {

    ls_inizio: ["A", "H", "C", "G", "X", "E", "F", "B", "D"],

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

    printer: function ()
    {
        for (var i = 0; i < 9; i++) {
            $('#but' + i).html(APP.ls_inizio[i]);
        }
    },

    callBack_start: function (event)
    {
        event.preventDefault();
        APP.printer();
        $('#msg').html("Gioco iniziato!");
    },

    callBack_change: function (idButton)
    {
        var change = APP.ls_inizio[idButton];
        var x = APP.ls_inizio.indexOf('x');
        
        $('#posc').html(change);
        $('#posx').html(x);
        /*var mossaValida = false;
        
        console.log("mossaValida?" + mossaValida);

        var celleVicine = APP.posVicine[idButton];

        celleVicine.forEach(function (cella)
        {
            if (APP.ls_inizio[cella] === "X") {
                mossaValida = true;

                APP.ls_inizio[cella] = APP.ls_inizio[idButton];
                APP.ls_inizio[idButton] = "X";
                return;
            }
        });

        if (mossaValida) {
            APP.printer();
        } else {
            $("#msg").html("Mossa errata");
        }*/
    },

    /*__________________________________________________________________*/

    init_callBack_start_Click: function () {
        $("#start").on('click', APP.callBack_start);
    },

    init_callBack_change_Click: function () {
        $("#but0").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(0);
        });
    },

    init_callBack_change_Click: function () {
        $("#but1").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(1);
        });
    },

    init_callBack_change_Click: function () {
        $("#but2").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(2);
        });
    },

    init_callBack_change_Click: function () {
        $("#but3").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(3);
        });
    },

    init_callBack_change_Click: function () {
        $("#but4").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(4);
        });
    },

    init_callBack_change_Click: function () {
        $("#but5").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(5);
        });
    },

    init_callBack_change_Click: function () {
        $("#but6").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(6);
        });
    },

    init_callBack_change_Click: function () {
        $("#but7").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(7);
        });
    },

    init_callBack_change_Click: function () {
        $("#but8").on('click', function (event) {
            event.preventDefault();
            APP.callBack_change(8);
        });
    },
    /*___________________________________________________________________*/

    /* Richiama tutte le funzioni di Bind delle callback */
    init_AllCallback: function () {
        APP.init_callBack_start_Click();
        APP.init_callBack_change_Click();
    }
};

/*____________________main()__________________________________________*/

$(document).ready(function () {
    // esegue il bind di tutte le callBack
    APP.init_AllCallback();
    // main si ferma in attesa di evento
});
