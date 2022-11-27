import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import WelcomScreenMain from '../../pages/welcom-screen/welcom-screen';
import {AppRoute} from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-fount-screen/not-found-screen';
import {OfferType} from '../../types/offer';
import {Review} from '../../types/review';
import {City} from '../../types/city';

type AppOffersProps = {
  offers: OfferType[];
  reviews: Review[];
  city: City[];
}

function App({offers, reviews, city}:AppOffersProps): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<WelcomScreenMain offers={offers} cities={city}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route path={AppRoute.Offers}>
            <Route
              path={AppRoute.Room}
              element={<RoomScreen offers={offers} reviews={reviews} />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
