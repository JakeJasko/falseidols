import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Clock, Award, Coins, Crown, Sparkles } from 'lucide-react';
import { IDOLS } from '../data/assessmentData';

export default function HeroScreen({ onStartAssessment, onOpenPillarsGuide }) {
  const idolList = Object.values(IDOLS);

  return (
    <div className="animate-fade-in" style={{
      maxWidth: 'var(--max-content-width)',
      margin: '0 auto',
      padding: '1.5rem 1.25rem 3rem'
    }}>
      {/* Epigraph */}
      <div style={{
        textAlign: 'center',
        padding: '1rem 0.5rem',
        marginBottom: '1.25rem'
      }}>
        <span style={{
          fontFamily: 'var(--font-roman)',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: 'var(--color-terracotta)',
          display: 'block',
          marginBottom: '0.5rem'
        }}>
          DE QUATTUOR IDOLIS • SUMMA THEOLOGIAE
        </span>
        <blockquote style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1rem, 2.8vw, 1.15rem)',
          fontStyle: 'italic',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          position: 'relative'
        }}>
          “Man cannot live without joy; therefore one deprived of spiritual joy goes over unto worldly substitutes.”
        </blockquote>
        <cite style={{
          display: 'block',
          fontFamily: 'var(--font-sans)',
          fontSize: '12px',
          color: 'var(--text-muted)',
          marginTop: '0.4rem',
          fontStyle: 'normal',
          fontWeight: 500
        }}>
          — St. Thomas Aquinas (as popularized by Arthur C. Brooks)
        </cite>
      </div>

      {/* Hero Headline & Intro */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1.75rem'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 5.5vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          marginBottom: '0.75rem'
        }}>
          Which False Idol Secretly Governs Your Life?
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
          color: 'var(--text-secondary)',
          lineHeight: 1.6
        }}>
          Everyone worships something. When we confuse worldly means with ultimate fulfillment, we ensnare ourselves on a hedonic treadmill. 
          Discover which of the four classic substitutes drives your subconscious decisions under pressure.
        </p>
      </div>

      {/* The 4 Idols Grid Preview */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0.75rem',
        marginBottom: '1.75rem'
      }}>
        {idolList.map((idol) => {
          let Icon = Coins;
          if (idol.id === 'power') Icon = Crown;
          if (idol.id === 'pleasure') Icon = Sparkles;
          if (idol.id === 'fame') Icon = Award;

          return (
            <div
              key={idol.id}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                boxShadow: 'var(--shadow-subtle)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                backgroundColor: idol.accentColor
              }} />

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.25rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-roman)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: idol.accentColor,
                  letterSpacing: '0.08em'
                }}>
                  {idol.latinName}
                </span>
                <Icon size={16} color={idol.accentColor} />
              </div>

              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}>
                {idol.name}
              </div>

              <div style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                lineHeight: 1.3
              }}>
                {idol.corePromise}
              </div>
            </div>
          );
        })}
      </div>

      {/* Assessment Badges / Meta Info */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '2rem',
        boxShadow: 'var(--shadow-subtle)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock size={16} color="var(--color-terracotta)" />
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            12 Dilemmas (~3 min)
          </span>
        </div>
        <div style={{ width: '1px', backgroundColor: 'var(--border-subtle)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <ShieldCheck size={16} color="var(--color-terracotta)" />
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Psychological Nuance
          </span>
        </div>
      </div>

      {/* Primary Action Button (Mobile Thumb Friendly) */}
      <button
        onClick={onStartAssessment}
        className="touch-active"
        style={{
          width: '100%',
          minHeight: '56px',
          backgroundColor: 'var(--color-terracotta)',
          color: 'var(--text-on-accent)',
          borderRadius: 'var(--radius-pill)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          fontSize: '16px',
          fontWeight: 600,
          boxShadow: 'var(--shadow-card)',
          letterSpacing: '0.02em',
          marginBottom: '1rem'
        }}
      >
        <span>Begin the Assessment</span>
        <ArrowRight size={18} />
      </button>

      {/* Secondary Action */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onOpenPillarsGuide}
          className="touch-active"
          style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            fontWeight: 500
          }}
        >
          Read Arthur Brooks’ teaching on the 4 Pillars of True Happiness
        </button>
      </div>
    </div>
  );
}
