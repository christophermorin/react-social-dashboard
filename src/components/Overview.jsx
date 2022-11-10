import OverViewCard from "./OverViewCard"
import { overViewData } from "../data"

function Overview (props) {
    const overViewCards = overViewData.map(card => {
        return (
            <OverViewCard key={card.id} data={card} mode={props.mode}/>
        )
    })

    return (
        <div>
            <h3 className={`${props.mode}overview--title`}>Overview - Today</h3>
            <div className="overview--container">
                {overViewCards}
            </div>
        </div>
    )
}

export default Overview