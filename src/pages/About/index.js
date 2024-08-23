import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <Box sx={{ padding: '2rem' }} className="container">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="row justify-content-center"
            >
                <motion.div
                    variants={fadeInUp}
                    className="col-md-8 text-center mb-4"
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        We are a team of passionate developers and designers committed to building high-quality web applications. Our goal is to deliver outstanding user experiences through innovative design and cutting-edge technology.
                    </Typography>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="col-md-6 text-center"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Learn More
                    </Button>
                </motion.div>
            </motion.div>
        </Box>
    );
};

export default About;
