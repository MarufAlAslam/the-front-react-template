import React from 'react'
import Header from '../../components/header'
import Hero from '../../views/IndexView/components/Hero/Hero'
import LinearSteps from "../../blocks/progressSteps/LinearSteps/LinearSteps"
import BlogWithLargeImage from '../../blocks/blog/BlogWithLargeImage/BlogWithLargeImage'
import LogoGrid from '../../blocks/logoGrid/WithSwiperAndBrandBackgroundColor/WithSwiperAndBrandBackgroundColor'
import WithCountUpNumbersAndCoverImage from '../../blocks/stats/WithCountUpNumbersAndCoverImage/WithCountUpNumbersAndCoverImage'
import MostViewedArticles from '../../views/BlogNewsroom/components/MostViewedArticles/MostViewedArticles'

const Homepage = () => {
    return (
        <>
            <Header />
            <Hero />
            <LinearSteps />
            <BlogWithLargeImage />
            <BlogWithLargeImage />
            <BlogWithLargeImage />
            <BlogWithLargeImage />
            <LogoGrid />
            <WithCountUpNumbersAndCoverImage />
            <MostViewedArticles />
        </>
    )
}

export default Homepage