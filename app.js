document.getElementById('downloadLatestVersionBtn').addEventListener('click', downloadLatestAppVersion);

function downloadLatestAppVersion() {
    const link = document.createElement('a');
    link.href = 'ajial.apk';
    link.download = 'ajial.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}