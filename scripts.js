// JavaScript to handle audio playback
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause');
    const trackCards = document.querySelectorAll('.track-card');
    const progress = document.getElementById('progress');
    const volumeControl = document.getElementById('volume');
    const volumeMuteButton = document.getElementById('volume-mute');

    // Update progress bar as audio plays
    audioPlayer.addEventListener('timeupdate', () => {
        const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.value = percentage || 0; // Set progress to 0 if duration is 0
    });

    // Seek audio when progress bar is clicked
    progress.addEventListener('input', () => {
        const newTime = (progress.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    });

    trackCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the audio source from the data attribute
            const trackSrc = card.getAttribute('data-track');
            // Set the audio player source to the clicked track
            audioPlayer.src = trackSrc;
            // Play the audio
            audioPlayer.play();
            // Update the button text
            playPauseButton.textContent = 'Pause';
        });
    });

    // Play/Pause functionality
    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Volume control
    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value / 100;
    });

    // Mute functionality
    volumeMuteButton.addEventListener('click', () => {
        audioPlayer.muted = !audioPlayer.muted;
        volumeMuteButton.textContent = audioPlayer.muted ? 'Unmute' : 'Mute';
    });
});
