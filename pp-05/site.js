$(document).ready(function(){

  function show(){
   $("#Image").toggle();
  }

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
    show();
  }

  $(document).on("keypress", function(event){
    if(event.key === "d"){
      ringDoorbell();
    }
  });

 $("#doorbell").remove();

 $("#bell").on("click" , function(){
 ringDoorbell();
  }
  );


});
