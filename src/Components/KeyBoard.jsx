import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import {MdClear} from 'react-icons/md';

const KeyBoard = () => {

    const [value, setValue] = useState("");



  return (
    <div className='container text-center p-4'>
      <div className='cal'>

        <form action="">
            <div className='display input-group '>
                <input type="text" value={value} 
                class="form-control px-5" 
                placeholder="0" 
                aria-label="Recipient's username with two button addons"
                />
                <button class="btn btn-outline-secondary" type="button"><FiSearch size={20}/></button>
                <button class="btn btn-outline-secondary" type="button"><MdClear size={20}/></button>
            </div>

            <div>
                <input className='btn btn-lg col-3' type="button" value="AC" onClick={e => setValue('')}/>
                <input className='btn btn-lg col-3' type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/>
                <input className='btn btn-lg col-3' type="button" value="." onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="/" onClick={e => setValue(value+e.target.value)}/>
            </div>
            <div>
                <input className='btn btn-lg col-3' type="button" value="7" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="8" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="9" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="*" onClick={e => setValue(value+e.target.value)}/>
            </div>
            <div>
                <input className='btn btn-lg col-3' type="button" value="4" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="5" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="6" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="+" onClick={e => setValue(value+e.target.value)}/>
            </div>
            <div>
                <input className='btn btn-lg col-3' type="button" value="3" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="2" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="1" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="-" onClick={e => setValue(value+e.target.value)}/>
            </div>
            <div>
                <input className='btn btn-lg col-3' type="button" value="00" onClick={e => setValue(value+e.target.value)}/>
                <input className='btn btn-lg col-3' type="button" value="0" onClick={e => setValue(value+e.target.value)}/>
                <input type="button" value="=" className="equal btn btn-lg col-6" onClick={e => setValue(eval(value))} />
            </div>
        </form>
                </div>


    </div>
  
  )
}

export default KeyBoard
