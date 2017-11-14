$(document).ready(function(){
  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

  $(document).on("keypress", function(event){
    if(event.key === "d"){
      ringDoorbell();
    }
  });

 $("#doorbell").remove();

 $("#bell").on("click" , function(){
 ringDoorbell(); }
  );

});
