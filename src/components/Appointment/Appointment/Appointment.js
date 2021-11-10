import React from 'react';
import Header from '../../Shared/Header/Header';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Header></Header>
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
        </div>
    );
};

export default Appointment;