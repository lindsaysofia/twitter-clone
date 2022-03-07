import React from 'react';
import '../styles/Happening.css'

function Happening() {
  return (
    <div className="happening">
      <h3>What's happening</h3>
      <article className="happening__article">
        <h4>Cute Dogs are Cute</h4>
        <img src="https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg"/>
        <p>Trending with <span className="happening__hashtag">#cute</span>, <span className="happening__hashtag">#puppies</span></p>
      </article>
      <article className="happening__article">
        <h4>The Sun is a Star</h4>
        <img src="https://i.natgeofe.com/n/2f169ccb-e943-4772-8bd1-c92e79db64ab/gsfc_20171208_archive_e000922_orig_4x3.jpg"/>
        <p>Trending with <span className="happening__hashtag">#hot</span>, <span className="happening__hashtag">#space</span></p>
      </article>
      <article className="happening__article">
        <h4>Rain is Wet</h4>
        <img src="https://lh3.googleusercontent.com/tPtvqnIoqRR2CtHpVYwurl5HNRtQ8lXfcNVxRmuOSSihah1Ocz2SwC3elaT49gSy6u0ozVr2VT_RgxPRCUGYFdbrRDFgQkVGIqx7EX-ZvofXV68acg=w1440"/>
        <p>Trending with <span className="happening__hashtag">#funfacts</span>, <span className="happening__hashtag">#themoreyouknow</span></p>
      </article>
    </div>
  )
}

export default Happening;