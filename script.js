$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").slideToggle(); //Search for "Effects" in jQuery documentation to se all different effects
        $(".stream1").slideToggle(1000); // set a speed in milliseconds
        // $(".stream1").fadeTo(1000, 0.5); // here you can also set the speed and opacity 

   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 