import React from 'react'
import Header from '../../components/header'
import ResetPasswordSimpleForm from '../../blocks/authentication/ResetPasswordSimpleForm/ResetPasswordSimpleForm'
import Footer from '../../components/footer'
import { Newsletter } from '../../demos/ecommerce/views/Listing/components'

const ForgetPassword = () => {
    return (
        <>
            <Header />
            <div className='py-20 lg:w-1/3 mx-auto'>
                <ResetPasswordSimpleForm />
            </div>
            <div className="bg-[#1876D1] py-10 mt-10">
                <Newsletter />
            </div>
            <Footer />
        </>
    )
}

export default ForgetPassword