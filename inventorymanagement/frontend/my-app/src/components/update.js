import React from "react";
import { useNavigate } from 'react-router-dom';
import UpdateForm from "./subcomponents/updateForm";
import Header from "./subcomponents/header";
import Footer from "./subcomponents/footer";
import backgroundImage from './image/Home.jpg';

export default function Update(){

    const navigate = useNavigate(); // Hook to get access to the navigate function

    // This function will be called when the button is clicked
    const handleClick = () => {
        navigate('/'); // Navigate programmatically
    };

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Set minimum height to 100% of the viewport height
        margin: 0,
        padding: 0,
        color: 'white', // Optional: if your text isn't visible against the background
    };


    return(
        <div style={backgroundStyle}>
           <Header/>
            <br></br>
           <UpdateForm/>
          
           
        </div>
    )
}