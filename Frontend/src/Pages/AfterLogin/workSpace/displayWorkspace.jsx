import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkspaceList = () => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/workspaces');
        setWorkspaces(response.data);
      } catch (error) {
        console.error('Error fetching workspaces: ', error);
      }
    };

    fetchWorkspaces();
  }, []);

  return (
    <div>
      <h2>Workspaces</h2>
      <ul>
        {workspaces.map((workspace) => (
          <li key={workspace._id}>{workspace.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkspaceList;
