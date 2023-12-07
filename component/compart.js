
import { Box, Container } from '@mui/material'
import React from 'react'


export const Compart = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '5vh',
            width: '100%', // You can adjust the width as needed
            // Add other styles as needed
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'black', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <img width={"300"} height={"400"} style={{ borderRadius: '500px', opacity: '0.8' }} src="compart2.jpeg" alt="content" />
                    {/* <h2 >MYID</h2> */}
                    <h2>MYID for Web 3.0</h2>
                    <h4>MYID aggregation is the integration of digital identities from multiple networks.This approach aids in situations requiring identity data, such as KYC, credit scores, or credentials.</h4>
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#021A2F', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <img width={"300"} height={"400"} style={{ borderRadius: '300px', opacity: '1' }} src="/compart1.jpeg" alt="content" />
                    {/* <h2 >MYID</h2> */}
                    <h2>Technolgy Path</h2>
                    <h4>MyID facilitates creating and verifying digital identities, ensuring secure and efficient user interactions with online services. Its primary function is identity management in the digital realm. </h4>
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'black', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <img width={"300"} height={"300"} style={{ borderRadius: '500px', opacity: '0.8' }} src="compart2.jpeg" alt="content" />
                    {/* <h2>MYID</h2> */}
                    <h2>Data in MYID</h2>
                    <h4>"MYID gathers user data from registries and services, including blockchain records (transactions, chain states), and social media APIs, ensuring comprehensive information collection and utilization."</h4>
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: "#021A2F", opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <img width={"300"} height={"400"} style={{ borderRadius: '300px', opacity: '0.8' }} src="/roadmap.jpeg" alt="content" />
                    {/* <h2>MYID</h2> */}
                    <h2>Data Aggregation</h2>
                    <h4>MYID processes and consolidates analyzed identity data, ensuring consistency, and computes an Identity Score by merging information from various platforms, offering accurate and reliable identity insights. </h4>
                </Box>

            </Box>
        </Box >
    )
}
