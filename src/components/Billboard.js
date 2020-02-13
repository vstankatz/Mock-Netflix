import React from 'react';
import './Billboard.css';
import billboard from './billboard.jpg'
import title from './billboard_title.png'

function Billboard(){
  return(
    <div className='totalBillboard'>
    <img className='billboard' src={billboard}></img>
    <div className='billboardText'>
    <img className='billboardTitle' src={title}></img>
    <p>A conspiracy like this calls for the best cops around. They aren't available ... so this duo will have to do.</p>
<button className='playBtn'> ▶︎ Play </button>
<button className='infoBtn'> ⓘ More Info</button>
</div>
    </div>
  );
}

export default Billboard;
