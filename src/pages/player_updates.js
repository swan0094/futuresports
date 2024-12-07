const PlayerUpdates = () => {
  return (
    <div aria-labelledby="player-updates-page">
      <section id="player-status" aria-labelledby="player-status-title">
        <h2 id="player-status-title">Player Updates and Recovery</h2>
        <p>
          Stay up-to-date with the health status and recovery progress of your
          favorite AFC players.
        </p>
        <div className="player-info player-info-left-aligned">
          <img
            src="../images/jake_soligo/jake_soligo.jpg"
            alt="Jake Soligo profile"
            className="player-photo"
          />
          <div>
            <h3>Player: Jake Soligo</h3>
            <p>
              <strong>Status:</strong> <span id="status">Injured</span>
            </p>
            <p>
              <strong>Recovery stage:</strong>
              <span id="recovery-stage">
                Working with the rehab team while maintaining 'off feet'
                training
              </span>
            </p>
            <p>
              <strong>Next Match Availability:</strong>
              <span id="availability">Unavailable</span>
            </p>
          </div>
        </div>
        <div className="player-info player-info-left-aligned">
          <img
            src="../images/jordan_dawson.jpg"
            alt="Jordan Dawson profile"
            className="player-photo"
          />
          <div>
            <h3>Player: Jordan Dawson</h3>
            <p>
              <strong>Status:</strong> <span id="status">Injured</span>
            </p>
            <p>
              <strong>Recovery stage:</strong>
              <span id="recovery-stage">Nearing the end of rehab</span>
            </p>
            <p>
              <strong>Next Match Availability:</strong>
              <span id="availability">2-3 weeks</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerUpdates;
