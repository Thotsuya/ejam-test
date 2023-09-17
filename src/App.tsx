import Header from "./components/header.tsx";
import Steps from "./components/steps.tsx";

function App() {
    return (
        <>
            <Header/>
            <section className="main-content">
                <Steps/>

                <h3 className="hero-text">
                    <span className="highlight">ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span
                    className="highlight">$14 each</span> ($84.00 total!)
                </h3>
                <div className="main-content__hero-container">
                    <div className="hero-left-section">
                        <img src="/image 4.png" alt="logo" className="hero-left-section__img"/>
                        <div className="hero-left-section__testimonial-container">
                            <div className="hero-left-section__testimonial-header">
                                <img src="/profile.png" alt="logo" className="hero-left-section__testimonial-img"/>
                                <div className="hero-left-section__testimonial-name">
                                    <img src="/stars.svg" alt="logo" className="hero-left-section__testimonial-quote"/>
                                    <div className="hero-left-section__testimonial-name-text">
                                        <p className="hero-left-section__testimonial-name-text--name">Ken T.</p>
                                        <img src="/verify.svg" alt="logo"
                                             className="hero-left-section__testimonial-verified"/>
                                        <p className="hero-left-section__testimonial-name-text--verified">Verified
                                            Customer</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="hero-left-section__testimonial-text">
                                    “As soon as the Clarifions arrived I put one in my bedroom. This was late in the
                                    afternoon. When I went to the bedroom in the evening it smelled clean. When I went
                                    to bed I felt I could breathe better. Wonderful.”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right-section">
                        <h3 className="hero-right-section__header--text">
                            <span className="highlight">ONE TIME ONLY</span> special price for 6 extra Clarifion for
                            only <span className="highlight">$14 each</span> ($84.00 total!)
                        </h3>

                        <div className="hero-right-section__product-container">
                            <div className="hero-right-section__product-container--product">
                                <img src="/clarifion.png" alt="logo"
                                     className="hero-right-section__product-container--product-img"/>
                            </div>
                            <div className="hero-right-section__product-container--product-details">
                                <div className="hero-right-section__product-container--product-details-header">
                                    <h3 className="hero-right-section__product-container--product-details-header--text">
                                        Clarifion Air Ionizer
                                    </h3>
                                    <div
                                        className="hero-right-section__product-container--product-details-header--price">
                                        <p className="hero-right-section__product-container--product-details-header--price-text">
                                            $180
                                        </p>
                                        <p className="hero-right-section__product-container--product-details-header--price-text-highlited">
                                            $84
                                        </p>
                                    </div>
                                </div>
                                <div className="hero-right-section__product-container--product-details-rating">
                                    <img src="/stars-product.svg" alt="logo"
                                         className="hero-right-section__product-container--product-details-rating-img"/>
                                </div>

                                <div className="hero-right-section__product-container--product-details-quantity">
                                    <img src="/stock-dot.svg" alt="logo"/>
                                    <p className="hero-right-section__product-container--product-details-quantity-text">
                                        12 left in Stock
                                    </p>
                                </div>

                                <div className="hero-right-section__product-container--product-details-description">
                                    <p className="hero-right-section__product-container--product-details-description-text">
                                        Simply plug a Clarifion into any standard outlet and replace bulky, expensive
                                        air purifiers with a simple.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hero-right-section-main-text">
                            <p className="hero-right-section__product-container--product-details-description-text">
                                Simply plug a Clarifion into any standard outlet and replace bulky, expensive air
                                purifiers with a simple.
                            </p>
                        </div>

                        <ul className="hero-right-section_features-container">
                            <li className="hero-right-section_features-container--feature">
                                <img src="/tick-blue.svg" alt="logo"/>
                                <p className="hero-right-section_features-container--feature-text">
                                    Negative Ion Technology may <span
                                    className="text-highlight">help with allergens</span>
                                </p>
                            </li>

                            <li className="hero-right-section_features-container--feature">
                                <img src="/tick-blue.svg" alt="logo"/>
                                <p className="hero-right-section_features-container--feature-text">
                                    Designed for <span className="text-highlight">air rejuvenation</span>
                                </p>
                            </li>

                            <li className="hero-right-section_features-container--feature">
                                <img src="/tick-blue.svg" alt="logo"/>
                                <p className="hero-right-section_features-container--feature-text">
                                    <span className="text-highlight">Perfect for every room</span> in all types of
                                    places.
                                </p>
                            </li>


                        </ul>

                        <div className="hero-right-section__promo-container">
                            <div className="hero-right-section__promo-container--promo-percent">
                                %
                            </div>
                            <p className="hero-right-section__promo-container--promo-text">
                                Save <span className="text-highlight-blue">53%</span> and get <span
                                className="text-highlight-blue">6 extra Clarifision</span> for only <span
                                className="text-highlight-blue">$14 Each</span>
                            </p>
                        </div>

                        <button type="button" className="hero-right-section__checkout-container--button">
                            <p className="hero-right-section__checkout-container--button-text">
                                Yes - Claim my discount
                            </p>
                            <img src="/arrow-left.svg" alt="logo"/>
                        </button>

                        <div className="hero-right-section__available-payment-container">
                            <div className="hero-right-section__available-payment-container--text_container">
                                <span className="hero-right-section__available-payment-container--text">
                                    Free shipping
                                </span>

                                <span className="hero-right-section__available-payment-container--text">
                                    <img src="/lock.svg" alt="logo" className="hero-right-section__available-payment-container--text-img"/>
                                    Secure 256-bit SSL encryption.
                                </span>
                            </div>
                            <div className="hero-right-section__available-payment-container--payments">
                                <img src="/payment-methods.svg" alt="logo"/>
                            </div>
                        </div>

                        <a href="#" className="hero-right-section__no-thanks-container">
                            No thanks, I don’t want this.
                        </a>

                        <div className="hero-right-section__guarantee-container">
                            <img src="/guarantee.png" alt="logo" className="hero-right-section__guarantee-container--img"/>
                            <p className="hero-right-section__guarantee-container--text">
                                If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer__copyrigth-container">
                    <span className="footer__copyrigth-container--text">
                        Copyright (c) 2023
                    </span>
                    <span className="footer__copyrigth-container--text">
                        Clarifionsupport@clarifion.com
                    </span>
                </div>
                <div className="footer__copyrigth-container">
                     <span className="footer__copyrigth-container--text">
                         <img src="/lock-white.svg" alt="logo" className="hero-right-section__available-payment-container--text-img"/>
                        Secure 256-bit SSL encryption.
                    </span>
                </div>
            </footer>

        </>
    )
}

export default App
