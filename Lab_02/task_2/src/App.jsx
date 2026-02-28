import Card from "./components/Card.jsx";
import "./App.css";
import ProducitList from "./components/ProductList.jsx";
import Section from "./components/Section.jsx";
function App() {

  return (
    <div style={{padding: "20px"}}>

    <Section title="React Basics Section">
      <Card title="React Generals">
        <p>React - A JavaScript library for building user interfaces</p>
        <button>Read more</button>
      </Card>

      <Card title="React webhooks" className="highlighted">
        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useContext</li>
        </ul>
      </Card>   
    </Section>

    <Section title="Product Section">
      <ProducitList />
    </Section>
    </div>
  )
}

export default App
