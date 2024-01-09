import React from 'react'
import Header from '../../components/header'
import WithOptionTogglerButton from '../../blocks/pricing/WithOptionTogglerButton/WithOptionTogglerButton'
import { Newsletter } from '../../demos/ecommerce/views/Listing/components'
import Footer from '../../components/footer'
import CompareTable from '../../blocks/pricing/CompareTable/CompareTable'

const Pricing = () => {
    return (
        <div>
            <Header />
            <div className='py-10'>
                <WithOptionTogglerButton />
            </div>
            <div className='py-10'>
                <CompareTable />
            </div>
            <div className="bg-[#1876D1] py-10 mt-10">
                <Newsletter />
            </div>
            <Footer />
        </div>
    )
}

export default Pricing