import React from 'react';

const Calendar = () => {
	return (
		<section id="calendar">
			<input type="date" step="1" />
			<button className='btn-floating btn-large waves-effect waves-light red'><i class="material-icons">add</i></button>
		</section>
	);
};

export default Calendar;