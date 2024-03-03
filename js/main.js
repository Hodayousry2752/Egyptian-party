

let innerW = $('#hiden').innerWidth();

//nav hiden and shown
function navList(){
    if($('.nav').css('left') == '0px'){
        $('.nav').animate({left:`-${innerW}px`},1000);
        console.log(innerW)
    }else{
        $('.nav').animate({left:`0px`},1000);
    }
}

$('#open').click(navList);
$('.Party').click(navList);
$('.fa-xmark').click(navList);

//nav a click
$('.list-nav li a').click(function(e){
    let clicked = $(e.target).attr('href');
    let linkClick = $(clicked).offset().top;
    $('html,body').animate({scrpllTop:linkClick},1000)
});

//singer slide up and down
$('.singer').click(function(e){
   let clikedHead = $(e.target).attr('data-prag');
   let paragOut = $(`#${clikedHead}`);

   if(paragOut.css('display') =='none' && $('.prag').css('display') =='none'){
       $('.prag').slideUp(1000);
        paragOut.slideDown(1000);
           
   }else if(paragOut.css('display') =='none' && $('.prag').css('display') =='block' ){
    $('.prag').slideUp(1000);
    paragOut.slideDown(1000);
   }else{
         paragOut.slideUp(1000);
    
       }
})


//the date


let countDownDate = new Date('dec17,2024 00:00:00').getTime();
console.log(countDownDate)

let x = setInterval(()=>{
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor(distance%((1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor(distance%((1000*60*60*24))/(1000*60));
    let seconds = Math.floor(distance%((1000*60*60*24))/(1000));

    document.getElementById('days').innerHTML= days +' D';
    document.getElementById('hours').innerHTML= hours +' H';
    document.getElementById('minutes').innerHTML= minutes +' m';
    document.getElementById('seconds').innerHTML= seconds +' s';
    // if(distance<0){
    //     clearInterval(x);
    // }
},1000);


// texterea input 
    $('#textarea').on('input', function() {
        var maxLength = $(this).attr('maxlength');
        var currentLength = $(this).val().length;
        var remainingLength = maxLength - currentLength;
        $('#charCount').text(remainingLength) ;
    });

