import { createContext } from 'react';
import { GameState, type TGameState } from '../types/TGameState';

export const GameStateContext = createContext<TGameState>(GameState.PLAY);