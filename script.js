"use strict"

document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const hubungan = document.querySelector('input[name="hubungan"]:checked').value;
    const statusHubungan = document.getElementById('dropdown').value;
    const harapanPasangan = Array.from(document.querySelectorAll('input[name="harapan-pasangan"]:checked')).map(checkbox => checkbox.value);
    const pesanPasangan = document.getElementById('pesan-pasangan').value;

    const message = `
        Nama: ${name}
        Email: ${email}
        Umur: ${age}
        Sedang dalam hubungan: ${hubungan}
        Status hubungan: ${statusHubungan}
        Harapan untuk pasangan: ${harapanPasangan.join(', ')}
        Pesan untuk pasangan: ${pesanPasangan}
    `;

    const token = '6725841625:AAEvPLKn6lpB0y6bsjaITMdmb1k2yLqwCEo';
    const chatId = '-1002208538129';

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Formulir berhasil dikirim!');
        } else {
            alert('Gagal mengirim formulir.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim formulir.');
    });
});
