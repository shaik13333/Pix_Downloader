import React from 'react';
import { useLocation } from 'react-router-dom';

const NextPage = () => {
  let data = useLocation();
  const imageUrl = data.state.x.webformatURL; // Image URL from location data

  return (
    <div style={styles.container}>
      <div style={styles.instructionsContainer}>
        <h2 style={styles.heading}>View and Download the Image</h2>
        <p style={styles.text}>
          You can view the image you selected from the previous page here. The image will adjust its size based on your screen dimensions for better viewing.
        </p>
        <p style={styles.text}>
          To download the image, follow these steps:
        </p>
        <ol style={styles.list}>
          <li>Right-click on the image above.</li>
          <li>Select <strong>"Save image as..."</strong> from the context menu.</li>
          <li>Choose the destination folder on your device and click <strong>"Save."</strong></li>
        </ol>
        <p style={styles.text}>
          The image will now be saved to your device, and you can view it at any time from your saved files.
        </p>
      </div>

      <div style={styles.imageContainer}>
        <img
          src={imageUrl}
          alt="Selected"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7fb',
    padding: '20px',
  },
  instructionsContainer: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    textAlign: 'center',
    marginBottom: '30px',
    width: '100%',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '20px',
  },
  text: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.8',
  },
  list: {
    listStyleType: 'decimal',
    paddingLeft: '30px',
    textAlign: 'left',
    fontSize: '20px',
    color: '#555',
    marginBottom: '20px',
  },
  imageContainer: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  image: {
    maxWidth: '90%',
    maxHeight: '70vh',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    objectFit: 'contain',
  },
};

export default NextPage;
