const PlayerProfile = () => {
  return (
    <div aria-labelledby="player-profile-page">
      <h2>Player Overview</h2>
      <div className="player-info" aria-labelledby="player-info-title">
        <div>
          <p>
            <strong>Name:</strong> Jake Soligo
          </p>
          <p>
            <strong>Position:</strong> Forward/Mid
          </p>
          <p>
            <strong>Team:</strong> Adelaide Crows
          </p>
          <p>
            <strong>Birthdate:</strong> January 25, 2003
          </p>
          <p>
            <strong>Nationality:</strong> Australian
          </p>
        </div>
        <div className="player-photo">
          <img
            src="../images/jake_soligo/jake_soligo.jpg"
            alt="Jake Soligo profile"
            className="profile-img"
          />
        </div>
      </div>
      <div className="gallery">
        <div className="image-card">
          <img
            src="../images/jake_soligo/jake_soligo_running.jpg"
            alt="Jake Soligo running with the ball."
            className="gallery-img"
          />
          <div className="image-actions">
            <button
              className="like-button"
              aria-label="Like this image"
              style={{ margin: 20 }}
            >
              👍 Like
            </button>
            <button
              className="comment-button"
              aria-label="Comment on this image"
            >
              💬 Comment
            </button>
          </div>
        </div>
        <div className="image-card">
          <img
            src="../images/jake_soligo/jake_soligo_celebrates_goal.jpg"
            alt="Jake Soligo celebrates kicking a goal."
            className="gallery-img"
          />
          <div className="image-actions">
            <button
              className="like-button"
              aria-label="Like this image"
              style={{ margin: 20 }}
            >
              👍 Like
            </button>
            <button
              className="comment-button"
              aria-label="Comment on this image"
            >
              💬 Comment
            </button>
          </div>
        </div>
        <div className="image-card">
          <img
            src="../images/jake_soligo/jake_soligo_showdown_medal.jpg"
            alt="Jake Soligo wins the showdown medal."
            className="gallery-img"
          />
          <div className="image-actions">
            <button
              className="like-button"
              aria-label="Like this image"
              style={{ margin: 20 }}
            >
              👍 Like
            </button>
            <button
              className="comment-button"
              aria-label="Comment on this image"
            >
              💬 Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
