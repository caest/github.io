$(function(){
    
    // выводим кнопку через 1 секунду
    setTimeout(function(){
        $(".kylform").animate({
            right: "-58px"
        }, 700);
    }, 1000); // 1000 - одна секунда
    
    // Показываем форму по нажатии на кнопку
    $(".kylform").click(function(){
        $("#kylform").animate({
            top: "20%"
        }, 700);
        return false;
    })

    // закрываем форму по нажатию на крестик
    $(".kylform_close").click(function(){
        $("#kylform").animate({
            top: "-500px"
        }, 700);
        return false;
    })
    
    // отправялем данные с формы в обработчик
    $("#send").click(function(){
        var msg = $('#kylform form').serialize();
        $.ajax({
          type: 'POST',
          url: '/action.php',
          dаta: msg,
          success: function(data) {
            $('.answer').html(data).slideDown(300);
            console.log(data);
          },
          error:  function(xhr, str){
                $('.answer').html('Возникла ошибка: ' + xhr.responseCode);
            }
        });
        return false;
    })

});