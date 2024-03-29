import React from 'react'
import Header from '../../components/header'
import SimpleSignInForm from '../../blocks/authentication/SimpleSignInForm/SimpleSignInForm'
import SimpleSignUpForm from '../../blocks/authentication/SimpleSignUpForm/SimpleSignUpForm'
// import ResetPasswordSimpleForm from '../../blocks/authentication/ResetPasswordSimpleForm/ResetPasswordSimpleForm'
// import { Newsletter } from '../../demos/ecommerce/views/Listing/components'
import Footer from '../../components/footer'
import CtaWithInputField from '../../blocks/cta/CtaWithInputField/CtaWithInputField'

const Account = () => {
    // const [isForget, setIsForget] = React.useState(false)
    // const handleForget = () => {
    //     setIsForget(!isForget)
    // }
    return (
        <>
            <Header />
            <div className='account py-20'>
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[50px]">
                        <div className="signup p-5">
                            <SimpleSignUpForm />
                        </div>
                        <div className="login p-5">
                            <SimpleSignInForm />
                            {/* {
                                isForget && (
                                    <>
                                        <br /> <br />
                                        <ResetPasswordSimpleForm />
                                    </>
                                )
                            } */}
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-[#1876D1] py-10">
                {/* <Newsletter /> */}
                <CtaWithInputField />
            </div>
            <Footer />
        </>
    )
}

export default Account