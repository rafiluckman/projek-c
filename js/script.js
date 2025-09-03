document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bgMusic");
    const playPauseBtn = document.getElementById("playPauseBtn");

    // Set volume awal ke 10%
    audio.volume = 0.1;

    // Pastikan musik otomatis play setelah halaman dimuat
    audio.play().catch(() => {
        console.log("Autoplay diblokir, user harus klik play dulu.");
        playPauseBtn.textContent = "▶ Play";
    });

    // Kontrol play/pause
    if (playPauseBtn) {
        playPauseBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = "⏸ Pause";
            } else {
                audio.pause();
                playPauseBtn.textContent = "▶ Play";
            }
        });
    }
});
