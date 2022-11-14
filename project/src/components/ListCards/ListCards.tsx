import { useState } from 'react';
import { OfferType } from '../../types/offer';
import OfferCards from '../../components/OfferCards/OfferCards';

type Offers = {
    offers: OfferType[];
}

function ListCards({offers}:Offers): JSX.Element {
  const [, setActiveCard] = useState('');
  const handleActiveCard = (card:OfferType): void =>{
    setActiveCard(card.id.toString());
  };
  const componentOffer = offers.map((offer) =><OfferCards key={offer.id} offer={offer} onActiveChange={handleActiveCard}/>);
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
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {componentOffer}
          </div>
        </section>
        <div className="cities__right-section"><section className="cities__map map" /></div>
      </div>
    </div>
  );
}

export default ListCards;
