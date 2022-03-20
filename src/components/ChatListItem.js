import React from "react";
import './ChatListItem.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <div className="chatListItem">{/* INICIO DIV CHATLISTITEM*/}
         <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/>

         <div className="chatListItem--lines">{/* INICIO DIV CHATLIST LINES*/}

             <div className="chatListItem--line">{/* 1 DIV CHATLIST LINE */}
                  <div className="chatListItem--name">Jr caus</div>   
                  <div className="chatListItem--date">19:00</div>   
             </div>{/* 1 FIMMM DIV CHATLIST LINE */}

             <div className="chatListItem--line">{/*  2 DIV CHATLIST LINE */}
                 <div className="chatListItem--LastMsg" >
                        <p>Opa, blz</p>
                 </div>{/* 2 fim DIV CHATLIST LINE */}
                 
             </div>
         </div>{/* FIM DIV CHATLIS LINES*/}
         
        </div> //{/* FIM DIV CHATLISTITEM*/}

    );
}