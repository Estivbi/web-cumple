import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const DatePickerComponent = () => {
	const [selectedDate, setSelectedDate] = useState(null)
	return (
		<DatePicker 
		selected={selectedDate}
		onChange={date => setSelectedDate(date)}
		dateFormat='dd/MM/yyyy'
		minDate={new Date()}
		isClearable
		showYearDropdown
		scrollableMonthYearDropdown
		className="border p-2 rounded-lg w-full text-center text-white font-bold mt-4"
		placeholderText="Selecciona una fecha"
		/>
	)
}

export default DatePickerComponent
