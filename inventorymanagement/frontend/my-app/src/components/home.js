import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './subcomponents/header';
import Footer from './subcomponents/footer';
import Table from './subcomponents/table';
import backgroundImage from './image/Home.jpg'; // Import the background image

export default function Home() {
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

    // This function will be called when the "Create Driver" button is clicked
    const handleClick = () => {
        navigate('/createDriver'); // Navigate programmatically to the create driver page
    };

    // This function will be called when the "Go to Report Page" button is clicked
    const reportHandleClick = () => {
        navigate('/report'); // Navigate programmatically to the report page
    };

    return (
        <div style={backgroundStyle}>
            <Header />
            <br /><br />
            <button type="button" className="btn btn-primary" onClick={handleClick} style={{ marginLeft: '100px' }}>
                Add Items
            </button>
            <button type="button" className="btn btn-primary" onClick={reportHandleClick} style={{ marginLeft: '100px' }}>
                Go to Report Page
            </button>
            <br /><br />
            <Table />
            
        </div>
    );
}
