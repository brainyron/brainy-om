"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// Tracks which video has audio focus across the page. Only one tile can own
// audio at a time, so claiming focus auto-mutes everyone else.

type AudioFocusValue = {
  focusedId: string | null;
  claim: (id: string) => void;
  release: (id: string) => void;
};

const AudioFocusContext = createContext<AudioFocusValue | null>(null);

export function AudioFocusProvider({ children }: { children: ReactNode }) {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const claim = useCallback((id: string) => {
    setFocusedId(id);
  }, []);

  const release = useCallback((id: string) => {
    setFocusedId((prev) => (prev === id ? null : prev));
  }, []);

  const value = useMemo<AudioFocusValue>(
    () => ({ focusedId, claim, release }),
    [focusedId, claim, release],
  );

  return (
    <AudioFocusContext.Provider value={value}>
      {children}
    </AudioFocusContext.Provider>
  );
}

export function useAudioFocus(id: string) {
  const ctx = useContext(AudioFocusContext);
  if (!ctx) {
    // Provider missing: treat audio as always muted, no-ops on claim/release.
    // Component still renders, just no audio focus features.
    return {
      isFocused: false,
      claim: () => {},
      release: () => {},
    };
  }
  return {
    isFocused: ctx.focusedId === id,
    claim: () => ctx.claim(id),
    release: () => ctx.release(id),
  };
}
