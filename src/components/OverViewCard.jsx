function OverViewCard (props) {
    const gainColor = {
        color: ''
    }
    if(props.data.gain === 'up'){
        gainColor.color = 'hsl(163, 72%, 41%)'
    }else{
        gainColor.color = 'hsl(356, 69%, 56%)'
    }

    return (
        <div className={`${props.mode}overviewCard--card`}>
            <section className={`${props.mode}overviewCard--title`}>
                <h6>
                    {props.data.cardTitle}
                </h6>
                <img 
                    src={`/${props.data.socialIcon}`} 
                    alt="Social Icon" 
                />
            </section>
            <section className={`${props.mode}overviewCard--stats`}>
                <p>
                    {props.data.cardCount}
                </p>
                <section className="overviewCard--percent" style={gainColor}>
                    <img 
                        src={`/${props.data.percentIcon}`} 
                        alt="Percentage"
                    />
                    <span>
                        {props.data.cardStats}%
                    </span>
                </section>
            </section>
        </div>
    )

}

export default OverViewCard