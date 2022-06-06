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

            <div className="sec2_text">
                <div className="container-texts">
                    <p>See The Latest Fashion Trend</p>
                </div>

            </div>

            <section className="sec2_trend">
                <div className="trend">
                    <img src="img/Coastal_Grandmother.png" alt="this is a picture of Coastal Grandmother Trend"/>
                    <div>
                    <p>Coastal Grandmother Trend</p>
                    </div>
                </div>
                <div className="trend">
                    <img src="img/jumpsuit.png" alt="this is a picture of Jumpsuit in Street Style Trend"/>
                    <div>
                    <p>Jumpsuit in Street Style Trend</p>
                    </div>
                </div>
                <div className="trend">
                    <img src="img/sweater_vests.png" alt="this is a picture of Street Stylers Worked Sweater Vests Trend "/>
                    <div>
                    <p> Street Stylers Worked Sweater Vests Trend</p>
                    </div>
                </div>
            </section>
        </main>
    );
}