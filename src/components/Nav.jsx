import {useState} from 'react'

function Nav (props) {
    const style = {
        transform: 'translateX(140%)'
    }



    return (
        <div className="nav--container" >
            <section className="nav--left">
                <h2 className={`${props.mode}nav--title`}>Your Dashboard</h2>
                <p className={`${props.mode}nav--followCount`}>Total Followers: 11,304</p>
            </section>
            <span className={`${props.mode}nav--mode`}>Dark Mode</span>
            <section className={`${props.mode}nav--selector`} onClick={props.toggleDarkmode}>
                <section className={`${props.mode}nav--toggle`} style={props.darkMode ? {} : style} >

                </section>
            </section>
        </div>
    )
}

export default Nav