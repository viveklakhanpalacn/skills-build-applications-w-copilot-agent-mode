import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        console.log('Leaderboard data:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);
  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h2 className="mb-0">Leaderboard</h2>
          </div>
          <div className="card-body">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((leader, idx) => (
                  <tr key={idx}>
                    <td>{leader.rank || idx + 1}</td>
                    <td>{leader.name || '-'}</td>
                    <td>{leader.score || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addLeaderModal">Add Leader</button>
          </div>
        </div>
        {/* Modal Placeholder */}
        <div className="modal fade" id="addLeaderModal" tabIndex="-1" aria-labelledby="addLeaderModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addLeaderModalLabel">Add Leader</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="leaderName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="leaderName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="leaderScore" className="form-label">Score</label>
                    <input type="number" className="form-control" id="leaderScore" />
                  </div>
                  <button type="submit" className="btn btn-success">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
