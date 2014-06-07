var calendarEvents = {
	'eventSources': {
		'events': []
	}
};
$(function () {
	$("#fc-container").fullCalendar({
		selectable: true,
		editable: false,
		defaultView: 'year',
		header: {
			left: 'prev',
			center: 'title',
			right: 'next'
		},
		eventColor: '#FFF',
		eventBackgroundColor: '#333333',
		yearColumns: 3,
		events: calendarEvents
	});
	$("#sheql-querybox").submit(function (ev) {

		ev.preventDefault();

		var view = $("#fc-container").fullCalendar('getView');
		var viewStartDate = view.start;
		var viewEndDate = view.end;

		var m = new Main();
		m._init(new Lexer(), new TreeBuilder());
		var dates = m.execute($('#query').val(), viewStartDate, viewEndDate);

		renderEvents(dates);
	});

	function renderEvents(dates) {
		var events = [];
		$.each(dates, function (key, value) {
			events.push({
				'title': 'Event ' + key,
				'start': value,
				'allDay': true
			});
		});
		calendarEvents.events = events;
		$("#fc-container").fullCalendar('refetchEvents');
	}
});