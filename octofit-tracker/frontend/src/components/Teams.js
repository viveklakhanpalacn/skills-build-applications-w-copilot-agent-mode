import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
    console.log('Fetching Teams from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams data:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);
  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card mb-4">
          <div className="card-header bg-info text-white">
            <h2 className="mb-0">Teams</h2>
          </div>
          <div className="card-body">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Members</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, idx) => (
                  <tr key={idx}>
                    <td>{team.name || '-'}</td>
                    <td>{team.members ? team.members.length : '-'}</td>
                    <td>{team.description || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#addTeamModal">Add Team</button>
          </div>
        </div>
        {/* Modal Placeholder */}
        <div className="modal fade" id="addTeamModal" tabIndex="-1" aria-labelledby="addTeamModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addTeamModalLabel">Add Team</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="teamName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="teamName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="teamDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="teamDescription" />
                  </div>
                  <button type="submit" className="btn btn-info text-white">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;
