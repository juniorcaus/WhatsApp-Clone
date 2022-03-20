/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect} from 'react';
import  './App.css';
import  ChatListItem  from './components/ChatListItem';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';


export default () => {

  const [chatlist, setChatList] = useState([{}, {}, {}, {}]);

  return(
    <div className="app-window"> {/* Inicio class APP WINDOWN */}
      <div className="sidebar" >
          
          <header>

            <img className='header--avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt='' />
            <div className='header--buttons'> {/* Inicio header buttons*/}
              <div className='header--btn'>
                <DonutLargeIcon style={{color: '#919191'}} />
              </div>

              <div className="header--btn">
                <ChatIcon style={{color: '#919191'}} />
              </div>

              <div className='header--btn'>
                <MoreVertIcon style={{color: '#919191'}} />
              </div>

             
            </div>{/*FIM header buttons*/}

          </header>

          

          <div className='search'>
            <div className='search--input'>
              <SearchIcon fontSize="small" style={{color: '#919191'}}  />
              <input type="search" placeholder="Procurar ou começar uma nova conversa" />

            </div>
          </div>  

          <div className="chatlist">
            {chatlist.map((item, key) => (
                <ChatListItem
                  key={key}
                  
                />
            ))}
          </div>


      </div>
      <div className="contentarea" >{/* Inicio class CONTENT AREA */}
          contentearea.......
      </div> {/* FIM CLASS CONTENT AREA */}
      
    </div> //FIM CLASS APP WINDOWN
  );
} 