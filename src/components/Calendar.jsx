import React from 'react';

const Calendar = () => {
	return (
		<section>
			<input type="date" step="1" />
			<button className='btn-floating btn-large waves-effect waves-light'><i class="material-icons">add</i></button>
		</section>
	);
};

export default Calendar;