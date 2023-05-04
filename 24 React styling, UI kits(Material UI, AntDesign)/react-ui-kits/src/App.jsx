import { Search } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

function App() {
  let arr = [1,2,3,4,5,6,7,8];
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              style={{ display: "flex", alignItems: "center" }}
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <AddAPhotoIcon style={{ marginRight: "13px" }} />
              Album Layout
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <main>
        <section>
          <Typography align="center" gutterBottom variant="h3">
            Album layout
          </Typography>
          <Typography
            align="center"
            style={{ color: "#aaa", width: "30%", margin: "0 auto" }}
            variant="h6"
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button style={{ marginRight: "10px" }} variant="contained">
              MAIN CALL TO ACTION
            </Button>
            <Button variant="outlined">MAIN CALL TO ACTION 2</Button>
          </div>
        </section>

        <section>
          <Container lg >
            <Grid container spacing={2} style={{marginTop:'100px'}}>
              {arr.map((item)=>{

                return <Grid display='flex' justifyContent='center' xs={12} md={6} lg={3} key={item} item>
                <Card sx={{ maxWidth: 345}} >
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              })}
            
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
