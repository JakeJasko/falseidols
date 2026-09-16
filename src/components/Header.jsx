import React from 'react';
import { Sun, Moon, BookOpen } from 'lucide-react';

export default function Header({ theme, onToggleTheme, onOpenPillarsGuide }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      backgroundColor: 'var(--bg-canvas)',
      borderBottom: '1px solid var(--border-subtle)',
      backdropFilter: 'blur(8px)',
      padding: '0.75rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      {/* Brand Emblem */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: 'var(--radius-sm)',
          border: '1.5px solid var(--color-terracotta)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-roman)',
          fontWeight: 700,
          fontSize: '11px',
          color: 'var(--color-terracotta)',
          letterSpacing: '0.05em'
        }}>
          IV
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{
            fontFamily: 'var(--font-roman)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: 'var(--text-primary)',
            lineHeight: 1.1
          }}>
            FOUR IDOLS
          </span>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '10px',
            fontStyle: 'italic',
            color: 'var(--text-muted)'
          }}>
            Aquinas & Brooks
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button
          onClick={onOpenPillarsGuide}
          className="touch-active"
          title="Explore the 4 Pillars of Happiness"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.45rem 0.75rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-strong)',
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-secondary)',
            fontSize: '12px',
            fontWeight: 500
          }}
        >
          <BookOpen size={14} color="var(--color-terracotta)" />
          <span className="hide-on-tiny-screen">The 4 Pillars</span>
        </button>

        <button
          onClick={onToggleTheme}
          className="touch-active"
          title={`Switch to ${theme === 'light' ? 'Obsidian Dark' : 'Parchment Light'} Mode`}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)'
          }}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
    </header>
  );
}
