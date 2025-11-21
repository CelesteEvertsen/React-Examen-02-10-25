// store/useQuizStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuizState {
  score: number;
  currentIndex: number;
  finished: boolean;
  switchedAnswer: Record<number, number>; // Holder styr på { spmID: poengverdi }

  // Handlinger
  answerQuestion: (questionId: number, value: number, totalQuestions: number) => void;
  goBack: () => void;
  finishQuiz: () => void;
  restartQuiz: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      score: 0,
      currentIndex: 0,
      finished: false,
      switchedAnswer: {},

      answerQuestion: (questionId, value, totalQuestions) => {
        const state = get();
        
        // 1. Finn ut hva vi svarte forrige gang på dette spørsmålet (eller 0)
        const previousValue = state.switchedAnswer[questionId] || 0;

        // 2. Regn ut ny score (Trekk fra gammelt svar, legg til nytt)
        const newScore = state.score - previousValue + value;

        // 3. Oppdater listen over svar
        const updatedSwitchedAnswers = {
          ...state.switchedAnswer,
          [questionId]: value,
        };

        // 4. Oppdater state
        set({
          score: newScore,
          switchedAnswer: updatedSwitchedAnswers,
        });

        // 5. Gå videre til neste spørsmål hvis vi ikke er på siste
        if (state.currentIndex + 1 < totalQuestions) {
          set({ currentIndex: state.currentIndex + 1 });
        }
      },

      goBack: () => set((state) => ({
        // Går tilbake 1 steg, men ikke lavere enn 0
        currentIndex: Math.max(0, state.currentIndex - 1)
      })),

      finishQuiz: () => set({ finished: true }),

      restartQuiz: () => set({ 
        score: 0, 
        currentIndex: 0, 
        finished: false, 
        switchedAnswer: {} 
      }),
    }),
    {
      name: 'quiz-storage',
    }
  )
);