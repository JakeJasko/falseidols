import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Download, Check, Copy } from 'lucide-react';
import { generateShareCard } from '../utils/cardRenderer';

export default function ShareModal({ isOpen, onClose, results }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && results) {
      setIsGenerating(true);
      generateShareCard({
        primary: results.primary,
        secondary: results.secondary,
        percentages: results.percentages
      })
        .then((dataUrl) => {
          setImageSrc(dataUrl);
          setIsGenerating(false);
        })
        .catch((err) => {
          console.error('Error generating card:', err);
          setIsGenerating(false);
        });
    }
  }, [isOpen, results]);

  if (!isOpen || typeof document === 'undefined') return null;

  const handleDownload = () => {
    if (!imageSrc) return;
    const link = document.createElement('a');
    link.download = `four-false-idols-${results.primary.id}-dossier.png`;
    link.href = imageSrc;
    link.click();
  };

  const handleCopySummary = () => {
    const text = `According to Arthur Brooks' Four False Idols assessment, my primary substitute for happiness is ${results.primary.name.toUpperCase()} (${results.primary.latinName}) with a shadow driver of ${results.secondary.name}.\n\nSpectrum:\n• Money: ${results.percentages.money}%\n• Power: ${results.percentages.power}%\n• Pleasure: ${results.percentages.pleasure}%\n• Fame: ${results.percentages.fame}%\n\nArthur Brooks' Antidote: ${results.primary.brooksPrescription.virtue}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
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
        maxWidth: '460px',
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
              letterSpacing: '0.1em'
            }}>
              SHAREABLE DOSSIER
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}>
              Your Diagnostic Card
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

        {/* Modal Body: Card Preview */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem',
          textAlign: 'center'
        }}>
          {isGenerating ? (
            <div style={{
              padding: '3rem 1rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-serif)',
              fontSize: '15px',
              fontStyle: 'italic'
            }}>
              Rendering high-resolution diagnostic card...
            </div>
          ) : imageSrc ? (
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '1rem',
              maxHeight: '52vh'
            }}>
              <img
                src={imageSrc}
                alt="False Idol Diagnostic Share Card"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ) : null}

          <p style={{
            fontSize: '12px',
            color: 'var(--text-muted)',
            lineHeight: 1.4
          }}>
            Formatted in high-res portrait for saving to photos, messaging friends, or sharing.
          </p>
        </div>

        {/* Modal Footer Controls */}
        <div style={{
          padding: '1rem 1.25rem',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-surface)',
          display: 'flex',
          gap: '0.75rem'
        }}>
          <button
            onClick={handleCopySummary}
            className="touch-active"
            style={{
              flex: 1,
              height: '48px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-strong)',
              backgroundColor: 'var(--bg-canvas)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            {copied ? <Check size={16} color="var(--color-terracotta)" /> : <Copy size={16} />}
            <span>{copied ? 'Copied Summary' : 'Copy Text'}</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={!imageSrc}
            className="touch-active"
            style={{
              flex: 1.2,
              height: '48px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--color-terracotta)',
              color: 'var(--text-on-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              fontSize: '13px',
              fontWeight: 600,
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <Download size={16} />
            <span>Download PNG</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
