import React, { useEffect, useState } from 'react';
import { Jobs } from './Jobs';

const MainPage = () => {
    const [jobsdata, setJobData ]= useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJobData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
           <Jobs jobs={jobsdata}></Jobs>
        </div>
    );
};

export default MainPage;