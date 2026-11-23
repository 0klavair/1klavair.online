'use strict';
(() => {
  const dialog = document.getElementById('checkout');
  const title = document.getElementById('checkout-title');
  const steps = Array.from(dialog.querySelectorAll('[data-step]'));
  const titles = { payment: 'Paiement', reveal: 'Régler avec Instagram' };
  const form = document.getElementById('demo-payment');
  const status = document.getElementById('generated-status');
  const surprise = document.getElementById('surprise');
  const video = document.getElementById('surprise-video');
  const playButton = document.getElementById('play-surprise');
  let opener = null;
  let returningFromInstagram = false;
  function rememberReturn(pending) {
    returningFromInstagram = pending;
    try { if (pending) sessionStorage.setItem('gta6-instagram-return', '1'); else sessionStorage.removeItem('gta6-instagram-return'); } catch {}
  }
  function hasPendingReturn() {
    try { return returningFromInstagram || sessionStorage.getItem('gta6-instagram-return') === '1'; } catch { return returningFromInstagram; }
  }
  function clearDemo() { form.reset(); status.textContent = ''; }
  function resetExperience() {
    rememberReturn(false);
    video.pause(); video.currentTime = 0;
    if (surprise.open) surprise.close();
    clearDemo();
    if (dialog.open) dialog.close();
    steps.forEach(section => { section.hidden = section.dataset.step !== 'payment'; });
    title.textContent = titles.payment;
  }
  function playSurprise() {
    video.muted = false;
    playButton.hidden = true;
    const playback = video.play();
    if (playback) playback.catch(() => {
      video.muted = true;
      playButton.textContent = 'Activer le son';
      playButton.hidden = false;
      const mutedPlayback = video.play();
      if (mutedPlayback) mutedPlayback.catch(() => { playButton.textContent = 'Lancer la vidéo et le son'; });
    });
  }
  function showSurpriseOnReturn() {
    if (!hasPendingReturn()) return;
    rememberReturn(false);
    clearDemo();
    if (dialog.open) dialog.close();
    if (!surprise.open) surprise.showModal();
    video.currentTime = 0;
    playSurprise();
  }
  function setStep(step) {
    steps.forEach(section => { section.hidden = section.dataset.step !== step; });
    title.textContent = titles[step];
    dialog.scrollTop = 0;
    title.focus({ preventScroll: true });
  }
  document.querySelectorAll('[data-buy]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      clearDemo();
      if (!dialog.open) dialog.showModal();
      setStep('payment');
    });
  });
  document.getElementById('close-checkout').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (opener) opener.focus({ preventScroll: true }); });
  document.getElementById('generate-card').addEventListener('click', () => {
    const token = () => Math.random().toString(36).slice(2, 6).toUpperCase().padEnd(4, 'X');
    document.getElementById('demo-holder').value = 'JOUEUR ' + token();
    document.getElementById('demo-reference').value = 'DEMO 0727 ' + token() + ' ' + token();
    document.getElementById('demo-expiry').value = '12/99';
    document.getElementById('demo-code').value = token().slice(0, 3);
    status.textContent = 'Carte générée. Tu peux modifier tous les champs.';
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    clearDemo();
    setStep('reveal');
  });
  document.getElementById('instagram-link').addEventListener('click', () => {
    rememberReturn(true);
    // Prime playback during the user's click; no audio is played in the background.
    video.muted = true;
    const priming = video.play();
    if (priming) priming.then(() => { if (!surprise.open) video.pause(); }).catch(() => {});
  });
  document.getElementById('restart').addEventListener('click', resetExperience);
  document.getElementById('close-surprise').addEventListener('click', resetExperience);
  playButton.addEventListener('click', playSurprise);
  surprise.addEventListener('close', () => { video.pause(); video.currentTime = 0; });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) showSurpriseOnReturn(); });
  window.addEventListener('focus', showSurpriseOnReturn);
  window.addEventListener('pageshow', () => { if (hasPendingReturn()) showSurpriseOnReturn(); else resetExperience(); });
})();
