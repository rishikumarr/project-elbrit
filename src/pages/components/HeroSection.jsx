import Image from "next/image";

// Benefits icons
const VitaminIcon = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve" fill="#fff">
        <g fill="#fff">
            <path d="m471.78 276.233.114.107-237.5-234.786.008.016C207.637 14.79 172.395 1.335 137.31 1.357c-35.088-.022-70.322 13.432-97.094 40.213C13.431 68.341-.024 103.584 0 138.673c-.024 35.081 13.431 70.323 40.216 97.095L277.655 470.5l-.065-.069c26.772 26.78 62.006 40.235 97.103 40.212 35.081.023 70.316-13.432 97.088-40.204 26.788-26.78 40.242-62.022 40.22-97.111.022-35.089-13.433-70.331-40.221-97.095zm-307.237 35.648c-.069.214-.119.413-.191.628L63.327 212.633l.008.016c-20.454-20.47-30.62-47.15-30.636-73.976.015-26.834 10.181-53.507 30.636-73.976 20.47-20.454 47.146-30.624 73.976-30.639 26.826.015 53.503 10.185 73.972 30.639l.108.108 104.753 103.55c-20.662 4.335-39.32 11.962-55.704 21.78-35.46 21.274-60.67 52.043-77.273 80.876-8.305 14.442-14.459 28.448-18.624 40.87zm284.117 135.43c-20.469 20.447-47.142 30.617-73.968 30.632-26.838-.015-53.514-10.177-73.984-30.639l-.061-.061-109.409-108.162c.326-2.105.808-4.58 1.508-7.321 2.531-10.132 7.628-23.786 15.316-38.221 11.525-21.695 28.886-45.204 51.829-63.339 22.84-18.02 50.857-30.892 85.582-32.845l103.142 101.958.045.038c20.462 20.47 30.624 47.15 30.64 73.976-.015 26.826-10.177 53.507-30.64 73.984z"/>
            <path d="m81.477 170.66 35.747-85.456c-13.417 0-26.026 5.216-35.503 14.696-19.573 19.573-19.573 51.431-.244 70.76z"/>
        </g>
    </svg>
);

const WeightLossIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#fff">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.784 40h24.432a2 2 0 0 0 1.997-1.89l1.556-28A2 2 0 0 0 37.772 8H10.228a2 2 0 0 0-1.997 2.11l1.556 28A2 2 0 0 0 11.784 40Zm24.432 2a4 4 0 0 0 3.994-3.778l1.555-28A4 4 0 0 0 37.772 6H10.228a4 4 0 0 0-3.993 4.222l1.555 28A4 4 0 0 0 11.784 42h24.432Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M34.196 17.406a13.999 13.999 0 0 0-20.067-.334l4.638 3.488a.352.352 0 0 0 .13.006c.157-.014.377-.086.59-.23a8.048 8.048 0 0 1 9.245.153c.208.151.425.23.582.25.076.01.116.003.13-.001l4.752-3.332Zm-4.743 3.329-.008.003c.005-.003.007-.004.008-.003Zm-10.694-.178s.003 0 .007.003l-.007-.003Zm17.092-4.306c.742.818.515 2.075-.39 2.71l-4.872 3.417c-.904.634-2.14.378-3.033-.27a6.037 6.037 0 0 0-3.455-1.156 6.049 6.049 0 0 0-3.492 1.04c-.915.619-2.158.834-3.04.17l-4.757-3.578c-.882-.664-1.068-1.929-.299-2.722a16 16 0 0 1 23.338.389Z"/>
            <path d="M27.182 15.572a1 1 0 0 1 1.51 1.312l-2.747 3.158a1 1 0 0 1-1.51-1.312l2.747-3.158Z"/>
        </g>
    </svg>
);

const FunctionalFoodsIcon = () => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g strokeWidth="2px" fill="none" stroke="#fff" strokeLinejoin="round">
            <path d="M32 32V14H10v48h18M32 14l-6-6H6l4 6M6 8l-4 6v48h8M26 8V2H6v6"/>
            <path  d="M28 50H14V26h14v3M32 22H10M28 54H10M28 32h18v30H28zM28 58h18M28 38h18M40 32V22h4v10M46 62h14a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-6a2 2 0 0 1-2-2 2 2 0 0 1 2-2h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2H46"/>
        </g>
    </svg>
);

const Benefit = ({benefitLogo, benefit, benefitDesc}) => (
    <div className="trailing-div">
        <div className="trailing-div-img">{benefitLogo}</div>
        <div>
            <p className="fnt-3 fnt-semibold">{benefit}</p>
            <span className="fnt-5">{benefitDesc}</span>
        </div>
    </div>
);  

const HeroSection = () => {
    // Array contains all the benefit title, description, logo
    const benefits = [
        {'benefit': 'Vitamins', 'benefitDesc': 'Increased Vitamins and minerals in your diet', 'benefitLogo': <VitaminIcon/>},
        {'benefit': 'Weight Loss', 'benefitDesc': 'Weight Loss Find scientifically proven solutions', 'benefitLogo': <WeightLossIcon/>},
        {'benefit': 'Functional Foods', 'benefitDesc': 'Functional Foods From protein powers to baby formula', 'benefitLogo': <FunctionalFoodsIcon/>}
    ];

    return(
        <section className="section hero-sec">
            <div className="section-medium">
                <div className="hero-cnts">
                    <h3>Essential Vitamins</h3>
                    <div className="hero-cnt">
                        <div className="hero-cnt-leading">
                                <p className="fnt-3 fnt-light">Online Medical Supplies</p>
                                <p className="fnt-2 fnt-semibold">Get Your Vitamins & Minerals</p>
                                <button>Explore</button>
                        </div>
                        <div className="hero-cnt-middle">
                            <Image
                                src="/images/hero-img.png"
                                alt="Hero section image"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                        <div className="hero-cnt-trailing">
                            {benefits.map((benefitData, index) => <Benefit {...benefitData} key={`benefit-${index}`}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;