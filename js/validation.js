const steps = ['1','2','3','4','5'];


function details(){

  $('main').fadeOut('fast');

  setTimeout(function(){
    $('nav').html (`<h3 class='alt'>Home &nbsp; › &nbsp;  Build &nbsp; › &nbsp;  Validation Name 1</h3>`);

    $('main').html(
      `
        <div class='hero'>
          <h1 class='title'>Validation Name 1</h1>
          <h2 class='subtitle'> #1003</h2>
          <p class='alt'> submitted March 12 2018 </p>
          <button class='terciary active'> Awaiting response </button>
        </div>
        <section class='grid-validation'></section>
      `
    );

    $('main').fadeIn('slow');

    $('.grid-validation').append(`
      <div class='chat-container'></div>
      <aside>
        <details>
          <Summary> Validation Details</Summary>
          <p> Contact: Nutanix Ready Team</br>
              Type: AHV Validation </br>
              Created: On 03/18/2018 </br>
              Created by: Joe Appleseed </br>
              Validation ID: 1003 </br>
          </p>
        </details>
        <hr style='margin:20px 0'>
        <details>
          <Summary> Validation Attachments</Summary>
          <div class='uploaded-file' style='margin-top:20px'>
            <h3> File-Server-Ram.csv </h3>
            <p class='alt'>2d ago by Krishna </p>
          </div>
          <hr>
          <div class='uploaded-file'>
            <h3> File-Server-Ram.csv </h3>
            <p class='alt'>2d ago by Krishna </p>
          </div>
          <hr>
          <div class='uploaded-file'>
            <h3> File-Server-Ram.csv </h3>
            <p class='alt'>2d ago by Krishna </p>
          </div>
          <hr>
          <div class='uploaded-file requested'>
            <h3 class='alt'> Requested File</h3>
            <p class='alt'>Test results file</p>
          </div>
        </details>
      </aside>
      <div class='chat-container'></div>
      </div>
      `)

    $('.chat-container').append(`
      <div class='bubble-user'><h2>K</h2> <p><kbd>Joe</kbd><br>Thanks for providing us information about your solution. We will get back to you shortly with next steps. In the interim, you can review the prerequesites & relevant videos.Thanks for providing us information about your solution. We will get back to you shortly with next steps. In the interim, you can review the prerequesites & relevant videos.</p></div>
      <hr>
      <div class='bubble-nutanix'><h2>P</h2> <p><kbd>Partner Associate</kbd></br>Thanks for providing us information about your solution. We will get back to you shortly with next steps. In the interim, you can review the prerequesites & relevant videos.Thanks for providing us information about your solution. We will get back to you shortly with next steps. In the interim, you can review the prerequesites & relevant videos.</p></div>
      <hr>
      <div class='bubble-service'><h2>N</h2> <p><kbd id='system-chat'>System</kbd></br>Thanks for providing us information about your solution. We will get back to you shortly with next steps. In the interim, you can review the prerequesites & relevant videos.Thanks for providing us information about your solution. We will get back to you shortly with next steps. In the interim, you can review the prerequesites & relevant videos.</p></div>
      `)
  }, 600);

}
