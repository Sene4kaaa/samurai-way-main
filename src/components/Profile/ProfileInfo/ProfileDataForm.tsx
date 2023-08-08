import {ProfileType, ProfileUpdateDataType, saveProfile} from "../../../redux/profile-reducer";
import React from "react";
import {FormikProvider, useFormik} from "formik";
import {useDispatch} from "react-redux";


type ProfileDataFormPropsType = {
    profile: ProfileType
    saveProfile: (profile: any) => void
}

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {

    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            fullName: '',
            lookingForAJob: false,
            MyProfessionalSkills: '',
            AboutMe: ''
        },
        onSubmit: (values) => {
           dispatch(saveProfile(values))
            formik.resetForm();
        },
    });

    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <button type="submit">save
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
                        <textarea
                            placeholder={'About me'}
                            {...formik.getFieldProps('AboutMe')}
                        />
                    </div>
                    </div>
                </form>
            </FormikProvider>
        </div>
    )
}


