import React from 'react'; //import React Component


export function Homepage() {



    return (
        <main>
            <section className="sec1">
                <div className="container-text">
                    <p>Life is a party</p>
                    <p>DRESS LIKE IT :)</p>
                    < a href="a" id="buttom_home">Generate your outfit for the day now </ a>
                </div>

                <div className="container-pic">
                    <img src="https://media.istockphoto.com/photos/selection-of-multicolored-shirts-picture-id157532000?k=20&m=157532000&s=612x612&w=0&h=uvLW1W1eHXTac7XCNwDctS3Nz7ohCUQ4YbamtsnCxyI=" alt="image of colorful shirts" />
                </div>
            </section>

            <section className="sec2_text">

                <div className="container-texts">
                    <p>See The Latest Trend</p>
                </div>

            </section>

            <section className="sec2_pic">

                <div className="trend1">
                    <p>Cropped Cardigans</p>
                    <img src="https://thevou.com/wp-content/uploads/2021/05/Current-fashion-trends-wtvox.com-Cropped-Cardigan-01.jpg" alt="Kendall Jenner outfit" />
                </div>

                <div className="trend2">
                    <p>Casual Trench</p>
                    <img src="https://thevou.com/wp-content/uploads/2021/05/Current-fashion-trends-wtvox.com-Casual-trench-01.jpg" alt="Hailey Bieber outfit" />
                </div>

                <div className="trend3">
                    <p>Boiler Suits</p>
                    <img src="https://thevou.com/wp-content/uploads/2021/05/Current-fashion-trends-wtvox.com-Boiler-suits-01.jpg" alt="model outfit" />
                </div>

            </section>


        </main>

    );
}