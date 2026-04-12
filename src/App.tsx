import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ReaderScreen from './components/ReaderScreen';
import MandalaBackground from './components/MandalaBackground';

export default function App() {
  return (
    <HashRouter>
      <MandalaBackground />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/read/:stotraId" element={<ReaderScreen />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
