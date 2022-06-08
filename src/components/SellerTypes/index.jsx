import { SellerIcon } from './components/SellerIcon';
import * as C from './styles';
import IconCart from '../../assets/images/icon-cart.svg';
import IconRent from '../../assets/images/icon-rent.svg';
import IconHouse from '../../assets/images/icon-house.svg';

export const SellerTypes = () => {
  return (
    <C.Container>
      <SellerIcon
        imgLink={IconCart}
        text="Buyer Guides"
        textLink="How to buy"
      />
      <SellerIcon
        imgLink={IconRent}
        text="Renter Guides"
        textLink="How to rent"
      />
      <SellerIcon
        imgLink={IconHouse}
        text="Seller Guides"
        textLink="How to sell"
      />
    </C.Container>
  );
};
