document.getElementById('calculate').addEventListener('click', function () {
    // Ambil nilai dari formulir
    var gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var age = parseFloat(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Konversi tinggi ke meter

    // Hitung BMI
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Membulatkan menjadi 2 desimal

    // Tentukan kategori BMI
    var category;
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Kegemukan (Obesitas)';
    }

    // Tampilkan hasil BMI dan kategori
    document.getElementById('bmiValue').textContent = 'BMI Anda: ' + bmi;
    document.getElementById('bmiCategory').textContent = 'Status Berat Badan: ' + category;

    // Berikan rekomendasi berdasarkan kategori BMI
    var recommendation;
    if (category === 'Kekurangan berat badan') {
        recommendation = 'Anda mungkin perlu menambah berat badan untuk mencapai berat badan yang sehat.';
    } else if (category === 'Normal (ideal)') {
        recommendation = 'Berat badan Anda berada dalam kisaran yang sehat.';
    } else {
        recommendation = 'Anda mungkin perlu mengatur pola makan dan berolahraga untuk mencapai berat badan yang sehat.';
    }

    document.getElementById('recommendation').textContent = recommendation;

    // Siapkan data untuk dikirim ke server
    const data = {
        gender,
        weight,
        age,
        height,
        hasilBMI: bmi // Menggunakan nilai BMI yang telah dihitung
    };

    // Kirim data ke server
    fetch('/simpan-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        // Lakukan tindakan setelah data berhasil disimpan
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
