import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {sendMessageCreator} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage,
    }
}

// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         onSendMessageClick: (newMessageBody: string) => {
//             dispatch(sendMessageCreator(newMessageBody))
//         }
//     }
// }


// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))


export default compose<React.ComponentType>(
    connect(mapStateToProps, /*mapDispatchToProps*/),
    withAuthRedirect
)(Dialogs)