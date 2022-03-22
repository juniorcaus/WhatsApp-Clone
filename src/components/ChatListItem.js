import React from "react";
import './ChatListItem.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onClick, active, data}) => { //recebendo o on click do app.js e passando para a div principal "chatListItem" onde ao clikar no chat abrirá o chatWindow
    return(
        <div className={`chatListItem ${active?'active': ''} `} onClick={onClick}>{/* INICIO DIV CHATLISTITEM*/}
         <img className="chatListItem--avatar" src={data.image} alt=""/>

         <div className="chatListItem--lines">{/* INICIO DIV CHATLIST LINES*/}

             <div className="chatListItem--line">{/* 1 DIV CHATLIST LINE */}
                  <div className="chatListItem--name"> {data.title} </div>   
                  <div className="chatListItem--date">19:00</div>   
             </div>{/* 1 FIMMM DIV CHATLIST LINE */}

             <div className="chatListItem--line">{/*  2 DIV CHATLIST LINE */}
                 <div className="chatListItem--LastMsg" >
                        <p>
Antonio Rodrigo souza
há 2 semanas
fantastica a live, meus parabens pela sua dedicação, espero que tenha a parte 2 com a criacao de status, envio de imagens video e audio e os avisos de mensagens 
há 1 ano (editado)
voce tem uma otima comunicação pessoal e  excelente didatica pra ensinar,vou comprar seu curso assim que der.
</p>
                 </div>{/* 2 fim DIV CHATLIST LINE */}
                 
             </div>
         </div>{/* FIM DIV CHATLIS LINES*/}
         
        </div> //{/* FIM DIV CHATLISTITEM*/}

    );
}