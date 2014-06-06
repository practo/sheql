var calendarEvents = {
	'eventSources' : {
		'events' : []
	}
};
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
		eventColor : '#FFF',
		eventBackgroundColor: '#333333',
		yearColumns: 3,
		events: calendarEvents
	});
	$("#sheql-querybox").submit(function(ev){
		ev.preventDefault();
		var view = $("#fc-container").fullCalendar('getView');
		var viewStartDate = view.start;
		var viewEndDate = view.end;
		var dates = [];
		for (i=viewStartDate.getTime();i<viewEndDate.getTime();i+=(86400000*2)){
			dates.push(new Date(i));
		}
		renderEvents(dates);
	});
	function renderEvents(dates){
		var events = [];
		$.each(dates,function(key,value){
			events.push({
				'title' : 'Event ' + key,
				'start' : value,
				'allDay': true
			});
		});
		calendarEvents.events = events;
		$("#fc-container").fullCalendar('refetchEvents');
	}
});