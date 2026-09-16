import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { SCENARIOS, IDOLS } from '../data/assessmentData';

export default function AnswerReviewModal({ isOpen, onClose, answers, scenarios = SCENARIOS }) {
  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(21, 20, 19, 0.75)',
      backdropFilter: 'blur(6px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="animate-scale-up" style={{
        backgroundColor: 'var(--bg-canvas)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '520px',
        width: '100%',
        maxHeight: '88dvh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-float)'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--bg-surface)'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-roman)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--color-terracotta)',
              letterSpacing: '0.12em'
            }}>
              ANSWER AUDIT
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}>
              Your {scenarios.length} Instinctive Choices
            </div>
          </div>
          <button
            onClick={onClose}
            className="touch-active"
            style={{
              padding: '0.4rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--bg-subtle)',
              color: 'var(--text-secondary)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {scenarios.map((scenario) => {
            const selectedIdolKey = answers[scenario.id];
            const selectedOption = scenario.options.find((o) => o.idol === selectedIdolKey);
            const idolInfo = IDOLS[selectedIdolKey];

            return (
              <div
                key={scenario.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '0.35rem'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-roman)',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: 'var(--text-muted)'
                  }}>
                    DILEMMA {scenario.chapter} • {scenario.title.toUpperCase()}
                  </span>
                  {idolInfo && (
                    <span style={{
                      fontFamily: 'var(--font-roman)',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: idolInfo.accentColor,
                      backgroundColor: idolInfo.accentBg,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)'
                    }}>
                      {idolInfo.name} ({idolInfo.latinName})
                    </span>
                  )}
                </div>

                {selectedOption ? (
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginTop: '0.2rem'
                    }}>
                      {selectedOption.title}
                    </div>
                    <div style={{
                      fontSize: '12.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                      marginTop: '0.15rem'
                    }}>
                      {selectedOption.description}
                    </div>
                  </div>
                ) : (
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    No answer selected
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '0.85rem 1.25rem',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          textAlign: 'center'
        }}>
          <button
            onClick={onClose}
            className="touch-active"
            style={{
              width: '100%',
              height: '44px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--color-terracotta)',
              color: 'var(--text-on-accent)',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            Done Reviewing
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
