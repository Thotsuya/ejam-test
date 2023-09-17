import {motion} from "framer-motion";

export default function Steps(){
    return (
        <>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="main-content__title-container">
                <h1 className="main-content__title">Wait ! your order in progress.</h1>
                <p className="main-content__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </motion.div>

            <div className="main-content__steps-container">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="main-content__steps-container__step">
                    <div className="main-content__steps-container__step__number green">
                        <img src="/tick.svg" alt="step 1" />
                    </div>
                    <div className="main-content__steps-container__step__text-container">
                       <span className="main-content__steps-container__step__text ">
                       Step 1 :
                       </span>
                        <span className="main-content__steps-container__step__text ">
                            Cart Review
                       </span>
                    </div>

                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="main-content__steps-container__step">
                    <div className="main-content__steps-container__step__number green">
                        <img src="/tick.svg" alt="step 1" />
                    </div>

                    <div className="main-content__steps-container__step__text-container">
                       <span className="main-content__steps-container__step__text ">
                            Step 2 :
                       </span>
                        <span className="main-content__steps-container__step__text ">
                            Checkout
                       </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="main-content__steps-container__step">
                    <div className="main-content__steps-container__step__number blue">
                        3
                    </div>

                    <div className="main-content__steps-container__step__text-container">
                       <span className="main-content__steps-container__step__text text-bold">
                            Step 3 :
                       </span>
                        <span className="main-content__steps-container__step__text text-bold">
                            Special Offer
                       </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="main-content__steps-container__step">
                    <div className="main-content__steps-container__step__number blue-border">
                        4
                    </div>
                    <div className="main-content__steps-container__step__text-container">
                       <span className="main-content__steps-container__step__text">
                            Step 4 :
                       </span>
                        <span className="main-content__steps-container__step__text">
                            Confirmation
                       </span>
                    </div>
                </motion.div>
            </div>
        </>
    )
}