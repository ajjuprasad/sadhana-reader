import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ReaderScreen from './components/ReaderScreen';
import MandalaBackground from './components/MandalaBackground';
import { useSettings } from './hooks/useSettings';

export default function App() {
  const settingsState = useSettings();

  return (
    <HashRouter>
      <MandalaBackground />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomeScreen settingsState={settingsState} />} />
          <Route path="/read/:stotraId" element={<ReaderScreen settingsState={settingsState} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
