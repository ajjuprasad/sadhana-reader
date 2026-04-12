import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import StotraDetail from './components/StotraDetail';
import ReaderScreen from './components/ReaderScreen';
import MandalaBackground from './components/MandalaBackground';
import { useSettings } from './hooks/useSettings';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const settingsState = useSettings();

  useEffect(() => {
    const splash = document.getElementById('splash');
    if (splash) {
      // Small delay so the app content is painted before we fade
      const timer = setTimeout(() => {
        splash.classList.add('hide');
        setTimeout(() => splash.remove(), 700);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <MandalaBackground />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomeScreen settingsState={settingsState} />} />
          <Route path="/stotra/:stotraId" element={<StotraDetail settingsState={settingsState} />} />
          <Route path="/read/:stotraId" element={<ReaderScreen settingsState={settingsState} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
