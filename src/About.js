import React from 'react';

export function About() {
  return (
    <div className="aboutpage">
      <div className="aboutpagetitle">
        <p>About Dvogue</p>
      </div>
      <div className="about">
        <div className="aboutpagecontainer">
          <p className="text">
            Nowadays, people pay more attention to their outfits of the day(OOTD) and outfit matching.
            However, despite the considerable time they spent, still, the final illustration may not be good
            as people expected, thus comes the problem of dressing difficulties for people’s daily needs.{'\n'}

            Based on the existing cloth matching platform, one problem worth noticing is that most of them
            didn’t take the occasions
            and weather into consideration, rather simplifying classify the categories based on the cloth types.
            In this way, it can’t really resolve the user’s demand when there is a special event to attend or
            encounter harsh weather.
            Also, we found almost all the existing attempt have their own shopping function while some users
            might not trust the source and quality of the outfit bought through their outfit platform.
            In addition, the existing attempts take a lot of steps before recommending the outfits are
            user-unfriendly.{'\n'}

            In general, by this chance, the site Dvougue is an outfit planner platform for users to fulfill
            their different needs of daily dressing,
            by incorporating the condition that other websites didn’t include.
          </p>
          <div className="aboutpagetitle">
            <p>How to use Dvougue</p>
          </div>
          <p className="text">
            We will introduce some features of the websites and the instructions of how to use these features.{'\n'}
            Cloth generator{'\n'}
            Users can input the weather, occasion, purpose and budget in the cloth generator section and the generator will filter the corresponding whole outfit for the users.{'\n'}
            Item generator{'\n'}
            Users can input the accessories they want with the budget, the item generator will filter the corresponding items for users.{'\n'}
            My closet{'\n'}
            Users can save the cloth they like and view them in the ‘my closet page’{'\n'}
            Style quiz{'\n'}
            By taking some short questions, the quiz will generate some outfits based on user’s answers in general.
          </p>
        </div>
      </div>
    </div>
  );
}