import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { BsFillCaretDownFill } from 'react-icons/bs';
import './Votes.css';

const Votes = () => {
  const [count, setCount] = useState(0);


  return (
    <div className='votes-counter'>
      <Button className='up-arrow' onClick={() => setCount(count + 1)}>
        <BsFillCaretUpFill>
          {/* rendered from react-icons package */}
        </BsFillCaretUpFill>
      </Button>
      <p className='count'>{count}</p>
      <Button className='down-arrow' onClick={() => setCount(count - 1)}>
        <BsFillCaretDownFill>
          {/* same */}
        </BsFillCaretDownFill>
      </Button>
    </div>
  );
}

export default Votes;