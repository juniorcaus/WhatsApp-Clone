import React, {useState, useEffect} from "react";
import './ChatListItem.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onClick, active, data}) => { //recebendo o on click do app.js e passando para a div principal "chatListItem" onde ao clikar no chat abrirá o chatWindow

    const [time, setTime] = useState('');

    useEffect(()=>{
        if(data.lastMessageDate > 0) {
            let d = new Date(data.lastMessageDate.seconds * 1000 );
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            setTime(`${hours}:${minutes}`);
        }
    }, [data]);

    return(
        <div className={`chatListItem ${active?'active': ''} `} onClick={onClick}>{/* INICIO DIV CHATLISTITEM*/}
         <img className="chatListItem--avatar" src={data.image} alt=""/>

         <div className="chatListItem--lines">{/* INICIO DIV CHATLIST LINES*/}

             <div className="chatListItem--line">{/* 1 DIV CHATLIST LINE */}
                  <div className="chatListItem--name"> {data.title} </div>   
                  <div className="chatListItem--date">{time}</div>   
             </div>{/* 1 FIMMM DIV CHATLIST LINE */}

             <div className="chatListItem--line">{/*  2 DIV CHATLIST LINE */}
                 <div className="chatListItem--LastMsg" >
                        <p> {data.lastMessage} </p>
                 </div>{/* 2 fim DIV CHATLIST LINE */}
                 
             </div>
         </div>{/* FIM DIV CHATLIS LINES*/}
         
        </div> //{/* FIM DIV CHATLISTITEM*/}

    );
}