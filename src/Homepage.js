import React from 'react'; //import React Component
import { Link } from 'react-router-dom';


export function Homepage() {



    return (
        <main>
            <section className="sec1">
                <div className="container-text">
                    <p>Life is a party 🎉</p>
                    <p>DRESS LIKE IT :)</p>
                    <Link to='/outfitgenerator' className="buttom_home">Generate your outfit for the day now</Link>
                </div>

                <div className="container-pic">
                    <img src="img/homepagepic.jpg" alt="image of colorful shirts" />
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