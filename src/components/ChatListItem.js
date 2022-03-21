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