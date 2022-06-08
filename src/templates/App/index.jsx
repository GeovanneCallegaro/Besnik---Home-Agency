import { FeaturedNumbers } from '../FeaturedNumbers';
import { FeaturedProperties } from '../FeaturedProperties';
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
    </>
  );
}

export default App;
