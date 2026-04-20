import { createContext, useContext, useCallback, useState } from 'react';
import { useNarration } from '../hooks/useNarration';
import { useSettings } from '../hooks/useSettings';

interface NarrationContextValue {
  isActive: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  currentIndex: number;
  totalSegments: number;
  storyId: string | null;
  storyTitle: string | null;
  startStory: (id: string, title: string, paragraphs: string[], moral: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

const NarrationContext = createContext<NarrationContextValue | null>(null);

export function NarrationProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings();
  const narration = useNarration({
    voiceGender: settings.narrationVoice,
    speed: settings.narrationSpeed,
    pitch: settings.narrationPitch,
  });

  const [storyId, setStoryId] = useState<string | null>(null);
  const [storyTitle, setStoryTitle] = useState<string | null>(null);

  const startStory = useCallback((id: string, title: string, paragraphs: string[], moral: string) => {
    setStoryId(id);
    setStoryTitle(title);
    narration.start(title, paragraphs, moral);
  }, [narration.start]);

  const stop = useCallback(() => {
    setStoryId(null);
    setStoryTitle(null);
    narration.stop();
  }, [narration.stop]);

  return (
    <NarrationContext.Provider value={{
      isActive: narration.isActive,
      isPlaying: narration.isPlaying,
      isPaused: narration.isPaused,
      currentIndex: narration.currentIndex,
      totalSegments: narration.totalSegments,
      storyId,
      storyTitle,
      startStory,
      pause: narration.pause,
      resume: narration.resume,
      stop,
    }}>
      {children}
    </NarrationContext.Provider>
  );
}

export function useNarrationContext() {
  const ctx = useContext(NarrationContext);
  if (!ctx) throw new Error('useNarrationContext must be used within NarrationProvider');
  return ctx;
}
