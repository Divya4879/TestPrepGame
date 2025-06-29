// Retro Synthwave Background Music Generator
class RetroMusicPlayer {
    constructor() {
        this.audioContext = null;
        this.isPlaying = false;
        this.masterGain = null;
        this.currentLoop = null;
        this.volume = 0.3;
        
        this.initializeAudio();
    }

    async initializeAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.audioContext.createGain();
            this.masterGain.connect(this.audioContext.destination);
            this.masterGain.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
        } catch (error) {
            console.log('Audio not available');
        }
    }

    createSynthwaveLoop() {
        if (!this.audioContext) return;

        const duration = 8; // 8 second loop
        const now = this.audioContext.currentTime;

        // Bass line
        this.createBassLine(now, duration);
        
        // Lead melody
        this.createLeadMelody(now, duration);
        
        // Pad chords
        this.createPadChords(now, duration);
        
        // Schedule next loop
        setTimeout(() => {
            if (this.isPlaying) {
                this.createSynthwaveLoop();
            }
        }, duration * 1000);
    }

    createBassLine(startTime, duration) {
        const bassFreqs = [65.41, 73.42, 82.41, 65.41]; // C2, D2, E2, C2
        const noteDuration = duration / bassFreqs.length;

        bassFreqs.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            const filter = this.audioContext.createBiquadFilter();

            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(freq, startTime);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(200, startTime);
            
            gainNode.gain.setValueAtTime(0, startTime + index * noteDuration);
            gainNode.gain.linearRampToValueAtTime(0.3, startTime + index * noteDuration + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + (index + 1) * noteDuration);

            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(this.masterGain);

            oscillator.start(startTime + index * noteDuration);
            oscillator.stop(startTime + (index + 1) * noteDuration);
        });
    }

    createLeadMelody(startTime, duration) {
        const melodyFreqs = [523.25, 659.25, 783.99, 659.25, 523.25, 440, 493.88, 523.25]; // C5, E5, G5, E5, C5, A4, B4, C5
        const noteDuration = duration / melodyFreqs.length;

        melodyFreqs.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            const filter = this.audioContext.createBiquadFilter();

            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(freq, startTime);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(2000, startTime);
            
            gainNode.gain.setValueAtTime(0, startTime + index * noteDuration + 2);
            gainNode.gain.linearRampToValueAtTime(0.15, startTime + index * noteDuration + 2.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + (index + 1) * noteDuration + 2);

            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(this.masterGain);

            oscillator.start(startTime + index * noteDuration + 2);
            oscillator.stop(startTime + (index + 1) * noteDuration + 2);
        });
    }

    createPadChords(startTime, duration) {
        const chordFreqs = [
            [261.63, 329.63, 392.00], // C major
            [293.66, 369.99, 440.00], // D minor
            [329.63, 415.30, 493.88], // E minor
            [261.63, 329.63, 392.00]  // C major
        ];
        const chordDuration = duration / chordFreqs.length;

        chordFreqs.forEach((chord, chordIndex) => {
            chord.forEach(freq => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                const filter = this.audioContext.createBiquadFilter();

                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(freq, startTime);
                
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(800, startTime);
                
                gainNode.gain.setValueAtTime(0, startTime + chordIndex * chordDuration + 4);
                gainNode.gain.linearRampToValueAtTime(0.08, startTime + chordIndex * chordDuration + 4.5);
                gainNode.gain.setValueAtTime(0.08, startTime + (chordIndex + 1) * chordDuration + 4 - 0.5);
                gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + (chordIndex + 1) * chordDuration + 4);

                oscillator.connect(filter);
                filter.connect(gainNode);
                gainNode.connect(this.masterGain);

                oscillator.start(startTime + chordIndex * chordDuration + 4);
                oscillator.stop(startTime + (chordIndex + 1) * chordDuration + 4);
            });
        });
    }

    play() {
        if (!this.audioContext || this.isPlaying) return;
        
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        this.isPlaying = true;
        this.createSynthwaveLoop();
    }

    stop() {
        this.isPlaying = false;
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.masterGain) {
            this.masterGain.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
        }
    }
}

// Achievement System
class AchievementSystem {
    constructor() {
        this.achievements = {
            firstSteps: {
                id: 'firstSteps',
                name: '🎯 First Steps',
                description: 'Complete your first level',
                unlocked: false,
                icon: '🎯'
            },
            perfectScore: {
                id: 'perfectScore',
                name: '🌟 Perfect Score',
                description: 'Get 100% accuracy on any level',
                unlocked: false,
                icon: '🌟'
            },
            speedDemon: {
                id: 'speedDemon',
                name: '⚡ Speed Demon',
                description: 'Answer 5 questions in under 10 seconds each',
                unlocked: false,
                icon: '⚡'
            },
            streakMaster: {
                id: 'streakMaster',
                name: '🔥 Streak Master',
                description: 'Answer 10 questions correctly in a row',
                unlocked: false,
                icon: '🔥'
            },
            studyWarrior: {
                id: 'studyWarrior',
                name: '📚 Study Warrior',
                description: 'Complete 5 different levels',
                unlocked: false,
                icon: '📚'
            },
            cloudExpert: {
                id: 'cloudExpert',
                name: '☁️ Cloud Expert',
                description: 'Reach level 8',
                unlocked: false,
                icon: '☁️'
            },
            examReady: {
                id: 'examReady',
                name: '🎓 Exam Ready',
                description: 'Complete the Mock Exam level',
                unlocked: false,
                icon: '🎓'
            },
            accuracyExpert: {
                id: 'accuracyExpert',
                name: '🎯 Accuracy Expert',
                description: 'Maintain 90%+ accuracy across 3 levels',
                unlocked: false,
                icon: '🎯'
            }
        };
        
        this.stats = {
            levelsCompleted: new Set(),
            currentStreak: 0,
            maxStreak: 0,
            fastAnswers: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            highAccuracyLevels: 0
        };
        
        this.loadAchievements();
    }

    loadAchievements() {
        const saved = localStorage.getItem('awsGameAchievements');
        if (saved) {
            const data = JSON.parse(saved);
            Object.assign(this.achievements, data.achievements);
            Object.assign(this.stats, data.stats);
            this.stats.levelsCompleted = new Set(data.stats.levelsCompleted);
        }
    }

    saveAchievements() {
        const data = {
            achievements: this.achievements,
            stats: {
                ...this.stats,
                levelsCompleted: Array.from(this.stats.levelsCompleted)
            }
        };
        localStorage.setItem('awsGameAchievements', JSON.stringify(data));
    }

    checkAchievement(type, data = {}) {
        let newAchievements = [];

        switch (type) {
            case 'levelComplete':
                this.stats.levelsCompleted.add(data.level);
                if (!this.achievements.firstSteps.unlocked) {
                    this.achievements.firstSteps.unlocked = true;
                    newAchievements.push(this.achievements.firstSteps);
                }
                if (this.stats.levelsCompleted.size >= 5 && !this.achievements.studyWarrior.unlocked) {
                    this.achievements.studyWarrior.unlocked = true;
                    newAchievements.push(this.achievements.studyWarrior);
                }
                if (data.level >= 8 && !this.achievements.cloudExpert.unlocked) {
                    this.achievements.cloudExpert.unlocked = true;
                    newAchievements.push(this.achievements.cloudExpert);
                }
                if (data.level === 10 && !this.achievements.examReady.unlocked) {
                    this.achievements.examReady.unlocked = true;
                    newAchievements.push(this.achievements.examReady);
                }
                break;

            case 'perfectScore':
                if (!this.achievements.perfectScore.unlocked) {
                    this.achievements.perfectScore.unlocked = true;
                    newAchievements.push(this.achievements.perfectScore);
                }
                break;

            case 'fastAnswer':
                this.stats.fastAnswers++;
                if (this.stats.fastAnswers >= 5 && !this.achievements.speedDemon.unlocked) {
                    this.achievements.speedDemon.unlocked = true;
                    newAchievements.push(this.achievements.speedDemon);
                }
                break;

            case 'correctAnswer':
                this.stats.currentStreak++;
                this.stats.maxStreak = Math.max(this.stats.maxStreak, this.stats.currentStreak);
                if (this.stats.currentStreak >= 10 && !this.achievements.streakMaster.unlocked) {
                    this.achievements.streakMaster.unlocked = true;
                    newAchievements.push(this.achievements.streakMaster);
                }
                break;

            case 'incorrectAnswer':
                this.stats.currentStreak = 0;
                break;

            case 'highAccuracy':
                this.stats.highAccuracyLevels++;
                if (this.stats.highAccuracyLevels >= 3 && !this.achievements.accuracyExpert.unlocked) {
                    this.achievements.accuracyExpert.unlocked = true;
                    newAchievements.push(this.achievements.accuracyExpert);
                }
                break;
        }

        this.saveAchievements();
        return newAchievements;
    }

    showAchievement(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-text">
                    <div class="achievement-title">ACHIEVEMENT UNLOCKED!</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 4000);
    }

    getUnlockedAchievements() {
        return Object.values(this.achievements).filter(a => a.unlocked);
    }

    getAchievementProgress() {
        const total = Object.keys(this.achievements).length;
        const unlocked = this.getUnlockedAchievements().length;
        return { unlocked, total, percentage: Math.round((unlocked / total) * 100) };
    }
}

// Export for use in main game
window.RetroMusicPlayer = RetroMusicPlayer;
window.AchievementSystem = AchievementSystem;
