;(function() {

  var words = [
    'front-end',
    'código criativo',
    'open-source lover',
    'comunidade',
    'aprendizado contínuo',
    'liberdade',
    'responsabilidade',
    'crocante',
    'cremosa',
    'acessível',
    'possível',
    'realista',
    'organizada',
    'inclusiva'
  ];
  
  var interval;
  var clicked = false;
  var qtyWords = words.length - 1;

  interval = setInterval( changeWord, 125 );

  $( '#main #grama-is' ).on( 'click', function() {
    if ( clicked ) {
      clicked = false;
      interval = setInterval( changeWord, 125 );
    } else {
      clicked = true;
      clearInterval( interval );
    }
  });

  function changeWord() {
    $( '.grama-word' ).text( words[qtyWords] );

    if ( qtyWords ) {
      qtyWords--;
    } else {
      qtyWords = words.length - 1;
    }
  }

})();
