import React from 'react';
import '../../styles/ArtistsTable.css';

const UsersTable = () => {
  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Location</th>
            <th>Due Date</th>
            <th>Order Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
            <tr>
              <td>{`Darrell Williamson`}</td>
              <td>{`Corona, Michigan`}</td>
              <td>{`03/03/12 22:43`}</td>
              <td>{`100`}</td>
              <td>{`20`}</td>
              <td>
                <button className='user-blockBtn'>Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
