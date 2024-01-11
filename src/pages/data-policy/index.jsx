import React from 'react'
import CompanyTerms from '../../views/CompanyTerms/CompanyTerms'
import Header from '../../components/header'
// import { Newsletter } from '../../demos/ecommerce/views/Listing/components'
import Footer from '../../components/footer'
import CtaWithInputField from '../../blocks/cta/CtaWithInputField/CtaWithInputField'

const DataPolicy = () => {
    return (
        <div>
            <Header />
            <div className='py-10'>
                <CompanyTerms />
            </div>
            <div className="bg-[#1876D1] py-10 mt-10">
                {/* <Newsletter /> */}
                <CtaWithInputField />
            </div>
            <Footer />
        </div>
    )
}

export default DataPolicy