
// メニューのDOM構造が構築された後に呼び出される関数
function _setMenuAction() {
    //
    //学科一覧
    const facultyList = document.getElementById("faculty-list");
    const facultyListItem = document.getElementById("faculty");
    facultyListItem.addEventListener("click", function () {
        if (facultyList.style.display === "block") {
            facultyList.style.display = "none";
        } else {
            facultyList.style.display = "block";
        }
    });
    //
    // 教員一覧 
    const teacherList = document.getElementById("teacher-list");
    const teacherListItem = document.getElementById("teacher");
    teacherListItem.addEventListener("click", function () {
        if (teacherList.style.display === "block") {
            teacherList.style.display = "none";
        } else {
            teacherList.style.display = "block";
        }
    });
}


function showMenu(nowPath) {
    const menuHtml = `
        <label for="menu" class="mobile-square">
            <div class="humburger-line"></div>
            <div class="humburger-line"></div>
            <div class="humburger-line"></div>
        </label>
        <label for="menu" class="pc-square">
            <div class="humburger-line"></div>
            <div class="humburger-line"></div>
            <div class="humburger-line"></div>
        </label>
        <input type="checkbox" id="menu">
        <nav>
            <ul>
                <li style="padding-top: 80px;">
                    <a href="${nowPath}index.html">TOP</a>
                </li>
                <li>
                <a href="${nowPath}blog_system/index.html">お知らせ</a>
            </li>
                <li>
                    <a href="${nowPath}greeting.html">学部長あいさつ</a>
                </li>

                <li id="faculty">
                    <button>学科紹介</button>
                    <ul id="faculty-list">
                        <li>
                            <a href="${nowPath}tm.html">機械工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}te.html">電気工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}tl.html">電子情報工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}tk.html">化学システム工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}tc.html">社会デザイン工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}ta.html">建築学科</a>
                        </li>
                        <!-- 他の学科リンクをここに追加してください -->
                    </ul>
                </li>
                <li id="teacher">
                    <button>教員一覧</button>
                    <ul id="teacher-list">
                        <li>
                            <a href="${nowPath}introduce/introduce-tm.html">機械工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}introduce/introduce-te.html">電気工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}introduce/introduce-tl.html">電子情報工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}introduce/introduce-tk.html">化学システム工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}introduce/introduce-tc.html">社会デザイン工学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}introduce/introduce-ta.html">建築学科</a>
                        </li>
                        <li>
                            <a href="${nowPath}introduce/introduce-tec.html#shigen">資源循環・環境グループ</a>
                        </li>
                        <li>
                            <a href="${nowPath}introduce/introduce-tec.html#zugaku">図学教室</a>
                        </li>
                        <li>
                            <a href="${nowPath}introduce/introduce-tec.html#mono">ものづくりセンター</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="${nowPath}policy.html">基本理念とポリシー</a>
                </li>
                <li>
                    <a href="${nowPath}support.html">学生生活サポート体制</a>
                </li>
                <li>
                    <a href="${nowPath}certificate.html">証明書発行申請</a>
                </li>
                <li>
                    <a href="${nowPath}question.html">Q&amp;A</a>
                </li>
                <li>
                    <a href="${nowPath}access.html">ACCESS</a>
                </li>
            </ul>
        </nav>
    `;
    document.addEventListener("DOMContentLoaded", () => {
        const menuElement = document.getElementById("menu_box");
        menuElement.innerHTML = menuHtml;
        //
        // メニューが構築されるのを待つ
        //
        // １秒後に、関数「_setMenuAction」を呼び出す
        setTimeout(_setMenuAction, 1000);
    });
}



window.addEventListener('pageshow', () => {
    // ページが読み込まれたときに実行
    //
    if (performance.getEntriesByType("navigation")[0].type === 'back_forward') {
        // もし、戻るボタンが押されてこのページに到達したなら

        let element = document.getElementById('menu');
        element.checked = false;

    }
});