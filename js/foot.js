// フッターのHTML内容をJavaScriptで定義
const footerHTML = `
<footer style="background-color:#222;">
        <div class="side-padding">
            <br>
            <br>
            <p>福岡大学工学部</p>
            <p>
                〒814-0180　福岡市城南区七隈八丁目19番１号<br><br>
                Tel：092-871-6631（代表）<br>
                Mail:kogaku@adm.fukuoka-u.ac.jp
            </p>
            <p style="text-align: center;">
                &copy; 2024 福岡大学工学部</p>
            <br>
            <br>
        </div>
    </footer>
`;

// フッターを挿入する関数
function insertFooter() {
document.getElementById('footer').innerHTML = footerHTML;
}

// ページ読み込み時にフッターを挿入
document.addEventListener('DOMContentLoaded', insertFooter);