


$("#simubutton").click(function(e){
    e.preventDefault();  /// Non ricarica la pagina
    
    var dati_grezzi = {};
    $.each($('#simuform').serializeArray(), function() {
            dati_grezzi[this.name] = +this.value; /// Già che ci sono trasformo in float
    });

    var dati_serializzati = JSON.stringify(dati_grezzi);

    console.log(dati_grezzi)

    /// Mando tutto al PHP
    $.ajax({
        type: 'GET',                      /// Che metodo uso?
        url: './roba-server.php',         /// A che file lo mando?
        data: {mydata:dati_serializzati}, /// Che cosa mando?
        dataType: 'json'                  /// Che tipo di dati?
    })
	.done( function( data ) {         /// Che cosa dico se tutto va bene?
	    console.log('OK!');           /// Guarda nella console del browser (F12)!

            scatter(data)
            
	})
	.fail( function( error, data ) {         /// Che cosa dico se qualcosa va storto?
	    console.log('Oh, no!');       /// Guarda nella console del browser (F12)!
//	    console.log(data);
	});
    
    
}); /// simu click




$("#fitbutton").click(function(e){
    e.preventDefault();  /// Non ricarica la pagina
    
    var dati_grezzi = {};
    $.each($('#fitform').serializeArray(), function() {
            dati_grezzi[this.name] = +this.value; /// Già che ci sono trasformo in float
    });

    var dati_serializzati = JSON.stringify(dati_grezzi);

    console.log(dati_grezzi)

    /// Mando tutto al PHP
    $.ajax({
        type: 'GET',                      /// Che metodo uso?
        url: './roba-server.php',         /// A che file lo mando?
        data: {mydata:dati_serializzati}, /// Che cosa mando?
        dataType: 'json'                  /// Che tipo di dati?
    })
	.done( function( data ) {         /// Che cosa dico se tutto va bene?
	    console.log('OK!');           /// Guarda nella console del browser (F12)!

            scatter(data)
            
	})
	.fail( function( error, data ) {         /// Che cosa dico se qualcosa va storto?
	    console.log('Oh, no!');       /// Guarda nella console del browser (F12)!
//	    console.log(data);
	});
        
}); /// fit click




