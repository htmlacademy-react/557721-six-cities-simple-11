import RoomScreen from '../../pages/room-screen/room-screen';
import { OfferType } from '../../types/offer';
import {Review} from '../../types/review';

type Offers = {
  offers: OfferType[];
  reviews: Review[];
}


export function Room({offers, reviews}:Offers): JSX.Element {
  return(
    <RoomScreen offers={offers} reviews={reviews} />
  );
}

export default Room;
