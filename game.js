// AWS Cloud Practitioner Test Prep Game Logic

class AWSTestPrepGame {
    constructor() {
        this.currentLevel = 1;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 10; // Reduced to 10 questions per level
        this.selectedAnswer = null;
        this.timeLeft = 30;
        this.timer = null;
        this.gameState = 'menu'; // menu, playing, results
        this.levelQuestions = [];
        this.incorrectAnswers = [];
        this.maxLevels = 10; // Increased to 10 levels
        
        // Initialize systems
        this.musicPlayer = new RetroMusicPlayer();
        this.achievementSystem = new AchievementSystem();
        
        // Load saved progress
        this.loadProgress();
        
        // Initialize starfield
        this.initializeStarfield();
        
        // Initialize UI
        this.initializeUI();
        this.updateLevelButtons();
        this.updateStats();
        this.updateAchievementDisplay();
        
        // Initialize theme system
        this.initializeThemes();
    }

    initializeStarfield() {
        const starfield = document.getElementById('starfield');
        
        // Create regular stars
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = `star ${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            starfield.appendChild(star);
        }
        
        // Create shooting stars
        setInterval(() => {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            shootingStar.style.top = Math.random() * 50 + '%';
            shootingStar.style.left = '-100px';
            starfield.appendChild(shootingStar);
            
            // Remove shooting star after animation
            setTimeout(() => {
                if (shootingStar.parentNode) {
                    shootingStar.parentNode.removeChild(shootingStar);
                }
            }, 3000);
        }, 5000);
    }

    initializeThemes() {
        // Theme selector
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const theme = e.target.dataset.theme;
                document.body.className = theme === 'retro' ? '' : `theme-${theme}`;
                localStorage.setItem('awsGameTheme', theme);
            });
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('awsGameTheme') || 'retro';
        if (savedTheme !== 'retro') {
            document.body.className = `theme-${savedTheme}`;
            document.querySelector(`[data-theme="${savedTheme}"]`).classList.add('active');
            document.querySelector('[data-theme="retro"]').classList.remove('active');
        }
        
        // Music controls
        document.getElementById('musicToggle').addEventListener('click', () => {
            this.toggleMusic();
        });
        
        document.getElementById('volumeDown').addEventListener('click', () => {
            const currentVolume = this.musicPlayer.volume;
            this.musicPlayer.setVolume(Math.max(0, currentVolume - 0.1));
        });
        
        document.getElementById('volumeUp').addEventListener('click', () => {
            const currentVolume = this.musicPlayer.volume;
            this.musicPlayer.setVolume(Math.min(1, currentVolume + 0.1));
        });
    }

    toggleMusic() {
        const btn = document.getElementById('musicToggle');
        if (this.musicPlayer.isPlaying) {
            this.musicPlayer.stop();
            btn.classList.remove('playing');
            btn.textContent = '🎵 MUSIC';
        } else {
            this.musicPlayer.play();
            btn.classList.add('playing');
            btn.textContent = '🎵 PLAYING';
        }
    }

    updateAchievementDisplay() {
        const progress = this.achievementSystem.getAchievementProgress();
        const progressCircle = document.getElementById('achievementProgress');
        const progressText = document.getElementById('achievementText');
        const badgesContainer = document.getElementById('achievementBadges');
        
        // Update circular progress
        const circumference = 2 * Math.PI * 50;
        const offset = circumference - (progress.percentage / 100) * circumference;
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = offset;
        progressText.textContent = progress.percentage + '%';
        
        // Update badges
        badgesContainer.innerHTML = '';
        Object.values(this.achievementSystem.achievements).forEach(achievement => {
            const badge = document.createElement('div');
            badge.className = `achievement-badge ${achievement.unlocked ? 'unlocked' : ''}`;
            badge.textContent = achievement.icon;
            badge.title = `${achievement.name}: ${achievement.description}`;
            badgesContainer.appendChild(badge);
        });
    }

    showLevelUpCelebration(level) {
        const celebration = document.createElement('div');
        celebration.className = 'level-up-celebration';
        celebration.innerHTML = `
            <div class="celebration-content">
                <div class="celebration-title">LEVEL UP!</div>
                <div class="celebration-subtitle">Welcome to Level ${level}</div>
                <button class="action-btn primary" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)">CONTINUE</button>
            </div>
        `;
        
        document.body.appendChild(celebration);
        
        // Create particles
        this.createLevelUpParticles();
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (celebration.parentNode) {
                celebration.parentNode.removeChild(celebration);
            }
        }, 3000);
    }

    createLevelUpParticles() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * window.innerWidth + 'px';
                particle.style.top = window.innerHeight + 'px';
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 2000);
            }, i * 100);
        }
    }

    playSound(type) {
        try {
            if (type === 'correct') {
                this.correctSound();
                this.showSoundEffect('✨');
            } else if (type === 'incorrect') {
                this.incorrectSound();
                this.showSoundEffect('💥');
            }
        } catch (error) {
            console.log('Sound not available');
        }
    }

    correctSound() {
        if (!this.musicPlayer.audioContext) return;
        
        const oscillator = this.musicPlayer.audioContext.createOscillator();
        const gainNode = this.musicPlayer.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.musicPlayer.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, this.musicPlayer.audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, this.musicPlayer.audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, this.musicPlayer.audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.3, this.musicPlayer.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.musicPlayer.audioContext.currentTime + 0.5);
        
        oscillator.start(this.musicPlayer.audioContext.currentTime);
        oscillator.stop(this.musicPlayer.audioContext.currentTime + 0.5);
    }

    incorrectSound() {
        if (!this.musicPlayer.audioContext) return;
        
        const oscillator = this.musicPlayer.audioContext.createOscillator();
        const gainNode = this.musicPlayer.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.musicPlayer.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(220, this.musicPlayer.audioContext.currentTime);
        oscillator.frequency.setValueAtTime(196, this.musicPlayer.audioContext.currentTime + 0.15);
        oscillator.frequency.setValueAtTime(174.61, this.musicPlayer.audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0.3, this.musicPlayer.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.musicPlayer.audioContext.currentTime + 0.6);
        
        oscillator.start(this.musicPlayer.audioContext.currentTime);
        oscillator.stop(this.musicPlayer.audioContext.currentTime + 0.6);
    }

    showSoundEffect(emoji) {
        const effect = document.createElement('div');
        effect.className = 'sound-effect';
        effect.textContent = emoji;
        document.body.appendChild(effect);
        
        setTimeout(() => {
            if (effect.parentNode) {
                effect.parentNode.removeChild(effect);
            }
        }, 800);
    }

    initializeUI() {
        // Level selection buttons
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const level = parseInt(e.currentTarget.dataset.level);
                if (!e.currentTarget.classList.contains('locked')) {
                    this.startLevel(level);
                }
            });
        });

        // Submit button
        document.getElementById('submitBtn').addEventListener('click', () => {
            this.submitAnswer();
        });

        // Results buttons
        document.getElementById('nextLevelBtn').addEventListener('click', () => {
            this.nextLevel();
        });

        document.getElementById('retryLevelBtn').addEventListener('click', () => {
            this.retryLevel();
        });

        document.getElementById('mainMenuBtn').addEventListener('click', () => {
            this.showMainMenu();
        });
    }

    loadProgress() {
        const saved = localStorage.getItem('awsTestPrepProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.currentLevel = progress.currentLevel || 1;
        }
    }

    saveProgress() {
        const progress = {
            currentLevel: this.currentLevel,
            timestamp: Date.now()
        };
        localStorage.setItem('awsTestPrepProgress', JSON.stringify(progress));
    }

    updateLevelButtons() {
        for (let i = 1; i <= this.maxLevels; i++) {
            const btn = document.getElementById(`level${i}`);
            const status = document.getElementById(`status${i}`);
            
            if (btn && status) {
                if (i <= this.currentLevel) {
                    btn.classList.remove('locked');
                    status.textContent = i < this.currentLevel ? 'COMPLETED' : 'UNLOCKED';
                    if (i < this.currentLevel) {
                        btn.classList.add('completed');
                    }
                } else {
                    btn.classList.add('locked');
                    status.textContent = 'LOCKED';
                }
            }
        }
    }

    updateStats() {
        document.getElementById('currentLevel').textContent = this.currentLevel;
        document.getElementById('overallProgress').textContent = 
            Math.round(((this.currentLevel - 1) / this.maxLevels) * 100) + '%';
        
        const bestScore = localStorage.getItem('awsTestPrepBestScore') || 0;
        document.getElementById('bestScore').textContent = bestScore;
    }

    getQuestionsForLevel(level) {
        // Distribute questions across 10 levels instead of 5
        const allQuestions = [
            ...questionDatabase.level1,
            ...questionDatabase.level2,
            ...questionDatabase.level3
        ];
        
        // Calculate questions per level (about 8-12 questions per level)
        const questionsPerLevel = Math.ceil(allQuestions.length / this.maxLevels);
        const startIndex = (level - 1) * questionsPerLevel;
        const endIndex = startIndex + questionsPerLevel;
        
        return allQuestions.slice(startIndex, endIndex);
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= this.levelQuestions.length) {
            this.showResultsScreen();
            return;
        }

        const question = this.levelQuestions[this.currentQuestionIndex];
        
        // Hide explanation panel
        document.getElementById('explanationPanel').classList.remove('show');
        
        // Update UI
        document.getElementById('questionNumber').textContent = this.currentQuestionIndex + 1;
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('currentScore').textContent = this.score;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex) / this.totalQuestions) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        
        // Update accuracy
        const accuracy = this.currentQuestionIndex === 0 ? 100 : 
            Math.round((this.correctAnswers / this.currentQuestionIndex) * 100);
        document.getElementById('accuracy').textContent = accuracy + '%';
        
        // Load options
        this.loadOptions(question.options);
        
        // Reset timer
        this.startTimer();
        
        // Reset submit button
        document.getElementById('submitBtn').disabled = true;
        this.selectedAnswer = null;
    }

    submitAnswer() {
        this.stopTimer();
        
        const question = this.levelQuestions[this.currentQuestionIndex];
        const isCorrect = this.selectedAnswer === question.correct;
        
        // Show correct/incorrect styling
        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Play sound effect
        this.playSound(isCorrect ? 'correct' : 'incorrect');
        
        // Show explanation
        this.showExplanation(question, isCorrect);
        
        // Update achievements
        if (isCorrect) {
            this.correctAnswers++;
            const timeBonus = Math.max(0, this.timeLeft);
            this.score += 10 + timeBonus;
            
            // Check achievements
            const newAchievements = this.achievementSystem.checkAchievement('correctAnswer');
            if (this.timeLeft > 20) {
                newAchievements.push(...this.achievementSystem.checkAchievement('fastAnswer'));
            }
            
            // Show new achievements
            newAchievements.forEach(achievement => {
                this.achievementSystem.showAchievement(achievement);
            });
        } else {
            this.achievementSystem.checkAchievement('incorrectAnswer');
            
            // Store incorrect answer for review
            this.incorrectAnswers.push({
                question: question.question,
                selectedAnswer: question.options[this.selectedAnswer] || 'No answer selected',
                correctAnswer: question.options[question.correct],
                explanation: question.explanation
            });
        }
        
        // Update achievement display
        this.updateAchievementDisplay();
        
        // Disable submit button and show next question after delay
        document.getElementById('submitBtn').disabled = true;
        
        setTimeout(() => {
            this.currentQuestionIndex++;
            this.loadQuestion();
        }, 3000); // Increased delay to read explanation
    }

    showExplanation(question, isCorrect) {
        const panel = document.getElementById('explanationPanel');
        const title = document.getElementById('explanationTitle');
        const text = document.getElementById('explanationText');
        
        title.textContent = isCorrect ? '✅ CORRECT!' : '❌ INCORRECT!';
        title.style.color = isCorrect ? '#00ff00' : '#ff0000';
        
        text.innerHTML = `
            <strong>Correct Answer:</strong> ${question.options[question.correct]}<br><br>
            <strong>Explanation:</strong> ${question.explanation}
        `;
        
        panel.classList.add('show');
    }

    startLevel(level) {
        this.currentLevel = level;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = [];
        
        // Get questions for this level
        this.levelQuestions = this.getQuestionsForLevel(level);
        
        // Shuffle questions
        this.levelQuestions = this.shuffleArray(this.levelQuestions);
        
        // Take only the required number of questions
        this.levelQuestions = this.levelQuestions.slice(0, this.totalQuestions);
        
        this.showGameScreen();
        this.loadQuestion();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    showMainMenu() {
        this.gameState = 'menu';
        this.showScreen('mainMenu');
        this.updateLevelButtons();
        this.updateStats();
        this.updateAchievementDisplay();
    }

    showGameScreen() {
        this.gameState = 'playing';
        this.showScreen('gameScreen');
        document.getElementById('currentLevelDisplay').textContent = this.currentLevel;
    }

    showResultsScreen() {
        this.gameState = 'results';
        this.showScreen('resultsScreen');
        this.displayResults();
    }

    loadOptions(options) {
        const container = document.getElementById('optionsContainer');
        container.innerHTML = '';
        
        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => this.selectOption(index, button));
            container.appendChild(button);
        });
    }

    selectOption(index, button) {
        // Remove previous selection
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Select new option
        button.classList.add('selected');
        this.selectedAnswer = index;
        document.getElementById('submitBtn').disabled = false;
    }

    startTimer() {
        this.timeLeft = 30;
        document.getElementById('timeLeft').textContent = this.timeLeft;
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            document.getElementById('timeLeft').textContent = this.timeLeft;
            
            if (this.timeLeft <= 0) {
                this.submitAnswer();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    displayResults() {
        const accuracy = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        
        // Update results display
        document.getElementById('questionsAnswered').textContent = `${this.totalQuestions}/${this.totalQuestions}`;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        document.getElementById('finalAccuracy').textContent = accuracy + '%';
        document.getElementById('finalScore').textContent = this.score;
        
        // Check level completion achievements
        const levelAchievements = this.achievementSystem.checkAchievement('levelComplete', { level: this.currentLevel });
        if (accuracy === 100) {
            levelAchievements.push(...this.achievementSystem.checkAchievement('perfectScore'));
        }
        if (accuracy >= 90) {
            levelAchievements.push(...this.achievementSystem.checkAchievement('highAccuracy'));
        }
        
        // Show achievements
        levelAchievements.forEach(achievement => {
            setTimeout(() => {
                this.achievementSystem.showAchievement(achievement);
            }, 1000);
        });
        
        // Determine level progression
        const resultElement = document.getElementById('levelResult');
        const nextBtn = document.getElementById('nextLevelBtn');
        const retryBtn = document.getElementById('retryLevelBtn');
        
        if (accuracy < 40) {
            // Move to level 1
            resultElement.innerHTML = `
                <div class="level-result danger">
                    ⚠️ SCORE TOO LOW (${accuracy}%) ⚠️<br>
                    RETURNING TO LEVEL 1 FOR REVIEW
                </div>
            `;
            resultElement.className = 'level-result danger';
            this.currentLevel = 1;
            nextBtn.style.display = 'none';
            retryBtn.textContent = 'START LEVEL 1';
        } else if (accuracy < 70) {
            // Move down one level
            resultElement.innerHTML = `
                <div class="level-result warning">
                    📉 SCORE BELOW 70% (${accuracy}%) 📉<br>
                    MOVING DOWN ONE LEVEL
                </div>
            `;
            resultElement.className = 'level-result warning';
            this.currentLevel = Math.max(1, this.currentLevel - 1);
            nextBtn.style.display = 'none';
            retryBtn.textContent = `START LEVEL ${this.currentLevel}`;
        } else {
            // Pass - can advance
            resultElement.innerHTML = `
                <div class="level-result success">
                    ✅ EXCELLENT! (${accuracy}%) ✅<br>
                    ${this.currentLevel < this.maxLevels ? 'LEVEL UNLOCKED!' : 'ALL LEVELS COMPLETED!'}
                </div>
            `;
            resultElement.className = 'level-result success';
            
            if (this.currentLevel < this.maxLevels) {
                const oldLevel = this.currentLevel;
                this.currentLevel++;
                nextBtn.style.display = 'inline-block';
                nextBtn.textContent = `LEVEL ${this.currentLevel}`;
                
                // Show level up celebration
                setTimeout(() => {
                    this.showLevelUpCelebration(this.currentLevel);
                }, 2000);
            } else {
                nextBtn.style.display = 'none';
            }
        }
        
        // Save progress
        this.saveProgress();
        
        // Update best score
        const bestScore = localStorage.getItem('awsTestPrepBestScore') || 0;
        if (this.score > bestScore) {
            localStorage.setItem('awsTestPrepBestScore', this.score);
        }
        
        // Update achievement display
        this.updateAchievementDisplay();
        
        // Show review of incorrect answers
        this.displayReview();
    }

    displayReview() {
        const container = document.getElementById('reviewContainer');
        container.innerHTML = '';
        
        if (this.incorrectAnswers.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #00ff00;">🎉 PERFECT SCORE! NO INCORRECT ANSWERS TO REVIEW 🎉</p>';
            return;
        }
        
        this.incorrectAnswers.forEach((item, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.innerHTML = `
                <div class="review-question">Q${index + 1}: ${item.question}</div>
                <div class="review-answer review-incorrect">Your Answer: ${item.selectedAnswer}</div>
                <div class="review-answer review-correct">Correct Answer: ${item.correctAnswer}</div>
                <div class="review-explanation">${item.explanation}</div>
            `;
            container.appendChild(reviewItem);
        });
    }

    nextLevel() {
        this.startLevel(this.currentLevel);
    }

    retryLevel() {
        this.startLevel(this.currentLevel);
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.awsGame = new AWSTestPrepGame();
});
