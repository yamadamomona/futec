
document.addEventListener("DOMContentLoaded", function () {
    const urlSearchParams = new URLSearchParams(location.search);
    const teacherId = urlSearchParams.get("ti");
    const teacherBox = document.getElementById("teacher_box");
    switch (teacherId) {
        case "ando":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "安東 洋一",
                shikaku: "准教授",
                senmon: "流体工学<br>ターボ機械<br>乱流",
                color: "white",
                img: "../img/staff/tm/ando.webp",
                description: "流れに伴う乱れはさまざまな特性を有し、その工学的特徴の理解は抗力の低減、混合促進などの産業界への応用が期待されている分野です。特にフラクタル構造の物体後方に発達する乱れについて研究しています。",
                url: "ando",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=1c8e9bf038863f87520e17560c007669&lang=ja",
            });
            break;

        case "iwamura":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "岩村 誠人 ",
                shikaku: "教授",
                senmon: "マルチボディダイナミクス<br>ロボット工学<br>制御工学",
                color: "white",
                img: "../img/staff/tm/iwamura.webp ",
                description: "複雑な機械システムの運動方程式を効率的かつシステマチックに導出するための理論について研究しています。また、その理論を応用して革新的なロボット技術の開発を行っています。",
                url: "iwamura",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=bbbcf5318067130b520e17560c007669&lang=ja",
            });
            break;
        case "endo":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "遠藤 正浩",
                shikaku: "教授",
                senmon: "材料力学<br>ものづくり",
                color: "white",
                img: "../img/staff/tm/endo.webp",
                description: "複雑な応力が作用する材料や機械要素の疲労強度および機械設計のための強度評価法について研究しています。試験機や装置等の設計・開発と製作なども研究の重要な一部となっています。企業や外部研究機関との共同研究も盛んです。",
                url: "endo",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=6ee77ced069e7f9b520e17560c007669&lang=ja",
            });
            break;
        case "takao":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "高尾 幸来",
                shikaku: "教授",
                senmon: "熱工学<br>再生エネルギー利用技術<br>対向ピストンエンジン<br>熱物性および熱交換器",
                color: "white",
                img: "../img/staff/tm/takao.webp",
                description: "脱炭素社会の実現および地球環境問題の解決を目指して、高効率な再生エネルギー利用技術・エンジン・熱交換技術に関する研究を行っています。具体的には太陽エネルギーの有効利用、対向ピストンエンジンの開発、エマルジョン燃料の安定性改善、クーリングタワーの性能向上および冷媒の液体密度・音速の高精度測定などの研究開発に取り組んでいます。",
                url: "takao",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=c59fc37b2e107852520e17560c007669&lang=ja",
            });
            break;
        case "miyata":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "宮田 一司",
                shikaku: "准教授",
                senmon: "伝熱工学<br>相変化伝熱<br>熱交換器・熱輸送デバイス",
                color: "white",
                img: "../img/staff/tm/miyata.webp",
                description: "高性能の熱交換器・熱輸送デバイスの開発を目指して、伝熱流動現象に関する研究を行っています。特に、微細な流路内を流体が相変化しながら流れる伝熱現象について、伝熱促進の方法を実験とシミュレーションの両面から探究しています。",
                url: "miyata",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=e21dad9ec8836b57520e17560c007669&lang=ja",
            });

            break;
        case "moriyama":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "森山 茂章",
                shikaku: "教授",
                senmon: "生体材料<br>トライボロジー<br>機械設計",
                color: "white",
                img: "../img/staff/tm/moriyama.webp",
                description: "整形外科学領域で使用される人工関節や脊椎ケージなどを開発しています。また、生体材料の評価や外科手術のシミュレーションを行っています。機械工学を基礎として、医学におけるさまざまな問題の解決に挑戦しています。",
                url: "moriyama",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=7f30106742d3f345520e17560c007669&lang=ja",
            });
            break;
        case "yanase":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "柳瀬 圭児",
                shikaku: "教授",
                senmon: "材料力学<br>計算固体力学<br>材料強度学",
                color: "white",
                img: "../img/staff/tm/yanase.webp",
                description: "金属材料の引張強度や疲労強度などの高精度な予測の実現を目指して、大量の実験データと機械学習を用いた予測手法の構築に取り組んでいます。",
                url: "yanase",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=ff0f3aaf945cd00e520e17560c007669&lang=ja",
            });
            break;
        case "yamabe":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "山辺 純一郎",
                shikaku: "教授",
                senmon: "機械工作法<br>材料強度学<br>水素脆化",
                color: "white",
                img: "../img/staff/tm/yamabe.webp",
                description: "世界規模での環境問題を解決する一環として、水素社会実現に向けた研究を実施しています。材料中に侵入した水素が材料を脆化させる、いわゆる水素脆化の問題に着目し、金属積層造形や塑性加工など種々の工作法を用いて製作した材料の強度特性に及ぼす水素の影響について研究しています。",
                url: "yamabe",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=be89154d698d02f5520e17560c007669&lang=ja",
            });
            break;
        case "lin":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tm.html",
                name: "林 長軍",
                shikaku: "准教授",
                senmon: "機械制御工学<br>機械機構の最適設計",
                color: "white",
                img: "../img/staff/tm/lin.webp",
                description: "マニピュレータおよび移動ロボットの最適軌道を求めるための有用な手法を提案・研究しています。また、機械機構の最適設計として、インデックスカム機構の残留振動を抑制するためのカムの最適設計、および発電効率の向上を目的とした高集光倍率反射型太陽光発電システムの反射曲面の最適設計を行っています。",
                url: "lin",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=e6b2cbffa62b4c9c520e17560c007669&lang=ja",
            });
            break;
        case "anai":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "穴井 謙",
                shikaku: "教授",
                senmon: "建築環境学 <br>環境音響学<br>騒音制御工学",
                color: "white",
                img: "../img/staff/ta/anai.webp",
                description: "どんな用途の建物からも切り離せない「環境」の視点から、暮らしを豊かにする空間のことを考えて研究しています。人が健康で快適に過ごせる建物、そして人と地球に優しい建物をつくるためには、その内部空間に生じる「音・光」といった環境の物理現象を的確に予測しながらデザインに反映し、また、環境をコントロールする先端技術を取り入れていく必要があります。デザインと技術のバランスを考えながら、「環境」の研究に取り組んでいます。",
                url: "anai",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=91abb39ba2a28555520e17560c007669&lang=ja",
            });
            break;

        case "ikezoe":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "池添 昌幸",
                shikaku: "教授",
                senmon: "建築計画学<br>住環境デザイン<br>施設マネジメント",
                color: "white",
                img: "../img/staff/ta/ikezoe.webp",
                description: "建築計画学は、人間の生活を原点として利用者が使いやすい建築空間の法則性を明らかにし、建築デザインの実践に役立てるものです。現在の日本は人口減少および都市縮退の時代を迎え、都市・建築の計画は新築中心のフロー型から既存建築物を長期的に利用するストック型へと転換しつつあります。本研究室では、公共施設の長期利用と適切な更新の方法、郊外住宅地の空家活用と居住継承、低密度居住のデザインなどの研究に取り組んでいます。",
                url: "ikezoe",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=31808e4003e5aca9520e17560c007669&lang=ja",
            });
            break;

        case "miyazaki":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "宮崎 慎也",
                shikaku: "准教授",
                senmon: "都市計画<br>建築デザイン<br>地球環境",
                color: "white",
                img: "../img/staff/ta/miyazaki.webp",
                description: "人工知能など情報技術の発展によって蓄積されるビッグデータにはさまざまな空間情報が含まれていますが、これらを組み合わせて分析することで、これまで隠れて可視化されていなかった都市空間や建築空間の特徴を抽出し、未来の都市や建築のデザインにつなげるための新たなアイデアや知識を発見します。また、SDGsやパリ協定など、地球環境に対するアクションについても、都市形態や建築デザインの観点から考えています。",
                url: "miyazaki",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=48a9a4d64c1c95da520e17560c007669&lang=ja",
            });
            break;

        case "sakai":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "堺 純一",
                shikaku: "教授",
                senmon: "建築構造学<br>鋼・コンクリート合成構造の耐震設計<br>建築構造力学",
                color: "white",
                img: "../img/staff/ta/sakai.webp",
                description: "日本は世界でも有数の地震国家なので、建築物の耐震設計は非常に重要です。建築物は木造や鉄筋コンクリート造あるいは鉄骨造などがあり、それぞれ異なる耐震性能を持っています。本研究室では、鉄骨とコンクリートを組み合わせたハイブリッド構造を対象として、お互いの弱点をお互いの長所で補い合い、お互いの長所をさらに引き出す構造とすることで、より合理的で、より優れた耐震性能を持つ建築物の新しい構造設計法の研究開発をしています。",
                url: "sakai",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=b34523288b68460d520e17560c007669&lang=ja",
            });

            break;
        case "takayama":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "高山 峯夫",
                shikaku: "教授",
                senmon: "建築学<br>建築構造<br>免震・制振構造",
                color: "white",
                img: "../img/staff/ta/takayama.webp",
                description: "建築は地震や台風などに対して安全であることが求められています。安全な建築にする方法として主に免震構造や制振構造について研究をしています。免震・制振構造は、従来の耐震構造と異なり地震エネルギーを吸収する部材(デバイス)を建物内に組み込むことで、地震時の建物の損傷を大幅に低減できます。加えて免震構造では地震エネルギーのほぼ全てを免震層で吸収することで建物の加速度を大幅に低減し家具などの転倒も起きません。",
                url: "takayama",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=5386f50330843a78520e17560c007669&lang=ja",
            });

            break;
        case "taki":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "太記 祐一",
                shikaku: "教授",
                senmon: "西洋建築史",
                color: "white",
                img: "../img/staff/ta/taki.webp",
                description: "<br><br>イタリア~ギリシャ~トルコなど地中海沿岸の地域には、4世紀から6世紀にかけて数多くの教会建築が建設されました。どのような作品が、どのような場所に建てられ、どのように使用されてきたのか、宮殿や都市など関連する分野も含めて研究をしてきました。また後世の人々は、こうした古い時代の建築作品をどう評価してきたのか、そこから新しい建築はどのように生まれてきたのか、19世紀のドイツを中心に研究しています。",
                url: "taki",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=81c788efb5731ea4520e17560c007669&lang=ja",
            });

            break;
        case "tanaka":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "田中 照久",
                shikaku: "准教授",
                senmon: "建築構造学<br>鋼構造の耐震設計<br>接合技術",
                color: "white",
                img: "../img/staff/ta/tanaka.webp",
                description: "主に鋼構造を対象とし、鉄鋼材料の特性を活かした接合要素の開発とその応用について研究しています。大地震に対する「人命の確保」に加えて「地震直後の機能継続」という高度な耐震性能が求められています。一方で、建設人手不足に対する生産性向上に向けた技術開発が進む中、建築物の省資源・長寿命化のための新たな設計施工法が望まれています。こうした状況を受け、独自技術の実用化と製品化を進めながら、これらの課題を解決するための取り組みを行っています。",
                url: "tanaka",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=a25fedc42200f43f520e17560c007669&lang=ja-db.fukuoka-u.ac.jp/search/search?typeSearch=mFreeword&keyword=%E7%94%B0%E4%B8%AD+%E7%85%A7%E4%B9%85&lang=ja&type=Name",
            });
            break;
        case "tsukagoshi":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "塚越 雅幸",
                shikaku: "准教授",
                senmon: "建築防水 <br>建築物の長寿命化<br>環境負荷低減材料",
                color: "white",
                img: "../img/staff/ta/tsukagoshi.webp",
                description: "「建築物の長寿命化」と「循環型建築材料」をキーワードに、地球環境にやさしく、長く安全・快適に暮らせる建築物の実現を目指した研究を行っています。建築物の健全性の評価手法の確立と、劣化した建築物の快適性・耐久性向上のため、適切な補修と保護するための新たな材料と工法の開発に取り組んでいます。さらに、産業副産物の建築材料への有効利用と、資源の再利用の可能性についての研究を行っています。",
                url: "tsukakosi",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=53a723e3f03e8bca520e17560c007669&lang=ja",
            });
            break;
        case "zhao":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "趙 翔",
                shikaku: "教授",
                senmon: "建築学<br>建築設計・計画<br>健康環境",
                color: "white",
                img: "../img/staff/ta/zhao.webp",
                description: "食事と同じように、人びとの毎日の生活は建築と関わっています。そのため、建築設計や健康環境に関する研究の目標は、いずれも人間の行為を対象にしています。その目標を実現するために、主に行為学、計画学の理論と方法を用いて研究し、また研究成果を応用することができるEBD(Evidence Based Design)設計を実践しています。このように研究と設計を連動することで、建築の社会的持続可能(Social Sustainability)というコンセプト、実践例を社会に提示します。",
                url: "zhao",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=f75f1833bff84de6520e17560c007669&lang=ja",
            });
            break;
        case "yoshizawa":
            teacherBox.innerHTML = teacher({
                parent: "introduce-ta.html",
                name: "吉澤 幹夫",
                shikaku: "教授",
                senmon: "建築構造設計 <br>建築耐震工学<br>建築基礎工学",
                color: "white",
                img: "../img/staff/ta/yoshizawa.webp",
                description: "建築構造設計の目的は、強・用・美を兼ね備えた質の高い建築を、社会性と経済性を考慮して意匠設計・設備設計と協働して創り出すことにあります。建築空間はその骨格である構造で支えられており、安全で安心な空間を創造する上で、構造設計は重要な役割を担います。地震国である我が国では、建築に必要とする耐震安全性を合理的に確保する手法が構造設計の良否を左右します。このような観点から実践的に構造設計を研究しています。",
                url: "yoshizawa",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=ff2e130ebac8322a520e17560c007669&lang=ja",
            });
            break;

        case "kinoshita":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "木下 幸治",
                shikaku: "教授",
                senmon: "構造工学<br>耐震工学<br>破壊力学",
                color: "",
                img: "../img/staff/tc/kinoshita.webp",
                description: "「地球上のみならず宇宙空間も想定した先端的，または将来に渡って使用可能な持続的な構造等に関する研究や社会インフラの環境負荷低減を可能とするエコ・リニューアル工法に関する研究を行っています。」",
                url: "kinoshita",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=74a78e2936af318a520e17560c007669&lang=ja",
            });
            break;

        case "k_sato":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "佐藤 研一 ",
                shikaku: "教授",
                senmon: "地盤工学<br>舗装工学<br>地盤環境工学",
                color: "white",
                img: "../img/staff/tc/k_sato.webp",
                description: "大学の4年間は「よく遊び、よく学び」ましょう。福岡大学は全国でも珍しいワンキャンパスです。多くの学部学科の学生たちと交流ができます。夢を持った皆さんの入学をお待ちしております。",
                url: "k_sato",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/search?typeSearch=mFreeword&keyword=%E4%BD%90%E8%97%A4+%E7%A0%94%E4%B8%80&lang=ja&type=Name",
            });
            break;


        case "shibata":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "柴田 久",
                shikaku: "教授",
                senmon: "景観デザイン<br>まちづくり",
                color: "white",
                img: "../img/staff/tc/shibata.webp",
                description: "魅力的なまちは多くの魅力的な社会基盤施設や公共空間によって形づくられています。美しい「景観づくり」、快適な暮らしを育む「まちづくり」について学んでみませんか。",
                url: "shibata",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=ad51a28a4666694c520e17560c007669&lang=ja",
            });
            break;
        case "s_suzuki":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "鈴木 慎也",
                shikaku: "教授",
                senmon: "環境工学<br>廃棄物資源循環工学 ",
                color: "white",
                img: "../img/staff/tc/suzuki.webp",
                description: "デザインとは、具体的な問題を解き明かすための思考・概念を組み立て、それを表現する行為です。私たちのデザインの対象は、この日常社会そのものです。お待ちしています。",
                url: "s_suzuki",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=5d52e05ec0fcd2c9520e17560c007669&lang=ja",
            });
            break;
        case "tatsumi":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "辰巳 浩 ",
                shikaku: "教授",
                senmon: "交通計画<br>都市計画",
                color: "white",
                img: "../img/staff/tc/tatsumi.webp",
                description: "本学科では、安全で快適なまちづくりを実現するための人材を養成します。私たちの暮らす街をより良くしたい人や社会に貢献したい人は本学科を選んでみてはいかがでしょうか。",
                url: "tatsumi",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=b8b917cc6d9c1dba520e17560c007669&lang=ja",
            });
            break;
        case "hashimoto":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "橋本 彰博 ",
                shikaku: "准教授",
                senmon: "水工学<br>環境水理学",
                color: "white",
                img: "../img/staff/tc/hashimoto.webp",
                description: "将来の自分をイメージしてみてください。そして、「市民の文明的な暮らしのために、人間らしい環境を整えていく仕事(Civil Engineering)」に興味を持ったなら、本学科を調べてみてください。",
                url: "hashimoto",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=7d84bb2277b0ed71520e17560c007669&lang=ja",
            });
            break;
        case "hazehara":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "櫨原 弘貴",
                shikaku: "准教授",
                senmon: "コンクリート工学<br>維持管理工学",
                color: "white",
                img: "../img/staff/tc/hazehara.webp",
                description: "ダム、橋、トンネルを建設して、そして次の世代に残していく、そんなものづくりの楽しさを知ることができるのも本学科の魅力です。自然環境と社会環境を融合して、より良い未来を一緒に創っていきましょう。",
                url: "hazehara",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=70d3428d5acb861f520e17560c007669&lang=ja",
            });
            break;
        case "murakami":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "村上 哲",
                shikaku: "教授",
                senmon: "地盤工学<br>地盤防災工学<br>地盤情報工学",
                color: "white",
                img: "../img/staff/tc/murakami.webp",
                description: "地震や豪雨による地盤に関わる多くの災害。今後、激甚化するといわれています。私たちの暮らしを守る技術について、学び、考え、そして、未来のための新しい技術を一緒に研究しましょう。",
                url: "murakami",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=509b7dbbe31d6af2520e17560c007669&lang=ja",
            });
            break;
        case "r_watanabe":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "渡辺 亮一",
                shikaku: "教授",
                senmon: "応用生態工学<br>河川工学<br>上下水道学",
                color: "white",
                img: "../img/staff/tc/r_watanabe.webp",
                description: "大変な時期で、皆さんも戸惑っていると思いますが、この時間を大切に使いましょう。読書をお勧めします。どんなジャンルの本でも良いので、1日に1時間、活字を読んでみましょう。",
                url: "r_watanabe",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=d6d20d71caf03522520e17560c007669&lang=ja",
            });
            break;
        case "h_watanabe":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tc.html",
                name: "渡辺 浩",
                shikaku: "教授 ",
                senmon: "橋梁工学<br>木材利用<br>災害対応",
                color: "white",
                img: "../img/staff/tc/h_watanabe.webp",
                description: "最近も頻発する災害を止めることはできなく ても、ダメージを和らげることはあなたにもできると思います。私たちと一緒に取り組んでみませんか。",
                url: "h_watanabe",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=a99bea22eb349118520e17560c007669&lang=ja",
            });
            break;


        case "k_kato":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "加藤 勝美",
                shikaku: "教授",
                senmon: "化学安全工学",
                color: "white",
                img: "../img/staff/tk/katsumi.webp",
                description: "化学工場などで起こる災害の抑止を目的として、さまざまな化学物質、化学プロセスの発火爆発の危険性について研究しています。また、爆発性物質を利用した化学製品であるエアバッグや花火の性能向上を目的とした研究も実施しています。",
                url: "k_kato",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=4f6512bbd4d27def520e17560c007669&lang=ja",
            });
            break;
        case "t_kato":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "加藤 貴史",
                shikaku: "准教授",
                senmon: "化学工学<br>無機材料工学",
                color: "white",
                img: "../img/staff/tk/kato.webp",
                description: "木材などのバイオマス資源を原料とした機能性炭素材料、つまり、環境浄化やエネルギー生産などに役立つ特殊な“炭”の合成に関する研究を行っています。炭素資源の活用を通じて、循環社会の構築に貢献することが目的です。",
                url: "t_kato",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=cf57d750561e701f520e17560c007669&lang=ja",
            });
            break;
        case "kubota":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "久保田 純",
                shikaku: "教授",
                senmon: "応用触媒化学",
                color: "white",
                img: "../img/staff/tk/kubota.webp",
                description: "エネルギー技術に資する触媒化学・電気化学の研究をしています。電力による窒素と水からのアンモニア合成や、二酸化炭素と水からのメタン合成をする電気化学装置のための電極触媒、電解質の研究をしています。また、燃料電池の 白金代替触媒の研究もしています。",
                url: "kubota",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=a56fcf5691b47123520e17560c007669&lang=ja",
            });
            break;
        case "shinto":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "新戸 浩幸 ",
                shikaku: "教授",
                senmon: "界面プロセス工学<br>細胞と粒子の相互作用",
                color: "white",
                img: "../img/staff/tk/shinto.webp",
                description: "専門分野は界面プロセス工学で ①「緊張と緩和」（研究を行うときは集中し、遊ぶときは楽しく） ②「研究」＝「未解決課題に挑戦し、第一発見者になること」 ③「研究の醍醐味」＝「他人があっと驚く発見をすること」 をモットーにして、教育・研究活動をしています。",
                url: "shinto",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=db073cdcaf451d68520e17560c007669&lang=ja",
            });
            break;
        case "shigematsu":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "重松 幹二",
                shikaku: "教授",
                senmon: "反応化学<br>バイオマス利用学",
                color: "white",
                img: "../img/staff/tk/shigematsu.webp",
                description: "バイオマスエネルギーと資源リサイクル、天然物由来物質の抽出と生理活性機能、化学物質の安全性評価などを行っています。",
                url: "shigematsu",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=0c741eee280acace520e17560c007669&lang=ja",
            });
            break;
        case "suzukawa":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "鈴川 一己 ",
                shikaku: "教授",
                senmon: "プロセス流体工学",
                color: "white",
                img: "../img/staff/tk/suzukawa.webp",
                description: "混合装置兼反応器である撹拌槽の研究をしています。羽根にフラクタルという特殊な形状を用いた撹拌翼を設計し、混合装置内の流速分布や動力測定および数値シミュレーションにより性能評価をしています。",
                url: "suzukawa",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=4e6343870078ddf9520e17560c007669&lang=ja",
            });
            break;
        case "seto":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "瀬戸 弘一",
                shikaku: "准教授",
                senmon: "機能性高分子材料<br>バイオ分離工学",
                color: "white",
                img: "../img/staff/tk/seto.webp",
                description: "高度な機能をもつ生体分子を社会に役立つ材料として如何に扱うかを研究しています。タンパク質、糖質、ポリフェノールをパーツとして、有機合成や高分子重合を駆使して機能性材料を構築し、バイオ分離やバイオ検出等の分野に応用しています。",
                url: "seto",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=45e75f324267d6d9520e17560c007669&lang=ja",
            });
            break;
        case "noda":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "野田 賢",
                shikaku: "教授",
                senmon: "プロセスシステム工学",
                color: "white",
                img: "../img/staff/tk/noda.webp",
                description: "化学やエネルギーなどのプロセス産業のための監視制御システムの合理的な設計論の研究に取り組んでいます。オペレータが誤判断を起こしにくいアラームシステムや、プラント運転データからの有害アラームの抽出法の開発を進めています。",
                url: "noda",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=4d8b24c93607ec6a520e17560c007669&lang=ja",
            });
            break;
        case "matsukuma":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "松隈 洋介 ",
                shikaku: "教授",
                senmon: "数値流体工学",
                color: "white",
                img: "../img/staff/tk/matsukuma.webp",
                description: "輸送現象論に基づく環境・エネルギー装置の高性能化に関する研究をしています。例えば、薬剤の中にファインバブルと呼ばれる極微小な泡をたくさん作る研究をシミュレーションと実験の両方を用いて行っています。",
                url: "matsukuma",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=3e745faeb22a21ea520e17560c007669&lang=ja",
            });
            break;
        case "mishima":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tk.html",
                name: "三島 健司",
                shikaku: "教授",
                senmon: "化学工学<br>環境工学<br>薬理学",
                color: "white",
                img: "../img/staff/tk/mishima.webp",
                description: "生命・健康を守る薬剤・化粧品・機能性食品の開発を行っています。高圧力の技術を使って、環境に優しい装置を作り、付加価値の高いマイクロ・ナノの薬剤・化粧品・機能性食品の実用化研究を行っています。",
                url: "mishima",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=d5e81de99d6f7301520e17560c007669&lang=ja",
            });
            break;
        case "koda":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "江田 孝治",
                shikaku: "教授",
                senmon: "画像認識<br>画像解析<br>セキュリティシステム",
                color: "white",
                img: "../img/staff/te/koda.webp",
                description: "デジタルカメラや家電製品にも組み込むことができる高速かつコンパクトなアルゴリズムを目標に、画像強調や人物の認識、監視カメラ映像の解析など、画像を用いたセキュリティシステムについて研究をしています。",
                url: "koda",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=31fcecd2b5d064a5520e17560c007669&lang=ja",
            });
            break;
        case "kohama":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "小浜 輝彦",
                shikaku: "教授",
                senmon: "電子回路<br>アナログ回路<br>スイッチング電源",
                color: "white",
                img: "../img/staff/te/kohama.webp",
                description: "パソコン、携帯電話、ゲーム機などの電子機器に不可欠な電源回路とその応用研究を行っています。電源回路の高効率化でエネルギー問題、環境問題に貢献し、回路の高性能化で便利な電子機器の開発・普及に貢献します。",
                url: "kohama",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=493de2a2fbf6d565520e17560c007669&lang=ja",
            });
            break;
        case "shinohara":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "篠原 正典",
                shikaku: "教授",
                senmon: "プラズマ工学<br>半導体結晶成長<br>表面科学",
                color: "white",
                img: "../img/staff/te/shinohara.webp",
                description: "半導体の微細加工、膜堆積、溶接などさまざまな加工にプラズマは使われています。望みどおりの加工ができるように、プラズマが作用する物体との反応を原子・分子レベルで調べ、反応を制御する研究をしています。",
                url: "shinohara",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=eea9973a77dbe987520e17560c007669&lang=ja",
            });
            break;
        case "sumiyoshitani":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "住吉谷 覚",
                shikaku: "教授",
                senmon: "電力工学<br>静電気工学",
                color: "white",
                img: "../img/staff/te/sumiyoshitani.webp",
                description: "空間(気体中、液体中、固体中)の電磁界を、レーザ光を使って計測する手法の研究をしています。弱電磁界計測の対象として大気環境計測に、強電磁界計測の対象として電力機器関連の高電圧大電流計測に、応用が期待されています。",
                url: "sumiyoshitani",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=e561ab97ce6201df520e17560c007669&lang=ja",
            });
            break;

            case "takamura":
                teacherBox.innerHTML = teacher({
                    parent: "introduce-te.html",
                    name: "高村 紀充",
                    shikaku: "准教授",
                    senmon: "高電圧工学<br>誘電・絶縁材料<br>放電・プラズマ・パルスパワー",
                    color: "white",
                    img: "../img/staff/te/takamura.webp",
                    description: "電気機器に使用される固体・液体の絶縁材料の特性向上に関する研究や、雷が絶縁物を貫通するメカニズムと対策に関する研究を行っています。また、放電・プラズマ・パルスパワーに関する研究を行った実績もあります。",
                    url: "takamura",
                    link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=bca4d1c59081328c520e17560c007669&lang=ja",
                });
                break;

        case "tsuji":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "辻 聡史",
                shikaku: "准教授",
                senmon: "電気計測<br>ヒューマンインターフェース<br>電気機器応用",
                color: "white",
                img: "../img/staff/te/tsuji.webp",
                description: "電気機器応用や電気計測分野におけるセンシング技術の研究を行っています。例えば、ロボットの皮膚となる触覚センサ、人と機械をつなぐヒューマンインターフェース、模擬的な触感を人に与えるハプティックデバイスなどの研究を行っています。",
                url: "tsuji",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=69723321b17dea7c520e17560c007669&lang=ja",
            });
            break;
        case "nishida":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "西田 貴司",
                shikaku: "教授",
                senmon: "電子デバイス工学<br>電気電子材料<br>ナノマテリアル",
                color: "white",
                img: "../img/staff/te/nishida.webp",
                description: "コンピュータ、ネットワークの発展で電力消費の増大が重要な課題となっています。ナノテクノロジーを活用して新しい材料を創出し、わずかな電力で動く素子(デバイス)や、熱や振動など身の回りのエネルギーから発電する素子(環境発電)を実現する研究をしています。",
                url: "nishida",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=309801812db435e4520e17560c007669&lang=ja",
            });
            break;
        case "neba":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "根葉 保彦",
                shikaku: "教授",
                senmon: "パワーエレクトロニクス<br>電力変換回路<br>電動機制御",
                color: "white",
                img: "../img/staff/te/neba.webp",
                description: "電力用半導体スイッチを用いた回路によって、直流や交流電力を制御する分野をパワーエレクトロニクスといいます。電力系統潮流制御や産業、交通、一般家庭機器等の省電力、人間および環境に優しく、高性能化を実現するための電力変換装置の開発を行い、主に変換回路の開発と電動機制御を研究しています。",
                url: "neba",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=61bdea5c9073ed9a520e17560c007669&lang=ja",
            });
            break;

        case "matsuoka":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "松岡 毅 ",
                shikaku: "准教授",
                senmon: "知能ロボット<br>センサ情報処理<br>環境認識・理解",
                color: "white",
                img: "../img/staff/te/matsuoka.webp",
                description: "人間の生活環境で自由に行動できるロボットを作ることが目標です。ロボットが環境中で自由に行動するために、どのように環境から情報を取得すればよいのか、どのように環境を認識・理解すればよいのかに興味があります。",
                url: "matsuoka",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=f87e3d8db8a9bfd5520e17560c007669&lang=ja",
            });
            break;
        case "meng":
            teacherBox.innerHTML = teacher({
                parent: "introduce-te.html",
                name: "孟 志奇",
                shikaku: "教授",
                senmon: "電磁波工学<br>数値解析<br>人工知能の応用",
                color: "white",
                img: "../img/staff/te/meng.webp",
                description: "磁波を用いて隠されて見えない物をコンピューター上で可視化するなど、電磁波の応用技術に関する研究を行っています。電磁波の伝搬・散乱現象を解析するために数値解析の手法、また、可視化の便利を図るために人工知能の応用についても研究しています。 ",
                url: "meng",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=4df789ae34f4191c520e17560c007669&lang=ja",
            });
            break;
        case "ono":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "小野 晋太郎",
                shikaku: "准教授",
                senmon: "センシング工学<br>画像情報工学<br>モビリティ工学",
                color: "white",
                img: "../img/staff/tl/ono.webp",
                description: "実空間のセンシング、情報抽出、シーン理解、可視化などの技術を軸とし、特に人や物の移動・交通に関するイノベーション(広義のITS,Intelligent Transport Systems)を専門としています。",
                url: "ono",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=0945eb5356728f15520e17560c007669&lang=ja",
            });
            break;

        case "t_sato":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "佐藤 寿倫 ",
                shikaku: "教授",
                senmon: "コンピュータシステム<br>プロセッサアーキテクチャ<br>省エネルギ技術",
                color: "white",
                img: "../img/staff/tl/sato.webp",
                description: "汎用品から専用品までさまざまなコンピュータやプロセッサの実現方式を研究しています。近年はAIやIoT向けの省エネルギ技術に注力して取り組んでいます。",
                url: "t_sato",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=1da63125fd3b2772520e17560c007669&lang=ja",
            });
            break;
        case "suetsugu":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "末次 正",
                shikaku: "教授",
                senmon: "パワーエレクトロニクス<br>半導体実装",
                color: "white",
                img: "../img/staff/tl/suetsugu.webp",
                description: "情報機器に組み込まれる電源回路の小型化高効率化に取り組んでいます。またそれらの回路を組み込む実装技術の研究を進めています。",
                url: "suetsugu",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=045585cd4a2595d1520e17560c007669&lang=ja",
            });
            break;
        case "t_suzuki":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "鈴木 孝将",
                shikaku: "教授",
                senmon: "電子材料<br>半導体表面物性<br>ナノエレクトロニクス",
                color: "white",
                img: "../img/staff/tl/suzuki.webp",
                description: "次世代電子材料であるシリコン̶有機半導体ハイブリッド構造と、エピタキシャル・グラフェン膜の作製と電気伝導に関する研究を行っています。",
                url: "suzuki",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=4730c04c7290773a520e17560c007669&lang=ja",
            });
            break;
        case "takahashi":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "高橋 伸弥",
                shikaku: "教授",
                senmon: "音声情報処理<br>パターン情報処理<br>人工知能",
                color: "white",
                img: "../img/staff/tl/takahashi.webp",
                description: "マルチモーダルな音声対話システムや対話ロボットの研究開発の他、聴覚支援システムのための音声認識・合成手法の研究を行っています。また大規模データの収集、分析に基づいた人工知能応用の研究に取り組んでいます。",
                url: "takahashi",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=7536d92cd98b43f7520e17560c007669&lang=ja",
            });
            break;
        case "taromaru":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "太郎丸 眞",
                shikaku: "教授",
                senmon: "無線通信システム<br>送受信回路<br>鉄道通信保安システム",
                color: "white",
                img: "../img/staff/tl/taromaru.webp",
                description: "携帯電話などの移動通信システムにおける信号処理、特にMIMOなどのマルチアンテナシステムの研究に加え、次世代鉄道信号システムの研究も行っています。",
                url: "taromaru",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=8711fe7d0a803253520e17560c007669&lang=ja://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=8711fe7d0a803253520e17560c007669&lang=ja-db.fukuoka-u.ac.jp/search/detail?systemId=0945eb5356728f15520e17560c007669&lang=ja",
            });
            break;
        case "tsuruta":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "鶴田 直之",
                shikaku: "教授",
                senmon: "画像認識<br>3次元ビジョン<br>人工知能",
                color: "white",
                img: "../img/staff/tl/tsuruta.webp",
                description: "人工知能のうち、画像認識や3次元ビジョンの研究を行っています。これらを組み合わせるとARやプロジェクションマッピングが実現できます。",
                url: "tsuruta",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=85ae387c5754819b520e17560c007669&lang=ja",
            });
            break;
        case "nakanishi":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "中西 恒夫",
                shikaku: "教授",
                senmon: "ソフトウエア工学<br>システム工学<br>組み込み/オートモーティブシステム",
                color: "white",
                img: "../img/staff/tl/nakanishi.webp",
                description: "組み込み(特にオートモーティブ)システムに代表されるメカ・エレキ・ソフト複合システムを対象とする、システムとソフトウエアの開発方法論を専門領域としています。 ",
                url: "nakanishi",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=65e41c1072f67e18520e17560c007669&lang=ja",
            });
            break;
        case "nakamura":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "中村 遼",
                shikaku: "講師",
                senmon: "情報ネットワーク<br>通信ネットワーク",
                color: "white",
                img: "../img/staff/tl/nakamura.webp",
                description: "次世代ネットワークアーキテクチャの設計およびモデル化の研究に取り組んでいます。さらに、様々なネットワークにおける情報拡散の特性を理解し制御するための研究にも取り組んでいます。",
                url: "nakamura",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=70abe7aae62541eb520e17560c007669&lang=ja",
            });
            break;
        case "nakura":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "名倉 徹",
                shikaku: "教授",
                senmon: "集積回路設計<br>微弱信号検出<br>AIチップ",
                color: "white",
                img: "../img/staff/tl/nakura.webp",
                description: "筋電測定回路、高精度距離センサ、画像認識LSIなど、半導体集積回路を用いたさまざまなアプリケーションの高性能化を研究しています。",
                url: "nakura",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=1fb8d8c3ac3446e4520e17560c007669&lang=ja",
            });
            break;
        case "bunsen":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "文仙 正俊",
                shikaku: "教授",
                senmon: "光工学<br>光情報処理<br>情報フォトニクス",
                color: "white",
                img: "../img/staff/tl/bunsen.webp",
                description: "ホログラフィを応用した新たな光技術による三次元光記録、三次元光計測や波面制御などの、光情報処理に関する研究を行っています。",
                url: "bunsen",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=50b2722f3624b556520e17560c007669&lang=ja",
            });
            break;
        case "moshnyaga":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "モシニャガ ワシリー",
                shikaku: "教授",
                senmon: "スマートシステム<br>コグニティブコンピューティング<br>AI",
                color: "white",
                img: "../img/staff/tl/moshnyaga.webp",
                description: "人間がより良い判断をできるようアドバイスをしたり、人間の能力を補強したりするなど、人間をサポートすることを目的としたシステムに関する研究を行っています。",
                url: "moshnyaga",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=6731c36070815283520e17560c007669&lang=ja",
            });
            break;
        case "yoshimura":
            teacherBox.innerHTML = teacher({
                parent: "introduce-tl.html",
                name: "吉村 賢治",
                shikaku: "教授",
                senmon: "自然言語処理",
                color: "white",
                img: "../img/staff/tl/yoshimura.webp",
                description: "日本語文の解析システムの研究を中心に行っています。また、その技術を応用したアプリケーションシステムの開発等も行っています。",
                url: "yoshimura",
                link: "https://kenkyusha-db.fukuoka-u.ac.jp/search/detail?systemId=f98fe49666e86cac520e17560c007669&lang=ja",
            });
            break;

        default:
            alert("teacher ID が間違えています");
    }
})


function teacher({ parent, name, shikaku, senmon, color, img, description, url, link }) {
    if (!parent || !name || !shikaku || !senmon || !color || !img || !description || !url) {
      /*   alert("引数が設定されていません"); */
    }
    return `
        <div class="col-md-12 col-sm-12"  >
            <div style="padding-top:50px;">
            </div>
            <div class="col-12">
                <div style="text-align: left;">
                    <a href="${parent}" style="color: #8d0000;">
                        ←一覧へ戻る
                    </a>
                </div>
                <div style="padding-top:25px;">
                </div>
            </div>
            <h2 style="text-align: left;">
                <b>
                    ${name} <font size="4">${shikaku}</font>
                </b>
            </h2>
        </div>
        <div class="col-md-12 col-sm-6"  >
            <div class="row">
                <div class="col-md-6 col-sm-12 pl-2"  >
                    <div style="padding-top:25px;">
                    </div>
                    <div style="width:100%; margin: 0 auto; background-color:${color};box-shadow:   0 0 30px #EEEEF0;text-align:left;">
                        <div style="background-image: url(${img}); width:100%; padding-top: 100%; background-position: center; background-size: contain;background-repeat: no-repeat; ">
                        </div>
                    </div>
                    <div style="padding-top:50px;">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12"  >
                    <div style="padding-top:25px;">
                    </div>
                    <font size="5" style="text-align: left;">
                        ${senmon}
                    </font>
                    <div style="padding-top:50px;">
                    </div>
                    <div style="color: rgba(85, 85, 85, 0.95);">
                        ${description}
                        <div style="padding-top:50px;">
                        </div>
                      
                    
                    </div>
                  
                </div>
                <div class="col-md-6 col-sm-12"  ></div>
                <div class="col-md-6 col-sm-12"  >
                <a href="${link}" class="btn_07" target="_blank">福岡大学　研究者情報</a>
                </div>
                <div style="padding-top:50px;">
                </div>
            </div>
        </div>
    `;
}