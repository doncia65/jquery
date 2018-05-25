//metoda .text(), jezeli podamy parametr ustawia podany tekst dla danego selektora, jezeli nie podamy parametru, wyciaga tekst danego selektora
console.log($('p').text());
$('p').text('Zmieniono tekst wewnatrz paragrafu');

//meoda. html(), jezeli podamy parametr ustawia podany tekst dla danego selektora, jezeli nie podamy parametru, wyciaga tekst danego selektora
console.log($('p').html());
$('p').html('<span>Dodano span wewnatrz paragrafu</span>');

//append(), prepend(), before(), after()
$('#par').append('<span id="append">append</span>');
$('#par').prepend('<span id="prepend">prepend</span>');
$('#par').before('<p id="before">before</p>');
$('#par').after('<p id="after">after</p>');

//empty(), remove()

$('#par').empty();
$('#before').remove();

console.log($('#form input:nth').val());
$('#form input').val('zmienione value');

$('#form').addClass('klasa1 klasa2 klasa3');
$('#form').removeClass('klasa2');

$('#form input').each(function(index,element) {
    console.log(index, element);
});
                      
$('#form input').val('zmienione value');

// each()
$('#linki a').css('color','red');
// find()
$('#find').css('background-color','yellow').find('p').each(function(){
    console.log($(this).text());
})