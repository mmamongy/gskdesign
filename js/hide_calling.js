$(document).ready(function() {
   $('#1').show();
   $('#2').hide();
   $('#3').hide();
   $('#4').hide();

    $("#change").click(function(e){
    e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#2').show(); 
    });
    $("#change1").click(function(e){
    e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#3').show();  
    });
       $("#change2").click(function(e){
        e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#4').show();  
    });
       $("#changee").click(function(e){
    e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#2').show(); 
    });
    $("#change11").click(function(e){
    e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#3').show();  
    });
       $("#change22").click(function(e){
        e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#4').show();  
    });
       $("#changeee").click(function(e){
    e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#2').show(); 
    });
    $("#change111").click(function(e){
    e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#3').show();  
    });
       $("#change222").click(function(e){
        e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#4').show();  
    });
       $("#changeeee").click(function(e){
    e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#2').show(); 
    });
    $("#change1111").click(function(e){
    e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#3').show();  
    });
       $("#change2222").click(function(e){
        e.preventDefault();
        var content = $(this).html();
        $('#1').hide();
        $('#4').show();  
    });
       
});

$('#1-btn').click(function(){
      $('#2').hide();
      $('#1').show();
    });
    $('#2-btn').click(function(){
      $('#3').hide();
      $('#1').show();
    });

    $('#3-btn').click(function(){
      $('#4').hide();
      $('#1').show();
    });

    $('#sm-fm1').click(function(){
      $('#2').hide();
      $('#3').show() ;
    });

    $('#sm-en1').click(function(){
      $('#2').hide();
      $('#4').show();
    });

    $('#my-mission').click(function(){
    $('#our_vision').hide();
    $('#mis-des').show();
  });
  $('#my-vision').click(function(){
    $('#our_vision').hide();
    $('#vis-des').show();
  });
    $('#my-history').click(function(){
    $('#our_vision').hide();
    $('#his-des').show();
  }) ;

    $('#mi-v').click(function(){
  $('#mis-des').hide();
  $('#vis-des').show();
});
$('#mi-h').click(function(){
  $('#mis-des').hide();
  $('#his-des').show();
});
// vision 
$('#vi-m').click(function(){
  $('#vis-des').hide();
  $('#mis-des').show();
});
$('#vi-h').click(function(){
  $('#vis-des').hide();
  $('#his-des').show();
});
// history 
$('#hi-m').click(function(){
  $('#his-des').hide();
  $('#mis-des').show();
});
$('#hi-v').click(function(){
  $('#his-des').hide();
  $('#vis-des').show();
});

$('#main-v').click(function(){
    $('#vis-des').hide();
    $('#our_vision').show();
  });
  $('#main-m').click(function(){
    $('#mis-des').hide();
    $('#our_vision').show();
  });
  $('#main-h').click(function(){
    $('#his-des').hide();
    $('#our_vision').show();
  });

  $('#sm-fm1').click(function(){
   $('#3').show();
   $('#2').hide();
  }); 
  $('#sm-en1').click(function(){
    $('#4').show() ;
    $('#2').hide();
  });

  $('#sm-en2').click(function(){
   $('#3').hide();
   $('#4').show();
  }); 
  $('#sm-cn2').click(function(){
    $('#2').show() ;
    $('#3').hide();
  });
  //div 4 
   $('#sm-cn3').click(function(){
   $('#4').hide();
   $('#2').show();
  }); 
  $('#sm-fm3').click(function(){
    $('#3').show() ;
    $('#4').hide();
  });