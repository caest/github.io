$(document).ready(function() {	
      $('#feedback-valid').validate({	
                    rules:{
						"feedback_name":{required:true },
						"feedback_email":{required:true, email:true },
						"feedback_subject":{required:true },
						"feedback_txt":{required:true },
						"feedback_key":{required:true }},
					messages:{
						"feedback_name":{required:"Укажите своё имя!"},
						"feedback_email":{required:"Укажите свой E-mail", email:"Не корректный E-mail" },
						"feedback_subject":{required:"Укажите тему сообщения!" },
						"feedback_txt":{required:"Напишите сообщение!" },
						"feedback_key":{required:"Укажите код с картинки!" }},
					
	submitHandler: function(form){
	$(form).ajaxSubmit({
	success: function(data) {if (data == "true") {$(".message-feedback").attr("id","message-feedback-good").html("Сообщение успешно отправлено!").slideDown(3);
        }else{$(".message-feedback").attr("id","message-feedback-error").html(data).slideDown(300);}}});}});
    });