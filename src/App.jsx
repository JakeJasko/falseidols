import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroScreen from './components/HeroScreen';
import AssessmentScreen from './components/AssessmentScreen';
import ResultsScreen from './components/ResultsScreen';
import PillarsGuideModal from './components/PillarsGuideModal';
import { FULL_SCENARIOS, QUICK_SCENARIOS, calculateResults } from './data/assessmentData';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('four_idols_theme') || 'light';
  });

  const [screen, setScreen] = useState('hero'); // 'hero' | 'assessment' | 'results'
  const [assessmentMode, setAssessmentMode] = useState('quick'); // 'quick' | 'full'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [isPillarsGuideOpen, setIsPillarsGuideOpen] = useState(false);

  const activeScenarios = assessmentMode === 'quick' ? QUICK_SCENARIOS : FULL_SCENARIOS;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('four_idols_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleStartAssessment = (mode = 'quick') => {
    setAssessmentMode(mode);
    setAnswers({});
    setCurrentIndex(0);
    setResults(null);
    setScreen('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (questionId, idolKey) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: idolKey
    }));
  };

  const handleNext = () => {
    if (currentIndex < activeScenarios.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    const computedResults = calculateResults(answers, activeScenarios.length);
    setResults(computedResults);
    setScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueToFullAssessment = () => {
    setAssessmentMode('full');
    setResults(null);
    // Find first question in FULL_SCENARIOS that has not been answered yet
    const firstUnansweredIndex = FULL_SCENARIOS.findIndex((s) => !answers[s.id]);
    setCurrentIndex(firstUnansweredIndex !== -1 ? firstUnansweredIndex : 6);
    setScreen('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResults(null);
    setScreen('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenPillarsGuide={() => setIsPillarsGuideOpen(true)}
      />

      <main className="main-content">
        {screen === 'hero' && (
          <HeroScreen
            onStartAssessment={handleStartAssessment}
            onOpenPillarsGuide={() => setIsPillarsGuideOpen(true)}
          />
        )}

        {screen === 'assessment' && (
          <AssessmentScreen
            scenarios={activeScenarios}
            currentIndex={currentIndex}
            answers={answers}
            onSelectOption={handleSelectOption}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onFinish={handleFinish}
          />
        )}

        {screen === 'results' && results && (
          <ResultsScreen
            results={results}
            answers={answers}
            scenarios={activeScenarios}
            mode={assessmentMode}
            onContinueToFull={handleContinueToFullAssessment}
            onRetake={handleRetake}
          />
        )}
      </main>

      <PillarsGuideModal
        isOpen={isPillarsGuideOpen}
        onClose={() => setIsPillarsGuideOpen(false)}
      />
    </div>
  );
}
