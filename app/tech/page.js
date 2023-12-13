import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const page = () => {
    const data = [
        {
            image: "userAgent.jpeg",
            title: "User Agent",
            text: "This could be a browser, mobile app, or other web client that facilitates communication between holders, issuers, and verifiers of digital identities.",
        },
        {
            image: "universalResolver.jpeg",
            title: "Universal Resolver",
            text: "This server hosts a modular system of DID Method drivers, allowing for the discovery and resolution of DIDs across any decentralized system.",
        },
        {
            image: "univarsalRegistrar.jpeg",
            title: "Universal Registrar",
            text: "This MYID server facilitates the registration of DIDs across any decentralized system that supports a compatible driver through its unique method.",
        },
        {
            image: "identityHubs.jpeg",
            title: "Identity Hubs",
            text: "These secure datastores manage the storage of encrypted and signed data, and relay messages to devices linked to the identity.",
        }
    ]
    return (

        <Box sx={{ mt: '6rem', width: '100%', px: '300px', py: '100px' }}>
            <Typography
                sx={{
                    display: "flex",
                    width: "full",
                    py: '50px',
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "40px"
                }}
            >
                Key Technological Components
            </Typography>
            <Grid
                container
                rowSpacing={7}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {data.map((card, index) => (
                    <Grid
                        
                        item xs={6}
                    >
                        <Card
                            sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={`/${card.image}`}
                                title={card.title}
                            />
                            <CardContent>
                                <Typography
                                 gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default page