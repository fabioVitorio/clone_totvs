// --------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ FUNÇÃO SCROLL HEADER ----------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

// função para adicionar cor ao header ao scrollar a pág
window.addEventListener('scroll', function(){
    var menu = document.querySelector('header');
    menu.classList.toggle('sticky', window.scrollY > 0);
  })


// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------- ALERT DE CRÉDITOS -----------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

  function creditos(){
    alert("ATENÇÃO! \n Você está em um site inspirado no site da TOTVS.COM, onde o intuito \n é apenas a demonstração de habilidades na criação de sites. \n Créditos: EMPRESA TOTVS");
  }



// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------- SCRIP BARRA LATERAL ---------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

  var theToggle = document.getElementById('toggle');

  function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }

  function addClass(elem, className) {
      if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
      }
  }

  function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
              newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
  }

  function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
      if (hasClass(elem, className)) {
          while (newClass.indexOf(" " + className + " ") >= 0 ) {
              newClass = newClass.replace( " " + className + " " , " " );
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
      } else {
          elem.className += ' ' + className;
      }
  }

  theToggle.onclick = function() {
    toggleClass(this, 'on');
    return false;
  }