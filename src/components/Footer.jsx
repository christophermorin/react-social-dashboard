
function Footer(props) {
    return (
        <div className={`${props.mode}footer--container`}>
            <p>&copy; 
                <a 
                    className={`${props.mode}footer--link`} 
                    href="https://chrismorin.netlify.app/" 
                    alt="Portfolio" 
                    target="_blank">
                    Chris Morin
                </a>
            </p>
            <section className="footer--socials">
                <a 
                    href="https://chrismorin.netlify.app/" 
                    alt="Portfolio" 
                    target="_blank">
                        <img 
                            className={`${props.mode}footer--img`}
                            src="./src/assets/gear.svg" 
                            alt="Portfolio" 
                        />
                </a>
                <a 
                    href="https://www.linkedin.com/in/chrisjmorin/" 
                    alt="Linked In" 
                    target="_blank">
                        <img 
                            className={`${props.mode}footer--img`}
                            src="public/linkedin.svg" 
                            alt="LinkedIn" 
                        />
                </a>
                <a 
                    href="https://github.com/christophermorin" 
                    alt="Github" 
                    target="_blank">
                        <img 
                            className={`${props.mode}footer--img`}
                            src="./src/assets/github2.svg" 
                            alt="Github" 
                        />
                </a>
                <a 
                    href="https://twitter.com/longhumans" 
                    alt="Twitter" 
                    target="_blank">
                        <img 
                            className={`${props.mode}footer--img`}
                            src="./src/assets/twitter.svg" 
                            alt="Twitter" 
                        />
                </a>
            </section>
        </div>
    )
}

export default Footer