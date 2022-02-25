import React from "react";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import { Helmet } from "react-helmet";
import { Footer } from "../../components/footer";
import { Back } from "../../components/back"
import CloseIcon from '@mui/icons-material/Close';
import {UsersApi} from '../../services/api/usersApi';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { userValidation } from '../../utils/schemmas/userValidation';
import { Cancel } from '../../components/cancel'
import { Saved } from "../../components/saved";

export const CreateUser = () => {
    let [isReset, setIsReset] = React.useState(false);
    const [resetBtn, setResetBtn] = React.useState(false);
    const {t} = useTranslation()
    const [newUser, setNewUser] = React.useState()
    const [newPassword, setNewPassword] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const [isSaved, setIsSaved] = React.useState(false)


    const userUpdateForm = useForm({
        defaultValues: {
            name: '',
            email: ''
        },
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(userValidation)
    })

    const setUser = async (data) => {
        setLoading(true)
        try {
            const obj = await UsersApi.setUser(data);
            setNewUser(obj.content)
            setResetBtn(true)
            setLoading(false)
            setIsSaved(true)
        } catch(error) {
            console.log('setUser', error)
            setLoading(true)
        }
    }

    const resetPassword = async () => {
        try {
            let data = {}
            let obj = await UsersApi.resetPassword(newUser.id, data);
            setNewPassword(obj.content.password)
            setIsReset(true)
        } catch(error) {
            console.log('resetPassword', error)
        }
    }

    return (
        <>
        <Helmet>
            <html lang = { i18next.language }/>
            <title>
                {t('userCreation')}
            </title>
        </Helmet>
            <div className = "settings backgroundColor pad-top">
                <div className = "container">
                    <div className="settings-head">
                        <Back />
                        <p>
                            {t('userCreation')}
                        </p>
                    </div>
                    {isSaved && <Saved />}
                    <div className="settings-data">
                    <form onSubmit = {userUpdateForm.handleSubmit(setUser)}>
                        <p className="settings-input__text">{t('fullName')} *</p>
                            <input 
                                name = "name" 
                                className = {userUpdateForm.formState.errors.name ? 'forms-input forms-input__error' : "forms-input"}
                                {...userUpdateForm.register('name')}
                            />
                            <p> {userUpdateForm.formState.errors.name?.message} </p>
                            <p className="settings-input__text">E-mail *</p>
                            <input
                                name = 'email'
                                {...userUpdateForm.register('email')}
                                className = {userUpdateForm.formState.errors.email ? 'forms-input forms-input__error' : "forms-input"}
                            />
                            <p> {userUpdateForm.formState.errors.email?.message} </p>
                        {
                            isReset &&
                            <div className = "users-create__passport">
                                <div className = "users-create__passport-left">
                                {t('newPassword')}: { newPassword }
                                </div>
                                <div className = "users-create__passport-rigth" onClick={() => setIsReset(!isReset)}>
                                    <CloseIcon style = {{fontSize: '20px', color: '#064d04'}} />
                                </div>
                            </div>
                        }
                        
                        <div className="settings-footer">
                            <Cancel />
                            {
                                resetBtn &&
                                <div className = 'resetBtn' onClick = {resetPassword}>
                                    {t('resetPassword')}
                                </div>
                            }
                            <button className = 'save btn' type='submit'>
                                { loading ? t('preservation') : t('save') }
                            </button>
                        </div>
                        </form>
                    </div>

                </div>
            </div>
        <Footer />
        </>
    )
};