
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterCard from './components/CharacterCard/CharacterCard';

function App() {
  return (
    <div className="app">
      <CharacterList></CharacterList>
      <CharacterCard></CharacterCard>
    </div>
  );
}

export default App;
