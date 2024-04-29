import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./subcomponents/header";
import Footer from "./subcomponents/footer";
import Form from "./subcomponents/form";
import backgroundImage from './image/Home.jpg'; // Import the background image

export default function CreateDriver() {
    const navigate = useNavigate(); // Hook to get access to the navigate function

    // Inline style for the background image
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Set minimum height to 100% of the viewport height
        margin: 0,
        padding: 0,
    };

    return(
        <div style={backgroundStyle}>
            <Header/>
            <br></br>
            <Form/>
         
        </div>
    )
}
