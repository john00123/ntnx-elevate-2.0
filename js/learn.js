const learn = {
  program:{
    title:`Elevate Partner Program Guide`,
    description:``,
    type:`PDF`,
    section: `general`
  },
  community:{
    title:`Next Community<br>&nbsp;`,
    description:``,
    type:`PDF`,
    section: `general`
  },
  communityEdition:{
    title:`Next Community Edition CE`,
    description:``,
    type:`PDF`,
    section: `general`
  },
  NCSR:{
    title:`Nutanix Certified Sales Representative`,
    description:``,
    type:`PDF`,
    section: `training`
  },
  NSEN:{
    title:`Nutanix System Engineering Novice NSEN`,
    description:``,
    type:`PDF`,
    section: `training`
  },
  NPP:{
    title:`Nutanix Enterprise Cloud Platform Administrator`,
    description:``,
    type:`PDF`,
    section: `training`
  },
  calmGuide:{
    title:`Administration & Operations Guide`,
    description:``,
    type:`Site`,
    section: `calm`
  },
  bluePrintWorkshop:{
    title:`Blueprint Workshop <br>&nbsp;`,
    description:``,
    type:`Site`,
    section: `calm`
  },
  calmAutomation:{
    title:`App Centric Automation`,
    description:``,
    type:`Video`,
    section: `calm`
  },
  calmHybrid:{
    title:`Hybrid Cloud Deployments with Nutanix Calm`,
    description:``,
    type:`Video`,
    section: `calm`
  },
  installingCalm:{
    title:`Installing Nutanix Calm & Launching Apps from the Marketplace`,
    description:``,
    type:`Video`,
    section: `calm`
  },
  customBlueprints:{
    title:`Building Custom Blueprints in Nutanix Calm`,
    description:``,
    type:`Video`,
    section: `calm`
  },
  ahvInstall:{
    title:`AHV Requirements`,
    description:``,
    type:`Video`,
    section: `ahv`
  },
  hypervisor101:{
    title:`Acroplis hypervisor 101`,
    description:``,
    type:`Site`,
    section: `ahv`
  },
  ahvmigrate:{
    title:`How to migrate to AHV`,
    description:``,
    type:`PDF`,
    section: `ahv`
  },
  ahvvalidate:{
    title:`Validating AHV Solutions`,
    description:``,
    type:`PDF`,
    section: `core`
  },
  core:{
    title:`Nutanix Core Strucutres`,
    description:``,
    type:`Site`,
    section: `core`
  },
  apiPc:{
    title:`Which API to choose`,
    description:``,
    type:`Video`,
    section: `api`
  },
  api3:{
    title:`What's new on API v3`,
    description:``,
    type:`site`,
    section: `api`
  },
  api2:{
    title:`Learning API v2`,
    description:``,
    type:`site`,
    section: `api`
  }
};

const sections = ['All','General','Training','Calm','AHV','Core','API'];

$('#learn').click(()=>{
  $('nav').html (`<h3 class='alt'>Home &nbsp; › &nbsp;  Learn</h3>`)

  //initial load
  $('main').html(
    `
      <div class='hero'>
        <h1 class='title'>Learn</h1>
        <h2 class='subtitle'>
          Collection of articles, videos, and resources for our partners.
        </h2>
      </div>

      <section class='filters'></section>
      <section class='grid-main'></section>
    `
  );


  //filter

  sections.map(section =>
    $('.filters').append(`
      <button class='terciary'
        id='${section.toLowerCase()}'> ${section}
      </button>`
    )
  );


  //filter click

  $('.terciary').click(function(){
    $('body').animate({scrollTop: 0}, 'slow');
    let hasId = $(this).attr('id');

    $('.terciary').removeClass('filter-active');  $(this).addClass('filter-active');

    hasId == sections[0].toLowerCase() ?
    allWater(learn): waterFilter(hasId.toLowerCase());
  });

  $('#all').addClass('filter-active');


  //show cards

  $('.grid-main').html(`<div class='card' style='display:none;'>`);
  allWater(learn);


  //filters by section name === id
  function waterFilter(id){
    $('.card').fadeOut('slow', () => {
      $('.card').remove();

      //adds new filtered cards
      Object.keys(learn)
        .filter(key => learn[key].section == id)
        .map(key => cardGenerator(learn, key));

      //shows new cards
      $('.card').fadeIn('slow');
    });
  }

});
