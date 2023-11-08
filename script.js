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
});

// Event listener untuk tombol unduh
document.getElementById('download').addEventListener('click', function () {
    var gender = document.getElementById('gender').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
    var height = document.getElementById('height').value;
    var bmiValue = document.getElementById('bmiValue').textContent;
    var bmiCategory = document.getElementById('bmiCategory').textContent;
    var recommendation = document.getElementById('recommendation').textContent;

    // Isi file yang akan diunduh
    var content = "Hasil Perhitungan BMI\n";
    content += "Jenis Kelamin: " + gender + "\n";
    content += "Berat Badan: " + weight + " kg\n";
    content += "Tinggi Badan: " + height + " cm\n";
    content += "Usia: " + age + " tahun\n";
    content += bmiValue + "\n";
    content += bmiCategory + "\n";
    content += recommendation + "\n";

    // Buat Blob dari string
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});

    // Buat link untuk unduh
    var downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = "Hasil_BMI.txt";

    // Simulasikan klik pada link
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
