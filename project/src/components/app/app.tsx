import {WelcomScreenMain, WelcomScreenHeader} from '../../pages/welcom-screen/welcom-screen';

type AppRentalOffers = {
  countRentalOffers: number;
}

export function App({countRentalOffers}:AppRentalOffers): JSX.Element {
  return(
    <><WelcomScreenHeader />
      <WelcomScreenMain countRentalOffers={countRentalOffers} />
    </>
  );
}

export default App;
