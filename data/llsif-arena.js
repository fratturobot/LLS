//■対戦相手のデータ
const TagData = {
	//'Shizuku':  {'name': '桜坂しずく',    'x':1, 'y':0},
	'Marika':   {'names': ['一之瀬マリカ', 'Marika Ichinose'],     'x': 2, 'y': 0},
	'Minami':   {'names': ['永山みなみ', 'Minami Nagayama'],      'x': 3, 'y': 0},
	'Aya':      {'names': ['杉崎亜矢', 'Aya Sugisaki'],          'x': 4, 'y': 0},
	'Ayumi':    {'names': ['鳥居歩美', 'Ayumi Torii'],           'x': 5, 'y': 0},
	'Seira':    {'names': ['九条聖来', 'Seira Kujo'],            'x': 6, 'y': 0},
	'Sachiko':  {'names': ['田中さち子', 'Sachiko Tanaka'],       'x': 7, 'y': 0},
	'Akiru':    {'names': ['篠宮あきる', 'Akiru Shinomiya'],      'x': 8, 'y': 0},
	'Yumi':     {'names': ['藤城悠弓', 'Yumi Fujishiro'],        'x': 9, 'y': 0},
	'Coco':     {'names': ['宮下ココ', 'Coco Miyashita'],        'x': 1, 'y': 1},
	'Sana':     {'names': ['結城紗菜', 'Sana Yuki'],             'x': 2, 'y': 1},
	'Christina':{'names': ['クリスティーナ', 'Christina'],          'x': 3, 'y': 1},
	'Yuri':     {'names': ['御堂優理', 'Yuri Mido'],             'x': 4, 'y': 1},
	'Rika':     {'names': ['神谷理華', 'Rika Kamiya'],           'x': 5, 'y': 1},
	//'Kanata':   {'name': '近江彼方',      'x':6, 'y':1},
	'Haruka':   {'names': ['近江遥', 'Haruka Konoe'],           'x': 7, 'y': 1},
	'Kasane':   {'names': ['支倉かさね', 'Kasane Hasekura'],      'x': 8, 'y': 1},
	'Mizuki':   {'names': ['吉川瑞希', 'Mizuki Kikkawa'],        'x': 9, 'y': 1},
	'Yu':       {'names': ['逢沢遊宇', 'Yuu Aizawa'],            'x': 1, 'y': 2},
	'Fumie':    {'names': ['西村文絵', 'Fumie Nishimura'],       'x': 2, 'y': 2},
	'Akemi':    {'names': ['菊池朱美', 'Akemi Kikuchi'],         'x': 3, 'y': 2},
	'Iruka':    {'names': ['須田いるか', 'Iruka Suda'],           'x': 4, 'y': 2},
	'Reine':    {'names': ['佐伯麗音', 'Reine Saeki'],           'x': 5, 'y': 2},
	'Nanaka':   {'names': ['森嶋ななか', 'Nanaka Morishima'],     'x': 6, 'y': 2},
	'Saki':     {'names': ['下園咲', 'Saki Shimozono'],         'x': 7, 'y': 2},
	'Ru':       {'names': ['多々良るう', 'Ru Tatara'],            'x': 8, 'y': 2},
	'Nagi':     {'names': ['白木凪', 'Nagi Shiraki'],           'x': 9, 'y': 2},
	'Shun':     {'names': ['黒崎隼', 'Shun Kurosaki'],          'x': 1, 'y': 3},
	'Fumi':     {'names': ['設楽ふみ', 'Fumi Shitara'],          'x': 2, 'y': 3},
	'Tsurugi':  {'names': ['門田剣', 'Tsurugi Kadota'],         'x': 3, 'y': 3},
	'Yuuka':    {'names': ['桐原優香', 'Yuuka Kirihara'],        'x': 4, 'y': 3},
	'Fuu':      {'names': ['斉木風', 'Fuu Saiki'],              'x': 5, 'y': 3},
	'Misaki':   {'names': ['紫藤美咲', 'Misaki Shido'],          'x': 6, 'y': 3},
	'Himeno':   {'names': ['綾小路姫乃', 'Himeno Ayanokoji'],     'x': 7, 'y': 3},
	'Koyuki':   {'names': ['白瀬小雪', 'Koyuki Shirase'],        'x': 8, 'y': 3},
	'Ryo':      {'names': ['相川涼', 'Ryo Aikawa'],             'x': 9, 'y': 3},
	'Mikoto':   {'names': ['福原命', 'Mikoto Fukuhara'],        'x': 1, 'y': 4},
	'Chiduko':  {'names': ['坂巻千鶴子', 'Chiduko Sakamaki'],     'x': 2, 'y': 4},
	'Hitomi':   {'names': ['志賀仁美', 'Hitomi Shiga'],          'x': 3, 'y': 4},
	'Akira':    {'names': ['鬼崎アキラ', 'Akira Kizaki'],         'x': 4, 'y': 4},
	'Yuka':     {'names': ['月島結架', 'Yuka Tsukishima'],       'x': 5, 'y': 4},
	'Sayuri':   {'names': ['兵藤さゆり', 'Sayuri Hyodo'],         'x': 6, 'y': 4},
	'Sakura':   {'names': ['黒羽咲良', 'Sakura Kurobane'],       'x': 7, 'y': 4},
	'Sakuya':   {'names': ['黒羽咲夜', 'Sakuya Kurobane'],       'x': 8, 'y': 4},
	'Mutsuki':  {'names': ['高天原睦月', 'Mutsuki Takamagahara'], 'x': 9, 'y': 4},
	'Ranpha':   {'names': ['蘭花', 'Ranpha'],                  'x': 1, 'y': 5},
	'Rakshata': {'names': ['ラクシャータ', 'Rakshata'],            'x': 2, 'y': 5},
	'Rebecca':  {'names': ['レベッカ', 'Rebecca'],               'x': 3, 'y': 5},
	'Isabella': {'names': ['イザベラ', 'Isabella'],              'x': 4, 'y': 5},
	//'Emma':     {'name': 'エマ・ヴェルデ','x':5, 'y':5},
	'Jennifer': {'names': ['ジェニファー', 'Jennifer'],            'x': 6, 'y': 5},
	'Maria':    {'names': ['マリア', 'Maria'],                  'x': 7, 'y': 5},
	'Leo':      {'names': ['レオ', 'Leo'],                     'x': 8, 'y': 5},
	'Yukari':   {'names': ['早乙女紫', 'Yukari Saotome'],        'x': 9, 'y': 5},

	'Tsubasa':  {'names': ['綺羅ツバサ', 'Tsubasa Kira'],           'x':1, 'y':6},
	'Anju':     {'names': ['優木あんじゅ','Anju Yuki'],              'x':2, 'y':6},
	'Erena':    {'names': ['統堂英玲奈', 'Erena Todo'],             'x':3, 'y':6},
	'Leah':     {'names': ['鹿角理亞',  'Leah Kazuno'],            'x':4, 'y':6},
	'Sarah':    {'names': ['鹿角聖良',  'Sarah Kazuno'],           'x':5, 'y':6},
	'P3':       {'names': ['ペルソナ3', 'Persona 3'],              'x':0, 'y':3},
	'P4':       {'names': ['ペルソナ4', 'Persona 4'],              'x':0, 'y':4},
	'P5':       {'names': ['ペルソナ5', 'Persona 5'],              'x':0, 'y':5},
	'geass':    {'names': ['コードギアス','Code Geass'],              'x':0, 'y':6}
};

let CurrentPage = 0;

//■セレクトボックスの初期化
function InitializeSelectBox() {
 	window['JSON-llsif-arena'].forEach((temp1, idx) => {
		if(temp1.titles[lang_select]) {
			var temp2 = document.createElement("option");
			temp2.text = temp1.titles[lang_select];
			temp2.value = idx;
			if('num' in temp1){
				temp2.text = Localization['ARENA_ROUND_TITLE'][lang_select](temp1.num) + temp2.text;
				document.getElementById("sb-t1").appendChild(temp2);
			} else {
				document.getElementById("sb-t2").appendChild(temp2);
			}
		}
	});
	document.addEventListener('keydown', function(evt){
		act = document.activeElement.toString();
		if(act === '[object HTMLDivElement]'){
			if(evt.code == 'ArrowLeft'){
				if(CurrentPage > 0){
					WriteMessage(CurrentPage-1);
				}
			}
			if(evt.code == 'ArrowRight'){
				if(CurrentPage < window['JSON-llsif-arena'].length-1){
					WriteMessage(CurrentPage+1);
				}
			}
		}
	});
}

function RefreshSelectBox() {
	const oldVal = document.getElementById('select-box').value;
	let newVal = -1;
	const arenaRounds = document.getElementById('sb-t1');
	const otherSessions = document.getElementById('sb-t2');
	arenaRounds.innerHTML = '';
	otherSessions.innerHTML = '';
	window['JSON-llsif-arena'].forEach((temp1, idx) => {
		if(temp1.titles[lang_select]) {
			const temp2 = new Option();
			temp2.text = temp1.titles[lang_select];
			temp2.value = idx;
			if(newVal == -1) {
				newVal = idx;
			}
			if(idx == oldVal) {
				newVal = oldVal;
			}
			if('num' in temp1){
				temp2.text = Localization.ARENA_ROUND_TITLE[lang_select](temp1.num) + temp2.text;
				arenaRounds.appendChild(temp2);
			} else {
				otherSessions.appendChild(temp2);
			}
		}
	});
	document.getElementById('select-box').value = newVal;
}

//■テキスト一覧の描画
function WriteMessage(page) {
	//引数が無い場合、セレクトボックスの状態から引数を生成する
	if(page === undefined){ page = +document.getElementById('select-box').value; }
	const CurrentSet = window['JSON-llsif-arena'][page];

	document.getElementById("sub").innerHTML = ('sub' in CurrentSet ? Localization.ARENA_ROUND_SUB[lang_select](CurrentSet.sub) : "");
	
	CurrentPage = page;
	let Output = "";
	let MessageNumber = 1;

	for(const temp1 of CurrentSet.opponent){
		Output += '\n<tr>\n\t<th>';
		if('num' in temp1){
			Output += '' + temp1.num + '<\/th>\n';
			if(Number(temp1.num) === temp1.num){ //数値型の場合、カウントを上書き
				MessageNumber = temp1.num + 1;
			}
		}else { 
			Output += '' + MessageNumber++  + '<\/th>\n';
		}
		if('name' in temp1){ //名前があるなら立ち絵も表示させる
			if(temp1.name in TagData){
				let temp2 = TagData[temp1.name];
				Output += '\t<th>' + WriteFaceN(temp2.x, temp2.y) + '<\/th>\n\t<td>'
				+ '<span class="OpponentName">'
				+ ('namealt' in temp1 ? temp1.namealt : temp2.names[lang_select]) + '<\/span><br>';
			} else { //名前が正しくない
				Output += '\n\t<th>Error<\/th>\n\t<td>';
			}
		}else {
			Output += '\n\t<td><\/td>\n\t<td>';
		}			
		Output += temp1.text || temp1.texts[lang_select] + '<\/td>\n<\/tr>\n';
	}
	document.getElementById("message-list").innerHTML = Output;
	document.getElementById("message-box").scrollTop = 0;
	
	//左ボタンの設定変更
	if(page > 0) {
		document.getElementById('ButtonLeft').classList.add('button-enable');
		document.getElementById('ButtonLeft').classList.remove('button-disable');
		document.getElementById('ButtonLeft').setAttribute('onclick', `WriteMessage(${page-1})`);
	} else {
		document.getElementById('ButtonLeft').classList.add('button-disable');
		document.getElementById('ButtonLeft').classList.remove('button-enable');
		document.getElementById('ButtonLeft').onclick = '';
	}

	//右ボタンの設定変更
	if(page < window['JSON-llsif-arena'].length-1) {
		document.getElementById('ButtonRight').classList.add('button-enable');
		document.getElementById('ButtonRight').classList.remove('button-disable');
		document.getElementById('ButtonRight').setAttribute('onclick', `WriteMessage(${page+1})`);
	} else {
		document.getElementById('ButtonRight').classList.add('button-disable');
		document.getElementById('ButtonRight').classList.remove('button-enable');
		document.getElementById('ButtonRight').onclick = '';
	}
	
	//セレクトボックスの位置変更
	document.getElementById("select-box").selectedIndex = page;
}

//■「キャラ別登場回数」の描画
function WriteSummary() {
	let TextSummary = new Object();
	let idols = 51;
	
	for(i in TagData){
		if(idols-- <= 0){break;}
		TextSummary[i] = [];
	}
	for(i of window['JSON-llsif-arena']){
		if('num' in i){
			const temp = i.opponent;
			for(j in temp){
				if('name' in temp[j]){ //名前が設定されており
					if(temp[j].name in TextSummary){ //定義済みであれば
						TextSummary[temp[j].name].push(Localization.ARENA_ROUND_NUMBER[lang_select](i.num));
					}
				}
			}
		}
	}
	
	let Output = "";
	for(i of Object.keys(TextSummary)){
		Output += 
		`<tr>
			<th>${WriteFaceN(TagData[i].x, TagData[i].y)}</th>
			<th>${TagData[i].names[lang_select]}</th>
			<td>${TextSummary[i].length}</td>
			<td>${TextSummary[i].join(", ")}</td>
		</tr>`;
	}
	document.getElementById("Summary-Contents").innerHTML = Output;
}


//■初期化処理
function initialize() {
	InitializeSelectBox();
	WriteMessage();
	WriteSummary();

	document.addEventListener('SetLanguage', (e) => {
		RefreshSelectBox();
		WriteMessage();
		WriteSummary();
	});

	//■デバック用
	if(isDebugMode) {
		//◆描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`ライブ♪アリーナまとめ\n初期化処理： ${TimeOutputEnd - TimeLoadingStart}ミリ秒`);
	}
}