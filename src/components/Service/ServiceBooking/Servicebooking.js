import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const Servicebooking = ({date}) => {
    return (
        <section>
        <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2>
        <div className="row">
            {
                bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
            }
        </div>
    </section>
    );
};

export default Servicebooking;