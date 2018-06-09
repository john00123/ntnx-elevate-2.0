
//alert icon
const alert = `
  <svg viewBox="0 0 12 12" version="1.1"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="alert">
  <path d="M4,9.998 L4,10 C4,11.104 4.896,12 6,12 C7.104,12 8,11.104 8,10 L8,9.998 L4,9.998 Z" id="Fill-41"></path>
  <path d="M10,5.93484466 L10,4.16684466 C10,2.07784466 8.484,0.216844663 6.404,0.018844663 C4.019,-0.209155337 2,1.66184466 2,3.99984466 L2,5.93484466 C2,6.58684466 1.642,7.18384466 1.057,7.47484466 L0.277,7.86284466 C0.107,7.94784466 0,8.12084466 0,8.30984466 L0,8.49984466 C0,8.77584466 0.224,8.99984466 0.5,8.99984466 L11.5,8.99984466 C11.776,8.99984466 12,8.77584466 12,8.49984466 L12,8.30884466 C12,8.11984466 11.894,7.94684466 11.725,7.86184466 L10.958,7.47684466 C10.377,7.18484466 10,6.58484466 10,5.93484466"></path>
  </svg>`

//build data for cards
const build = {
  program:{
    title:`Software Validation`,
    description:``,
    type:`PDF`,
    section: `general`
  },
  community:{
    title:`Hardware Validation`,
    description:``,
    type:`PDF`,
    section: `general`
  },
};


$('#build').click(()=>{
  $('nav').html (`<h3 class='alt'>Home &nbsp; › &nbsp;  Build</h3>`);

  $('main').html(
    `
      <div class='hero'>
        <h1 class='title'>Build</h1>
        <h2 class='subtitle'>Validate solutions for all our Nutanix Platforms</h2>
      </div>
      <div class='active-validation'>
        ${alert}
        <p>Your company has an Active validation under 'Validation 1'<br>
          Submitted: on <code> 12/12/2020</code></br>
          <a>Check Status</a>
        </p>
      </div>
      <div class='active-validation' style='margin-top:-20px;'>
        ${alert}
        <p>Your company has an Active validation under 'Validation 2'<br>
          Submitted: on <code> 12/12/2020</code></br>
          <a>Check Status</a>
        </p>

      </div>
      <section class='grid-main'></section>
    `
  );

  //show cards
  $('.grid-main').html(`<div class='card' style='display:none;'>`);
  allWater(build);
});
