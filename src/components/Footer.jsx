
function Footer(props) {
    return (
        <div className={`${props.mode}footer--container`}>
            <p className="footer--copy">
                <span>
                    &copy;
                </span>
                <a 
                    className={`${props.mode}footer--link`} 
                    href="https://chrismorin.netlify.app/" 
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
                            src="/gear.svg" 
                        />
                </a>
                <a 
                    href="https://www.linkedin.com/in/chrisjmorin/" 
                    alt="Linked In" 
                    target="_blank">
                        <img 
                            className={`${props.mode}footer--img`}
                            src="/linkedin.svg" 
                        />
                </a>
                <a 
                    href="https://github.com/christophermorin" 
                    alt="Github" 
                    target="_blank">
                        <img 
                            className={`${props.mode}footer--img`}
                            src="/github2.svg" 
                        />
                </a>
                <a 
                    href="https://twitter.com/longhumans" 
                    alt="Twitter" 
                    target="_blank">
                        <img 
                            className={`${props.mode}footer--img`}
                            src="/twitter.svg" 
                        />
                </a>
            </section>
        </div>
    )
}

export default Footer