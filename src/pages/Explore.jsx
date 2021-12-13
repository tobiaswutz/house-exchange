import {Link} from 'react-router-dom'
import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'


function Explore() {
    return (
        <div className="explore">
            <header>
                <p className="pageHeader">Immobilienmarkt</p>
            </header>

            <main>
                <Slider />
                <p className="exploreCategoryHeading">Kategorien</p>
                <div className="exploreCategories">
                    <Link to='/category/rent'>
                        <img src={rentCategoryImage} alt="rent" className="exploreCategoryImg"/>
                        <p className="exploreCategoryName">Zum Mieten</p>
                    </Link>
                    <Link to='/category/sale'>
                        <img src={sellCategoryImage} alt="rent" className="exploreCategoryImg"/>
                        <p className="exploreCategoryName">Zum Kaufen</p>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Explore;