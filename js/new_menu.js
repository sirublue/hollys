$(document).ready(function(){
    $('#new02').hide();
    $('#new03').hide();
    $('#new04').hide();

    $('#new01_show').click(function(){
       $('#new01').show();
       $('#new02').hide();
       $('#new03').hide();
       $('#new04').hide();
    });

    $('#new02_show').click(function(){
       $('#new02').show();
       $('#new01').hide();
       $('#new03').hide();
       $('#new04').hide();
    });

    $('#new03_show').click(function(){
       $('#new03').show();
       $('#new01').hide();
       $('#new02').hide();
       $('#new04').hide();
    });

    $('#new04_show').click(function(){
       $('#new04').show();
       $('#new01').hide();
       $('#new02').hide();
       $('#new03').hide();
    });

 });
