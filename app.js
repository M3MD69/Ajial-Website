document.getElementById('downloadLatestVersionBtn').addEventListener('click', downloadLatestAppVersion);

function downloadLatestAppVersion() {
    const link = document.createElement('a');
    link.href = 'Ajial-1.1.apk';
    link.download = 'Ajial-1.1.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}