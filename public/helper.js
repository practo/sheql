$(function(){
	$("#fc-container").fullCalendar({
		selectable: true,
		editable : false,
		defaultView: 'year',
		header: {
			left: 'prev',
			center: 'title',
			right: 'next'
		},
		yearColumns: 4
	});
});