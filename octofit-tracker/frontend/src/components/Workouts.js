import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching Workouts from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Workouts data:', results);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, []);
  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card mb-4">
          <div className="card-header bg-warning text-dark">
            <h2 className="mb-0">Workouts</h2>
          </div>
          <div className="card-body">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout, idx) => (
                  <tr key={idx}>
                    <td>{workout.name || '-'}</td>
                    <td>{workout.type || '-'}</td>
                    <td>{workout.duration || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-warning text-dark" data-bs-toggle="modal" data-bs-target="#addWorkoutModal">Add Workout</button>
          </div>
        </div>
        {/* Modal Placeholder */}
        <div className="modal fade" id="addWorkoutModal" tabIndex="-1" aria-labelledby="addWorkoutModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addWorkoutModalLabel">Add Workout</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="workoutName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="workoutName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="workoutType" className="form-label">Type</label>
                    <input type="text" className="form-control" id="workoutType" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="workoutDuration" className="form-label">Duration</label>
                    <input type="text" className="form-control" id="workoutDuration" />
                  </div>
                  <button type="submit" className="btn btn-warning text-dark">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Workouts;
