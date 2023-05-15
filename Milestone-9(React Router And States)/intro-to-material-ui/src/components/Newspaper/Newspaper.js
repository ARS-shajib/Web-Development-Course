import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4aed158b6c0d427db24d03ad3be4e2ce')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        //console.log(articles)
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articles.map(article => <Grid item xs={2} sm={4} md={4}>
                        <News article={article}></News>
                    </Grid>
                    )
                }
            </Grid>
        </Box>
    );
};

export default Newspaper;