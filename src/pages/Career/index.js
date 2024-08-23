import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const Career = () => {
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
                        Join Our Team
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        We are always looking for talented individuals who are passionate about technology and innovation. Explore our open positions and take the next step in your career with us.
                    </Typography>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="col-md-10"
                >
                    <Typography variant="h4" component="h2" className="mb-4">
                        Current Openings
                    </Typography>
                    
                    <Box className="mb-4">
                        <Typography variant="h6" component="h3">
                            Frontend Developer
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Location: Remote | Type: Full-time
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We are looking for a skilled frontend developer to join our team. You will work closely with our design and backend teams to create stunning user interfaces.
                        </Typography>
                        <Button variant="contained" color="primary">
                            Apply Now
                        </Button>
                    </Box>

                    <Box className="mb-4">
                        <Typography variant="h6" component="h3">
                            Backend Developer
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Location: Remote | Type: Full-time
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We need a talented backend developer to help us build robust and scalable backend systems. You'll be working with the latest technologies to drive our product forward.
                        </Typography>
                        <Button variant="contained" color="primary">
                            Apply Now
                        </Button>
                    </Box>

                    <Box className="mb-4">
                        <Typography variant="h6" component="h3">
                            UX/UI Designer
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Location: Remote | Type: Full-time
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We are seeking a creative UX/UI designer to help us design user-centric interfaces. Your work will shape the user experience of our products.
                        </Typography>
                        <Button variant="contained" color="primary">
                            Apply Now
                        </Button>
                    </Box>
                </motion.div>
            </motion.div>
        </Box>
    );
};

export default Career;
