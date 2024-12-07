const FanEngagement = () => {
  return (
    <div className="fan-engagement-card" aria-labelledby="fan-engagement-page">
      <h2>Fan Engagement &amp; Membership Overview</h2>
      <table aria-describedby="fan-engagement-table" role="table">
        <thead>
          <tr>
            <th scope="col">Season</th>
            <th scope="col">Ticket Sales</th>
            <th scope="col">Fan Interactions</th>
            <th scope="col">Merchandise Revenue</th>
            <th scope="col">Video Plays</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022</td>
            <td>500,000</td>
            <td>2,000</td>
            <td>$1,800,000</td>
            <td>500,000</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>600,000</td>
            <td>22,000</td>
            <td>$2,100,000</td>
            <td>1,200,000</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>800,000</td>
            <td>35,500</td>
            <td>$2,500,000</td>
            <td>2,500,000</td>
          </tr>
        </tbody>
      </table>
      <button aria-label="Download the full fan engagement report">
        Download Full Report
      </button>
    </div>
  );
};

export default FanEngagement;
