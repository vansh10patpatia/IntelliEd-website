import React from 'react';
import "./Work.css";

import black from "../images/work/black.png";
import youtube from "../images/work/youtube.png";
import medal from "../images/work/medal.png";
import male from "../images/work/male.png";
import female from "../images/work/female.png";
import YouTube from 'react-youtube';

//https://youtu.be/se1f3njdiOk

function Work(props) {
    const opts = {
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    return (
        <div className='work'>
            
            <div className='work-heading'>
                <div className='work-lining'></div>
                    How it Works
                <div className='work-lining'></div>
            </div>

            <div className='work-image'>
                <img src={medal} alt='medal-logo' className='medal-logo'/>
                {/* <img src={black} alt='black-logo' className='work-youtube'/> */}
                <div className='youtube-video-container'>
                    <YouTube videoId="se1f3njdiOk" opts={opts} 
                        // onReady={this._onReady} 
                    />
                </div>
                {/* <img src={youtube} alt='youtube-logo'className='youtube-logo'/> */}
                <img src={male} alt='male-logo'className='male-logo'/>
                <img src={female} alt='female-logo'className='female-logo'/>
                
            </div>
           
        </div>
    );
}

export default Work;