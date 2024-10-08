// Danh sách từ vựng Kanji kèm cách đọc (hiragana), nghĩa tiếng Việt, Onyomi và Kunyomi
const kanjiList = [
    { kanji: "日", reading: "にち", meaning: "Mặt trời, ngày", onyomi: "ニチ", kunyomi: "ひ" },
    { kanji: "月", reading: "つき", meaning: "Mặt trăng, tháng", onyomi: "ゲツ", kunyomi: "つき" },
    { kanji: "火", reading: "ひ", meaning: "Lửa", onyomi: "カ", kunyomi: "ひ" },
    { kanji: "水", reading: "みず", meaning: "Nước", onyomi: "スイ", kunyomi: "みず" },
    { kanji: "木", reading: "き", meaning: "Cây, gỗ", onyomi: "ボク", kunyomi: "き" },
    { kanji: "金", reading: "おかね", meaning: "Tiền, vàng", onyomi: "キン", kunyomi: "かね" },
    { kanji: "土", reading: "つち", meaning: "Đất", onyomi: "ド", kunyomi: "つち" },
    { kanji: "山", reading: "やま", meaning: "Núi", onyomi: "サン", kunyomi: "やま" },
    { kanji: "川", reading: "かわ", meaning: "Sông", onyomi: "セン", kunyomi: "かわ" },
    { kanji: "空", reading: "そら", meaning: "Bầu trời", onyomi: "クウ", kunyomi: "そら" },
    { kanji: "海", reading: "うみ", meaning: "Biển", onyomi: "カイ", kunyomi: "うみ" },
    { kanji: "風", reading: "かぜ", meaning: "Gió", onyomi: "フウ", kunyomi: "かぜ" },
    { kanji: "雨", reading: "あめ", meaning: "Mưa", onyomi: "ウ", kunyomi: "あめ" },
    { kanji: "雪", reading: "ゆき", meaning: "Tuyết", onyomi: "セツ", kunyomi: "ゆき" },
    { kanji: "北", reading: "きた", meaning: "Phía Bắc", onyomi: "ホク", kunyomi: "きた" }
];

// Hàm để tạo Kanji ngẫu nhiên
function generateRandomKanji() {
    // Lấy chỉ số ngẫu nhiên từ mảng kanjiList
    const randomIndex = Math.floor(Math.random() * kanjiList.length);
    
    // Lấy từ Kanji, cách đọc, nghĩa, Onyomi và Kunyomi ngẫu nhiên
    const randomKanji = kanjiList[randomIndex];
    
    // Hiển thị từ Kanji
    document.getElementById("kanjiWord").textContent = randomKanji.kanji;
    
    // Cập nhật cách đọc và ẩn nó
    const readingElement = document.getElementById("kanjiReading");
    readingElement.textContent = randomKanji.reading;
    
    // Cập nhật nghĩa và ẩn nó
    const meaningElement = document.getElementById("kanjiMeaning");
    meaningElement.textContent = randomKanji.meaning;

    // Cập nhật Onyomi và ẩn nó
    const onyomiElement = document.getElementById("kanjiOnyomi");
    onyomiElement.textContent = randomKanji.onyomi;

    // Cập nhật Kunyomi và ẩn nó
    const kunyomiElement = document.getElementById("kanjiKunyomi");
    kunyomiElement.textContent = randomKanji.kunyomi;

    // Kiểm tra trạng thái của checkbox
    const showReadingCheckbox = document.getElementById("showReading");
    if (showReadingCheckbox.checked) {
        readingElement.style.display = 'block'; // Hiển thị cách đọc nếu checkbox được chọn
        meaningElement.style.display = 'block'; // Hiển thị nghĩa nếu checkbox được chọn
        onyomiElement.style.display = 'block'; // Hiển thị Onyomi nếu checkbox được chọn
        kunyomiElement.style.display = 'block'; // Hiển thị Kunyomi nếu checkbox được chọn
    } else {
        readingElement.style.display = 'none'; // Ẩn cách đọc nếu checkbox không được chọn
        meaningElement.style.display = 'none'; // Ẩn nghĩa nếu checkbox không được chọn
        onyomiElement.style.display = 'none'; // Ẩn Onyomi nếu checkbox không được chọn
        kunyomiElement.style.display = 'none'; // Ẩn Kunyomi nếu checkbox không được chọn
    }
}

// Hàm hiển thị cách đọc, nghĩa, Onyomi và Kunyomi khi người dùng nhấp vào Kanji
function showReading() {
    document.getElementById("kanjiReading").style.display = 'block'; // Hiển thị cách đọc
    document.getElementById("kanjiMeaning").style.display = 'block'; // Hiển thị nghĩa
    document.getElementById("kanjiOnyomi").style.display = 'block'; // Hiển thị Onyomi
    document.getElementById("kanjiKunyomi").style.display = 'block'; // Hiển thị Kunyomi
}
