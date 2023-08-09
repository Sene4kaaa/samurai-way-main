import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useFormik, FormikProvider} from "formik";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../redux/dialogs-reducer";


export const Dialogs = (props: DialogsPropsType) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validate: (values) => {
            const errors: ErrorType = {};

            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message?.length > 50) {
                errors.message = 'Max length is 50 symbols';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(sendMessage(values.message))
            formik.resetForm();
        },
    });

    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>

            </div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <textarea
                        placeholder={'Enter you text'}
                        {...formik.getFieldProps('message')}
                    />
                    {formik.touched.message && formik.errors.message &&
                        <div style={{color: 'red'}}>{formik.errors.message}</div>}
                    <button type="submit">Submit</button>
                </form>
            </FormikProvider>
        </div>
    )
}

type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type DialogsPropsType = {
    dialogPage: DialogPageType
    onSendMessageClick: (values: string) => void
}

type ErrorType = {
    message?: string,
}

