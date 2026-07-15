
document.getElementById('saveBtn').addEventListener('click', async () => {
  const btn = document.getElementById('saveBtn');
  const hint = document.getElementById('hint');
  btn.disabled = true;
  btn.textContent = 'Preparing...';
  try {
    const res = await fetch('/api/vcard');
    if (!res.ok) throw new Error('Failed to fetch contact');
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Oguzhan_Dogru.vcf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    hint.textContent = 'Contact saved. Check your downloads / prompts.';
  } catch (e) {
    hint.textContent = 'Something went wrong. Please try again.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Save Contact';
  }
});
