
// 特定のHTML要素がロードされるまで待つ関数
const waitLoad = (element) => new Promise((resolve, reject) => {
    element.addEventListener("error", reject);
    element.addEventListener("load", resolve);
    setTimeout(reject, 3000);
});

//「setting.js」を読み込む関数
async function _loadSetting(url) {
    url += '?t=' + String(new Date().getTime());    //キャッシュ対策
    window.fileToFileTransferVariable = null;
    //
    // JavaScriptファイル「setting.js」を読み込む
    const scriptElement1 = document.createElement('script');
    scriptElement1.classList.add("Do_not_store_in_HTML");
    try {
        scriptElement1.src = url;
        document.body.appendChild(scriptElement1);
    }
    catch (err) { }
    //
    // JavaScriptファイル「setting.js」が、
    // 配列「window.fileToFileTransferVariable」に代入してくれているはず
    //
    try {
        // JavaScriptファイル「setting.js」の実行が終わるまで待つ
        await waitLoad(scriptElement1);
    }
    catch (err) { }
    //
    const result = window.fileToFileTransferVariable;
    window.fileToFileTransferVariable = null;
    return {
        "isLoadSettingSuccess": result ? true : false,
        "title": result?.title ?? "？？",   // 画面上部に掲載するタイトル
        "headline": result?.title ?? (result?.title ?? "？？"),   // 親ページに掲載する見出し
        "headlineBlockId": result?.headlineBlockId ?? null,   // 見出しと連動している要素のID
        "isFullSize": result?.isFullSize ? true : false,
        "isTopbar": result?.isTopbar ? true : false,
        "url": result?.url,
        "fontFamily": {
            "Hannari": false,
            "Kokoro": false,
            "Nico Moji": false,
            "Nikukyu": false,
            "M PLUS 1p": false,
            "M PLUS Rounded 1c": false,
            "Sawarabi Mincho": false,
            "Sawarabi Gothic": false,
            "Noto Sans JP": true,
            ...(result?.fontFamily ?? {}),
        },
        "toolList": [
            ...(result?.toolList ?? []),
        ],
        "plugins": [
            ...(result?.plugins ?? []),
        ],
        "officeName": result?.officeName ?? '福岡大学ものづくりセンター',
        "phoneNumber": result?.phoneNumber ?? '092-871-6631',
        "extensionNumber": result?.extensionNumber ?? '',
        "website": result?.website ?? 'http://www.tec.fukuoka-u.ac.jp/mono/',
        "mapUrl": result?.mapUrl ?? 'https://goo.gl/maps/qD7ZYrmeWpW7uNgSA',
        "address": result?.address ?? '〒814-018 福岡市城南区七隈8-19-1 福岡大学 4号館 1F',
        "childPages": {
            // "子ページのフォルダ名": {
            //     "headline": "ニュース記事の見出し",
            //     "overview": "ニュース記事の概要",
            // },
            ...(result?.childPages ?? {}),
        },
    };
}


async function blog(basePath = "./") {
    document.addEventListener('DOMContentLoaded', async function () {
        const settings = await _loadSetting(basePath + 'setting.js');
        const listElement = document.getElementById("blog_list");
        let htmlText = "";
        //
        const childPagesMap = {
            ...settings?.childPages ?? {},
        };
        let childPagesArray = [];
        for (const folderName in childPagesMap) {
            const pageData = childPagesMap[folderName];
            if (!pageData) continue;
            childPagesArray.push({
                ...pageData,
                "folderName": folderName,
            });
        }
        console.log(childPagesArray);
        childPagesArray = childPagesArray.sort((pageData1, pageData2) => {
            if (!pageData1.date) {
                return 1;
            }
            if (!pageData2.date) {
                return -1;
            }
            const date1 = new Date(pageData1.date);
            const date2 = new Date(pageData2.date);
            if (date1 > date2) {
                return -1;
            }
            else {
                return 1;
            }

        });
        for (let i = 0; i < childPagesArray.length && i < 3; i++) {
            const pageData = childPagesArray[i];
            if (!pageData) continue;
            //
            htmlText += `
            <div class="col-md-4">
                <a href="${basePath}${pageData?.folderName}/index.html" style="font-size: 1rem;color: rgba(85, 85, 85, 0.95);">
                    <div style="text-align: left;padding-top: 10px; font-size: 1rem;color:black;font-weight:700;padding-bottom:5px;">
                        ${pageData?.date}
                    </div>
                    <span style="background-color:#8d0000;color:white;">　お知らせ　</span>
                    <div style="text-align: left;padding-top: 10px;">
                        ${pageData?.headline}
                    </div>
                    ${pageData?.thumbnailUrl ?
                    `<image src="${pageData?.thumbnailUrl}" style="width:100%; max-width:200px;"><br>`
                    : ""
                }
                    <br>
                </a>
            </div>
        `;
        }
        listElement.innerHTML = htmlText;
    });
}

