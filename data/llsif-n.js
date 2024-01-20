//■デバッグモード
const isDebugMode = (location.search.substring(1).split('&').indexOf('debug') >= 0);
if(isDebugMode) {
	//デバッグモードであることを表示
	document.title = '[debug]' + document.title;
	document.bgColor = '#dce';
	document.getElementById("TitleName").innerHTML += "*";
	document.getElementById("TitleName").classList.add("title-debug");
	document.getElementById("BackToMain").href += "?debug";
}

//■タグデータ
const SchoolData = [
	{'names' : ['青藍高校','Seiran High School']   , 'color' : '#abe'},
	{'names' : ['東雲学園','Shinonome Academy']   , 'color' : '#fa9'},
	{'names' : ['千歳橋高校','Chitose Bridge High School'] , 'color' : '#9db'},
	{'names' : ['藤黄学園','Touou Academy']   , 'color' : '#fea'},
	{'names' : ['紫苑女学院','Shion Girls Academy'] , 'color' : '#dcf'},
	{'names' : ['Y.G国際学院','Y.G. International Academy'], 'color' : '#cea'}
];

//■■サブルーチン
//■転入生の顔アイコンを出力
function DrawFace(target){
	if(target === undefined){
		return `<div class="face_empty"></div>`;
	} else {
		return `<div class="face" style="background-position: right ${target.x*64-576}px bottom ${target.y*64-384}px"></div>`;
	}
}

//■■出力
//■ボタンの描画
function DrawButtons(idx) {
	idx = +idx;

	const buttonField = document.getElementById("ButtonField");
	buttonField.innerHTML = '';
	if(idx === -1){
		buttonField.classList.remove("has_button");
		return false;
	}

	const target = NData[idx];
	const profileButton = document.createElement('span');
	profileButton.textContent = 'Profile';
	profileButton.classList.add('jump');
	profileButton.addEventListener('click', () => {
		buttonField.querySelector('span.jump.active')?.classList.remove('active');
		profileButton.classList.add('active');
		history.replaceState({ndata: { idol: idx }}, '');
		DrawProfile(target);
	});
	let Output = [profileButton, ...target.card.map( (card, index) => {
		const cardButton = document.createElement('span');
		cardButton.textContent = `${index+1}`;
		cardButton.classList.add('jump');
		cardButton.addEventListener('click', () => {
			buttonField.querySelector('span.jump.active')?.classList.remove('active');
			cardButton.classList.add('active');
			history.replaceState({ndata: { idol: idx, card: index }}, '');
			DrawCardData(target, index);
		});
		return cardButton;
	})];

	Output.forEach(button => buttonField.appendChild(button));
	buttonField.classList.add("has_button");
	// simulate a click on the profile button to draw the profile
	profileButton.dispatchEvent(new MouseEvent('click'));
}

//■プロフィールの描画
function DrawProfile(target) {
	if(target === undefined){ return false;}
	
	const Profile = `
	<h3>${target.names[lang_select]}${Localization.get('PROFILE_SUFFIX')}</h3>
	<div class="profile-container">
		${DrawFace(target)}
		<table class="profile-table">
			<tbody>
				<tr>
					<td style="width: 40%">${Localization.get('SCHOOL_LABEL')}</td>
					<td>${SchoolData[target.y].names[lang_select]}</td>
				</tr>
				<tr>
					<td>${Localization.get('GRADE_LABEL')}</td>
					<td>${Localization.get('TRANSFER_GRADE')(target.grade)}</td>
				</tr>
				<tr>
					<td>${Localization.get('BIRTHDAY_LABEL')}</td>
					<td>${Localization.get('TRANSFER_BIRTHDAY')(...target.birth)}</td>
				</tr>
				<tr>
					<td>${Localization.get('BLOOD_TYPE_LABEL')}</td>
					<td>${Localization.get('TRANSFER_BLOOD_TYPE')(target.blood)}</td>
				</tr>
				<tr>
					<td>${Localization.get('HEIGHT_LABEL')}</td>
					<td>${Localization.get('TRANSFER_HEIGHT')(target.height)}</td>
				</tr>
				<tr style="word-break: keep-all;">
					<td>${Localization.get('MEASUREMENTS_LABEL')}</td>
					<td>Ｂ${target.body[0]}<wbr>Ｗ${target.body[1]}<wbr>Ｈ${target.body[2]}cm</td>
				</tr>
				<tr>
					<td>${Localization.get('HOBBY_LABEL')}</td>
					<td>${target.hobbies[lang_select]}</td>
				</tr>
			</tbody>
		</table>
	</div>`;
	
	const PartnerText = 
	('texts' in target ?
		`<h4>${Localization.get('PARTNER_TEXT_LABEL')}</h4>`
		+ target.texts.map( text => `<div class="text_partner">${text[lang_select]}</div>`).join('')
	:
		''
	);
	document.getElementById("NViewer").innerHTML = Profile + PartnerText;
}

//■カード個別データの作成
function DrawCardData(targetChar, num){
	if(targetChar === undefined){ return false;}
	const targetCard = targetChar.card[num];
	
	let Output = `<h3>${targetChar.names[lang_select]}${Localization.get('TRANSFER_CARD_HEADER')(num, targetCard.num)}</h3>`
	+ ('memos' in targetCard ? '<p style="font-size: 90%">' + targetCard.memos[lang_select] + '<\/p>' : '')
	
	if('texts' in targetCard){
		Output += `<h4>${Localization.get('PARTNER_TEXT_LABEL')}<\/h4>`;
		for(temp3 of targetCard.texts){
			Output += '<div class="text_partner">' + temp3[lang_select] + '<\/div>';
		}
	}
	
	const SideStoryText = 
	('side' in targetCard ? 
		`<h4>${Localization.get('TRANSFER_SIDETITLE')(targetCard.sidetitles[lang_select])}</h4>`
		+ targetCard.side.map( text => {
			const nameTemp = ('n' in text ? text.n : ('namealts' in targetChar ? targetChar.namealts[lang_select] : targetChar.names[lang_select]));
			const faceTemp = DrawFace('f' in text ? NData.find(idol => idol.names[0] == text.f) : targetChar);
			return `
			<div class="text-story">
				${faceTemp}
				<div class="text">
					<b>${nameTemp}</b><br>
					${text.ts[lang_select]}
				</div>
			</div>`;
		}).join('')
 	: '' );
 	
	const FootNote = 
	('feet' in targetCard ?
		`<p style="font-size: 90%">${targetCard.feet[lang_select]}</p>`
	: '');

	document.getElementById("NViewer").innerHTML = Output + SideStoryText + FootNote;
	document.getElementById("NViewer").scrollTop = 0;
}


//■■初期処理
//■JSONデータベースの読み込み
const TimeOutputStart = performance.now();

const JSONPath = 'data/llsif-n.json';
let NData = null;
fetch(JSONPath)
	.then(response => response.json())
	.then(data => {
		NData = data;
		initialize();
	}
);

const TimeOutputLoaded = performance.now();

//■初期化処理
function initialize() {
	//セレクトボックスに要素を追加
	NData.forEach((temp, idx) => {
		const option = document.createElement("option");
		option.text = temp.names[lang_select];
		option.value = idx;
		option.style.cssText = 'background-color: ' + SchoolData[temp.y].color;
		document.getElementById('PullDownMenu').appendChild(option);
	});
	//警告解除
	document.getElementById('NViewer').classList.remove('output-box-default');
	document.getElementById('NViewer').innerHTML = `
		<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">
			${Localization.get('VIEWER_BLANK')}
		</div>`;

	// switch language of rendered elements when user changes site language
	document.addEventListener('SetLanguage', () => {
		document.getElementById('PullDownMenu').querySelectorAll('option').forEach(opt => {
			if (opt.value >= 0) {
				opt.text = NData[opt.value].names[lang_select];
			} else {
				opt.text = Localization.get('TRANSFER_SELECT_DEFAULT');
			}
		});
		// simulate a click on the active story/profile button (if any) to redraw the content in the new language
		document.querySelector('span.jump.active')?.dispatchEvent(new MouseEvent('click'));
	});

	if(history.state && history.state.ndata) {
		const state = history.state.ndata;
		document.getElementById('PullDownMenu').value = state.idol;
		DrawButtons(state.idol);
		if(state.card) {
			DrawCardData(NData[state.idol], state.card);
			document.getElementById("ButtonField").querySelector('span.jump.active')?.classList.remove('active');
			document.getElementById("ButtonField").children[state.card + 1].classList.add('active');
			// drawing the buttons can push a cardless state, so replace the original state if it had a card
			history.replaceState({ndata: state}, '');
		}
	}
	
	//デバック用
	if(isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`スクフェス 転入生データベース\n読み込み： ${TimeOutputLoaded - TimeOutputStart}ミリ秒\n初期化: ${TimeOutputEnd - TimeOutputLoaded}ミリ秒`);
	}
}