document.getElementById('downloadLatestVersionBtn').addEventListener('click', downloadLatestAppVersion);

function downloadLatestAppVersion() {
    const link = document.createElement('a');
    link.href = 'Ajial.apk';
    link.download = 'Ajial.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}