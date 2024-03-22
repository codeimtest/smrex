// lang list
$('.langlist_ul').hide()
$('.tolbar_lang').click(function(){
	$(this).toggleClass('active')
	$('.langlist_ul').slideToggle('fast')
})
// toggle menu
$('.toggle_button').click(function(){
	$('header').toggleClass('active')
	$('aside').toggleClass('active')

	$(this).toggleClass('active')
})
//popup
$(document).mouseup(function (e) {
	var container = $(".popup-dialog");
	if (container.has(e.target).length === 0){
			$('.popup').removeClass('active');
			$('body').removeClass('lock');
	}
});
$(".btn-close").click(function() {
	$(this).closest(".popup").removeClass("active");
});

$('.js-select-single').select2({
	minimumResultsForSearch: -1,
});