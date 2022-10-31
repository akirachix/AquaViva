import React from 'react';
import { Link } from 'react-router-dom';
import './Updates.css';


function Updates() {
  return (
    <div>
      <div className="updates-section">
        <div>
          <h3>Updates</h3>
          <p>
            AquaViva project is in progress, AquaViva team started with desk research which gave them the overview of the problemat stake.
            The next step was primary research which resulted into insights from different experts including reseachers from Kenya Marine and Fisheries Research Institute.
            <Link to="/signup">
              Dashboard
            </Link>
          </p>


        </div>


      </div>
    </div>
  )
}

export default Updates