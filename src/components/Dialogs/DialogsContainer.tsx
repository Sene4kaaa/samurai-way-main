import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps),
    // withAuthRedirect
)(Dialogs)