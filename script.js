// Danh sách từ vựng Kanji kèm cách đọc (hiragana), nghĩa tiếng Việt, Onyomi và Kunyomi
const kanjiList = [
    { kanji: "日", reading: "にち", meaning: "Mặt trời, ngày", onyomi: "ニチ", kunyomi: "ひ" },
    { kanji: "一", reading: "いち", meaning: "Một", onyomi: "イチ", kunyomi: "ひと" },
    { kanji: "国", reading: "こく", meaning: "Quốc gia", onyomi: "コク", kunyomi: "くに" },
    { kanji: "人", reading: "じん", meaning: "Người", onyomi: "ジン", kunyomi: "ひと" },
    { kanji: "年", reading: "ねん", meaning: "Năm", onyomi: "ネン", kunyomi: "とし" },
    { kanji: "大", reading: "だい", meaning: "Lớn", onyomi: "ダイ", kunyomi: "おお" },
    { kanji: "十", reading: "じゅう", meaning: "Mười", onyomi: "ジュウ", kunyomi: "とお" },
    { kanji: "二", reading: "に", meaning: "Hai", onyomi: "ニ", kunyomi: "ふた" },
    { kanji: "本", reading: "ほん", meaning: "Sách, gốc", onyomi: "ホン", kunyomi: "もと" },
    { kanji: "中", reading: "ちゅう", meaning: "Trong", onyomi: "チュウ", kunyomi: "なか" },
    { kanji: "長", reading: "ちょう", meaning: "Dài", onyomi: "チョウ", kunyomi: "なが" },
    { kanji: "出", reading: "しゅつ", meaning: "Xuất, ra", onyomi: "シュツ", kunyomi: "で" },
    { kanji: "三", reading: "さん", meaning: "Ba", onyomi: "サン", kunyomi: "み" },
    { kanji: "時", reading: "じ", meaning: "Thời gian, giờ", onyomi: "ジ", kunyomi: "とき" },
    { kanji: "行", reading: "こう", meaning: "Đi, hành động", onyomi: "コウ", kunyomi: "い" },
    { kanji: "見", reading: "けん", meaning: "Nhìn, thấy", onyomi: "ケン", kunyomi: "み" },
    { kanji: "今", reading: "こん", meaning: "Bây giờ", onyomi: "コン", kunyomi: "いま" },
    { kanji: "月", reading: "つき", meaning: "Mặt trăng, tháng", onyomi: "ゲツ", kunyomi: "つき" },
    { kanji: "分", reading: "ぶん", meaning: "Phân, phút", onyomi: "ブン", kunyomi: "わ" },
    { kanji: "後", reading: "ご", meaning: "Sau", onyomi: "ゴ", kunyomi: "あと" },
    { kanji: "前", reading: "ぜん", meaning: "Trước", onyomi: "ゼン", kunyomi: "まえ" },
    { kanji: "生", reading: "せい", meaning: "Sống, sinh", onyomi: "セイ", kunyomi: "い" },
    { kanji: "五", reading: "ご", meaning: "Năm", onyomi: "ゴ", kunyomi: "いつ" },
    { kanji: "間", reading: "かん", meaning: "Khoảng, giữa", onyomi: "カン", kunyomi: "あいだ" },
    { kanji: "上", reading: "じょう", meaning: "Trên", onyomi: "ジョウ", kunyomi: "うえ" },
    { kanji: "東", reading: "とう", meaning: "Phía đông", onyomi: "トウ", kunyomi: "ひがし" },
    { kanji: "四", reading: "し", meaning: "Bốn", onyomi: "シ", kunyomi: "よ" },
    { kanji: "金", reading: "きん", meaning: "Vàng, tiền", onyomi: "キン", kunyomi: "かね" },
    { kanji: "九", reading: "きゅう", meaning: "Chín", onyomi: "キュウ", kunyomi: "ここの" },
    { kanji: "入", reading: "にゅう", meaning: "Vào", onyomi: "ニュウ", kunyomi: "はい" },
    { kanji: "学", reading: "がく", meaning: "Học", onyomi: "ガク", kunyomi: "まな" },
    { kanji: "高", reading: "こう", meaning: "Cao", onyomi: "コウ", kunyomi: "たか" },
    { kanji: "円", reading: "えん", meaning: "Yên, tròn", onyomi: "エン", kunyomi: "まる" },
    { kanji: "子", reading: "し", meaning: "Con", onyomi: "シ", kunyomi: "こ" },
    { kanji: "外", reading: "がい", meaning: "Ngoài", onyomi: "ガイ", kunyomi: "そと" },
    { kanji: "八", reading: "はち", meaning: "Tám", onyomi: "ハチ", kunyomi: "や" },
    { kanji: "六", reading: "ろく", meaning: "Sáu", onyomi: "ロク", kunyomi: "む" },
    { kanji: "下", reading: "か", meaning: "Dưới", onyomi: "カ", kunyomi: "した" },
    { kanji: "来", reading: "らい", meaning: "Đến", onyomi: "ライ", kunyomi: "く" },
    { kanji: "気", reading: "き", meaning: "Tâm trạng, khí", onyomi: "キ", kunyomi: "き" },
    { kanji: "小", reading: "しょう", meaning: "Nhỏ", onyomi: "ショウ", kunyomi: "ちい" },
    { kanji: "七", reading: "しち", meaning: "Bảy", onyomi: "シチ", kunyomi: "なな" },
    { kanji: "山", reading: "さん", meaning: "Núi", onyomi: "サン", kunyomi: "やま" },
    { kanji: "話", reading: "わ", meaning: "Nói chuyện", onyomi: "ワ", kunyomi: "はな" },
    { kanji: "女", reading: "じょ", meaning: "Phụ nữ", onyomi: "ジョ", kunyomi: "おんな" },
    { kanji: "北", reading: "ほく", meaning: "Phía bắc", onyomi: "ホク", kunyomi: "きた" },
    { kanji: "午", reading: "ご", meaning: "Giữa trưa", onyomi: "ゴ", kunyomi: "うま" },
    { kanji: "百", reading: "ひゃく", meaning: "Trăm", onyomi: "ヒャク", kunyomi: "もも" },
    { kanji: "書", reading: "しょ", meaning: "Viết", onyomi: "ショ", kunyomi: "か" },
    { kanji: "先", reading: "せん", meaning: "Trước", onyomi: "セン", kunyomi: "さき" },
    { kanji: "名", reading: "めい", meaning: "Tên", onyomi: "メイ", kunyomi: "な" },
    { kanji: "川", reading: "かわ", meaning: "Sông", onyomi: "セン", kunyomi: "かわ" },
    { kanji: "千", reading: "せん", meaning: "Nghìn", onyomi: "セン", kunyomi: "ち" },
    { kanji: "聞", reading: "ぶん", meaning: "Nghe", onyomi: "ブン", kunyomi: "き" },
    { kanji: "水", reading: "すい", meaning: "Nước", onyomi: "スイ", kunyomi: "みず" },
    { kanji: "半", reading: "はん", meaning: "Nửa", onyomi: "ハン", kunyomi: "なか" },
    { kanji: "男", reading: "だん", meaning: "Nam", onyomi: "ダン", kunyomi: "おとこ" },
    { kanji: "西", reading: "せい", meaning: "Phía tây", onyomi: "セイ", kunyomi: "にし" },
    { kanji: "電", reading: "でん", meaning: "Điện", onyomi: "デン", kunyomi: "いなづま" },
    { kanji: "語", reading: "ご", meaning: "Ngôn ngữ", onyomi: "ゴ", kunyomi: "かた" },
    { kanji: "土", reading: "ど", meaning: "Đất", onyomi: "ド", kunyomi: "つち" },
    { kanji: "木", reading: "もく", meaning: "Cây", onyomi: "モク", kunyomi: "き" },
    { kanji: "食", reading: "しょく", meaning: "Ăn", onyomi: "ショク", kunyomi: "た" },
    { kanji: "車", reading: "しゃ", meaning: "Xe", onyomi: "シャ", kunyomi: "くるま" },
    { kanji: "南", reading: "なん", meaning: "Phía nam", onyomi: "ナン", kunyomi: "みなみ" },
    { kanji: "何", reading: "なに", meaning: "Cái gì", onyomi: "カ", kunyomi: "なん" },
    { kanji: "万", reading: "まん", meaning: "Mười nghìn", onyomi: "マン", kunyomi: "よろず" },
    { kanji: "校", reading: "こう", meaning: "Trường học", onyomi: "コウ", kunyomi: "こう" },
    { kanji: "毎", reading: "まい", meaning: "Mỗi", onyomi: "マイ", kunyomi: "ごと" },
    { kanji: "白", reading: "はく", meaning: "Trắng", onyomi: "ハク", kunyomi: "しろ" },
    { kanji: "天", reading: "てん", meaning: "Trời", onyomi: "テン", kunyomi: "あめ" },
    { kanji: "母", reading: "ぼ", meaning: "Mẹ", onyomi: "ボ", kunyomi: "はは" },
    { kanji: "火", reading: "か", meaning: "Lửa", onyomi: "カ", kunyomi: "ひ" },
    { kanji: "右", reading: "みぎ", meaning: "Phải", onyomi: "ウ", kunyomi: "みぎ" },
    { kanji: "読", reading: "どく", meaning: "Đọc", onyomi: "ドク", kunyomi: "よ" },
    { kanji: "友", reading: "とも", meaning: "Bạn bè", onyomi: "ユウ", kunyomi: "とも" },
    { kanji: "左", reading: "ひだり", meaning: "Trái", onyomi: "サ", kunyomi: "ひだり" },
    { kanji: "休", reading: "きゅう", meaning: "Nghỉ", onyomi: "キュウ", kunyomi: "やす" },
    { kanji: "父", reading: "ふ", meaning: "Cha", onyomi: "フ", kunyomi: "ちち" },
    { kanji: "雨", reading: "あめ", meaning: "Mưa", onyomi: "ウ", kunyomi: "あめ" }
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
