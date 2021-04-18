import React from 'react';

const Orderstatus = (props) => {
    const [service,price,status] = props;
    return (
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{service}</h5>
          <h6 class="card-subtitle mb-2">{price}</h6>
         <h6 class="card-subtitle mb-2">{status}</h6>
        </div>
      </div>
    );
};

export default Orderstatus;