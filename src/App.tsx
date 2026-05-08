import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import HomeScreen from './components/HomeScreen';
import StotraDetail from './components/StotraDetail';
import ReaderScreen from './components/ReaderScreen';
import ProfileScreen from './components/ProfileScreen';
import CalendarPage from './components/CalendarPage';
import AllStotrasPage from './components/AllStotrasPage';
import FavoritesPage from './components/FavoritesPage';
import ComingSoonPage from './components/ComingSoonPage';
import AboutPage from './components/AboutPage';
import StoriesPage from './components/StoriesPage';
import StoryDetail from './components/StoryDetail';
import ReflectionDetail from './components/ReflectionDetail';
import MandalaBackground from './components/MandalaBackground';
import NarrationPlayer from './components/NarrationPlayer';
import { useSettings } from './hooks/useSettings';
import { LanguageProvider } from './i18n/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { NarrationProvider, useNarrationContext } from './contexts/NarrationContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function GlobalNarrationPlayer() {
  const narration = useNarrationContext();
  return (
    <AnimatePresence>
      {narration.isActive && (
        <NarrationPlayer
          isPlaying={narration.isPlaying}
          isPaused={narration.isPaused}
          currentIndex={narration.currentIndex}
          totalSegments={narration.totalSegments}
          storyTitle={narration.storyTitle}
          onPause={narration.pause}
          onResume={narration.resume}
          onStop={narration.stop}
        />
      )}
    </AnimatePresence>
  );
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
    <LanguageProvider value={settingsState.settings.language}>
      <HelmetProvider>
      <AuthProvider>
      <BrowserRouter>
        <NarrationProvider>
        <ScrollToTop />
        <MandalaBackground />
        <div className="relative z-10 max-w-4xl mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/stotra/:stotraId" element={<StotraDetail />} />
            <Route path="/read/:stotraId" element={<ReaderScreen settingsState={settingsState} />} />
            <Route path="/stotras" element={<AllStotrasPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="/panchanga" element={<CalendarPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/story/:storyId" element={<StoryDetail />} />
            <Route path="/reflection/:index" element={<ReflectionDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfileScreen settingsState={settingsState} />} />
          </Routes>
        </div>
        <GlobalNarrationPlayer />
        </NarrationProvider>
      </BrowserRouter>
      </AuthProvider>
      </HelmetProvider>
    </LanguageProvider>
  );
}
