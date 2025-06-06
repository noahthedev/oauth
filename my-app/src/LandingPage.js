import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './LandingPage.css'; // Import the CSS file

function LandingPage() {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful login here
    // e.g., send the token to your backend server
  };

  const onFailure = (error) => {
    console.error('Login Failed:', error);
    // Handle failed login here
  };

  return (
    <div className="landing-page-container"> {/* Use the container class */}
      <h1>Welcome!</h1>
      <p>Please sign in with your Google account to continue.</p>
      <div className="google-login-button-container"> {/* Optional: for button styling */}
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={onFailure}
          // Replace 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com' with your actual Google Client ID
          // You can obtain one from the Google Cloud Console: https://console.cloud.google.com/apis/credentials
          clientId="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
        />
      </div>
    </div>
  );
}

export default LandingPage;
