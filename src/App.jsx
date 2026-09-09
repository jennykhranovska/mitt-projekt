import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import ClickButton from "./components/ClickButton";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header />
      <List />

      <ProfileCard
        name="Anna Svensson"
        role="Frontend-utvecklare"
        initials="AS"
      />

      <ClickButton />
      <Footer />
    </>
  );
}

export default App;