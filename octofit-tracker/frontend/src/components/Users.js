import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    console.log('Fetching Users from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users data:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);
  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card mb-4">
          <div className="card-header bg-secondary text-white">
            <h2 className="mb-0">Users</h2>
          </div>
          <div className="card-body">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <td>{user.username || '-'}</td>
                    <td>{user.name || '-'}</td>
                    <td>{user.email || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addUserModal">Add User</button>
          </div>
        </div>
        {/* Modal Placeholder */}
        <div className="modal fade" id="addUserModal" tabIndex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addUserModalLabel">Add User</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="userUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="userUsername" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="userName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="userEmail" />
                  </div>
                  <button type="submit" className="btn btn-secondary">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Users;
