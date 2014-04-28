$(document.forms['loginform]').on('submit', function() {
var form = $(this);

$('.error', form).html('');
$(":submit", form).button("loading");

$.ajax({
url:"/login",
method:"POST",
data:form.serialize(),
complete:function(){
$(":submit", form).button("reset");
},
statusCode:{
200:function(){
form.html("Good to see you!").addClass('alert-sucess');
window.location.href="/";
},
403:function(jqXHR){
var.error=JSON.parse(jqXHR.responseText);
$('.error',form).html(error.message);
}
}
});