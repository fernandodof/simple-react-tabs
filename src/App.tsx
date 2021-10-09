import React from 'react';
import './App.css';

import Tabs from './Components/Tabs';
import TabPane from './Components/Tabs/TabPane';

const App = (): JSX.Element => (
  <div className="App">
    <Tabs>
      <TabPane title="Basic">
        <div>Basic</div>
      </TabPane>
      <TabPane title="Standard">
        <div>Standard</div>
      </TabPane>
      <TabPane title="Premium">
        <div>Premium</div>
      </TabPane>
    </Tabs>
  </div>
);

export default App;
