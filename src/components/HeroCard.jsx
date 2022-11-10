function HeroCard (props) {
    const gainColor = {
        color: ''
    }
    if (props.data.gain === 'up') {
        gainColor.color = 'hsl(163, 72%, 41%)'
    }else {
        gainColor.color = 'hsl(356, 69%, 56%)'
    }

    return (
        <div className={`${props.mode}hero--card ${props.mode}${props.data.border}`} >
            <section className={`${props.mode}heroCard--socials`}>
                <img 
                    src={`./src/assets/${props.data.socialIcon}`} 
                    alt="Social Icon" />
                <span>
                    {props.data.socialTag}
                </span>
            </section>
            <section className={`${props.mode}heroCard--stats`}>
                <h1>
                    {props.data.count}
                </h1>
                <span>
                    {props.data.countType}
                </span>
            </section>
            <section className="heroCard--percent" style={gainColor}>
                <img 
                    src={`./src/assets/${props.data.percentIcon}`} 
                    alt="Percentage" 
                />
                <span>
                    {props.data.percent} Today
                </span>
            </section>
        </div>
    )
}

export default HeroCard