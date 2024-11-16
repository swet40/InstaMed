import ArticleBanner from '../components/article'
import { Banner } from '../components/Banner'
import Header from '../components/header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <hr />
            <TopDoctors />
            <hr />
            <ArticleBanner />
            <hr />
            <Banner />
        </div>
    )
}

export default Home
