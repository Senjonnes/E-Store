import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import AllMeetupsPage from "./views/AllMeetups/AllMeetups";
import FavoritesPage from "./views/Favorites/Favorites";
import NewMeetupPage from "./views/NewMeetups/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
