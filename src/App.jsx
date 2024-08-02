import Card from "./components/Card";
import GlobalStyles from "./styles/Globa.styles";
import image1 from "./assets/images/image-1.jpeg";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Card imageLInk={image1} />
    </div>
  );
}

export default App;
