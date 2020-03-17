import React from 'react';
import useStats from '../utils/useStats';
import './Stats.css';

function Stats({ url }) {
    const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
    return (
      <div >
          <div className= "block">
        <div className="statBlock">
          <h3 className="head">Confirmed:</h3>
          <span className="number">{stats.confirmed.value}</span>
        </div>
        <div className="statBlock">
          <h3 className="head">deaths:</h3>
          <span className="number">{stats.deaths.value}</span>
        </div>
        <div className="statBlock">
          <h3 className="head">recovered</h3>
          <span className="number">{stats.recovered.value}</span>
          </div>
        </div>
      </div>
    );
  }
  
export default Stats;  