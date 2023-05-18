import AddArtist from "../pages/AddArtist";
import ArtistEdit from "../pages/ArtistEdit";
import Artists from "../pages/Artists";
import ArtistsDetail from "../pages/ArtistsDetail";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";

export const ROUTES = [
    {
        path:'/',
        element: <MainRoot/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/artists',
                element: <Artists/>
            },
            {
                path:'/add-artist',
                element: <AddArtist/>
            },
            {
                path:'/artist/:id',
                element: <ArtistsDetail/>
            },
            {
                path:'/artist/edit/:id',
                element: <ArtistEdit/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
]