import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className="home">
            <h1>Gino Lee ANDRIAMPANIRY</h1>
            <div className="type-animation">
                <span>Je suis &nbsp;</span>
                    <TypeAnimation 
                        sequence={[
                            '', // Types 'One'
                            2000, // Waits 1s
                            'développeur', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'intégrateur', // Types 'Three' without deleting 'Two'
                            2000, // Waits 2s
                            'freelance', // Types 'Three' without deleting 'Two'
                            1000,
                            () => {
                            //console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        speed={20}
                        style={{ fontSize: '2em' }}
                    />
            </div>
            
        </div>
    );
};

export default Home;