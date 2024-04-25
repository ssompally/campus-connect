import React from 'react';

function LandingPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Campus Connect</h1>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center', 
    padding: '50px', 
    color: '#333', 
    backgroundColor: '#f4f4f4', 
    borderRadius: '8px', 
    margin: '20px auto', 
    maxWidth: '600px',
  },
  header: {
    color: '#0264d6', // Set the color of the header text
  }
};

export default LandingPage;
