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

// $(function() {
//     var backgroundColor = $('li').css('background-color');

//     $('ul').append('<p>Kolor tła ' + backgroundColor + '</p>');
//       $('li').css({
//       'background-color': 'pink',
//       'border': '1px solid #fff',
//       'color': 'red',
//       'text-shadow': 'none',
//       'font-family': 'Georgia',
//       'padding-left': '100px'
//     });
// });


//---------------,each()--------------
// $(function() {
//   $('li').each(function() {
//     var ids = this.id;
//     $(this).append(' <span class="order">' + ids + '</span>');
//   });
// });
//--------------zdarzenia-------------
// $(function(){
  
//   var ids = '';
//   var $lisItem = $('li');

//   $lisItem.on('mouseover click', function(){
//     ids = this.id;
//     $lisItem.children('span').remove()
//     $(this).append('<span class="priority">'+ ' ' + ids +'</span>');
//   });

//   $lisItem.on('mouseout', function(){
//     $(this).children('span').remove()
//   });
// });
//--------------------uzycue oboktu event-----
// $(function(){
//   $('li').on('click', function(event){
//     $('li span').remove();
//     var date = new Date();
//     date.setTime(event.timeStamp);
//     var clicked = date.toDateString();
//     $(this).append('<span class="date">' + clicked + ' ' + event.type + '</span>')
//   });
// })

//------------delegacja zdarzen -----------

// $(function() {
//   var listItem, itemStatus, eventType;

//   $('ul').on('click mouseover', ':not(#four)', {status: 'imortant'},
//     function(event){
//       listItem = 'Element: ' + event.target.textContent + '<br />';
//       itemStatus = 'Stan:' + event.data.status +  '<br />';
//       eventType = 'Zdarzenie:' + event.type;
//       $('#notes').html(listItem + itemStatus + eventType);
//     }
//   );
// })
//-------------------Podstawowe efekty---------

// $(function() {

//   $('h2').hide().slideDown();
//   var $li = $('li');
//   $li.hide().each(function(index) {
//     $(this).delay(700 * index).fadeIn(700);
//   });

//   $li.on('click', function() {
//     $(this).fadeOut(700);
//   });

// });
// $('#notes').remove()

//--------Uzycie animacji-----------
// $(function() {
//   $('p').remove()
//   $('li').on('click', function() {
//     $(this,).animate({ opacity: 0.1, paddingLeft: '80px'}, 800, function() {
//     $(this).remove();
//     });
//   });
// });

//---------Nawigacja-------
// $(function(){
//   var $h2 = $('h2');
//   $('ul').hide();
//   $h2.append('<a class="show">pokaz</a>');

//   $h2.on('click', function(){
//     $h2.next('ul').fadeIn(500).children('.hot').addClass('.complete');
//     $h2.find('a').fadeOut();
//   });
// });

//----Uzycue fultów----

// var $lisItem = $('li');
// $lisItem.filter('.hot:last').removeClass('hot');
// $('li:not(.hot)').addClass('cool');
// $lisItem.has('em').addClass('complete');

// $lisItem.each(function(){
//   var $this = $(this)
//     if ($this.is('.hot')){
//       $this.prepend('priorytetowe');
//     }
//   });

//----------uzycie wartosci indeksu----
$(function(){
  $('li:lt(2)').removeClass('hot');
  $('li').eq(0).addClass('complete');
  $('li:gt(2)').addClass('cool')
})
