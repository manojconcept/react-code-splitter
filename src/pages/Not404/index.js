import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();

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
                className="row justify-content-center align-items-center"
                style={{ minHeight: '70vh' }} 
            >
                <motion.div
                    variants={fadeInUp}
                    className="col-md-8 text-center mb-4"
                >
                    <Typography variant="h1" component="h1" gutterBottom>
                        404
                    </Typography>
                    <Typography variant="h4" component="h2" className="mb-3">
                        Oops! Page Not Found
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        The page you are looking for doesn't exist or has been moved. Please check the URL and try again.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => navigate('/')}
                    >
                        Go Back Home
                    </Button>
                </motion.div>
            </motion.div>
        </Box>
    );
};

export default Error404;
