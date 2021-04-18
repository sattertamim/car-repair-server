import React from 'react';
import ServiceForm from '../ServiceForm/ServiceForm';
const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SERVICE AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book A Service</button>
                    <ServiceForm modalIsOpen={modalIsOpen} serviceOn={booking.subject} closeModal={closeModal} date={date}></ServiceForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;