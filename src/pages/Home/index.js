import { lazy } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

//created for seprated chuck from material ui Box component
import { SuspenseComponent } from '../../Suspense/SuspenseComponent';
const Box = lazy(() => import("@mui/material/Box"));

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const cardContent = (
    <>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </>
);

export default function Home() {
    const cards = Array.from({ length: 15 }).map((_, index) => (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="col-md-4 mb-4"
        >
            <Card variant="outlined">{cardContent}</Card>
        </motion.div>
    ));

    return (
        <>
            {/*<Load New Component> */}
            <div className="container mt-3">
                <h5>{"<Load New Component>"}</h5>
                <h5>Repo
                    : <a
                        target='_blank'
                        href='https://github.com/manojconcept/react-code-splitter'
                        rel="noopener noreferrer"
                    >
                        click here
                    </a>
                </h5>
            </div>

            <SuspenseComponent>
                <Box sx={{ minWidth: 275 }}>
                    <div className="container">
                        <div className="row">
                            {cards}
                        </div>
                    </div>
                </Box>
            </SuspenseComponent>
        </>
    );
}
