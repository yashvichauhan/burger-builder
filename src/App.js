import React from 'react';

import Layout from './components/layouts/layout';
import Builder from './containers/burgerBuild/builder'

function App() {
  return (
    <div>
      <h1>Welcome to burger builder</h1>
      <Layout>
        <Builder/>
      </Layout>
    </div>
  );
}

export default App;
