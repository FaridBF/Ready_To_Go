import { useState } from 'react';

const Apps = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className='container'>
      <button
        style={{
          color: switch1 && switch2 && switch3 === true ? 'green' : 'red'
        }}
      >
        {switch1 === true && switch2 === true && switch3 === true ? (
          <p>go</p>
        ) : (
          <p>no way</p>
        )}
      </button>
      <button
        className='button1'
        onClick={() => {
          setSwitch1(true);
        }}
      >
        ON
      </button>
      <button
        className='button1'
        onClick={() => {
          setSwitch2(true);
        }}
      >
        ON
      </button>
      <button
        className='button1'
        onClick={() => {
          setSwitch3(true);
        }}
      >
        ON
      </button>
      <button
        className='button2'
        onClick={() => {
          setSwitch1(false);
        }}
      >
        OFF
      </button>
      <button
        className='button2'
        onClick={() => {
          setSwitch2(false);
        }}
      >
        OFF
      </button>
      <button
        className='button2'
        onClick={() => {
          setSwitch3(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Apps;
