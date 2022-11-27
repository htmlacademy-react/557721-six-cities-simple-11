import { useState } from 'react';
import { OfferType } from '../../types/offer';
import OfferCards from '../../components/OfferCards/OfferCards';
import Map from '../map/map';
import {City} from '../../types/city';

type Offers = {
    offers: OfferType[];
    city: City;
}

function ListCards({offers, city}:Offers): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferType | undefined>(undefined);
  const handleActiveCard = (card: OfferType):void => {
    setActiveCard(card);
  };

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--closed">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">{
            offers.map((offer) => (
              <article className="cities__card place-card" key={offer.id} onMouseOver={() => handleActiveCard(offer)}>
                <OfferCards offer={offer} newCard="cities"/>
              </article>))
          }
          </div>
        </section>
        <div className="cities__right-section">
          <Map offers={offers} activeCard={activeCard} city={city} newMap="cities"/>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
