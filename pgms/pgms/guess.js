const wordLetters = ['F', 'O', 'X'];
        let guessedLetters = Array(wordLetters.length).fill('_');
        let guessedHistory = [];
        let reward = 0;
        let wrongGuesses = 0;

        // Display initial guessed letters
        document.getElementById('currentGuesses').textContent = guessedLetters.join(' ');

        function guessLetter() {
            const letterInput = document.getElementById("letterInput");
            const guessedLetter = letterInput.value.toUpperCase();
            letterInput.value = '';  // Clear input field

            // Check if the letter has been guessed before
            if (guessedHistory.includes(guessedLetter)) {
                document.getElementById('message').textContent = `You already guessed '${guessedLetter}'. Try a different letter.`;
                return;
            }

            guessedHistory.push(guessedLetter);
            let found = false;
            let occurrences = 0;

            // Iterate through wordLetters to check for the guessed letter
            for (let i = 0; i < wordLetters.length; i++) {
                if (wordLetters[i] === guessedLetter) {
                    guessedLetters[i] = guessedLetter;
                    found = true;
                    occurrences++;
                }
            }

            // Update display
            document.getElementById('currentGuesses').textContent = guessedLetters.join(' ');

            // Reward and message handling
            if (found) {
                const rewardAmount = Math.floor(Math.random() * 100) + 1;
                reward += rewardAmount * occurrences;
                document.getElementById('message').textContent = `Good job! You found '${guessedLetter}'.`;
                document.getElementById('reward').textContent = `Reward: $${reward}`;
            } else {
                wrongGuesses++;
                document.getElementById('message').textContent = `Sorry, '${guessedLetter}' is not in the word.`;
            }

            // Check for win condition
            if (!guessedLetters.includes('_')) {
                document.getElementById('message').textContent = `Congratulations! You guessed the word '${wordLetters.join('')}'! Your final reward is $${reward}.`;
            }

            // Check for loss condition
            if (wrongGuesses >= 6) {
                document.getElementById('message').textContent = `You lost! The word was '${wordLetters.join('')}'.`;
            }
        }