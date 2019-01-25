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


$(function(){
    $('li:contains("orzeszki")').text('mleko migdałowe');
    $('li.hot').html(function(){
        return '<em>' + $(this).text() + '</em>';
        });
        $('li#one').remove()
})






