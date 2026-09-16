import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Share2, RotateCcw, CheckCircle2, AlertCircle, Compass, 
  HelpCircle, Sparkles, Award, Coins, Crown, ArrowRight, BookOpen
} from 'lucide-react';
import ShareModal from './ShareModal';
import AnswerReviewModal from './AnswerReviewModal';
import PillarsGuideModal from './PillarsGuideModal';

export default function ResultsScreen({
  results,
  answers,
  scenarios,
  mode,
  onContinueToFull,
  onStartFullAssessment,
  onRetake
}) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isPillarsModalOpen, setIsPillarsModalOpen] = useState(false);

  const { primary, secondary, percentages, tallies, ranking } = results;

  useEffect(() => {
    // Scroll window smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Tasteful celebratory burst
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.4 },
        colors: [primary.accentColor, secondary.accentColor, '#B84A39', '#D5CCC0']
      });
    } catch (e) {
      // ignore in environments without canvas
    }
  }, [primary, secondary]);

  let PrimaryIcon = Coins;
  if (primary.id === 'power') PrimaryIcon = Crown;
  if (primary.id === 'pleasure') PrimaryIcon = Sparkles;
  if (primary.id === 'fame') PrimaryIcon = Award;

  return (
    <div className="animate-fade-in" style={{
      maxWidth: 'var(--max-content-width)',
      margin: '0 auto',
      padding: '1.5rem 1.25rem 4.5rem'
    }}>
      {/* Top Epigraph / Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span style={{
          fontFamily: 'var(--font-roman)',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: 'var(--color-terracotta)',
          display: 'block',
          marginBottom: '0.25rem'
        }}>
          DIAGNOSTIC DOSSIER
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.75rem, 5vw, 2.25rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}>
          Your Core Substitute for Joy
        </h1>
      </div>

      {/* Primary Idol Spotlight Card */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: `2px solid ${primary.accentColor}`,
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem 1.35rem',
        marginBottom: '1.5rem',
        boxShadow: 'var(--shadow-card)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Top Accent Strip */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          backgroundColor: primary.accentColor
        }} />

        {/* Icon Seal */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: 'var(--radius-pill)',
          backgroundColor: primary.accentBg,
          border: `1.5px solid ${primary.accentColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 0.75rem'
        }}>
          <PrimaryIcon size={28} color={primary.accentColor} />
        </div>

        {/* Latin Title */}
        <div style={{
          fontFamily: 'var(--font-roman)',
          fontSize: '13px',
          fontWeight: 700,
          color: primary.accentColor,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: '0.25rem'
        }}>
          PRIMARY IDOL • {primary.latinName}
        </div>

        {/* English Name */}
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 7vw, 2.75rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '0.4rem'
        }}>
          {primary.name.toUpperCase()}
        </h2>

        {/* Archetype Label */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'var(--bg-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-pill)',
          padding: '0.25rem 0.85rem',
          fontSize: '12.5px',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginBottom: '1rem'
        }}>
          Archetype: {primary.archetype}
        </div>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '15px',
          fontStyle: 'italic',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          marginBottom: '1rem'
        }}>
          {primary.subtitle}
        </p>

        {/* Signature Quote */}
        <blockquote style={{
          backgroundColor: 'var(--bg-canvas)',
          borderLeft: `3px solid ${primary.accentColor}`,
          padding: '0.75rem 1rem',
          borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
          textAlign: 'left',
          fontSize: '13px',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          color: 'var(--text-secondary)',
          lineHeight: 1.5
        }}>
          {primary.quote}
          <span style={{
            display: 'block',
            fontSize: '11px',
            fontStyle: 'normal',
            color: 'var(--text-muted)',
            marginTop: '0.25rem',
            fontWeight: 500
          }}>
            — {primary.quoteAuthor}
          </span>
        </blockquote>
      </div>

      {/* Secondary Shadow Driver Banner */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '1rem 1.25rem',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        boxShadow: 'var(--shadow-subtle)'
      }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: 'var(--radius-pill)',
          backgroundColor: secondary.accentBg,
          border: `1.5px solid ${secondary.accentColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <span style={{
            fontFamily: 'var(--font-roman)',
            fontSize: '12px',
            fontWeight: 700,
            color: secondary.accentColor
          }}>
            II
          </span>
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-roman)',
            fontSize: '10.5px',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '0.08em'
          }}>
            SECONDARY "SHADOW" IDOL
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--text-primary)'
          }}>
            {secondary.name} ({secondary.latinName})
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
            When {primary.name} is thwarted, you instinctively retreat to {secondary.name} as your backup sanctuary.
          </div>
        </div>
      </div>

      {/* The Fourfold Spectrum Meters */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.35rem 1.25rem',
        marginBottom: '1.75rem',
        boxShadow: 'var(--shadow-subtle)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--text-primary)'
          }}>
            The Fourfold Spectrum
          </h3>
          <span style={{
            fontFamily: 'var(--font-roman)',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--text-muted)'
          }}>
            {results.total} INSTINCTS
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {ranking.map(({ idol, count, percentage }) => {
            const isPrimary = idol.id === primary.id;
            return (
              <div key={idol.id}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.3rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '14.5px',
                      fontWeight: isPrimary ? 700 : 500,
                      color: isPrimary ? 'var(--text-primary)' : 'var(--text-secondary)'
                    }}>
                      {idol.name} <span style={{ fontStyle: 'italic', fontSize: '12.5px', color: 'var(--text-muted)' }}>({idol.latinName})</span>
                    </span>
                    {isPrimary && (
                      <span style={{
                        fontSize: '9px',
                        fontFamily: 'var(--font-roman)',
                        fontWeight: 700,
                        backgroundColor: idol.accentBg,
                        color: idol.accentColor,
                        padding: '1px 6px',
                        borderRadius: 'var(--radius-pill)'
                      }}>
                        CORE
                      </span>
                    )}
                  </div>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                    color: isPrimary ? idol.accentColor : 'var(--text-secondary)'
                  }}>
                    {percentage}% ({count}/{results.total})
                  </span>
                </div>

                {/* Meter Bar */}
                <div style={{
                  height: '8px',
                  width: '100%',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-pill)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${percentage}%`,
                    backgroundColor: idol.accentColor,
                    borderRadius: 'var(--radius-pill)',
                    transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Psychological Dossier: The Anatomy of Your Idol */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '19px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.85rem'
        }}>
          The Anatomy of {primary.name}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
          {/* The Core Promise */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            borderLeft: `4px solid ${primary.accentColor}`
          }}>
            <div style={{
              fontFamily: 'var(--font-roman)',
              fontSize: '10.5px',
              fontWeight: 700,
              color: primary.accentColor,
              letterSpacing: '0.08em',
              marginBottom: '0.2rem'
            }}>
              THE SEDUCTIVE PROMISE
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {primary.corePromise}
            </div>
          </div>

          {/* The Underlying Fear */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            borderLeft: '4px solid #B84A39'
          }}>
            <div style={{
              fontFamily: 'var(--font-roman)',
              fontSize: '10.5px',
              fontWeight: 700,
              color: '#B84A39',
              letterSpacing: '0.08em',
              marginBottom: '0.2rem'
            }}>
              THE UNCONSCIOUS TERROR
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {primary.underlyingFear}
            </div>
          </div>

          {/* The Hedonic Trap */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            borderLeft: '4px solid #C68729'
          }}>
            <div style={{
              fontFamily: 'var(--font-roman)',
              fontSize: '10.5px',
              fontWeight: 700,
              color: '#C68729',
              letterSpacing: '0.08em',
              marginBottom: '0.2rem'
            }}>
              THE HEDONIC TREADMILL
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {primary.theTrap}
            </div>
          </div>

          {/* The Blind Spot */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            borderLeft: '4px solid #5C554E'
          }}>
            <div style={{
              fontFamily: 'var(--font-roman)',
              fontSize: '10.5px',
              fontWeight: 700,
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              marginBottom: '0.2rem'
            }}>
              YOUR CHRONIC BLIND SPOT
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {primary.blindSpot}
            </div>
          </div>
        </div>
      </div>

      {/* Arthur Brooks' Actionable Antidote */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1.5px solid var(--color-terracotta)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.35rem 1.25rem',
        marginBottom: '2rem',
        boxShadow: 'var(--shadow-card)',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.6rem'
        }}>
          <Compass size={18} color="var(--color-terracotta)" />
          <span style={{
            fontFamily: 'var(--font-roman)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'var(--color-terracotta)'
          }}>
            THE ARTHUR BROOKS PRESCRIPTION
          </span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.35rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.25,
          marginBottom: '0.4rem'
        }}>
          Virtue Antidote: {primary.brooksPrescription.virtue}
        </h3>

        <p style={{
          fontSize: '13.5px',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          marginBottom: '1rem'
        }}>
          {primary.aquinasTeaching}
        </p>

        <div style={{
          backgroundColor: 'var(--bg-canvas)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            fontFamily: 'var(--font-roman)',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '0.06em',
            marginBottom: '0.5rem'
          }}>
            3 TACTICAL DISCIPLINES FOR LIBERATION:
          </div>
          <ul style={{
            paddingLeft: '1.15rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.5
          }}>
            {primary.brooksPrescription.actionableHabits.map((habit, i) => (
              <li key={i}>{habit}</li>
            ))}
          </ul>
        </div>

        <div style={{
          fontSize: '12.5px',
          fontWeight: 600,
          color: 'var(--color-terracotta)',
          lineHeight: 1.45
        }}>
          Key Pillar Alignment: {primary.brooksPrescription.pillarAlignment}
        </div>
      </div>

      {/* Mobile Action Controls */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginBottom: '1.5rem'
      }}>
        {/* Quick Mode Continuation to Full */}
        {mode === 'quick' && (onContinueToFull || onStartFullAssessment) && (
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1.5px solid var(--color-terracotta)',
            borderRadius: 'var(--radius-md)',
            padding: '1.1rem 1.15rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                fontFamily: 'var(--font-roman)',
                fontSize: '10.5px',
                fontWeight: 700,
                color: 'var(--color-terracotta)',
                letterSpacing: '0.08em'
              }}>
                6 OF 12 DILEMMAS COMPLETED
              </span>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                backgroundColor: 'var(--color-terracotta-light)',
                color: 'var(--color-terracotta)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-pill)'
              }}>
                6 Remaining
              </span>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.2rem'
              }}>
                Complete the Full 12-Dilemma Assessment
              </div>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.45
              }}>
                Your first 6 answers are already accounted for! Answer just 6 additional scenarios to unlock your comprehensive 12-dilemma psychological profile.
              </p>
            </div>
            <button
              onClick={onContinueToFull || onStartFullAssessment}
              className="touch-active"
              style={{
                width: '100%',
                height: '46px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--color-terracotta)',
                color: 'var(--text-on-accent)',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <span>Continue with Remaining 6 Questions</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Share Button (Primary) */}
        <button
          onClick={() => setIsShareModalOpen(true)}
          className="touch-active"
          style={{
            width: '100%',
            height: '54px',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--color-terracotta)',
            color: 'var(--text-on-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '15px',
            fontWeight: 600,
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <Share2 size={18} />
          <span>Save / Share Diagnostic Card</span>
        </button>

        {/* Answer Audit Button */}
        <button
          onClick={() => setIsReviewModalOpen(true)}
          className="touch-active"
          style={{
            width: '100%',
            height: '48px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-strong)',
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '14px',
            fontWeight: 600
          }}
        >
          <CheckCircle2 size={16} color="var(--color-terracotta)" />
          <span>Review All {results.total} Dilemma Answers</span>
        </button>

        {/* Four Pillars Guide Button */}
        <button
          onClick={() => setIsPillarsModalOpen(true)}
          className="touch-active"
          style={{
            width: '100%',
            height: '48px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-strong)',
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '14px',
            fontWeight: 600
          }}
        >
          <BookOpen size={16} color="var(--color-terracotta)" />
          <span>The Four Pillars of Real Happiness Guide</span>
        </button>

        {/* Retake Button */}
        <button
          onClick={onRetake}
          className="touch-active"
          style={{
            width: '100%',
            height: '44px',
            borderRadius: 'var(--radius-pill)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            fontSize: '13px',
            fontWeight: 500,
            marginTop: '0.5rem'
          }}
        >
          <RotateCcw size={14} />
          <span>Retake Assessment from Beginning</span>
        </button>
      </div>

      {/* Modals */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        results={results}
      />

      <AnswerReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        answers={answers}
        scenarios={scenarios}
      />

      <PillarsGuideModal
        isOpen={isPillarsModalOpen}
        onClose={() => setIsPillarsModalOpen(false)}
      />
    </div>
  );
}
