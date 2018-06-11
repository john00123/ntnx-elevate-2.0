

//creates cards based on keys from data

function cardGenerator(object, key){
  $('.grid-main').append(
    `<div class='card' style='display:none;' id='${object[key].title.toLowerCase().replace(/ /g,'-')}'>
      <h2>  ${object[key].title}  </h2>
      <code>${object[key].section}</code>
      <h3>  ${object[key].type}   </h3>
    </div>`
  );
}


//Renders all view

function allWater(object){
  $('.card').fadeOut('slow', () => {
    $('.card').remove();


    //filter and re-render

    Object.keys(object).map(key => cardGenerator(object, key));
    $('.card').fadeIn('slow');


    //special cards
    if (Object.keys(object)[0] == 'program'){
      $('.card:eq(2)').addClass('featured');
      $('.card:eq(11)').addClass('featured2');
    }

    if (Object.keys(object)[0] == 'software'){
      $('.card h3').remove();
      $("#validation-name-1" ).click(function(e) {
          e.preventDefault();
          $(this).addClass( "grow" ).one("animationstart", function(){
            setTimeout(function(){ details() }, 200);
          }).one("animationend", function(){
              $(this).removeClass( "grow" );

          });
      });
    }
  });
}
