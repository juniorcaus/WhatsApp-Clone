import React, { useState } from "react";
import './ChatWindow.css';
import EmojiPicker from "emoji-picker-react";

import MessageItem from './MessageItem';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({user}) => {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition(); 
    }

    const [emojiOpen, setEmojiOpen] = useState(false);    
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        
        {author:123, body: 'blablabla1'},
        
        {author:123, body: 'blablabla22222'},
       
        {author:1234, body: 'blablabla333333blablabla333'},
     ]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji );
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if(recognition !== null) {

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }

            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript );
            }

            recognition.start();

        }
    }

    const handleSendClick = () => {

    }



    return(
        <div className="chatWindow">{/*inicio div chatWindow */}

            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">{/*inicio HEADERINFO */}
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    
                    <div className="chatWindow--name">Jr caus </div>

                <div className="chatWindow--headerbuttons">{/*inicio CHAT WINDOW BUTTONS */}

                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>

                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>

                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>{/*FIM CHAT WINDOW BUTTONS */}
                </div>{/*FIM HEADER INFO*/}
            </div>


            <div className="chatWindow--body">

                {list.map((item, key) => (
                    <MessageItem key={key} data={item} user={user} />
                ))}

            </div>

            <div className="chatWindow--emojiarea" style={{ height: emojiOpen ? '200px' : '0px' }} >
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar    
                    disableSkinTonePicker
                    pickerStyle={{ width: '100%', background: 'none' }}
                    />
            </div>
            
            <div className="chatWindow--footer">{/*INI FOOTER*/}

                <div className="chatWindow--pre">{/*INI CHAT WIN PRE*/}

                     <div className="chatWindow--btn" onClick={handleCloseEmoji} style={{ width: emojiOpen ?  '40px' : '0px' }} >
                        
                        <CloseIcon style={{ color: '#919191' }}  />
                     </div>

                     <div className="chatWindow--btn" onClick={handleOpenEmoji} >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}} />
                     </div>

                </div>{/*FIM CHAT WIN PRE*/}

                <div className="chatWindow--inputarea">{/*INI INPUT AREA WIN*/}

                    <input className="chatWindow--input" type="text" placeholder="Digite uma mensagem" value={text} onChange={e=>setText(e.target.value)} />       

                </div>{/*FIM INPUT AREA WIN*/}

                <div className="chatWindow--pos">{/*INI CHAT WIN POS */}

                            {text === '' &&
                                <div onClick={handleMicClick} className="chatWindow--btn">
                                <MicIcon  style={{color: listening ? '#126ece ' : '#919191'}} />
                                </div>  

                            } 
                             { text !== '' &&
                                <div onClick={handleSendClick} className="chatWindow--btn">
                                <SendIcon  style={{color: '#919191'}} />
                                </div> 

                            }

                        

                             

                </div>{/*FIM CHAT WIN POS*/}

            </div>{/*FIM FOOTER*/}

        </div> // >>> FIM div chatWindow 
    );
}