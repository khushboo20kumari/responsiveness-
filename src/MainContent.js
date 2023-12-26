
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Card, Box, Typography, Rating, CardContent, Button, CardAction, Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
};

const MainContent = () => {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://a4h6c5c5.rocketcdn.me/wp-content/uploads/2020/10/Cutie-Pies-Pizza-Restaurant-Website-Example.jpg.webp'></img>
                    </Item>
                </Grid>
            </Grid>
            <Box >
                <Typography style={{ margin: "20px", fontSize: "35px", fontWeight: "normal" }}>FRESH FROM OUR COMMUNITY</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ margin: "auto" }}>
                    <Grid item sm={6} xs={12} lg={3} md={12}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140, width: "100%" }}
                                    image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/feed/147496/szOm7F2RiSPIjXb7b4yn_1000010827.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Rating name="customized-10" defaultValue={2} max={10} />
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={2}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                    <Box style={{ display: "flex" }}>
                                        <Avatar></Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This recipe is awesome and so easy. The meat always comes out flavorful and tender.
                                        </Typography>
                                    </Box>

                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item sm={6} xs={12} lg={3} md={12}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140, width: "100%" }}
                                    image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/66/52/4/GhJAB2MoRWSN6aHqsx2e_untitled-7896.jpg"
                                    title="green iguana"
                                />

                                <CardContent>
                                    <Rating name="customized-10" defaultValue={2} max={10} />
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={2}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                    <Box style={{ display: "flex" }}>
                                        <Avatar></Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This recipe is awesome and so easy. The meat always comes out flavorful and tender.
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item sm={6} xs={12} lg={3} md={12}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140, width: "100%" }}
                                    image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/13/22/63/D30C2lxTy6SAflQlb61Q_VP%25204%2520-%2520final_2.jpg"
                                    title="green iguana"
                                />
                                <CardContent>

                                    <Rating name="customized-10" defaultValue={2} max={10} />
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={2}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                    <Box style={{ display: "flex" }}>
                                        <Avatar></Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This recipe is awesome and so easy. The meat always comes out flavorful and tender.
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item sm={6} xs={12} lg={3} md={12}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140, width: "100%" }}
                                    image="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/42/94/38/fS29ttQnitOZ9fPVIvxA_0S9A5582.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Rating name="customized-10" defaultValue={7} max={7} />
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={2}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                    <Box style={{ display: "flex" }}>
                                        <Avatar></Avatar><br></br>

                                        <Typography variant="body2" color="text.secondary">

                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </Box>

                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>

                            </Card>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            <br></br>
            <br></br>
            <Box style={{ margin: "10px" }}>
                <Typography style={{ margin: "15px", fontWeight: "normal", fontSize: "30px" }}>WHAT WE'RE CRAVING</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    <Grid item xs={12} sm={6} lg={4} md={12}>
                        <Item >
                            <img style={{ width: "100%" }} src='https://a4h6c5c5.rocketcdn.me/wp-content/uploads/2020/10/Rialto-Restaurant-Website-Example.jpg.webp'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} md={12}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://a4h6c5c5.rocketcdn.me/wp-content/uploads/2020/10/Rialto-Restaurant-Website-Example.jpg.webp'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4} md={12}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://a4h6c5c5.rocketcdn.me/wp-content/uploads/2020/10/Rialto-Restaurant-Website-Example.jpg.webp'></img>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <br></br>
            <br></br>
            <Box>
                <Typography style={{ margin: "10px", fontWeight: "normal", fontSize: "30px" }}>EXPLORE MORE</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={4} xs={6} lg={2} md={4}>
                        <Item>
                            <img style={{ width: "100%", height: "150px", borderRadius: "200px" }} src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_350,ar_1:1/foodcom/images/be27babc-a2cb-4807-a7cf-f492f190f130.jpg'></img>
                        </Item>
                    </Grid>
                    <Grid item sm={4} xs={6} lg={2} md={4}>
                        <Item>
                            <img style={{ width: "100%", height: "150px", borderRadius: "200px" }} src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_350,ar_1:1/foodcom/images/0ba5e633-8a82-4412-9912-3e4b021d3f36.jpg'></img>

                        </Item>
                    </Grid>
                    <Grid item sm={4} xs={6} lg={2} md={4}>
                        <Item>
                            <img style={{ width: "100%", height: "150px", borderRadius: "200px" }} src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/9985d8e3-87d3-4cfc-b312-b355a6630e76.jpg'></img>

                        </Item>
                    </Grid>
                    <Grid item sm={4} xs={6} lg={2} md={4}>
                        <Item>
                            <img style={{ width: "100%", height: "150px", borderRadius: "200px" }} src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/4c90f65d-398c-462c-a165-eeca9e73aa8a.jpg'></img>

                        </Item>
                    </Grid>
                    <Grid item sm={4} xs={6} lg={2} md={4}>
                        <Item>
                            <img style={{ width: "100%", height: "150px", borderRadius: "200px" }} src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_350,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg'></img>

                        </Item>
                    </Grid>
                    <Grid item sm={4} xs={6} lg={2} md={4}>
                        <Item>
                            <img style={{ width: "100%", height: "150px", borderRadius: "200px" }} src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_350,ar_1:1/foodcom/images/0e6210a9-7b32-4bae-a8a2-b1f8178cd33a.jpg'></img>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <br></br>
            <br></br>
            <Box>
                <Typography style={{ margin: "10px", fontWeight: "normal", fontSize: "30px" }}>TRENDING NOW</Typography>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/13/34/48/ajTdwsRkQcKBjf9TInCs_untitled-1175.jpg'></img>
                            <Box style={{ width: "100%", height: "50px", margin: "14px" }}>
                                <Typography style={{ fontWeight: "normal", fontSize: "16px" }}>CREAMY RAMEN NOODLES</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/66/52/4/GhJAB2MoRWSN6aHqsx2e_untitled-7896.jpg'></img>
                            <Box style={{ width: "100%", height: "50px", margin: "14px" }}>
                                <Typography style={{ fontWeight: "normal", fontSize: "16px" }}>CROISSANTS</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/24/83/39/Pt3kixozQE6ULkIGzg1o_BOBA1%2520(1%2520of%25201).jpg'></img>
                            <Box style={{ width: "100%", height: "50px", margin: "14px" }}>
                                <Typography style={{ fontWeight: "normal", fontSize: "16px" }}>EASY AND QUICK HOMEMADE PIZZA</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/22/75/4/6SPX9PQ6WWdM49K06A1A_pizzaaa.jpg'></img>
                            <Box style={{ width: "100%", height: "50px", margin: "14px" }}>
                                <Typography style={{ fontWeight: "normal", fontSize: "16px" }}>BIRTHDAY CAKE BUBBLE TEA</Typography>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <br></br>
            <br></br>
            <Box>
                <Typography style={{ margin: "10px", fontWeight: "normal", fontSize: "30px" }}>DON'T MISS</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/43/47/3/7DPfzYlRs2HBoQ2EZpXw_untitled-3182.jpg'></img>
                            <Box style={{ margin: "20px" }}>
                                <Typography style={{ fontSize: "10px" }}>CoLLECTION</Typography>
                                <Typography style={{ fontSize: "16px" }}>38 PLANT-BASSED COMFORT FOOD</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/17/99/0/5xlpyAPOSxGdaqmTLZ0o_BT%25205%2520-%2520final_3.jpg'></img>
                            <Box style={{ margin: "20px" }}>
                                <Typography style={{ fontSize: "10px" }}>COLLECTION</Typography>
                                <Typography style={{ fontSize: "16px" }}>29 SKILLET DINNERS</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/86/24/8/LaOg4pNNS2CEZQ12pbiW_Food-com-2017-06-197543.jpg'></img>
                            <Box style={{ margin: "20px" }}>
                                <Typography style={{ fontSize: "10px" }}>COLLECTION</Typography>
                                <Typography style={{ fontSize: "16px" }}>40 + QUICK & ESSAY PASTA PECIPES</Typography>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <br></br>
            <br></br>
            <Box>
                <Typography style={{ fontWeight: "normal", fontSize: "30px" }}>MORE IDEAS</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={3} md={4} sm={6} >
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg'></img>
                            <Box style={{ margin: "20px" }}>
                                <Typography style={{ fontSize: "16px" }}>CHICKEN TIKKA MASALA</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} lg={3} md={4} sm={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/14/88/99/LlkHd9qlTpqOlaaYdJjy_0S9A6887.jpg'></img>
                            <Box style={{ margin: "20px" }}>
                                <Typography style={{ fontSize: "16px" }}>VEGAN BACON</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} lg={3} md={4} sm={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/42/94/38/fS29ttQnitOZ9fPVIvxA_0S9A5582.jpg'></img>
                            <Box style={{ margin: "20px" }}>
                                <Typography style={{ fontSize: "16px" }}>COPYCAT MCDONALD'S BIG</Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} lg={3} md={4} sm={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/38/49/05/E2DPzYkQgGkM7QXntE1Q_Instant-pot-pot-roast-2895.jpg'></img>
                            <Box style={{ margin: "20px" }}>
                                <Typography style={{ fontSize: "16px" }}>CROCK -POT BEEF ROAST</Typography>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <br></br>
            <br></br>
            <Box style={{ margin: "auto" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={12} md={12} sm={12}>
                        <img style={{ width: "100%" }} src='https://s0.2mdn.net/simgad/5032982025838998790'></img>
                        <Typography style={{ fontWeight: "normal", fontSize: "10px" }}>ADVERTISEMENT</Typography>
                    </Grid>
                </Grid>
            </Box>
            <br></br>
            <br></br>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} lg={8} md={6} sm={6}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/54/32/04/jaZWq4VnRbeqrr2zc2U6_garlic-bread-beauty-1.jpg'></img>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} md={6}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                CoLLECTION
                            </Typography>
                            <Typography variant="h5" component="div" style={{ fontSize: "30px" }}>
                                HOW TO MAKE GARLIC BREAD
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">

                            </Typography>
                            <Typography variant="body2" style={{ fontSize: "17px", fontWeight: "normal" }}>
                                Looking to seriously up your garlic bread game? Try this recipe for a classic toasty loaf. It’s golden brown with crusty edges, extra-garlicky, and a little cheesy. What’s not to love?By Heather Baird
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} lg={3} md={6}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/30/32/45/19L2ucjQneoEANPzyfiQ_0S9A6363.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6} >
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/30/97/7/7GmgWw4TTUCCw7xGKQAP_0S9A6434.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/13/22/63/D30C2lxTy6SAflQlb61Q_VP%25204%2520-%2520final_2.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/28/18/77/ZyG0h2VYRjei7iPFSWNI_food.com-14.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/30/32/45/19L2ucjQneoEANPzyfiQ_0S9A6363.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6} >
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/30/97/7/7GmgWw4TTUCCw7xGKQAP_0S9A6434.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>OVEN -BAKED RIBS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/13/22/63/D30C2lxTy6SAflQlb61Q_VP%25204%2520-%2520final_2.jpg'></img>
                        <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/28/18/77/ZyG0h2VYRjei7iPFSWNI_food.com-14.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>5 MINUTE VEGAN PANCAKES</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6}>
                    <Item>

                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/13/37/51/IrDuUPieR1GP9vviVyiM_restaurant-teriyaki-sauce-133751_-5.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>SHAKSHUKA</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6} >
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/63/07/1/Oey61BTvKAEV0tVQz4gU_untitled-1868.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>OVEN -BAKED RIBS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/13/22/63/D30C2lxTy6SAflQlb61Q_VP%25204%2520-%2520final_2.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/63/07/1/Oey61BTvKAEV0tVQz4gU_untitled-1868.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/30/32/45/19L2ucjQneoEANPzyfiQ_0S9A6363.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6} >
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/16/52/54/XE7h7mpTK69lpb05OhGB_broil-perfect-steak_4984.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={6}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/40/49/7/iUlxb54sSWaD9Zp44kfP_FGgWFV4mSVq8aISp1eQG_baked%2520wings%2520(1%2520of%25204).jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Item>
                        <img style={{ width: "100%" }} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_4:3/v1/img/recipes/11/70/31/ieo2HguHQEiy7VYnh9cT_0S9A5095.jpg'></img>
                        <Box>
                            <Typography style={{ margin: "20px" }}>MOZZARELLA STICKS</Typography>
                        </Box>
                    </Item>
                </Grid>
            </Grid>

        </>

    );
};

export default MainContent;

