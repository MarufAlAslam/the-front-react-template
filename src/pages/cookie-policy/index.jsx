import React from 'react'
import CompanyTerms from '../../views/CompanyTerms/CompanyTerms'
import Header from '../../components/header'
import { Newsletter } from '../../demos/ecommerce/views/Listing/components'
import Footer from '../../components/footer'

const CookiePolicy = () => {
    return (
        <div>
            <Header />
            <div className='py-10'>
                <CompanyTerms />
            </div>
            <div className="bg-[#1876D1] py-10 mt-10">
                <Newsletter />
            </div>
            <Footer />
        </div>
    )
}

export default CookiePolicy