import React from 'react';
import {sendMessageCreator, updateNewMessageCreatorCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../redux/redux-store";



const mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageCreatorCreator(body))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)


