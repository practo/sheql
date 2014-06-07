Date.prototype.getWeekOfMonth = function () {
	var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
	var firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
	return Math.ceil((((today - firstOfMonth) / 86400000) + firstOfMonth.getDay() + 1) / 7);
};

Date.prototype.getWeekOfYear = function () {
	var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
	var firstOfYear = new Date(today.getFullYear(), 0, 1);
	return Math.ceil((((today - firstOfYear) / 86400000) + firstOfYear.getDay() + 1) / 7);
};

Date.prototype.getWeekNumber = function () {
	var d = new Date(+this);
	d.setHours(0, 0, 0);
	d.setDate(d.getDate() + 4 - (d.getDay() || 7));
	return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
};

Date.prototype.isLeapYear = function () {
	return new Date(this.getFullYear(), 1, 29).getDate() == 29;
};

Date.prototype.daysInMonth = function () {
	return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
};
Date.prototype.getMonthName = function () {
	var map = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	return map[this.getMonth()];
};