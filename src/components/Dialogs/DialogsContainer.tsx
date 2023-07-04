import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {sendMessageCreator, updateNewMessageCreatorCreator} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage,
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




export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))


