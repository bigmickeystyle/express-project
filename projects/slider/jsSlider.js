$('img').on('dragstart', function(e){
    e.preventDefault();
});

$('#bar').on('mouseover', function(){
    $(this).css({cursor: "pointer"});
}).on('mousedown', function(){
    $(document).on('mousemove.remmove', function(e){
        e.preventDefault();
        var movement = e.pageX;
        var width = parseInt($('.images').css('width'), 10);
        if(e.pageX < width && e.pageX > 0){
            $('#bar').css({left: movement});
            var cropper = $('#bar').css('left');
            $('#image2').css({width: cropper});
        }
        console.log("cropper" + cropper);
        $(document).on('mouseup.remove', function(){
            $(this).off('.remmove');
            $(this).off('.remove');
        });
    });
});

var recordx = 0;

$('#arrow').on('mousedown', function(){
    $(document).on('mousemove.arrowmove', function(e){
        e.preventDefault();
        var livebar = parseInt($('#bar').css('left'), 10);
        var movementX = e.pageX;
        var movementY = e.pageY;
        $('#image1').css({width: movementX, height: movementY});
        if(livebar >= recordx) {
            $('#bar').css({height: movementY, left: movementX});
            $('#image2').css({width: movementX, height: movementY});
            $('.images').css({width: movementX, height: movementY});
        }
        else{
            $('#bar').css({height: movementY});
            $('#image2').css({width: livebar, height: movementY});
            $('.images').css({width: movementX, height: movementY});
        }
        $('#arrow').css({top: movementY - 10, left: movementX - 10});
        recordx = movementX;

        $(document).on('mouseup.arrowstop', function(){
            $(this).off('.arrowmove');
            $(this).off('.arrowstop');
        });
    });
});

// $('#bar').on('touchenter', function(e){
//     e.preventDefault();
//     $(document).on('touchmove.remmove', function(e){
//         e.preventDefault();
//         var movement = e.pageX;
//         var width = parseInt($('.images').css('width'), 10);
//         if(e.pageX < width && e.pageX > 0){
//             $('#bar').css({left: movement});
//             var cropper = $('#bar').css('left');
//             $('#image2').css({width: cropper});
//         }
//         console.log("cropper" + cropper);
//         $(document).on('touchend.remove', function(){
//             $(this).off('.remmove');
//             $(this).off('.remove');
//         });
//     });
// });
//
// var trecordx = 0;
//
// $('#arrow').on('touchenter', function(e){
//     e.preventDefault();
//     $(document).on('touchmove.arrowmove', function(e){
//         e.preventDefault();
//         var livebar = parseInt($('#bar').css('left'), 10);
//         var movementX = e.pageX;
//         var movementY = e.pageY;
//         $('#image1').css({width: movementX, height: movementY});
//         if(livebar >= trecordx) {
//             $('#bar').css({height: movementY, left: movementX});
//             $('#image2').css({width: movementX, height: movementY});
//         }
//         else{
//             $('#bar').css({height: movementY});
//             $('#image2').css({width: livebar, height: movementY});
//         }
//         $('#arrow').css({top: movementY - 10, left: movementX - 10});
//         recordx = movementX;
//
//         $(document).on('touchend.arrowstop', function(){
//             $(this).off('.arrowmove');
//             $(this).off('.arrowstop');
//         });
//     });
// });
