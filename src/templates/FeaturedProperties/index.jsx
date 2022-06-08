import * as C from './styles';
import { TextLinks } from '../../components/TextLinks';
import { PropertiesSection } from '../../components/PropertiesSection';

export const FeaturedProperties = () => {
  return (
    <C.Container>
      <C.Header>
        <C.TitleContainer>
          <h2>Featured Properties</h2>
          <p>Everything you need to know when you are looking</p>
        </C.TitleContainer>
        <TextLinks text="View All Properties" />
      </C.Header>
      <PropertiesSection />
    </C.Container>
  );
};
