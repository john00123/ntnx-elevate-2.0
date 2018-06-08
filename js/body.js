$('nav').html (`<h3 class='alt'>Home &nbsp; › &nbsp;  Learn</h3>`)

//initial load
$('main').html(
  `
    <div class='hero'>
      <h1 class='title'>Learn</h1>
      <h2 class='subtitle'>Collection of articles, videos, and resources for our partners</h3>
    </div>

    <section class='filters'></section>
    <section class='grid-main'></section>
  `
);

//filter
sections.map(section =>
  $('.filters').append(`
    <button class='terciary' id='${section.toLowerCase()}'>${section}</button>`)
);
$('.terciary').click(function(){
  $('.terciary').removeClass('filter-active');  $(this).addClass('filter-active');
  let hasId = $(this).attr('id');
  switch (hasId)
  {
    case sections[0].toLowerCase():
      allWater();
      break;

    case sections[1].toLowerCase():
      waterFilter(sections[1].toLowerCase());
      break;

    case sections[2].toLowerCase():
      waterFilter(sections[2].toLowerCase());
      break;

    case sections[3].toLowerCase():
      waterFilter(sections[3].toLowerCase());
      break;

    case sections[4].toLowerCase():
      waterFilter(sections[4].toLowerCase());
      break;

    case sections[4].toLowerCase():
      waterFilter(sections[4].toLowerCase());
      break;

    case sections[5].toLowerCase():
      waterFilter(sections[5].toLowerCase());
      break;

    case sections[6].toLowerCase():
      waterFilter(sections[6].toLowerCase());
      break;

    default: allWater();
  }

})
$('#all').addClass('filter-active');

//show cards
$('.grid-main').html(`<div class='card' style='display:none;'>`);
allWater();

//creates cards based on keys from data
function cardGenerator(key){
  $('.grid-main').append(
    `<div class='card' style='display:none;'>
      <h2>${learn[key].title}</h2>
      <code>${learn[key].section}</code>
      <h3>${learn[key].type}</h3>
    </div>`)
}

//remove filters re-renders()
function allWater(){
  $('.card').fadeOut('slow', () => {
    $('.card').remove();
    //adds new filtered cards
    Object.keys(learn)
      .map(key => cardGenerator(key));

    //shows new cards
    $('.card:eq(2)').addClass('featured');
    $('.card').fadeIn('slow');
  });
}

//filters by section name === id
function waterFilter(id){
  $('.card').fadeOut('slow', () => {
    $('.card').remove();

    //adds new filtered cards
    Object.keys(learn)
      .filter(key => learn[key].section == id)
      .map(key => cardGenerator(key));

    //shows new cards
    $('.card').fadeIn('slow');
  });
}


$('.card').click(()=>{

})
