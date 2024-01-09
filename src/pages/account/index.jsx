import React from 'react'
import Header from '../../components/header'
import SimpleSignInForm from '../../blocks/authentication/SimpleSignInForm/SimpleSignInForm'
import SimpleSignUpForm from '../../blocks/authentication/SimpleSignUpForm/SimpleSignUpForm'
import ResetPasswordSimpleForm from '../../blocks/authentication/ResetPasswordSimpleForm/ResetPasswordSimpleForm'

const Account = () => {
    return (
        <>
            <Header />
            <div className='account py-20'>
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[100px]">
                        <div className="signup border p-5">
                            <SimpleSignUpForm />
                        </div>
                        <div className="login border p-5">
                            <SimpleSignInForm />
                            <br /> <br />
                            <ResetPasswordSimpleForm />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Account