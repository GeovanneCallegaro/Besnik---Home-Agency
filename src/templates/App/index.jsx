import { FeaturedNumbers } from '../FeaturedNumbers';
import { FeaturedProperties } from '../FeaturedProperties';
import { Footer } from '../Footer';
import { Home } from '../Home';
import { Newsletter } from '../Newsletter';
import { Works } from '../Works';

function App() {
  return (
    <>
      <Home />
      <Works />
      <FeaturedProperties />
      <FeaturedNumbers />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
