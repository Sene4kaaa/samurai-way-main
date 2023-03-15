import React from 'react';
import {sendMessageCreator, updateNewMessageCreatorCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";



const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                const state = store.getState()

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageCreatorCreator(body))

                }

              return  <Dialogs onSendMessageClick={onSendMessageClick}
                         onNewMessageChange={onNewMessageChange}
                         dialogPage={state.dialogPage}/>
            }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;
