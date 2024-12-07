import NealBullen from "../images/news_cards/neal_bullen_news_thumbnail.jpg";
import MatthewNicks from "../images/news_cards/mathew_nicks_news_thumbnail.jpg";
import JonesInjury from "../images/news_cards/jones_injury_news_thumbnail.jpg";
import Round23 from "../images/news_cards/round_23_highlights_thumbnail.jpg";

const Home = () => {
  return (
    <div aria-labelledby="home-page">
      <h2 id="intro">Stay Updated with the Latest AFC News</h2>
      <p>
        Here, you'll find all the latest updates about the Adelaide Football
        Club, from player performance to fan engagement.
      </p>
      <p>
        Feel free to navigate through the sections to explore more about the
        team, our players, and what makes AFC special!
      </p>
      <div className="imagecarousel">
        <div
          className="card"
          data-video="https://www.youtube.com/embed/B7eHurHNKxQ?si=YPB1jsBVdzI9rtj9"
        >
          <img src={NealBullen} alt="Neal-Bullen presser thumbnail" />
          <div className="container">
            <h4>
              <b>Alex Neal-Bullen Presser October 8</b>
            </h4>
            <p>
              Adelaide's recruit Alex Neal-Bullen speaks to media for the first
              time.
            </p>
          </div>
        </div>
        <div
          className="card"
          data-video="https://www.youtube.com/embed/eeLyn_6maP0?si=o0up8lLpbqlm6b2G"
        >
          <img src={MatthewNicks} alt="Matthew Nicks presser thumbnail" />
          <div className="container">
            <h4>
              <b>Matthew Nicks Post-Match: R24</b>
            </h4>
            <p>
              Matthew Nicks speaks to the media after the sides loss to Sydney
              in round 24.
            </p>
          </div>
        </div>
        <div
          className="card"
          data-video="https://www.youtube.com/embed/gTW80HYFmls?si=LXtdj6w5vLJfeu8S"
        >
          <img src={JonesInjury} alt="Jones Imaging injury update thumbnail" />
          <div className="container">
            <h4>
              <b>Jones Radiology Injury Update: R24</b>
            </h4>
            <p>
              Crows High Performance Manager Darren Burgess gives the weekly
              injury update.
            </p>
          </div>
        </div>
        <div
          className="card"
          data-video="https://www.youtube.com/embed/5BoRAzCQNlg?si=_eXTkBNxwQ1dmyfT"
        >
          <img src={Round23} alt="Round 23 highlights thumbnail" />
          <div className="container">
            <h4>
              <b>Highlights R23: v Port Adelaide</b>
            </h4>
            <p>
              Watch the highlights from our round 23 clash with Port Adelaide.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-buttons">
        <button id="leftButton">‹ Previous</button>
        <button id="rightButton">Next ›</button>
      </div>
    </div>
  );
};

export default Home;
