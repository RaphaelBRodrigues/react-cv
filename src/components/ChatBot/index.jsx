import React, { useState } from 'react';
import messageIcon from '../../assets/images/message.png';
import './styles.css';
import './media.css';

function ToggleChat(){

    const [isChatVisible, setIsChatVisible] = useState(false);
    const [numberOfMessages, setNumberOfMessages] = useState(1);


    function handleOpenChat() {
        setIsChatVisible(!isChatVisible);
        setNumberOfMessages(0);

        if (isChatVisible) {

        } else {

        }

    }


    return (
        <div id="message-container" style={
            isChatVisible ? {bottom:0} : null 
            }>
            <header onClick={handleOpenChat}>
                <img src={messageIcon} />
                {numberOfMessages
                    ?
                    (
                        <div>
                            {numberOfMessages}
                        </div>
                    )
                    :
                    null}
            </header>
            <main>

            </main>
            <footer>
                <input readOnly placeholder="Sua mensagem" type="text"/>
            </footer>
        </div>
    );
}

export default ToggleChat;