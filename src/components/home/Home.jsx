/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styles from '../styles/Home.scss';

export default function Home() {

  const history = useHistory();

  const handleDigimon = () => {
    history.push('/digimons');
  };

  const handleGetAll = () => {
    window.location.href = 'https://digiverse-api.herokuapp.com/api/v1/digimons';
  };

  const handleGetId = () => {
    window.location.href = 'https://digiverse-api.herokuapp.com/api/v1/digimons/4';
  };

  const handleQuery = () => {
    window.location.href = 'https://digiverse-api.herokuapp.com/api/v1/digimons/query/query?level=rookie';
  };

  // const handlePost = () => {
    
  // };

  // const handleUpdate = () => {

  // };

  // const handleDelete = () => {

  // };

  return (
    <div className={styles.home}>
      <h1>Welcome to the DigiVerse!</h1>
      <p>Utilize this API in your projects to include a vast assortment of Digimon:</p>
      <table>
        <tr>
          <th>Route</th>
          <th>Samples</th>
        </tr>
        <tr>
          <td onClick={handleGetAll}>GET ALL</td>
          <td onClick={handleGetId}>GET BY ID</td>
          <td onClick={handleQuery}>GET BY QUERY</td>
          {/* <td>POST</td>
          <td>UPDATE</td>
          <td>DELETE</td> */}
        </tr>
      </table>
      
      <p>Alternatively, checkout our DigiViewer to look through the catalog, or add additional Digimon!</p>
      <br></br>
      <h3>Enter the Digiverse</h3>
      <ArrowDownwardIcon className={styles.shake}/>
      <img onClick={handleDigimon} src="./digivice.webp"/>

    </div>
  );
}
