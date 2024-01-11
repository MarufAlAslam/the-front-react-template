import React from 'react'
import ContactPageCover from '../../views/ContactPageCover/ContactPageCover'
import Header from '../../components/header'
import Footer from '../../components/footer'
// import { Newsletter } from '../../demos/ecommerce/views/Listing/components'
import CtaWithInputField from '../../blocks/cta/CtaWithInputField/CtaWithInputField'

const Chat = () => {
    return (
        <div>
            <Header />
            <div className="pt-20">
                <ContactPageCover />
            </div>
            <div className="bg-[#1876D1] py-10">
                <CtaWithInputField />
            </div>
            <Footer />
        </div>
    )
}

export default Chat