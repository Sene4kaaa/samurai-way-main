import {ProfileContactsPropsType, ProfileType} from "../../../redux/profile-reducer";
import s from "./ProfileInfo.module.css";
import React from "react";
import {FormikProvider, useFormik} from "formik";
import {login} from "../../../redux/auth-reducer";

type ProfileDataFormPropsType = {
    profile: ProfileType
}

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {


    const formik = useFormik({
        initialValues: {
            fullName: '',
            lookingForAJob: false,
            MyProfessionalSkills: '',
            AboutMe:''
        },
        onSubmit: (values, {setStatus}) => {
            formik.resetForm();
        },
    });

    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <button onClick={() => {
                        }}>save
                        </button>
                    </div>
                    <div>
                        <b>Full name</b>: <div>
                        <input
                            placeholder={'Full Name'}
                            {...formik.getFieldProps('fullName')}
                        />
                    </div>
                    </div>
                    <div>
                        <b>Looking for a job</b>: <div>
                        <input
                            type={'checkbox'}
                            name="lookingForAJob"
                            onChange={formik.handleChange}
                            checked={formik.values.lookingForAJob}
                        />
                    </div>
                    </div>
                    <div>
                        <b>My professional skills</b>: <div>
                        <input
                            placeholder={'My professional skills'}
                            {...formik.getFieldProps('MyProfessionalSkills')}
                        />
                    </div>
                    </div>
                    <div>
                        <b>About me</b>: <div>
                        <input
                            placeholder={'About me'}
                            {...formik.getFieldProps('AboutMe')}
                        />
                    </div>
                    </div>
                    <div>
                        <b>Contacts</b>: {

                    }
                    </div>
                </form>
            </FormikProvider>
        </div>
    )
}

