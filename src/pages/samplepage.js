import React from 'react';
const SamplePage = () => (
  <div className="broken-body">
    <main role="main" className="main-container push">
      <section className="broken-container">
        <div className="content">
          <h2>Home</h2>
          <p>Uh oh, the bulb went out!</p>
          <a href="/" className="btn btn-primary">
            See the light
          </a>
        </div>
      </section>
    </main>
  </div>
);

export default SamplePage;