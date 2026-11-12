/**
 * Alberta Shirani International Academy — Web Audio API Synthesizer
 * Pure code sound engine: 432Hz / 528Hz Solfeggio harmonics & haptic UI audio
 */

class AlbertaAudioEngine {
  constructor() {
    this.ctx = null;
    this.ambientGain = null;
    this.isAmbientPlaying = false;
    this.oscillators = [];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft high-frequency crystal bell (432Hz Grounding or 528Hz Transformation)
  playChime(freq = 528) {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 1.2);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.8);
    } catch (e) {
      console.warn('Audio chime error:', e);
    }
  }

  // Subtle UI click tick
  playTick() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.04);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  // Harmonic Drone Field (432Hz + 528Hz Binaural Drone)
  toggleAmbient(btnElement) {
    this.init();
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      if (btnElement) {
        btnElement.classList.remove('active');
        btnElement.innerHTML = '🎵 432Hz Поле: ВЫКЛ';
      }
    } else {
      this.startAmbient();
      if (btnElement) {
        btnElement.classList.add('active');
        btnElement.innerHTML = '✨ 432Hz Поле: ВКЛ';
      }
    }
  }

  startAmbient() {
    try {
      const now = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.0001, now);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.045, now + 3.0);
      this.ambientGain.connect(this.ctx.destination);

      // 432Hz Root Anchor (Grounding & Inner Support)
      const osc1 = this.ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(432, now);
      osc1.connect(this.ambientGain);
      osc1.start(now);
      this.oscillators.push(osc1);

      // 528Hz Harmonic (Transformation & Heart Opening)
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(528, now);
      const gain2 = this.ctx.createGain();
      gain2.gain.value = 0.5;
      osc2.connect(gain2);
      gain2.connect(this.ambientGain);
      osc2.start(now);
      this.oscillators.push(osc2);

      // 108Hz Deep Bass Foundation
      const osc3 = this.ctx.createOscillator();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(108, now);
      const gain3 = this.ctx.createGain();
      gain3.gain.value = 0.35;
      osc3.connect(gain3);
      gain3.connect(this.ambientGain);
      osc3.start(now);
      this.oscillators.push(osc3);

      this.isAmbientPlaying = true;
    } catch (e) {
      console.warn('Ambient start failed:', e);
    }
  }

  stopAmbient() {
    try {
      if (this.ambientGain) {
        const now = this.ctx.currentTime;
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
        setTimeout(() => {
          this.oscillators.forEach(osc => osc.stop());
          this.oscillators = [];
          this.isAmbientPlaying = false;
        }, 1500);
      }
    } catch (e) {}
  }
}

// Global Singleton
const soundEngine = new AlbertaAudioEngine();
