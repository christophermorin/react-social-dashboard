import HeroCard from "./HeroCard"
import { heroData } from "../data"

function Hero (props) {
    const heroCards = heroData.map(card => {
        return (
            <HeroCard key={card.id} data={card} mode={props.mode}/>
        )
    })
    return (
        <div className="hero--container">
            {heroCards}
        </div>
    )
}

export default Hero