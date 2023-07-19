import React, {useState} from 'react'
import * as mdb from 'mdb-ui-kit';
import { data } from '../data/data';

const Selection = () => {

  const [foods, setFoods] = useState(data);
 
  return (
    <div className='row overflow-y-scroll max-height p-4 border'>

          {foods.map((item, index)=> (
            <div key={index} className='col-lg-2 mb-4'>
              <div className='pos-item px-3 text-center border' >
                <p>{item.name}</p>
              <img src={item.image} alt={item.name}
              className='img-fluid image-width' />
              <p>{item.price }</p>
              </div>
            </div>
          ))}
        </div>
        

  )
};

export default Selection