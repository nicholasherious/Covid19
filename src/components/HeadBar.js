import React from 'react';
import { Header } from 'semantic-ui-react';
import './HeadBar.css'

function HeadBar() {
  return (
    <div className="headBar">
      <div>
        <Header as="h1">COVID-19</Header>
      </div>
    </div>
  );
}

export default HeadBar;
