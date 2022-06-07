import * as C from './styles';
import MeUndies from '../../../../assets/images/meundies.svg';
import SitePoint from '../../../../assets/images/sitepoint.svg';
import Slack from '../../../../assets/images/slack.svg';
import WooCommerce from '../../../../assets/images/woocommerce.svg';

export const Logos = () => {
  return (
    <C.Container>
      <C.LogoEmprise src={MeUndies} />
      <C.LogoEmprise src={SitePoint} />
      <C.LogoEmprise src={Slack} />
      <C.LogoEmprise src={WooCommerce} />
    </C.Container>
  );
};
