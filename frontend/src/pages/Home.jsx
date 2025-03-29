import Article from '../components/Article.jsx'
import { Banner } from '../components/Banner.jsx'
import Header from '../components/Header.jsx'
import TopDoctors from '../components/TopDoctors.jsx'

const Home = () => {
    return (
        <div>
            <Header />
            <Article />
            <TopDoctors />
            <Banner />
        </div>
    )
}

export default Home
