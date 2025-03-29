import ArticleBanner from '../components/Article.jsx'
import { Banner } from '../components/Banner.jsx'
import Header from '../components/header.jsx'
import TopDoctors from '../components/TopDoctors.jsx'

const Home = () => {
    return (
        <div>
            <Header />
            <ArticleBanner />
            <TopDoctors />
            <Banner />
        </div>
    )
}

export default Home
