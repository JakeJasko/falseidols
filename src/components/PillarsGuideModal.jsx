import React from 'react';
import { createPortal } from 'react-dom';
import { X, Compass, HeartHandshake, Users, Sparkles } from 'lucide-react';
import { FOUR_PILLARS } from '../data/assessmentData';

export default function PillarsGuideModal({ isOpen, onClose }) {
  if (!isOpen || typeof document === 'undefined') return null;

  const pillarIcons = {
    'Faith / Philosophy': Compass,
    'Family': HeartHandshake,
    'Friendship': Users,
    'Meaningful Work': Sparkles
  };

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
        maxWidth: '500px',
        width: '100%',
        maxHeight: '88dvh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-float)'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '1.15rem 1.25rem',
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
              ARTHUR BROOKS' PHILOSOPHY
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}>
              The Four Pillars of Real Happiness
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

        {/* Modal Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem'
        }}>
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            marginBottom: '1.25rem'
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '14.5px',
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              "Mother Teresa taught that the spiritual poverty of the West is loneliness and emptiness. We try to fill that void with the four false idols: money, power, pleasure, and fame. But real joy rests on an entirely different foundation."
            </p>
            <div style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--color-terracotta)',
              marginTop: '0.4rem'
            }}>
              — Arthur C. Brooks, Harvard Kennedy School
            </div>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem'
          }}>
            The Four Real Pillars:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {FOUR_PILLARS.map((pillar) => {
              const Icon = pillarIcons[pillar.title] || Sparkles;
              return (
                <div
                  key={pillar.title}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--color-terracotta-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Icon size={16} color="var(--color-terracotta)" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem'
                    }}>
                      {pillar.title}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5
                    }}>
                      {pillar.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
            Close Guide
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
