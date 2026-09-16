import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { SCENARIOS } from '../data/assessmentData';

export default function AssessmentScreen({
  scenarios = SCENARIOS,
  currentIndex,
  answers,
  onSelectOption,
  onNext,
  onPrevious,
  onFinish
}) {
  const currentScenario = scenarios[currentIndex] || scenarios[0];
  const totalScenarios = scenarios.length;
  const currentAnswer = answers[currentScenario.id];
  const [slideDirection, setSlideDirection] = useState('next');
  const cardRef = useRef(null);

  useEffect(() => {
    // Scroll window smoothly to top of question on question change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const progressPercent = Math.round(((currentIndex + 1) / totalScenarios) * 100);

  const handleNextClick = () => {
    if (!currentAnswer) return;
    setSlideDirection('next');
    if (currentIndex < totalScenarios - 1) {
      onNext();
    } else {
      onFinish();
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setSlideDirection('prev');
      onPrevious();
    }
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div style={{
      maxWidth: 'var(--max-content-width)',
      margin: '0 auto',
      padding: '1.25rem 1.25rem 6.5rem', // padding bottom for sticky thumb bar
      minHeight: 'calc(100dvh - 65px)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Progress & Chapter Header */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-roman)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--color-terracotta)'
            }}>
              DILEMMA {currentScenario.chapter} OF {totalScenarios === 6 ? 'VI' : 'XII'}
            </span>
            <span style={{ color: 'var(--border-strong)' }}>•</span>
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {currentScenario.category}
            </span>
          </div>

          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
            color: 'var(--text-muted)'
          }}>
            {progressPercent}%
          </span>
        </div>

        {/* Progress Line */}
        <div style={{
          height: '3px',
          width: '100%',
          backgroundColor: 'var(--border-subtle)',
          borderRadius: 'var(--radius-pill)',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: 'var(--color-terracotta)',
            transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            borderRadius: 'var(--radius-pill)'
          }} />
        </div>
      </div>

      {/* Scenario Container with Directional Transition */}
      <div
        key={currentScenario.id}
        ref={cardRef}
        className={slideDirection === 'next' ? 'animate-slide-next' : 'animate-slide-prev'}
        style={{ flex: 1 }}
      >
        {/* Scenario Title & Story */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.35rem 1.25rem',
          marginBottom: '1.25rem',
          boxShadow: 'var(--shadow-card)',
          position: 'relative'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.35rem, 4vw, 1.6rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '0.75rem',
            letterSpacing: '-0.01em'
          }}>
            {currentScenario.title}
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65
          }}>
            {currentScenario.scenario}
          </p>
        </div>

        {/* Options List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          {currentScenario.options.map((option, idx) => {
            const isSelected = currentAnswer === option.idol;

            return (
              <button
                key={option.idol}
                onClick={() => onSelectOption(currentScenario.id, option.idol)}
                className="touch-active"
                style={{
                  textAlign: 'left',
                  width: '100%',
                  minHeight: '64px',
                  padding: '1rem 1.15rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isSelected ? 'var(--color-terracotta-light)' : 'var(--bg-surface)',
                  border: isSelected ? '1.5px solid var(--color-terracotta)' : '1px solid var(--border-subtle)',
                  boxShadow: isSelected ? 'var(--shadow-card)' : 'var(--shadow-subtle)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {/* Stamp Letter Circle */}
                <div style={{
                  flexShrink: 0,
                  width: '28px',
                  height: '28px',
                  borderRadius: 'var(--radius-pill)',
                  border: isSelected ? '1.5px solid var(--color-terracotta)' : '1px solid var(--border-strong)',
                  backgroundColor: isSelected ? 'var(--color-terracotta)' : 'var(--bg-subtle)',
                  color: isSelected ? 'var(--text-on-accent)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-roman)',
                  fontWeight: 700,
                  fontSize: '12px',
                  marginTop: '2px',
                  transition: 'all 0.15s ease'
                }}>
                  {isSelected ? <Check size={14} strokeWidth={3} /> : optionLabels[idx]}
                </div>

                {/* Option Content */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: isSelected ? 'var(--color-terracotta)' : 'var(--text-primary)',
                    marginBottom: '0.25rem',
                    lineHeight: 1.3
                  }}>
                    {option.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13.5px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5
                  }}>
                    {option.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sticky Bottom Thumb Navigation Bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '0.85rem 1.25rem',
        zIndex: 30,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: 'var(--max-content-width)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          {currentIndex > 0 && (
            <button
              onClick={handlePrevClick}
              className="touch-active"
              style={{
                height: '52px',
                padding: '0 1.25rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-strong)',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              <ArrowLeft size={16} />
              <span className="hide-on-tiny-screen">Back</span>
            </button>
          )}

          <button
            onClick={handleNextClick}
            disabled={!currentAnswer}
            className="touch-active"
            style={{
              flex: 1,
              height: '52px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: currentAnswer ? 'var(--color-terracotta)' : 'var(--border-strong)',
              color: 'var(--text-on-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '15px',
              fontWeight: 600,
              cursor: currentAnswer ? 'pointer' : 'not-allowed',
              opacity: currentAnswer ? 1 : 0.6,
              boxShadow: currentAnswer ? 'var(--shadow-card)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <span>{currentIndex === totalScenarios - 1 ? 'Analyze My Core Idol' : 'Next Dilemma'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
