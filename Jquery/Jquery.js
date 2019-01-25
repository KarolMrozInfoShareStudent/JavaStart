// $(':header').addClass('headline');
// $('li:lt(3)').hide().fadeIn(1500);
// $('li').on('click', function() {
//   $(this).remove();
// });


//----------------------------------------------------------//
//Pętle

// $('li em').addClass('seasonal');
// $('li.hot').addClass('favorite');

///----------------------------//
//Łaczenie metod

// 
//----------------------------/
// var $listHTML = $('ul').html();
//     $('ul').append($listHTML);

//--------------------------
// var $listText = $('ul').text();
//     $('ul').append('<p>' + $listText + '</p>')

//--------------------------
// var $listItemHTML = $('li ').html();
//     $('li').append('<i>' + $listItemHTML + '</i>')


//--------------------------

// var $listItemText = $('li').text();
//     $('li').append('<i>' + $listItemText+ '</i>')

//--------------------------


// $(function(){
//     $('li:contains("orzeszki")').text('mleko migdałowe');
//     $('li.hot').html(function(){
//         return '<em>' + $(this).text() + '</em>';
//         });
//         $('li#one').remove()
// });

//--------------------------------------------------
//----------Dodawanie nowej zawartości--------------

// $(function(){
//     $('ul').before( '<p class="notice">Uaktalinono</p>');
//     $('li.hot').prepend('+ ');
//     var $newListItem = $('<li><em>sos sojowy</em></li>');
//     $('li:last').after($newListItem)


// })

//--------------praca z atrybutami-----------------

// $(function(){
//     $('li#three').removeClass('hot');
//     $('li.hot').addClass('favorite');
//     $('ul').attr('id', 'group')
//     $("h1#header").click(function(){
//         $("h1#header").remove()
//       });
//     })

//------------zmiana reguł css---------

$(function() {
    var backgroundColor = $('li').css('background-color');

    $('ul').append('<p>Kolor tła ' + backgroundColor + '</p>');
      $('li').css({
      'background-color': 'pink',
      'border': '1px solid #fff',
      'color': 'red',
      'text-shadow': 'none',
      'font-family': 'Georgia',
      'padding-left': '100px'
    });
});