import * as C from './styles';
import MeUndies from '../../../../assets/images/meundies.svg';
import SitePoint from '../../../../assets/images/sitepoint.svg';
import Slack from '../../../../assets/images/slack.svg';
import WooCommerce from '../../../../assets/images/woocommerce.svg';

export const Logos = () => {
  return (
    <C.Container>
      <C.LogoEmprise src={MeUndies} alt="Logo da MeUndies" />
      <C.LogoEmprise src={SitePoint} alt="Logo da SitePoint" />
      <C.LogoEmprise src={Slack} alt="Logo do Slack" />
      <C.LogoEmprise src={WooCommerce} alt="Logo do WooCommerce" />
    </C.Container>
  );
};
