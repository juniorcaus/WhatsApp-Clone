/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import  './App.css';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default () => {
  return(
    <div className="app-window"> {/* Inicio class APP WINDOWN */}
      <div className="sidebar" >
          
          <header>

            <img className='header--avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt='' />
            <div className='header--buttons'>
              <div className='header-btn'>
                <DonutLargeIcon style={{color: '#919191'}} />
              </div>

              <div className="header-btn">
                <ChatIcon style={{color: '#919191'}} />
              </div>

              <div className='header-btn'>
                <MoreVertIcon style={{color: '#919191'}} />
              </div>

             
            </div>

          </header>

          <div className='search'>
            search
          </div>  

          <div className='chatlist'>
            chatlist
          </div>


      </div>
      <div className="contentarea" >{/* Inicio class CONTENT AREA */}
          contentearea.......
      </div> {/* FIM CLASS CONTENT AREA */}
      
    </div> //FIM CLASS APP WINDOWN
  );
} 