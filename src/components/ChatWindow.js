import React, { useState } from "react";
import './ChatWindow.css';
import EmojiPicker from "emoji-picker-react";

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [emojiOpen, setEmojiOpen] = useState(false);    
    const [text, setText] = useState('');

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji );
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
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

                <div className="chatWindow--btn">
                        <SendIcon  style={{color: '#919191'}} />
                    </div>      

                </div>{/*FIM CHAT WIN POS*/}

            </div>{/*FIM FOOTER*/}

        </div> // >>> FIM div chatWindow 
    );
}