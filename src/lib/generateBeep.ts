const generateBeep = (frecuency: number) => {
    const audioContext = new AudioContext()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.frequency.value = frecuency;

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + (500 / 1000));

}

export default generateBeep