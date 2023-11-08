// Kirim data hasil BMI ke server
const data = {
    hasilBMI: 24.7, // Gantilah dengan hasil BMI yang sesuai
    // Data lain yang Anda ingin simpan ke server
};

fetch('/simpan-data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(responseData => {
    console.log(responseData);
    // Tindakan setelah data berhasil disimpan
})
.catch(error => {
    console.error('Error:', error);
});
