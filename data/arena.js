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
const IconSize = 64;

//■ライブ♪アリーナの各種データ
const ArenaData = [
	{'titles': ['銀河の乙女アンドロメダ',''],
	'num': 1,
	'sub': '開催：2020/10/31 - 2020/11/25',
	'offset': 0,
	'opponent': [
		{'num': 'OP', 'text': 'これより、ライブ♪アリーナ「銀河の乙女アンドロメダ」<br>を開催いたします！　スクールアイドルの皆さんのステージを<br>どうか最後までお見逃しなく！'},
		{'name': 'Saki', 'text': 'さあさあ、私と応援合戦だよー！<br>会場のみんなを元気いっぱいにするのは私だからねっ！'},
		{'name': 'Sachiko', 'text': 'クク……我の秘めたる力、今こそ放たれん！<br>とくと見よ、我の織り成す華麗なる宴（ライブ）を！'},
		{'name': 'Fumi', 'text': '私もギョロちゃんも気合充分です！<br>練習の成果、発揮できるように頑張りますっ！'},
		{'name': 'Ranpha', 'text': 'おどりの練習も、歌の練習もがんばったヨ！<br>だからワタシ、たくさんきらきらするアル！'},
		{'name': 'Mutsuki', 'text': '吾輩とこのスクールアイドルロボットで<br>このライブを大いに盛り上げて見せようではないか！'},
		{'name': 'Yuri', 'text': 'あたしもシビれるライブするからさ<br>あんたもガツンとカッコいいライブ見せろよな'},
		{'name': 'Koyuki', 'text': '今日のために涼ちゃんたちと練習頑張ってきたんだもん<br>小雪のステージでみんなに楽しんでもらいたいな'},
		{'name': 'Yukari', 'text': 'うふふっ。ゆかり、今日がとっても楽しみだったんです！<br>あなたに負けないくらい会場のみなさんを盛り上げますね♪'},
		{'name': 'Sakura', 'text': '……もう緊張、してない<br>あなたとのセッション……頑張るから……見てて'},
		{'name': 'Coco', 'text': 'このステージから見るみなさんの笑顔、すっごくステキです！<br>ココがもーっと笑顔になるようなライブをしますねっ♡'},
		{'name': 'Chiduko', 'text': '風紀を守るスクールアイドルとして<br>わたくしは負けられませんわ！<br>愛と風紀の底力、見せてさしあげます！'},
		{'name': 'Yuuka', 'text': '本日の放送は特別です！<br>私、桐原優香からステージ上から会場のみなさんへ<br>このひとときを楽しんでもらえるライブをお届けです♪'},
		{'name': 'Sana', 'text': '私にかかればこのステージを盛り上げるのも簡単よ<br>な、なによっ！あんたに負ける気なんてしないんだから！'},
		{'name': 'Fumie', 'text': 'うーん、このステージで歌って踊るのすっごく楽しいですね！<br>まだまだ燃え尽きるなんてできないですっ！<br>ややっ、あなたがライバルですか？私もまだまだやれますよ！'},
		{'name': 'Jennifer', 'text': 'このボルテージ、最高ね！でも、まだまだいけるでしょう？<br>それにあなたのその顔、みんなをもっと楽しませるって顔ね！<br>でも私だって負けないくらい盛り上げるわ！'},
		{'name': 'Ayumi', 'text': 'ライブも良い感じに盛り上がってきたわね！<br>次はこの……あたしとセッションしてもらおうかしら'},
		{'name': 'Rika', 'text': 'この科学反応の大きさは……予想外だな<br>事実は仮説をいとも容易く超える……か<br>やはりスクールアイドルは「科学」、だね'},
		{'name': 'Leo', 'text': 'みんなで一緒に歌うこと、レオ好き<br>好きなことなら、レオ、負けない！<br>ガオオォォォーーーーーーーッ！！！'},
		{'name': 'Ru', 'text': 'わっ、私はこんなところにいるべきではないんですが……<br>……いえ、もう自分に負けないと決めたんです……！<br>どうか……セッションしてくれませんか？'},
		{'name': 'Akiru', 'text': 'どっちがより魅力的か、私と勝負しようって言うのね？<br>私には、今までスクールアイドルとして努力してきた<br>プライドがあるもの。負けるわけがないわ！'},
		{'name': 'Isabella', 'text': 'スクールアイドルは、不可能を可能にする……<br>貴様にその資格があるか、私が見定めてやろう！'},
		{'name': 'Christina', 'text': 'ライブって、スクールアイドルたちが重なって美しく形作る<br>あやとりのようなものだと思ってるんです<br>あなたはどんな糸の紡ぎを見せてくれるんでしょうか'},
		{'name': 'Misaki', 'text': 'あたしは楽しいことが好きなの。色んな人に出会って<br>色んな話を聞いて、色んなことを経験して……<br>あなたとのセッションは、どんな味がするのかしら？'},
		{'name': 'Hitomi', 'text': '熱狂し、騒ぎ、歌い、踊る……滾るな！<br>さあ、俺たちもセッションするぞ！'},
		{'name': 'Yumi', 'text': 'あなた……来ていたのね。相手が誰でも、慢心なんてしない<br>百尺竿頭に一歩を進む……私の好きな言葉よ<br>心に刻んでいきなさい、私達のセッションを'},
		{'name': 'Nagi', 'text': '凪はねー、絵描くの好きー<br>子どもたちがよろこんでくれるから<br>ここでも頑張るぞー'},
		{'name': 'Sakuya', 'text': 'お……お前！　……いや、なんでもない<br>てっきり機関の者が刺客を差し向けてきたのかと……<br>闇の世に生きる私にとって、相手に不足なし！'},
		{'name': 'Akemi', 'text': 'これこそ……　これこそ私が思い描いていた<br>最強のシチュエーション……！　ぼやぼやしてると<br>最高の一瞬をカメラに収め損ねちゃうわね！'},
		{'name': 'Minami', 'text': 'あら、いらっしゃい♪<br>まずはお腹いっぱい、私のご飯を食べてくださいね<br>……食べ終わりました？　じゃあ、セッションしましょ♪'},
		{'name': 'Tsurugi', 'text': 'キミか！　よく来たね。さあ、私とセッションを……<br>ん？　いや、この竹刀は持ってないと落ち着かなくてね<br>さて、私の全力をもって相手を務めさせていただくよ！'},
		{'num': 'ED', 'text': 'ライブ♪アリーナ「銀河の乙女アンドロメダ」これにて終了<br>となります！　皆さんの闘志がビシビシ伝わってきましたね！<br>次回のライブアリーナ挑戦者をお待ちしています！'}
	]},
	{'titles': ['シリウスってシリアスみたい',''],
	'num': 2,
	'sub': '開催：2020/11/30 - 2020/12/25',
	'offset': 0,
	'opponent': [
		{'num': 'OP', 'text': 'ライブ♪アリーナ「シリウスってシリアスみたい」開催です！<br>スクールアイドルのアドリブや表現力にも目が離せません！'},
		{'name': 'Iruka', 'text': 'ごめん！　君に謝らないといけないことがあって……<br>須田は、君がとっておいたおやつを食べました……<br>えっ？　これはシリアスじゃない？'},
		{'name': 'Fuu', 'text': '走れなくなるなんて……悲しいな……<br>あーっ！　もう、わかんないよーっ！<br>シリアスってどうするのが正解なの！？'},
		{'name': 'Mikoto', 'text': 'シリアス？　風紀に関係があることでしょうか？<br>なるほど……。では……コホン！<br>あなたにこの風紀が守れますか？　む、少し違います？'},
		{'name': 'Maria', 'text': 'いつもフラメンコばかりだから<br>シリアスな表現は苦手だと思った？<br>情熱を表現するのだって、シリアスは必要なのよ！'},
		{'name': 'Aya', 'text': 'シリアスな感じ……？　わ、私にうまくできるんでしょうか？<br>すぅ……はぁ……。こ、ここは通しましぇん！<br>あぁっ！　噛んでしまいました……。ううっ'},
		{'name': 'Haruka', 'text': 'お姉ちゃんなんか知らない！　うーん、こうじゃないかも？<br>……お姉ちゃんなんか……って、あなた今笑いました？<br>むぅ……私は真剣なんですよ？'},
		{'name': 'Yu', 'text': 'ここは……どこ？　私は……だれ……？<br>（あれ……？　あんまり……かっこよく、ないかも……）'},
		{'name': 'Fumi', 'text': 'もしも、ギョロちゃんに何かあったら……<br>考えるだけでもイヤです～っ！　うわ～ん！<br>歌って踊って、このことを忘れますっ！'},
		{'name': 'Yukari', 'text': '新曲のゆかりのパートが少なくて悲しいんです……<br>えっ？　音痴？　そ、そんなぁっ！<br>ゆかりは音痴ではないと思うんですけど……？'},
		{'name': 'Saki', 'text': 'そんな悲しそうな顔してどうしたの？　あっ、そうだ！<br>私が君を応援で励ましてあげよーっ♪<br>えっ！？　ち、違ったの？'},
		{'name': 'Kasane', 'text': '私としたことが……やっちゃったよぉ……<br>作ってた衣装をうっかり汚しちゃったの！　うわーん！<br>悔しいから君に衣装作らせて！　まずは採寸から！'},
		{'name': 'Himeno', 'text': 'そう……わたしとあなたでは意見が違うんですね……<br>良くない写真なんてないんです！　この写真のあなたは<br>ぼーっとした顔かもしれませんが、この1枚もいいんです！'},
		{'name': 'Rebecca', 'text': 'スクールアイドルの世界もショギョウムジョウなのよ<br>いつだって、私たちのベストを更新しないとね！<br>……ちょっと真面目すぎたかしら？'},
		{'name': 'Yuka', 'text': 'シリアスかぁ～。うーん、あっ！　そうだ！<br>ふふーん、この先に進みたければ私とダンス勝負だ♪<br>バンチョーっぽく言ってみたんだけど、どうかな？'},
		{'name': 'Shun', 'text': 'しまった、間違えちゃった……<br>この後太郎におやつあげようと思ってたのに<br>おやつじゃなくて、シリアルの袋持ってきちゃったよ～！'},
		{'name': 'Reine', 'text': 'うぅ、ぐすっ……どうしてそんなこというのぉ？<br>……うーん、やっぱ麗音に涙は合わない気がしない？<br>そんな麗音もかわいい？　えへへ、照れちゃう♪'},
		{'name': 'Rakshata', 'text': 'あ、甘口だって聞いたんですけど……<br>このカレー……ワタシには辛くて……<br>ごめんなさい～っ！　ちょっと食べられないです～！'},
		{'name': 'Marika', 'text': 'シリアス～……シリアス～……うーん……<br>あ！　ちょっと悲しい感じの恋の歌～とかシリアすにする？<br>あはは～、考えることに飽きちゃったの、バレた？'},
		{'name': 'Akira', 'text': 'シリアス？　シリウスのこと？　今度、星を見に行く？<br>アタシ、綺麗に見える場所知ってるんだ！<br>もちろん、そこまでは自転車で一緒に行こう！'},
		{'name': 'Jennifer', 'text': '正義は勝つ！　と言いたいところではあるけれど……<br>押し付けるものでもないしね。うーん、悩むわ……<br>こういう時は歌ってスッキリするのが一番ね！'},
		{'name': 'Mizuki', 'text': 'あたしの名字、「よしかわ」じゃなくて「きっかわ」だよ！<br>えっ！？　ごめん、ちょっと怖い顔になってた……？<br>怒ったつもりじゃないんだよ～！'},
		{'name': 'Ryo', 'text': 'シリアスな演技はあまり得意ではないんだ<br>できない訳ではないけれど……<br>やっぱり観てくれる人には笑っていてほしいだろう？'},
		{'name': 'Sayuri', 'text': 'サバゲーでも、ステージでも、常に真剣に！<br>それが私のモットー！　何事も真剣さは大事だよ！'},
		{'name': 'Seira', 'text': 'まあ、そうだったんですね……。そんなことが……<br>あら、お芝居だったんですか？　お上手です！<br>私も悠弓ちゃんとお芝居してみたいなあ♪'},
		{'name': 'Nanaka', 'text': 'うーん、スクープの予感しかしない！　君はどう思う？<br>これまでセッションしてきたスクールアイドルについて……<br>おっと！　はぐらかしても無駄だからね！'},
		{'name': 'Tsurugi', 'text': 'シリアスって、真面目って意味だっけ？<br>それならこれからのセッションもシリアスにやらないと！'},
		{'name': 'Sakuya', 'text': 'フフフ……なんて私向きなテーマなの！<br>この先には機関の者がいるわ。それでも行きたいと……<br>って、ちょっと！　お前、私の話聞いているの！？'},
		{'name': 'Yumi', 'text': '困ったわ……。シリアスな表現なんてできるかしら……<br>あなた、丁度いいわ！　私のフルートの演奏聴いてくれない？<br>どう感じたか、感想がほしいの！'},
		{'name': 'Christina', 'text': 'どうしましょう……。あら、あなたもお悩みですか？<br>もしよければ、一緒にお祈りしませんか？<br>何かわかるかも……？　なんて、ちょっとした冗談です♪'},
		{'name': 'Minami', 'text': 'つらいことがあったら、お姉ちゃんが話きいてあげるよ～<br>なんでもは難しいけど、できることからやってみよう？<br>大丈夫♪　一緒に頑張ろうね'},
		{'num': 'ED', 'text': '「シリウスってシリアスみたい」これにて終了です！<br>スクールアイドルたちの可愛い姿が目白押しでしたね！<br>それでは次回のライブ♪アリーナもお楽しみに！'}
	]},
	{'titles': ['モー突進！タウロスダッシュ',''],
	'num': 3,
	'sub': '開催：2020/12/31 - 2021/01/25',
	'offset': 0,
	'opponent': [
		{'num': 'OP', 'text': 'ライブ♪アリーナ「モー突進！タウロスダッシュ」開催です！<br>今回はなんとライブ＆リレーで進行！<br>スクールアイドルたちが会場に福をお届けします！'},
		{'name': 'Yuri', 'text': '全力でライブした後に、全力ダッシュするのか！？<br>トップバッターって責任重大じゃないか！<br>かっこ悪いとこ見せらんないし、頑張るよ'},
		{'name': 'Koyuki', 'text': 'ライブは自信あるんだけど、リレーはちょっと自信ない……<br>小雪、走るのあまり速くないけど大丈夫かな……？'},
		{'name': 'Mikoto', 'text': '足元には気をつけて、ただし全力で歌って走ります！<br>それでも風紀の乱れも見逃しませんからね！'},
		{'name': 'Yu', 'text': 'すー、はー……よし。頑張るぞー<br>（バトン、落とさないようにしなきゃ）'},
		{'name': 'Mutsuki', 'text': '今日のためにたくさんシミュレーションしてきたからな！<br>スクールアイドルロボのメンテナンスもばっちりだ！'},
		{'name': 'Coco', 'text': 'みなさんから受け取ったバトン、大切につないでいきますね！<br>そして見てくれている人に沢山笑ってもらえるように<br>まずはライブを頑張りますっ♪'},
		{'name': 'Ranpha', 'text': 'ワタシ、落とさないように走るの得意ネ<br>出前のためにがんばってるアル！<br>ヘイ、お待ち！　まずはライブしますヨー♪'},
		{'name': 'Sachiko', 'text': '深淵の魔術師の名にかけて、このバトンは必ずつなぐ！<br>……それは関係あるのか、だと？　な……いや、ある！'},
		{'name': 'Sakura', 'text': 'バトン渡しにきてくれた人すごく息あがってた……<br>ライブして、走って……疲れそうだけど<br>……さゆり軍曹のおかげで前より体力ついたし、大丈夫かな'},
		{'name': 'Aya', 'text': '皆さんが歌って走っているのを見てるだけで汗が……！<br>わ、私……上手くバトンを渡せるでしょうか……？'},
		{'name': 'Chiduko', 'text': 'バトンをつないで、見てくれている方を笑顔にする……<br>こんなに愛に満ちたライブができるなんて、素敵です♪'},
		{'name': 'Rika', 'text': 'スクールアイドルたちのライブパフォーマンスの笑顔と<br>真剣に走る表情……。会場もどんどん盛り上がっている<br>さあ、私も大成功のためにひと肌脱ごうじゃないか'},
		{'name': 'Rebecca', 'text': 'みんなで協力してライブを盛り上げるって<br>普段からやっているけれど、こんなに大人数なのは初めて！<br>ショウカイッシン、ってこれのことかしら？'},
		{'name': 'Yuuka', 'text': '放送委員の血が騒いでしまうのか、実況したくなります……！<br>でもこれからは私のステージですもんね、我慢です！'},
		{'name': 'Himeno', 'text': '受け取ったバトン、皆さんの思いがつまってて……<br>私も絶対つなげるぞーって気持ちになりました！<br>まずは深呼吸してから……。頑張りますっ！'},
		{'name': 'Kasane', 'text': 'うーん、走ったりもするなら<br>もうちょっと違う衣装にすれば良かったかな？<br>まあ、大丈夫か！　やるぞーっ'},
		{'name': 'Ru', 'text': '走るのは得意なので、心配はしてないんですけど……<br>むしろステップを間違えないか不安です……'},
		{'name': 'Yuka', 'text': '体力には自信あるからねー！<br>めいっぱいダンスで盛り上げて、ばっちりバトンも届けるよ！'},
		{'name': 'Akiru', 'text': '走ってる時も美しく見えるように気をつかわないとね♪<br>私は何事にも気を抜かないわ'},
		{'name': 'Leo', 'text': 'レオ、体うごかすの、得意<br>バトン、落とさない。ちゃんと次に、渡す！'},
		{'name': 'Seira', 'text': 'ふふっ♪　頑張っている皆さんを見て<br>私も負けられないなって思ったんです！<br>私の歌を聴いて、私の走る姿を応援してくれると嬉しいです！'},
		{'name': 'Isabella', 'text': 'イザベラもみんなみたいに頑張るからね♪<br>……い、いや照れてなどいないっ！<br>ええい、絶対にバトンを繋げるからな！'},
		{'name': 'Akemi', 'text': 'シャッターチャンスは逃さなかったわよ！<br>色んなスクールアイドルが歌って踊って走る姿……！<br>こんなのお宝ショットに決まっているじゃない！'},
		{'name': 'Hitomi', 'text': 'これはこれで……戦うライブステージかもしれねぇ……！<br>燃えてきたぜ、俺は俺の全力を出し切る！'},
		{'name': 'Mizuki', 'text': 'これってスクールアイドルの運動会ーって感じだよね！<br>まあ今は冬だからちょっと時期が外れてるけど……<br>寒い時こそ体を動かすのは気持ちいいね！'},
		{'name': 'Nanaka', 'text': '校内新聞の次の目玉にするさ！<br>朱美が良い写真をたくさん撮ってくれたからね！<br>さあ、私も盛り上げていくさ！'},
		{'name': 'Ryo', 'text': 'もちろん、走っている時もファンサービスを忘れないよ<br>いついかなる時も立ち振る舞いは気を配らないとね'},
		{'name': 'Nagi', 'text': 'よーし、凪もかけっこ、がんばるぞー<br>かけっこって言い方が小学生だとー？<br>失礼だぞー。凪は3年生なんだぞー'},
		{'name': 'Sayuri', 'text': '普通に走るだけだと面白くないかなあって思って<br>サバゲーのアイテムだそうとしたらみんなに止められちゃった<br>ほふく前進なら……えっ？　見えないからだめ？'},
		{'name': 'Misaki', 'text': 'アンカーはこの私！　手品をしながら走るつもりよ<br>涼みたいなことを言うけれど……<br>やっぱ見てくれる人に楽しんでもらいたいもの'},
		{'num': 'ED', 'text': 'ライブ♪アリーナ「モー突進！タウロスダッシュ」<br>これにて終了です！　見ごたえあるステージでしたね！<br>また次回のライブ♪アリーナをお楽しみに！'}
	]},
	{'titles': ['足りないふたごのチョコレート',''],
	'num': 4,
	'sub': '開催：2021/01/31 - 2021/02/25',
	'offset': 0,
	'opponent': [
		{'num': 'OP', 'text': 'ライブ♪アリーナ、開幕です！　と、宣言したいところですが<br>特別賞として用意したチョコレートが1つ行方不明に……<br>捜索をお手伝いしていただける方、大募集です！'},
		{'name': 'Haruka', 'text': 'あなたもチョコレート、探しているんですか？<br>私も探してて……。え？　違います！<br>お姉ちゃんにあげるチョコレートは別に用意してありますっ！'},
		{'name': 'Iruka', 'text': 'もぐもぐ……おいしい～っ！<br>あ、これは違うよ！？　チョコレートじゃなくてグミ！<br>ほらこの袋見て！　ねっ、グミでしょ？'},
		{'name': 'Maria', 'text': 'チョコレート？　今日すれ違った子たちも持っていたわね……<br>それらしいのも見ていないの。ごめんなさい、わからないわ<br>お詫びに今度一緒にお出かけしましょう！　ダメかしら？'},
		{'name': 'Fuu', 'text': 'みんなとチョコレート交換したんだ～！<br>君も食べる？　えっ？　特別賞のチョコレート？<br>うーん……。それっぽいチョコレートは見てないなあ'},
		{'name': 'Sakura', 'text': '風紀委員がたくさん持っていったのは見たけど……<br>本当にたくさんあって……。特別賞があったかはわからない'},
		{'name': 'Yukari', 'text': '口にチョコレートがついてる……って、早く教えてください！<br>恥ずかしいです～……。あ、食べてたのは違いますよ？<br>蘭花ちゃんからもらったチョコレートまんですっ'},
		{'name': 'Coco', 'text': 'ふわぁ～！　チョコレートのいい匂い♡<br>いい匂いとみなさんの楽しそうな空気で幸せになりますねっ<br>幸せをおすそ分けです♡　はい、どうぞっ'},
		{'name': 'Fumi', 'text': '特別賞、ですか？　あっ、そういえば……<br>ちょっと豪華なチョコレートを持ってる人がいたような？<br>向こうのステージの方に行くみたいでした'},
		{'name': 'Ranpha', 'text': 'ニーハオ♪　アナタ、疲れた顔してマスネー<br>甘いもの食べて、元気出すアル！<br>チョコレートまんヨ！　お店に食べにきてネ！'},
		{'name': 'Mikoto', 'text': 'ピピーッ！　走らないでください！　えっ？<br>風紀委員がたくさんチョコレートを持っていた……？<br>確かに渡しはそうですが、チョコレートは持っていませんよ？'},
		{'name': 'Sana', 'text': 'な、何って……チョコレートよ！　見ればわかるでしょ！<br>そいじゃなくて特別賞のチョコレート？　な、なによ！<br>これは違うわよ！　濡れ衣はやめなさいよね！'},
		{'name': 'Shun', 'text': 'じゃーん！　凄いでしょ、このラッピング♪<br>豪華なチョコレートに見えるでしょ～？　私の力作なんだよ！<br>多分その人は私だと思うけど……。特別賞ではないよ～'},
		{'name': 'Akira', 'text': 'あはは、アンタもたくさんチョコレートもらったんだ？<br>アタシもちょっと持って帰るの大変そうなくらいもらったよ<br>豪華なチョコレート？　うーん、それは見てないなあ'},
		{'name': 'Rakshata', 'text': '特別賞のチョコレートについて、ですか？<br>あっ、そういえばもう1つのチョコレートと並べるものって<br>さっき誰かが言っていたような……？'},
		{'name': 'Ayumi', 'text': '特別賞のことなんて、私は何も知らないわよ！<br>だってちゃんと見てないもの！　見てたら教えるわ<br>……チョコレートをくれたら、だけど'},
		{'name': 'Fumie', 'text': 'ややっ、いいところに！　見てくださいっ！<br>みなみちゃんにチョコレートのフィギュアをもらったんです！<br>むむ？　これは特別賞ではないですよ！'},
		{'name': 'Akiru', 'text': '不思議なかたちで、豪華なチョコレート？<br>それが特別賞なの？　思っていたものと違うわね……<br>悪いけど、私はそんなチョコレートは見ていないわ'},
		{'name': 'Reine', 'text': 'う～ん、そんなチョコレートは持ってないけど……<br>じゃんっ！　ハートのチョコレートはあるよぉ♪<br>あ、でもでも！　さっき他の学校の子が持ってたかも？'},
		{'name': 'Marika', 'text': '特別賞のチョコレート探すの飽きちゃったんだよね～<br>みんなチョコレート持っているからわかんないし<br>何より見つからないし！'},
		{'name': 'Kasane', 'text': 'う～ん……。見つからないなぁ……キミも探してるの？<br>特別賞、ラッピングされていないんだって！<br>ラッピングされる前になくなっちゃったみたいなの'},
		{'name': 'Sakuya', 'text': 'なくなったチョコレート……。クッ機関め……！<br>はっ！　な、なによお前！　いきなりびっくりするじゃない！<br>なくなったのは機関の陰謀よ！　間違いないわ！'},
		{'name': 'Yumi', 'text': 'ラッピングされていないチョコレートなんて<br>見ればわかる、と思っていたんだけど……<br>意外と見つからないのよね……。なんだか悔しいわ……'},
		{'name': 'Tsurugi', 'text': 'さっき髪の長い女の子が何かを抱えて走って行ったけど……<br>まさか、あれが特別賞のチョコレートだったり……<br>する訳ないか～！　そうだったら惜しいことをしたな……'},
		{'name': 'Christina', 'text': '髪の長い女の子とすれ違わなかったか、ですか？<br>たくさんチョコレートを持っている方は見かけましたけど<br>多分、お探しの方とは違いますよね……？'},
		{'name': 'Nagi', 'text': '凪はねー、見てないよー。チョコレート探してるんだよねー？<br>頑張りすぎも、よくないぞー<br>凪といっしょに、お絵かきしよー？'},
		{'name': 'Akemi', 'text': 'これは特ダネの予感だわ！　ベストショット、さすが私！<br>ななかちゃんにもこの写真を渡さないとね！<br>特別賞の手がかりになるかもしれないし、見てみる？'},
		{'name': 'Isabella', 'text': '髪の長い、急いでいる女の子……？<br>あいにくだが、私はそれらしい人影は見ていないな<br>あ……。今あっちにいる彼女がそうじゃないのか？'},
		{'name': 'Hitomi', 'text': 'あーっ！　やっぱりヒラヒラは落ち着かねえ……！<br>ん？　なんだ、お前も探しているのか？<br>俺は特別賞とやらは渡されてないぞ'},
		{'name': 'Misaki', 'text': 'あら？　やっぱりあなたも探しているのかしら？<br>ラッピングされてないチョコレートを持っている女の子……<br>やだ、私さっきすれ違ったわ！　気づかなかったわ……！'},
		{'name': 'Minami', 'text': 'えっと……。お探しのものって、これかな？<br>実は割れてるのを見つけちゃって、作り直してみたの<br>ちょっと恥ずかしいから、私と一緒に行ってくれるかな……？'},
		{'num': 'ED', 'text': 'まさか作り直していただいていたとは……！<br>探してくださったみなさん、ご協力ありがとうございました！<br>次回のライブ♪アリーナにもご参加よろしくお願いします！'}
	]},
	{'titles': ['オトメ爛漫、春一番',''],
	'num': 5,
	'sub': '開催：2021/02/28 - 2021/03/25',
	'offset': 0,
	'opponent': [
		{'num': 'OP', 'text': 'ライブ♪アリーナ「オトメ爛漫、春一番」開幕です！<br>スクールアイドルたちが春をお届け！？<br>なんと春の風物詩を持ってきてくれたそうですよ！'},
		{'name': 'Yu', 'text': 'あ、桜……つぼみ、開きそうだね<br>いっぱい咲いたら、一緒にお花見したいな……なんて'},
		{'name': 'Mutsuki', 'text': '春といえば花粉症だろう！<br>吾輩は空気清浄機つきのロボがあるからな！<br>悩まされたことはないぞ！　使ってみるか？'},
		{'name': 'Sachiko', 'text': '暖かくなることは良いが……へくちっ！<br>うう、くしゃみが……。はっ！？　み、見たのか？<br>見たことは今すぐ忘れるんだ、いいな！？'},
		{'name': 'Haruka', 'text': 'じゃーん！　お雛様です！<br>学校のみんなで作ったんですよ♪<br>お雛様を見ると春だなぁって思いませんか？'},
		{'name': 'Koyuki', 'text': '小雪たちはひなあられを作ってきたんだよ<br>他の子たちとちょっと被っちゃったかな……？'},
		{'name': 'Maria', 'text': '日本の春って素敵よね！　だってサクラやヒナニンギョウ……<br>可愛らしくて、あたたかくて……<br>今日はそんな雰囲気のステージにしたいなって思っているの'},
		{'name': 'Yuri', 'text': 'なんか……あたしがお雛様ってガラじゃないっつーか<br>ちょっと、可愛すぎねーか？　ギャップがいい？<br>……な、なんだよそれ。褒めてるのか？'},
		{'name': 'Saki', 'text': '桜って、がんばれーっ！　って応援したら早く咲くかなぁ？<br>ステージにもたくさん咲けばいいのに～っ！'},
		{'name': 'Aya', 'text': 'さち子ちゃん、つらそうだったけど大丈夫でしょうか……？<br>うぅ……花粉症の話をしていたら<br>なんだか私も鼻がむずむずしてきました'},
		{'name': 'Iruka', 'text': 'あはは～っ！　えーい、もっと花吹雪降らせちゃお～！<br>あっ、ごめん！　思いっきり顔にかかっちゃったね……<br>大丈夫？　服の中に入ってない？'},
		{'name': 'Rika', 'text': 'ああ、私のお雛様は十二単じゃなくて、白衣を着ているんだ<br>……あー、これは誰かに言われたからそうしたのではなくて<br>私が、私らしくしたくてこうしたんだ。……意外か？'},
		{'name': 'Chiduko', 'text': 'もうっ。睦月さんったら……<br>愛をテーマにしましょうって提案したのに……<br>どうしてロボの話をしたんでしょう？'},
		{'name': 'Himeno', 'text': '小雪ちゃんからひなあられのお話、聞いたんですね♪<br>うすいピンクや緑……可愛いカラーリングでいいですよね！<br>あっ、菱餅を持ってきてもよかったかも……？'},
		{'name': 'Rebecca', 'text': 'さっき、他の学校のスクールアイドルに<br>ヒナニンギョウやヒナアラレをもらったのよ！<br>とってもキュートで気に入ったわ！　宝物にするの！'},
		{'name': 'Ru', 'text': 'ひっ！　び、びっくりしました……<br>急に声をかけられるなんて思ってなかったので……<br>あ、謝らないでください！　お、怒ってないですから'},
		{'name': 'Marika', 'text': 'も～っ！　2人ともちゃんとやってよ～！<br>あ、あれ？　でもなにするんだったけ？<br>わ、忘れちゃった……。どうしよう～っ！'},
		{'name': 'Jennifer', 'text': '日本ではサクラのお祭りはやらないのかしら？<br>オハナミがお祭りみたいなもの？<br>咲いたらみんなでオハナミしようかしら♪'},
		{'name': 'Yuuka', 'text': 'はいっ♪　ひなあられ、美味しいですよ♪<br>アナウンスのお手伝いの休憩中に食べてるんです！<br>糖分補給も水分補給も大事ですよね♪'},
		{'name': 'Ayumi', 'text': 'もう！　まったくあの子たちったら遊んでばっかり！<br>……あ、私たちはちらし寿司を持ってきたの！<br>何よ、絶対おいしくできているんだから！　期待してよね！'},
		{'name': 'Leo', 'text': 'レオ、春がこんなにぎやかなんて、知らなかった<br>食べ物も、おいしい！　それに、みんな笑顔だ！<br>春って、いいな！'},
		{'name': 'Ryo', 'text': 'ひなあられ、美味しかったかい？<br>美味しく食べてくれたならワタシも嬉しいよ'},
		{'name': 'Sayuri', 'text': 'サバゲーはいつしても楽しいよ！<br>新入りも、桜が咲いた時期に一緒にサバゲーしようよ！<br>サバゲーは風物詩じゃないって？　いいじゃん別に～！'},
		{'name': 'Mizuki', 'text': 'ユニフォーム姿のお雛様ってなんか不思議だよねー！<br>まあ、つくったの私なんだけどねっ。かわいいかな？<br>ほんとに？　嬉しいよーっ！　ありがとう！'},
		{'name': 'Seira', 'text': 'どうですか？　ちらし寿司、お花っぽく盛り付けたんですよ♪<br>やさしい色で、春って感じがしませんか？'},
		{'name': 'Nanaka', 'text': 'うん、いい記事にできそうだ！<br>見出しは『春を呼び込むスクールアイドルたち』……だな！<br>キミは何か特ダネはあるかい？　教えてくれないか？'},
		{'name': 'Christina', 'text': 'シスター姿のお雛様……変じゃないでしょうか？<br>私の普段の格好と同じなんです<br>ちょっと私に似ている？　まあ、照れてしまいます'},
		{'name': 'Tsurugi', 'text': 'ひゃあっ！　ど、どうしたものか……<br>その、キミに会う前にひなあられを食べきってしまったんだ<br>……け、決して食いしん坊というわけではないんだ！'},
		{'name': 'Sakuya', 'text': '春は機関の活動も活発になる……<br>お前も気をつけなさい。機関はいつ現れるか分からないわ<br>……ま、まさかお前、やはり機関の者なの！？'},
		{'name': 'Isabella', 'text': '我が部は各々が思う春の風物詩を持ってくるはずだったのだが<br>みな日本の春を楽しむことが風物詩だと言い出してな……<br>私も趣旨を見失ってしまって……失態だ……'},
		{'name': 'Hitomi', 'text': '何で俺だけが雛祭りの準備をしているんだ……！<br>集まった全員で準備するって話しじゃなかったのか！？<br>あー、くっそぉ！　俺のストレス発散に付き合え！'},
		{'num': 'ED', 'text': 'これにてライブ♪アリーナ、閉幕です！<br>今年はなんだか賑やかな春になりそうですね♪<br>また次回のライブ♪アリーナでお会いしましょう！'}
	]},
 	{'titles': ['ポラリスショータイム！',''],
	'num': 6,
	'sub': '開催：2021/03/31 - 2021/04/25',
	'offset': 0,
	'opponent': [
		{'num': 'OP', 'text': 'ライブ♪アリーナ「ポラリスショータイム！」開催です<br>本日はスクールアイドル達の一芸を披露していただきます！<br>さあ、イッツ、ショータイム！'},
		{'name': 'Fuu', 'text': '私はアクロバット芸を練習してきたよ！<br>今日は思いっきり、私が目立っちゃうぞーっ！'},
		{'name': 'Coco', 'text': 'ココはメロメロダンスです！<br>可愛く踊って会場の皆さんを虜にしちゃいますよ～！'},
		{'name': 'Mikoto', 'text': '学校の風紀を守ることが私の使命です！<br>改めて皆さんに風紀を守っていただくため<br>風紀運営法の条文をすべて暗唱します。それでは第1条から！'},
		{'name': 'Fumi', 'text': 'ギョロちゃんと練習してきたパントマイム……<br>見てください！'},
		{'name': 'Yukari', 'text': 'ゆおんはやっぱりスクールアイドルなので<br>歌を披露します！　ル～ルル～♪　ラ～～～～～～～♪<br>えっ……音、外してますか……？'},
		{'name': 'Sakura', 'text': 'ドールとの腹話術を見せてあげる……<br>……ふふ……可愛いね<br>ドールは『私が勝つ』って言ってる……'},
		{'name': 'Sachiko', 'text': '黒魔術の深淵を見せてやろう……！<br>ステージに張り巡らせた魔法陣によって<br>我の歌とダンスに秘術の力が宿るのだ！'},
		{'name': 'Ranpha', 'text': 'アイヤー！　もうワタシの番あるか！？<br>しょうがない、渾身のクンフーダンスを見せてあげるアル！'},
		{'name': 'Saki', 'text': '私はチアダンスをやるよ！<br>みんな、頑張れーっ！！'},
		{'name': 'Haruka', 'text': '私はサックスを演奏しますよ！<br>ジャズのリズムって思わず体が動いちゃうから<br>楽しくっていいですよね！'},
		{'name': 'Yuka', 'text': '私は当然ストリートダンスをやるよ！<br>カッコよく踊って歌までできる！<br>会場中の視線、独り占めじゃない？'},
		{'name': 'Fumie', 'text': '私のサイリウムダンス、見てください！<br>ぐるぐる～、はっ！　やっ！　とうっ！<br>お客さんと一体になれるのが、私の持ち味です！'},
		{'name': 'Sana', 'text': '私ハテニスの壁打ちよ！　リズムに合わせて返球していくの！<br>華麗なっ、私のっ、ラケットさばきをっ……きゃっ！<br>……失敗しちゃったけど、めげずにもう一本いくわよ！'},
		{'name': 'Rakshata', 'text': 'ワタシは本場仕込みのベリーダンスを踊ります……☆<br>あ、あら……？　お客様がみんな夢見心地に……<br>お客様のチャクラを海岸してしまったみたいです……☆'},
		{'name': 'Shun', 'text': '私はもちろん、愛馬の太郎との乗馬ショーを披露するよ！<br>太郎と私のコンビネーションを見せちゃうからね～<br>ハイヨー、太郎！'},
		{'name': 'Akira', 'text': 'うーん、かじった程度の手品くらいしかできないけど……<br>え、えーと、シルクハットをステッキで叩くと……<br>鳩が飛び出しまーす！　……う、ウケてる、嬉しい……！'},
		{'name': 'Kasane', 'text': '今回は衣装を頑張ってみたんだ！　豪華な衣装に歌と踊り！<br>やっぱりこれが私の武器だと思う！<br>スクールアイドルとして、頑張っちゃうよ！'},
		{'name': 'Marika', 'text': '多趣味にかけてはあたしの右に出る人はいないよ！<br>マジック、ファッション、自転車……<br>どれも1ヶ月と続いてないけど……'},
		{'name': 'Reine', 'text': '今日は麗音のダンスでみんなメロメロにしちゃうからねっ♪<br>当然っ、あなたもメロメロにしちゃうんだから♡'},
		{'name': 'Jennifer', 'text': '当然私にできるのは歌と踊り……なんだけど<br>せっかくだから私の味も出したいわね……そうだ！<br>私が最近考えた「正義」のダンス！　見せちゃうわね'},
		{'name': 'Mizuki', 'text': 'あたしの一芸は勿論バスケ！　3ポイントシュートでこう<br>ヒューッと……え、ここにはゴールないの？　……うーん<br>じゃ、ここは華麗なドリブルさばきでも見せちゃおうか！'},
		{'name': 'Yumi', 'text': '私はバイオリンを弾くわ<br>美しい音色には目をつぶって聞き入らせてしまう力があるのよ<br>音楽というものの魅力は偉大よね'},
		{'name': 'Sayuri', 'text': 'やはり私のショーといったらサバゲーでしょ！<br>みんな、集まれ～！！<br>ん？　彼女らはサバゲ部の面々だよ。え、ルール違反？'},
		{'name': 'Nagi', 'text': '凪の芸はないよー。今回のショーの装飾<br>全部凪が描いてたから、芸を練習する暇なかったんだよー<br>疲れちゃったー'},
		{'name': 'Ryo', 'text': 'アイドル達の渾身の一芸、すべてがラストに収束していく……<br>ワタシの一芸は演劇、ギターのコラボレーションだ！<br>極上の舞台から天上の国へ、いざなってあげよう！'},
		{'name': 'Akemi', 'text': 'ベストショットの豊作だわ！　やっぱりスクールアイドルって<br>みんな隠された一面を持ってるのね！　このカメラで<br>すべてを記録に残さなきゃ！　え、もう私の番……？'},
		{'name': 'Minami', 'text': '出し物っていっても、私にできることなんてお料理くらいよ？<br>春キャベツで巻いたロールキャベツを作ってみたのよ<br>よかったらあなたもどうぞ♪'},
		{'name': 'Misaki', 'text': '私もスクールアイドルらしく……と思ったけど、せっかくだし<br>私の大好きなぬいぐるみたちで埋め尽くしてみたの♪<br>あなたも私のファンシーワールド、楽しんでいってね'},
		{'name': 'Seira', 'text': '私は乗馬をしましょうか……え？　もう見た？<br>そ、それでは、私のバイオリンを……え、それも見た！？<br>……それではもう、歌と踊りしかありませんね！'},
		{'name': 'Nanaka', 'text': 'いやー！　スクールアイドル達の一芸披露、圧巻だったね！<br>いい記事が書けそうだ！<br>ん？　私？　私は持ち芸とかはないよ'},
		{'num': 'ED', 'text': 'いかがでしたか？　スクールアイドル達の新しい一面をしれた<br>のではないでしょうか。「ポラリスショータイム！」これにて<br>閉幕！　また次回のライブ♪アリーナでお会いしましょう！'}
	]},
	{'titles': ['獅子もときめくってホントなの？',''],
	'num': 7,
	'sub': '開催：2021/04/30 - 2021/05/25',
	'offset': 0,
	'opponent': [
		{'num': 'OP', 'text': 'ライブ♪アリーナ、開催いたします！<br>……と言いたいところですが、衣装部屋が騒がしいですね<br>何やら事件が起こったようです！'},
		{'name': 'Yuri', 'text': 'そうなんだよ！　衣装部屋が荒らされててさ<br>何が起こったのか調べて回ってるんだよ！<br>あんたも協力してくれない？'},
		{'name': 'Aya', 'text': '衣装部屋が荒らされていた……何が起こったんでしょうか……<br>私は何かの拍子にガラガラっと崩れちゃったのかなぁ<br>って思います'},
		{'name': 'Mutsuki', 'text': '何、衣装部屋が……！？<br>よし、吾輩が最新の防犯設備を新たに設けてやろう！<br>完成までには……試算でこれくらいの予算が必要かな'},
		{'name': 'Sachiko', 'text': '衣装部屋に何が起こったか？　フッ、我は知っているぞ<br>当然、我の召喚した使い魔が……おい、どこに行く！？<br>ま、待て！　今、整理整頓の魔法を……待ってーー！'},
		{'name': 'Ru', 'text': '衣装部屋が荒らされるなんて……良くない前兆！？<br>……い、いつも言われているんですよね、考えすぎだって……<br>きゃっ！　い、今、何かが足元を横切ったような……'},
		{'name': 'Rika', 'text': 'うむ、こういうものは現場検証が大事だな<br>何が起こったかをシミュレーションしてみるのだ<br>そういえば……衣装は縦に裂かれているな……'},
		{'name': 'Sana', 'text': 'きゃあっ！　痛たた……い、いきなり足元を何かが<br>横切ったような気がして、つまづいちゃった……<br>ひっ！　か、花瓶が割れてる……'},
		{'name': 'Fuu', 'text': '依然、何が起こったのかはわからないか……<br>そうだな……よし、聞き込み調査だ！<br>私も会場中を駆け回って手伝うよ！'},
		{'name': 'Reine', 'text': '聞いて聞いて！　特別賞の桜もちも無くなったんだって<br>まだこの会場にあるはずだよ<br>一緒に探そう～'},
		{'name': 'Rakshata', 'text': '最初に荒らされているのを発見した人？<br>確か……メガネをかけた、可愛らしい子でした'},
		{'name': 'Fumie', 'text': 'はい、私が第一発見者です。窓が少しだけ開いてて<br>誰かがやったとしたら、そこから逃げ出したと思うんですよね<br>ただ、外に足跡はついていませんでしたけど……'},
		{'name': 'Sakuya', 'text': '何やら今回の商品も無くなってしまったようね<br>私は独自に調査してついに真相を掴んだの<br>これはやはり機関の仕業よ！　この私が解決するわ！'},
		{'name': 'Christina', 'text': '衣装部屋を荒らすなんて、そんな子がこの会場にいるとは<br>私には思えません。全ては神のお導き……<br>これもスクールアイドルになるための試練なのです'},
		{'name': 'Himeno', 'text': '私はいずれの事件も偶然だと思うんです！<br>小雪ちゃんにも意見を聞いてみたいですね<br>なんて言うかしら……？'},
		{'name': 'Ayumi', 'text': '今度は花瓶が割られていたの！？　え、それは人の仕業？<br>うっかり転んで……まったくもう！<br>こんなときこそ、落ち着いて行動しなきゃいけないのに……'},
		{'name': 'Yuuka', 'text': 'なんだかあちこちで騒ぎになっていますね～<br>とりあえず、私は注意喚起のアナウンスを流してきますね'},
		{'name': 'Koyuki', 'text': '小雪はね、小さい子がやっちゃったのかなぁ、って<br>ほら、小さい子って、悪いことしちゃっても<br>なかなか正直に言えないじゃない？'},
		{'name': 'Mizuki', 'text': '複数の事件が色んな場所で起こっている……<br>あたしたちの誰かが起こしたものとしては違和感を感じるわ<br>もしかしたら小さな動物……とかだったら可愛いわね♪'},
		{'name': 'Yuka', 'text': 'なんだか、子どもでも紛れこんじゃったのかな？<br>あら、これは……カーテンにひっかき傷が……？'},
		{'name': 'Nanaka', 'text': '大変大変！　どうやら子どものライオンが<br>近くの動物園から逃げ出したそうなんだ！<br>衣装部屋を荒らしたのって、もしかして……'},
		{'name': 'Isabella', 'text': 'どうしてライオンが衣装部屋を荒らしたか、って？<br>決まっているだろう。ライオンだってスクールアイドルには<br>ときめくに決まっているからだ！'},
		{'name': 'Rebecca', 'text': 'まったく、イザベラったら何言ってるのかしら……<br>いくらスクールアイドルだからって、ライオンまで<br>夢中にさせるなんて、そんなバカなこと……あるのかしら？'},
		{'name': 'Tsurugi', 'text': 'ど、どうしよう！？　子どもとはいえライオンなんて<br>う、うろたえてちゃいけないよね！　私も念の為、竹刀を<br>持ってきた方がいいかな……？　いや、まず避難誘導だよね！'},
		{'name': 'Hitomi', 'text': 'ライオンがこの会場に紛れ込んだだと！？<br>獅子はうさぎを狩るにも全力を尽くす……<br>よし、俺は捜索隊を結成し、あっちを調べてくる'},
		{'name': 'Akiru', 'text': 'あら、あなたたち、何を騒いでいるの？<br>ああ、衣装部屋を荒らしたのが誰かって？<br>ほら、この猫よ。どこからか会場に紛れこんじゃったのね'},
		{'name': 'Akemi', 'text': 'なーんだ、今までの騒動は猫ちゃんが原因だったのか！<br>私、決定的瞬間を収めようと、会場中駆け回っちゃった！<br>なんだか今日は、騒ぎ疲れたわ～'},
		{'name': 'Chiduko', 'text': 'あぁ～♡　最高ですわ……猫の抱き心地ってどうして<br>こんなにも気持ちいいのでしょう？　体にフィットする<br>というか……まるで愛に包まれているようですわね……♡'},
		{'name': 'Minami', 'text': 'まあ……猫ちゃん！　可愛い～♡<br>お腹空いていますかね？　これ、私が作った特製の<br>キャットフードなんですが、よかったらいかがでしょう？'},
		{'name': 'Yumi', 'text': 'この子、ライブに聞き入ってるみたい<br>ライブが好きな猫なんて、珍しいわね<br>お腹が膨れただけかもって？　あはは'},
		{'name': 'Leo', 'text': '猫、レオには家族のようなもの<br>猫の言葉、わかる<br>とても楽しかった、言ってる。ふふ……'},
		{'num': 'ED', 'text': 'いやいや、ちょっとしたハプニングでしたね<br>ちなみに、子ライオンは無事動物園に戻ったそうです！<br>以上で、ライブ♪アリーナ終了でございます！'}
	]},
	{'titles': ['白のハートを射抜いちゃえ！','You\'re the Milk to My Cookie'],
	'num': 8,
	'sub': '開催：2021/05/31 - 2021/06/25',
	'opponent': [
		{"num": "OP", "texts": [
				"ライブ♪アリーナ開催です！<br>本日はポニー界のアイドル、<ruby>白<rt>みるく</rt></ruby>ちゃんが来てくれましたよ！<br>みなさん、ライブで白ちゃんをメロメロにしてください！",
				"The Live Arena is underway! The idol of the pony world, Milk, is here with us today! Everyone, please make her swoon with your live shows!"
		]},{"name": "Yu", "texts": [
				"へえ……白って書いてみるくちゃん、って読むんだ……<br>名前通り、真っ白できれいだね……",
				"Oh? So her name is Milk? Just like her name suggests, she's pure white and beautiful..."
		]},{"name": "Yuri", "texts": [
				"今回のライブ♪アリーナで選ばれると<br>あのポニーと1日遊べるみたいだぜ<br>みんなあの手この手で気を引こうとしているな",
				"Apparently, whoever is chosen at this Live Arena gets to spend a whole day with that pony. Everyone's doing this and that to try to grab her attention."
		]},{"name": "Sakura", "texts": [
				"……キレイな白い毛並み……<br>走ってる姿も……見てみたいわね",
				"Her beautiful, white coat... The sight of her galloping... I want to see it all."
		]},{"name": "Kasane", "texts": [
				"名前の由来は、走る姿がまるで天の川のように白く輝いて綺麗<br>だからなんだって。そういえば天の川のことをミルキーウェイ<br>って言うんだよねっ♪　白ちゃんの名前にピッタリだねっ",
				"Her name's said to originate from how she has a beautiful white glow like the Milky Way when she gallops. It's the perfect name for her!"
		]},{"name": "Coco", "texts": [
				"ふわぁ～！　なんてキレイな白馬なんでしょう<br>白馬に乗るなんてすっごくロマンチックですよね♡<br>ココはその気持ちをライブに込めて歌います♪",
				"Wow! What a beautiful white horse! It's so romantic to ride on white horses, isn't it? I'm going to capture those feelings in my live show when I sing!"
		]},{"name": "Mikoto", "texts": [
				"ふむ、白ちゃんに乗って風紀を取り締まるのも悪くないですね<br>白馬にまたがって学校をかける風紀委員……<br>あれ、なんだか根本的に何かを間違えているような……？",
				"Riding Milk around to supervise the school might be nice. A prefect on a white horse maintaining order... Huh, that doesn't sound quite right."
		]},{"name": "Iruka", "texts": [
				"なんとなく白ちゃんとは気が合いそうだなぁ<br>おーい白ちゃーん！　須田と一緒に走らなーーい！？<br>須田も走るの大好きなんだっ！",
				"Somehow, I feel as though I'll get along with Milk! Heeeey! Miiiiilk! Wanna go on a ride with me?! I love running, just like you!"
		]},{"name": "Haruka", "texts": [
				"今回のライブ♪アリーナで白ちゃんを振り向かせられたら<br>お姉ちゃんも一緒に乗せてくれますかね？<br>白馬に乗ったお姫様ごっこ、やってみたいんですよね～♪",
				"If I manage to get your attention at this Live Arena, you'll let Kanata ride you too, right, Milk? I wanna ride on a white horse and pretend to be a princess!"
		]},{"name": "Maria", "texts": [
				"情熱のフラメンコライブで<br>白ちゃんを振り向かせちゃうわよ！<br>オ・レ！！",
				"I'm gonna get Milk to look my way with a passionate flamenco live show! Ole!"
		]},{"name": "Shun", "texts": [
				"乗馬クラブで日頃から馬に接しているから<br>白ちゃんの扱いなら私に任せてくれよっ<br>ありゃ……ダメかぁ、結構気難しいポニーちゃんだなぁ……",
				"I tend to horses at the horseback riding club on a regular basis, so leave dealing with Milk to me! Huh? You don't like that? Geez, you're a difficult pony..."
		]},{"name": "Aya", "texts": [
				"わ……私に白ちゃんをメロメロにするなんてこと<br>できるでしょうか……？　よ、弱気なこと言ってちゃ<br>ダメですよね！　精一杯が、頑張ってみますね……！",
				"W-Will I be able to make Milk swoon? N-No time for words of self-doubt now, right?! I'll try to do my very best!"
		]},{"name": "Akira", "texts": [
				"よーし、アタシに任せな！<br>アタシのライブは、自転車による曲芸付きだっ！！<br>アタシが華麗に、乗りこなしてみせるよ！",
				"All right, leave it to me! My live show comes with bicycle acrobatics! I'll show you how I can ride with skill and glamour!"
		]},{"name": "Jennifer", "texts": [
				"馬は人を見るとはよく言われるわよね<br>やはり対等な存在として、敬意をもって接しないと<br>ダメなのかしら……？",
				"It's often said that horses have an eye for people. Maybe I need to treat her with respect and as an equal..."
		]},{"name": "Rakshata", "texts": [
				"インドでは馬は神様の一種です……<br>ワタシのベリーダンスを、神に捧げます……☆<br>ああっ、なんだかそっぽを向かれてしまいました……",
				"Horses are a type of god in India. I shall offer my belly dance to you, Divine One. Oh no! It looks like that made her turn away from me..."
		]},{"name": "Seira", "texts": [
				"乗馬には慣れてますけど、乗馬ができれば良いというわけでは<br>いかないのですね……やはり私のスクールアイドルとしての<br>技術で、白ちゃんを振り向かせなきゃ！　です！",
				"I'm an experienced horse rider, but that doesn't mean I've got this. I guess I really do need to get Milk's attention with my school idol skills!"
		]},{"name": "Yumi", "texts": [
				"あの天真爛漫な聖来でもダメだったの……！？<br>私は……そうね、フルートの優雅な音色はどうかしら？<br>……うぅん、やっぱりダメよね",
				"Not even the ever-innocent Seira could do it?! Then I'll try... Oh yes, how about the sound of a graceful flute? Ooh, guess not, huh?"
		]},{"name": "Akemi", "texts": [
				"スクールアイドルたちがこぞって白馬を振り向かせようとして<br>逆に白ちゃんのとりこにされてしまう……<br>な、なんてロマンチック……！",
				"The school idols are all trying to get the white horse's attention, but keep falling under Milk's spell instead. H-How romantic!"
		]},{"name": "Ryo", "texts": [
				"ふふ……なかなか気高いポニーのようだな<br>どうだい白くん。我が演劇部に入部しないか？　キミがいれば<br>今までできなかったあんな舞台やこんな舞台も可能になる！",
				"*Giggle* You seem like quite a noble pony. Well, Milk, wanna join the theater club? With you around, we'll be able to do all sorts of previously impossible plays!"
		]},{"name": "Akiru", "texts": [
				"うーん……正直、あまり手応えはないわね<br>ライブをするだけじゃダメなのかしら……？",
				"Mmm... Honestly, she's not really responding. Is just performing a live show not enough?"
		]},{"name": "Sana", "texts": [
				"よーし、私の番ね！　張り切っちゃうわよ～……きゃっ！<br>転んじゃっ……あっ、白ちゃんの手綱が切れてるっ！<br>白ちゃんが会場中を駆け回ってる……ど、どうしよう",
				"All right, it's my turn! I've got this! Eek! I'm falling—oh no, Milk's reins snapped! She's running wild around the venue. Wh-What do I do?"
		]},{"name": "Ayumi", "texts": [
				"白ちゃんがあちこち走って、もうライブどころじゃないわ！<br>こうなったらとにかく派手に歌って踊るのよ！<br>ああん、もう！　振り向いてもくれないじゃない！",
				"Milk's running around the place without a care for the live show! Since it's come to this, I'll just sing and dance in a flashy way! Aww, she won't look at me!"
		]},{"name": "Misaki", "texts": [
				"ここまでつれないと、なんとしても振り向かせたいわね……<br>白ちゃん！　私のお馬さんのぬいぐるみはどう？<br>ほら、可愛いでしょ～……ああんっ、もうやけくそよ！",
				"Her indifference makes me more intent on getting her attention. Milk! How about this soft horsey toy I have? See? Cute, huh? Argh! C'mon! I'm desperate!"
		]},{"name": "Minami", "texts": [
				"ダメね……今まで何人もやってきたのに<br>全然振り向いてくれないわ。ここはやっぱり<br>白ちゃんの大好物を作って食べてもらうのが一番ね♪",
				"It's no use. A few people have tried and haven't gotten her attention at all. The best thing to do here is to make Milk's favorite food and have her eat it!"
		]},{"name": "Mutsuki", "texts": [
				"スクールアイドルロボ、発進！　こういうときは人類の叡智<br>発明の力に頼るのが一番なのだ！　わっはっは……<br>……こ、故障でアームが動かないだと？！　なんてことだ！",
				"School idol robot, go! Relying on human intellect and the power of invention is the best thing to do at a time like this! Wha?! The arm's broken?! No!"
		]},{"name": "Rika", "texts": [
				"よし、私はにぎやかなステージ演出を見せてやろう<br>炎色反応を使って花火のようなフラッシュを焚く！<br>……すまない、どうやら悪い方向に興奮させてしまったようだ",
				"All right! I'll dazzle you with stage effects! I'll use flame reactions to create flashes like fireworks! Oh, sorry... I think I've spooked you."
		]},{"name": "Nanaka", "texts": [
				"うーん、ここまで誰も振り向かせられなかった白馬か……<br>ここでついにスクールアイドルの誰かが白ちゃんのハートを<br>射抜く！　とかだと、記事としては盛り上がるんだけどね",
				"Hmm. A white horse nobody has been able to grab the attention of, huh? If a school idol shoots through Milk's heart now, it'd make for an exciting article!"
		]},{"name": "Leo", "texts": [
				"任せろ。全ての動物、レオの友達。通じあえる……ヒヒーン！<br>……や、野生で育ってきたレオでもダメ……！？<br>れ、レオ、こんなこと初めて……すごく、落ち込む……",
				"Leave it to me. All animals are my friends. Our hearts are one. Neigh! N-Not even I, a girl raised in the wild, could do it?! Th-This is a first... How sad."
		]},{"name": "Nagi", "texts": [
				"こういうときは、焦っちゃダメー<br>絵を描くときもそうだけどー、焦ってああしよう、こうしよう<br>ってなっちゃうとー、いいものはできないからねー",
				"There's no point panicking in times like these. The same goes for drawing pictures. Getting flustered and confused about what to do won't lead to good results."
		]},{"name": "Sayuri", "texts": [
				"うーん、ついに誰も白ちゃんを振り向かせられなかったかー<br>……あれ……！？　遠目でわからないけど<br>白ちゃんが誰かの袖を引っ張ってるよ！",
				"So nobody has been able to get Milk's attention, huh? What?! It's hard to see from here, but it looks like Milk's tugging at someone's sleeve!"
		]},{"name": "Tsurugi", "texts": [
				"ああっ、白ちゃんが誰かを乗せてる！　誰も<br>白ちゃんをとりこにできなかったのに、白ちゃんのハートを<br>射止めたのは……！？　え……あれは……司会者の人……？",
				"Ahh! Milk's got someone on her back! No one was able to captivate Milk, yet who won over her heart? Wait, huh? Is that...the host?"
		]},{"num": "ED", "texts": [
				"白ちゃんに選ばれたのは……なんと司会の私！　どうにか<br>事態を収めようとニンジンを持ってきただけなんですが……<br>とんだ番狂わせですね。以上でライブ♪アリーナ終了です！",
				"The person chosen by Milk is me, the host! I just brought her a carrot to calm things down, but it's led to an unexpected result. That's it for the Live Arena!"
		]
		}
	]},
	{'titles': ['届いて！短冊レター','Wishes for the Stars'],
	'num': 9,
	'sub': '開催：2021/06/30 - 2021/07/25',
	'opponent': [
		{"num": "OP", "texts": [
				"ライブ♪アリーナ、開催です！　突然ですが、夢って<br>素晴らしいですよね！　折しも本日は七夕！<br>せっかくなので、皆さんの夢を短冊に書いて飾りましょう！",
				"The Live Arena is underway! And would you believe it, today's the Star Festival! Dreams truly are wonderful! Fill out your wish slips and hang them up!"
		]},{"name": "Ru", "texts": [
				"七夕は……大好きですよ<br>願いを短冊にしたためる、しずしずとした雰囲気が好きで……<br>ああ……あのときの大会で勝てていれば……",
				"I adore the Star Festival. There's something so calming about writing my wish on a wish slip. Aww, if only I'd won that tournament..."
		]},{"name": "Nagi", "texts": [
				"凪の夢ー？　なんだろなー？<br>画家さんでもいいしーデザイナーでもいいしー<br>おっきなトリックアートとか、街中に描いてみたいねー",
				"My dream? I wonder what it could be. Being an artist or a designer would be great. I'd love to try something like painting big optical illusions in town."
		]},{"name": "Fumi", "texts": [
				"私は……ギョロちゃんとずっと一緒にいれたらなあ……って<br>スクールアイドルの私にとって欠かせない存在に<br>なっちゃいました♪　これからもよろしくね、ギョロちゃん♡",
				"I just want to be with Gyoro forever. I mean, as a school idol, she's become irreplaceable to me! I hope you'll continue sticking around, Gyoro!"
		]},{"name": "Yu", "texts": [
				"……なに書こう<br><div class=\"note\">編集者註：7文字だけです。編集ミスではありません。</div>",
				"Hmm... What should I write?"
		]},{"name": "Misaki", "texts": [
				"夢……そうね、ビリヤードが上手くなるように……とかかしら<br>あんまり人任せにしたくはないの。どんなことでも<br>自分で達成したほうが、喜びもひとしおじゃない？",
				"My dream... Hmm, maybe to be good at billiards. I don't really want to leave things to others. Doesn't it feel better when you achieve something yourself?"
		]},{"name": "Ranpha", "texts": [
				"ワタシの夢は中華料理の全国チェーン店を開くことネ！<br>ワタシはそこで総帥として全ての店を仕切るアル！",
				"My dream is to open a nationwide chain of Chinese restaurants! I'll be the head of the company and manage all of the restaurants!"
		]},{"name": "Christina", "texts": [
				"願い……というよりは祈りですね<br>私にとってはこちらの方が慣れているので……<br>世界中の人に、愛が降り注ぎますように……",
				"It's less of a wish and more of a prayer, right? I'm more accustomed to prayers... I'll ask for love to rain down on everyone around the world."
		]},{"name": "Fumie", "texts": [
				"せっかくなので夢は大きく、です！<br>私が生きてる間アニメに全力をそそげるように……とっ！<br>え？　スケールが大きいのか小さいのかわからないです？",
				"Since I can, I might as well make my dream a big one! To pour every ounce of energy I have into anime! What? You can't tell if that's a big or small dream?"
		]},{"name": "Mizuki", "texts": [
				"アタシの夢は、やっぱりバスケの大会で活躍することかな！<br>時間ギリギリに、アタシのシュートが入って逆転！<br>王道だけど、憧れるよね～♪",
				"My dream is to compete in a basketball tournament! Turning the tables by nailing a shot at the last moment! It's simple, but it's my dream!"
		]},{"name": "Seira", "texts": [
				"夢を叶えるには願うだけではなく努力が必要ですよね<br>……でもせっかくですから、短冊に夢を書いておきましょう♪",
				"Just wishing won't make a dream come true, right? You need to work hard at it. But since it's a special day, I'll write my dream on a wish slip!"
		]},{"name": "Saki", "texts": [
				"お？　みんなで短冊に夢を書いていくんだね？<br>私はみんなの夢を応援する方が好きだな～！<br>みんな、がんばれ～～っ！！　っと",
				"Oh? So, everyone's writing their dreams on wish slips? I prefer supporting everyone else's dreams! You guys can do it! Go for it! Stuff like that."
		]},{"name": "Iruka", "texts": [
				"須田は体を動かすのが好きだから<br>『いつも健康でいられますように』って書こうかな！<br>……ちょっと、高校生っぽくないかな？",
				"I like getting my body moving, so maybe I'll write that my wish is to always be healthy! Oh, is that  kind of a strange wish from a high schooler?"
		]},{"name": "Akira", "texts": [
				"アタシはいつか全世界の道を自転車で制覇したいから<br>それを書こうかな<br>自転車は気持ちいいよーっ",
				"I want to ride my bike on all of the different roads around the world someday, so maybe I'll write that down. Cycling feels so good!"
		]},{"name": "Sayuri", "texts": [
				"サバゲーもスクールアイドルも全力で！　これに尽きるよ！<br>それはそうと……あなた、全部のスクールアイドルの夢を<br>見てまわるつもりなの……？　いいけど、なんか恥ずかしいな",
				"Devoting myself to airsoft and school idols! That's my jam! Um, you're planning on looking at all of the school idols' dreams? Okay, but I'm kinda embarrassed."
		]},{"name": "Shun", "texts": [
				"太郎と大会に出てみたいな！　知らない？<br>人と馬とでコンビを組んで、障害物を超えたりするんだよ<br>いつかはスクールアイドル活動も太郎と一緒にやってみたいね",
				"I want to enter a competition with Taro! The kind where horses and their riders jump over obstacles. I'd love to be a school idol with Taro someday too!"
		]},{"name": "Marika", "texts": [
				"ええっと……世界中を旅行して色んなものを食べることと<br>パフォーマンスで全世界の人をメロメロにすることと……<br>ああん、もうっ！　夢が多すぎて書ききれないよ～っ！！",
				"Um... I wanna travel the world eating lots of foods, make everyone worldwide swoon at my performances, and... Argh! I've got too many dreams to write down!"
		]},{"name": "Isabella", "texts": [
				"スクールアイドルとして、もっと歌とダンスが<br>上手くなりますように……っと<br>……き、貴様っ！　恥ずかしいから見るんじゃない！",
				"I want to get better at singing and dancing as a school idol... Wait. H-How dare you! Don't read mine! It's embarrassing!"
		]},{"name": "Chiduko", "texts": [
				"わたくしの夢は決まっていますわ<br>全世界の人を愛で包み込むこと……♡<br>手始めに、あなたから包んであげましょう♡",
				"I've got my dream figured out! It's to wrap everyone across the world up in love. I'll start by wrapping you up first!"
		]},{"name": "Yuka", "texts": [
				"私の夢かぁ……うーん、あらためて聞かれるとなんだろね？<br>ダンスがもっと上手くなりますように……なんか違う気が<br>するんだけど……自分のことだけでいいのかな？",
				"My dream, huh? Hmm, now that you ask, I'm not sure. Getting better at dancing doesn't sound quite right. Is it okay to only focus on myself?"
		]},{"name": "Sachiko", "texts": [
				"我の野望だと……？　フッ、決まっている<br>我々のグループが世界全土を支配することだ……<br>おおっ！？　と、突風！？　あっ、短冊が飛ばされて……",
				"My ambition? Heh. It's obviously to conquer the entire world with my group! What?! A gust of wind?! Oh no, it blew my wish slip away..."
		]},{"name": "Reine", "texts": [
				"うわ～っ！　みんなの短冊があちこちに……<br>いけないことだけど……見ちゃおっか♪",
				"Aaack! Everyone's wish slips are all over the place! I know I shouldn't, but I'm gonna have a look at them!"
		]},{"name": "Hitomi", "texts": [
				"むっ……風紀が乱れている予感がするぞ！<br>どれどれ……ほうほう、良い夢を書くやつがいるな！",
				"Hrrm... I sense that your morals are skewed! Let me have a look... Well, well. Some of you are writing some great dreams!"
		]},{"name": "Sakuya", "texts": [
				"わ……私の短冊が……！<br>お……おのれ機関！　羞恥心を煽るなんて卑劣なマネを……！<br>必ずや成敗してみせるわ！",
				"M-My wish slip! Curses to the Agency! How despicable of you to bring shame on others! Mark my words! You shall be punished for this!"
		]},{"name": "Yukari", "texts": [
				"これは……他の人が書いた短冊ですね<br>『みんなとずっとスクールアイドル活動がしたい』……かぁ<br>……いいですね、すっごく素敵な夢です！",
				"I see. This is someone else's wish slip. \"I want to perform as a school idol with everyone, forever.\" I love it. That's a really wonderful dream!"
		]},{"name": "Koyuki", "texts": [
				"そっ、それ……小雪の書いた短冊！　……見ないで～！<br>は……恥ずかしい……！　他の人に自分の夢を見られるのが<br>こんなに恥ずかしいなんて思わなかったよ",
				"Th-That's the wish slip I wrote! Don't read it! H-How embarrassing! I didn't think it'd be this embarrassing to have my wish read by others!"
		]},{"name": "Maria", "texts": [
				"情熱的でとっても素敵な夢！　共感するわ<br>ここにいるみんなは共にスクールアイドルとして<br>みんなに夢を届ける仲間だものね",
				"It's such a passionate and lovely dream! I feel the same way. We're all friends who make dreams come true for everyone as school idols, after all."
		]},{"name": "Ryo", "texts": [
				"ふふ……『みんなとずっとスクールアイドル活動がしたい』か<br>みんな雪ちゃんに感化されているようだね<br>確かに私も、同じ気持ちだな。よくわかるよ",
				"*Giggle* \"I want to perform as a school idol with everyone, forever.\" Looks like everyone's being inspired by Koyuki. I feel the same way. I really do."
		]},{"name": "Rebecca", "texts": [
				"そうね、ここにいるみんなとずっと一緒に活動したいし<br>見てくれるみんなにずっとスクールアイドルとして<br>ライブを届けたい……私も同じ気持ちよ♪",
				"Yeah, I want to keep on performing with everyone here and carry on doing live shows as a school idol for everyone watching. I feel the same way too!"
		]},{"name": "Fuu", "texts": [
				"あははっ、いいね～！　私もそれに書き直そうっと！<br>スクールアイドルって、すっごく楽しいもんね！",
				"*Chuckle* I love it! I'm gonna rewrite my wish slip and change it to that too! After all, being a school idol is just so much fun!"
		]},{"name": "Himeno", "texts": [
				"皆さんと一緒にずっとスクールアイドル活動ができたら……<br>そして、私たちを応援してくださるみなさんにずっと<br>元気をお届けできたら……私も、それが一番の夢です♪",
				"I'd love to be a school idol with all of you forever and be able to always bring a smile to everyone who cheers us on. That's my biggest wish!"
		]},{"num": "ED", "texts": [
				"みなさんの夢は『みんなにライブを届け続けること』！<br>なんとも心が温まります……っ！<br>それでは、これにて本日のライブ♪アリーナ、閉幕です！",
				"Everyone's wish was to continue performing live shows for everyone to enjoy! How heartwarming! And that brings today's Live Arena to a close!"
		]}
	]},
	{'titles': ['イルカに会いたい！ワクワク体験♪','I Want to Meet a Dolphin! An Exciting Experience!'],
	'num': 10,
	'sub': '開催：2021/07/31 - 2021/08/25',
	'opponent': [
		{"num": "OP", "texts": [
				"最近暑い日が続きますね。そこで、本日は趣向を変えて<br>浜辺の特設ステージからお届けします！<br>それでは、ライブ♪アリーナ開幕です",
				"It's been hot almost every day lately, hasn't it? So today, let's change things up with a special beach stage. The Live Arena begins now!"
		]},{"name": "Yuuka", "texts": [
				"広大な海と潮の香り……、開放的な気持ちになりますね！<br>この景色を見ているだけで、うきうきしてきちゃいます♪<br>いつもと違った夏のひとときをお届けできそうです",
				"The vast ocean and a salty scent on the breeze... It feels so open! Watching the scenery makes me cheerful. I'm sure we're in for a unique summer moment."
		]},{"name": "Nagi", "texts": [
				"海の色はいつ見ても不思議……<br>思わず描きたくなっちゃうよー",
				"The color of the ocean is so mysterious whenever I look at it... I feel like drawing it all of a sudden!"
		]},{"name": "Rakshata", "texts": [
				"ワタシ、海の家の甘口カレーが食べたいです♪<br>家で食べるカレーとはひと味違う特別感、とても楽しみです！",
				"I want to eat the beach hut's sweet curry! It feels special because it's a little different from the curry I eat at home. I can't wait!"
		]},{"name": "Fumi", "texts": [
				"とてもいいお天気です<br>晴れてよかったね、ギョロちゃん！",
				"This is such beautiful weather. It's so nice that it's sunny, right, Gyoro?"
		]},{"name": "Koyuki", "texts": [
				"日焼け対策はバッチリだよ<br>バレエは日焼け厳禁なの",
				"My sunburn prevention strategy is on point! I have to take care of my skin for ballet."
		]},{"name": "Fuu", "texts": [
				"うお～っ、広い砂浜！<br>潮風を感じながらランニングするのも気持ちいいね♪",
				"Whoa, look at how vast this beach is! Feeling the sea breeze while you run is really nice too!"
		]},{"name": "Rika", "texts": [
				"普段、山での調査はよくするが<br>たまには海にフィールドワークをしに来るのも悪くないだろう",
				"I tend to conduct my research in the mountains, but  coming to the ocean to do some occasional fieldwork isn't so bad either."
		]},{"name": "Nanaka", "texts": [
				"海岸周辺を取材してたら、イルカの目撃情報を手に入れたよ！<br>最近この付近でよく見かけるみたい<br>新しい校内新聞のネタにピッタリだね♪　行ってみよう！",
				"I heard someone saw a dolphin during interviews by the beach. Apparently, they're often spotted here. What a scoop for the next school paper! Let's go!"
		]},{"name": "Akemi", "texts": [
				"イルカとスクールアイドルのツーショットなんて最高ね！！<br>特ダネを探しに行きましょう！",
				"A dolphin and a school idol would make for a perfect duo shot! Let's go find our scoop!"
		]},{"name": "Marika", "texts": [
				"イルカを探しに海へ、レッツゴー！！<br>あっ！　ビーチバレーしてる人たちがいる。楽しそう♪",
				"Let's go looking for dolphins in the ocean! Oh! There are people playing beach volleyball! It looks fun!"
		]},{"name": "Sayuri", "texts": [
				"私、双眼鏡もってるからイルカを探してみるよ<br>あっ、あそこで何かが跳ねた",
				"I brought my binoculars, so I'll look for some dolphins! Oh, I just saw something jump over there."
		]},{"name": "Mutsuki", "texts": [
				"カッカッカッ！　イルカ探しは任せておけ！<br>ジェット浮き輪NEOの出番だ！",
				"*Cackle* Leave the dolphin searching to me! It's time for my NEO Jet Flotation Device!"
		]},{"name": "Misaki", "texts": [
				"イルカ見当たらないわね……<br>あら、かわいいイルカのぬいぐるみを持ってる子どもがいるわ",
				"I can't see any dolphins... Oh look, there's a child who's holding a cute dolphin stuffed animal."
		]},{"name": "Coco", "texts": [
				"うわ～ん、どうしよう……<br>イルカさん、見つからないよ～",
				"*Sob* What should I do... I can't find any dolphins!"
		]},{"name": "Yuri", "texts": [
				"早く見つけないと、泣きそうなココの顔が目に浮かぶな<br>なんだこのチラシ、<br>『シュノーケリング体験、やってます』……？",
				"If we don't find some fast, I won't be able to get the image of Coco sobbing out of my head. What's this flyer? \"Snorkeling classes now open\"?"
		]},{"name": "Tsurugi", "texts": [
				"海に入って探した方が、イルカに会えるんじゃないかな？<br>よーし、参加しちゃおっと♪",
				"If I go into the ocean and look there, maybe it'll be easier to find a dolphin. Okay! I'm going to join in too!"
		]},{"name": "Saki", "texts": [
				"みんなでやれば、きっと見つけられるよ♪<br>一緒にシュノーケリングしようよー！",
				"If everyone searches together, I'm sure we'll be able to find some. Let's all go snorkeling!"
		]},{"name": "Leo", "texts": [
				"海、たのしい<br>レオ、飛び込む……！",
				"The ocean's fun! I'm jumpin' in!"
		]},{"name": "Mikoto", "texts": [
				"こらっ！　いきなり飛び込んではいけません！<br>ちゃんと準備運動しましたか！？",
				"Hey! You mustn't suddenly jump in like that! Did you even warm up properly?!"
		]},{"name": "Yu", "texts": [
				"……あっ<br>水中メガネながれちゃった……！",
				"Ah! My goggles floated away!"
		]},{"name": "Minami", "texts": [
				"あらあら、大変！<br>みんなで一緒に探せばきっと見つかるよ",
				"Oh no! That's terrible! If we all look together, we'll definitely be able to find them!"
		]},{"name": "Mizuki", "texts": [
				"あたしに任せて、スポーツ得意だから！<br>うっ、このっ、えいっ！<br>……海の中って思う様に動けなくて難しい",
				"Leave it to me! I'm really good at sports! Hey! Take this! And that! ...It's pretty rough how in the ocean, my body doesn't move how I want it to."
		]},{"name": "Ru", "texts": [
				"私だってやるときは……あっ<br>波に乗って遠くに行っちゃった……",
				"I do have my moments... Ah! The wave took them far away."
		]},{"name": "Yumi", "texts": [
				"……ダメね、波にさらわれてしまったわ<br>私の水中メガネを貸してあげるから諦めなさい<br>あら、何か聞こえない？",
				"That's no good. They were taken away by the waves. I'll let you borrow my goggles, so don't worry about  them. Hey, do you hear something?"
		]},{"name": "Jennifer", "texts": [
				"みんな見て！　イルカよ<br>あら、口に水中メガネがひっかかってるわ<br>私たちに届けてくれたの？",
				"Look, everyone! It's a dolphin! Oh, it has the goggles in its mouth. Is it bringing them back to us?"
		]},{"name": "Reine", "texts": [
				"イルカさん、麗音たちのために持ってきてくれたんだぁ♪<br>ありがと～！　あははっ、水かけないでよ～！<br>イルカさん、麗音たちと遊びたいの？",
				"The dolphin brought the goggles back for us! Thank you! *Laugh* Don't splash me! Ms. Dolphin, do you want to play with us?"
		]},{"name": "Fumie", "texts": [
				"おっ、本物のイルカと触れ合える機会なんて<br>めったにないのです！<br>創作活動のネタが湧いてきますよ～！",
				"Wow. Getting the chance to come in contact with a real dolphin is pretty rare! I can feel the creative inspiration welling up inside me!"
		]},{"name": "Seira", "texts": [
				"ふふっ。人懐っこいですね♪<br>イルカに会うのは、家族で行ったクルージング以来です",
				"*Giggle* It's so friendly! I haven't met a dolphin since I went boating with my family."
		]},{"name": "Yuka", "texts": [
				"わー、あっちにもイルカがいる！<br>つられて遊びに来てくれたのかな♪<br>一緒に水中ダンス踊ろうよーっ！",
				"Wow! There's another dolphin over there! Did it get invited over by its friend to come and play? We should all dance underwater together!"
		]},{"name": "Iruka", "texts": [
				"あはは！　「キューイ、キューイ」だって！<br>この子すっごく可愛いね～！<br>須田の名前も「いるか」なんだよ！　一緒に泳ごうよ！",
				"*Laugh* Listen to it squeaking away! This dolphin is so cute! Hey, my name means \"dolphin\" too! Let's go swimming together!"
		]},{"num": "ED", "texts": [
				"「イルカに会いたい！ワクワク体験♪」これにて終了です！<br>水中メガネも戻ってきて良かったですね！<br>それでは次回のライブ♪アリーナでお会いしましょう！",
				"That's the end of \"I Want to Meet a Dolphin! An Exciting Experience!\" Thank goodness the goggles came back too! See you at the next Live Arena!"
		]}
	]},
	{'titles': ['みちゃった！？ホントのお姫様','Is She a True Princess!?'],
	'num': 11,
	'sub': '開催：2021/08/31 - 2021/09/25',
	'opponent': [
		{"num": "OP", "texts": [
				"本日は歴史ある町のお祭りでライブ♪アリーナを<br>開催することになりました！<br>それでは、ライブ♪アリーナをお楽しみください♪",
				"Today's Live Arena is being held at a festival in an historic town! Now then, please go ahead and enjoy it!"
		]},{"name": "Ranpha", "texts": [
				"わあっ……すごい！<br>アッチもコッチも出店がいっぱいあるネ<br>ほかほかの肉まんは売ってますか？",
				"Wow... This is amazing! There are food stalls here, there, and everywhere! I wonder if any of them are selling piping-hot meat buns."
		]},{"name": "Yukari", "texts": [
				"かき氷にわたあめ……あっ、鶴の形をした飴細工も<br>売ってますよ！　どれもおいしそうで目移りしちゃいますね<br>食いしん坊なゆかりは、ひとつに選べません！",
				"Shaved ice, cotton candy, and... Crane-shaped sugar sculptures! So many yummy things to choose from, I can't decide! A foodie like me can't pick just one!"
		]},{"name": "Sakura", "texts": [
				"……かわいい浴衣を着てる人がいる<br>あ、あの鶴の絵柄いいな<br>今度、姉さんとドールに浴衣を作ろうかな",
				"There are so many people wearing cute yukatas. Oh, that crane-patterned one is so nice! Maybe next time, I'll make yukatas for my sister and my dolls."
		]},{"name": "Tsurugi", "texts": [
				"歴史ある建物がたくさん並んでるね<br>実家の神社も古い造りだから、<br>こういう町並みは親しみやすいよ",
				"There are lots of historic buildings around here, huh? Since our shrine is an older-style building, this street feels kinda homey."
		]},{"name": "Isabella", "texts": [
				"この町は昔、鶴の飼い付け場として有名だったらしいな<br>歴史ある町から日本の良さを<br>たくさん学ぶことができそうだ",
				"Apparently, this town used to be famous for breeding cranes. It's a pretty historic place, so this is a good chance to learn some cool things about Japan."
		]},{"name": "Nagi", "texts": [
				"この町とツルさんはなかよしなんだねー<br>だから、ツルさんがお祭りのテーマなのかな<br>よーし、ツルさん描いちゃおー",
				"This town has a special relationship with cranes, right? Maybe that's why there's a crane festival here. All right, I'm gonna draw some cranes!"
		]},{"name": "Ayumi", "texts": [
				"鶴をテーマにしたライブ・パフォーマンス……<br>見てくれる人にどう伝えたらいいかしら？<br>……あなたヒマそうじゃない、一緒に考えてよ",
				"A live performance with a crane theme... What would be the best way to convey something like that to the audience? If you're free, let's brainstorm together!"
		]},{"name": "Shun", "texts": [
				"鶴かぁ……<br>テーマが馬だったら私の相棒、太郎の出番なのになぁ",
				"Cranes, huh? If it were horse-themed instead, then it would be time for my boy Taro to shine!"
		]},{"name": "Sana", "texts": [
				"動物園から本物の鶴を借りてくるのはどうかしら！<br>……ちょ、ちょっと言ってみただけよっ！",
				"I wonder if we could borrow some real-life cranes from the zoo. ...I-I was just thinking out loud!"
		]},{"name": "Chiduko", "texts": [
				"この町のみなさんの鶴への愛を感じますわ<br>わたくしの名前と同じ「鶴」……これは運命でしょうか♡<br>この町のことをもっと知りに資料館へ向かいましょ♪",
				"I can tell how much the people of this town love cranes. Part of my name means \"crane.\" Maybe it's fate? Let's go to the museum and learn more about this town!"
		]},{"name": "Aya", "texts": [
				"資料館にあった素敵な書に、この町の歴史が記されていました<br>ここには昔、鶴姫というお姫nさまがいたらしいです",
				"There was a great book in the museum about this town's history. Apparently, a princess called Tsuruhime, the \"Crane Princess\" used to live here."
		]},{"name": "Seira", "texts": [
				"鶴姫さまは人が離れていく町を悲しんで<br>どうにかしようと様々な催しを開いたそうです<br>決めたら貫き通す性分は私と少し似ているかもしれませんね",
				"Princess Tsuruhime was sad that people were leaving town, so she came up with events to get them to stay. She was determined once she made a decision, like me."
		]},{"name": "Nanaka", "texts": [
				"人を集め町を盛り上げるための活動……<br>私たちスクールアイドルに似てるね！<br>ぜひインタビューしてみたかったな",
				"Doing all that she could to try and liven up the town... She does kinda remind me of school idols like us! I would have loved to interview her."
		]},{"name": "Ryo", "texts": [
				"自身も参加して話題を集めたが、最後は病に伏せ<br>夢半ば……。悲劇の題材にもなりそうなお話だね<br>お姫さまに思いを馳せると心が痛い",
				"She joined the events and got lots of attention but ended up falling ill, and that was it. Her story would make a tragic play. Thinking about her makes me sad."
		]},{"name": "Rebecca", "texts": [
				"この町のために鶴姫は私たちのような活動をしていたのね<br>「日日是好日」！<br>ZENの心を持っていたのかしら",
				"She was doing the same kinds of activities that we do, all for the sake of this town. \"Every day is a good day,\" right? I wonder if she had a zen heart too."
		]},{"name": "Mikoto", "texts": [
				"鶴姫さまが考えたお祭りは今もこうして残っているんですね<br>秩序のもと守り継がれる歴史……すばらしいです！",
				"So, the festival that she created is still alive and well today, huh? Her legacy has been preserved like this... How wonderful!"
		]},{"name": "Maria", "texts": [
				"この町とお祭りにかける鶴姫のアツい情熱を感じるわ<br>この情熱をダンスで表現したいわ♪",
				"You can just feel the fiery passion of Tsuruhime in this town and its festival. I want to express that same passion in our dance!"
		]},{"name": "Sakuya", "texts": [
				"姫は機関の陰謀と戦っていたのかしら……！？<br>ここは、裏の世界と戦う有能エージェントな私が<br>やるしかないわね！",
				"I wonder if the princess battled against some kind of conspiracy... As a talented agent fighting the underworld, I'd have no choice but to intervene!"
		]},{"name": "Saki", "texts": [
				"私、鶴姫さまの夢を応援したい！<br>この想いをたくさんの人に届けようよ！",
				"I want to support Princess Tsuruhime and her dream! Let's pass on this feeling to as many people as we can!"
		]},{"name": "Akiru", "texts": [
				"鶴姫の想いに応えて、頑張らなくちゃいけないわね<br>今なら鶴の声のような伸びやかに遠くまで響く歌を<br>届けられる気がするわ",
				"We have to do our best to live up to Tsuruhime's dream. I feel like I'll be able to deliver a song that will resonate far and wide, like the call of a crane."
		]},{"name": "Hitomi", "texts": [
				"今日の俺は気分がいい……！<br>この熱い拳でライブステージを盛り上げてやるぜ！<br>いくぞーーーっ！！",
				"I'm in such a good mood today! I'm gonna liven up the stage with my passionate fists! Let's goooo!"
		]},{"name": "Akira", "texts": [
				"こんなにたくさんの人たちが<br>アタシらのステージを観に来てくれている！<br>ここにいる1人1人に歌を届けてみせるよ！",
				"There are so many people here to see our show! I'll make sure our song reaches each and every one of them!"
		]},{"name": "Fuu", "texts": [
				"イエーイ♪　テンションマックス！<br>バトンパスみたいにみんなの息がピッタリ合って<br>最高に気持ちがいい！！",
				"Yay! I'm pumped up to the max! It feels like everyone's breathing perfectly in sync, almost like relay races with their baton passes. This feels great!"
		]},{"name": "Christina", "texts": [
				"ライブうまくいきましたね、神のご加護でしょうか<br>鶴姫さまも見守っていてくださったのかもしれませんね",
				"The live show went so well! I feel like the gods are smiling on us today. Maybe even Princess Tsuruhime herself is watching over us!"
		]},{"name": "Koyuki", "texts": [
				"鶴の羽をイメージした扇子を使った振り付けも<br>うまくいって嬉しかったな<br>鶴の美しさや優雅さをうまく表現できたみたい♪",
				"I'm so glad we were able to do choreography using the crane-patterned folding fans too. I think we really expressed the beauty and elegance of cranes!"
		]},{"name": "Himeno", "texts": [
				"ステージを観にいらしていた鶴姫さまのご子孫という方から<br>ライブのお礼を頂きました<br>見てください、こんなに美しい反物は初めてです！",
				"We received a little thank-you from some of Tsuruhime's descendants who came to the show. Look at this! I've never seen such beautiful fabric before!"
		]},{"name": "Kasane", "texts": [
				"すごい、こんな豪華な生地を使えるなんて……！<br>見たこともないすごい衣装が作れる予感がする♪",
				"Oh wow, we get to use such beautiful cloth?! I think we'll be able to make the most beautiful costumes from it, the likes of which have never been seen!"
		]},{"name": "Yuuka", "texts": [
				"お礼に絹を頂けるなんて、昔聞いた鶴のお話のようですね<br>昔話のなかでも、よく朗読のお願いをされるんですよ",
				"Receiving silk as a token of gratitude sounds like something from an old folk tale about cranes. I'm often asked to recite folk tales, you know."
		]},{"name": "Haruka", "texts": [
				"えっ、もしかして鶴姫さまは本物の鶴だったのかな<br>なんだかロマンティックだね♪<br>お姉ちゃんにも教えてあげよう～！",
				"Oh, maybe Princess Tsuruhime was actually a real crane? How romantic! I'm gonna tell my sister all about it!"
		]},{"name": "Akemi", "texts": [
				"あらっ、大きな鳥が飛んでいったわ。あれはもしかして……！<br>く～～っ、カメラで撮り損なうなんて！！<br>今日のことは心のシャッターに刻みましょ！",
				"Oh wow, a large bird just flew by. Could it have been...? Oh no, I missed my chance to take a photo! I'll just have to take a mental snapshot instead!"
		]},{"num": "ED", "texts": [
				"これにてライブ♪アリーナ、閉幕です！<br>きっと鶴姫さまも喜んでいますね♪<br>それでは、次回のライブ♪アリーナでお会いしましょう！",
				"That's the end of today's Live Arena! Princess Tsuruhime is surely pleased by it too. Okay, see you at the next Live Arena!"
		]}
	]},
	{'titles': ['やさしさはきつね日和！？','A Perfect Day for Kindness?'],
	'num': 12,
	'sub': '開催：2021/09/30 - 2021/10/25',
	'opponent': [
		{"num": "OP", "texts": [
				"みなさん、ライブ♪アリーナ開催へ向けて準備中のようです<br>いつもとはちょっと違ったライブになりそう……？<br>ちょっと覗いてみましょう♪",
				"Everyone appears to be gearing up for the Live Arena. It looks like this show might end up a bit different than usual. Let's take a peek!"
		]},{"name": "Tsurugi", "texts": [
				"神社のお手伝いをしていたときに聞いたんだけど<br>今度参加するお祭りライブが開かれる場所は<br>お稲荷様で親しまれる由緒ある神社らしいよ",
				"When I was helping out at the shrine, I heard the venue for the upcoming festival live show is a historic shrine that is well known for housing the god Inari."
		]},{"name": "Christina", "texts": [
				"実りの秋と言いますし<br>五穀豊穣に感謝して開かれるお祭りなのでしょう<br>そのライブに参加できて喜ばしいですね",
				"The festival is held to give thanks for a bountiful harvest during harvest season, right? I'm so happy that I'm able to take part in the live show for it."
		]},{"name": "Sachiko", "texts": [
				"その神社には、神の使いであるきつねが<br>化けて出るという噂を聞いたぞ<br>我の魔術で見つけてやろうっ！",
				"I've heard rumors that foxes acting as divine messengers disguise themselves to visit the shrine and perform kind deeds. I'll use my magic to find them!"
		]},{"name": "Shun", "texts": [
				"お寺や神社ではいろんな動物が祀られてるよね<br>昔からたくさんの人の生活に深く関わってきたから<br>馬を祀っている神社も多いんだよ♪",
				"All sorts of animals are worshipped at temples and shrines, huh. Many shrines deify horses because they've been a part of so many peoples' lives for so long."
		]},{"name": "Yumi", "texts": [
				"噂なんて怪しいものね<br>もし本当だとしても、化かされる人なんているのかしら？<br>……あ、でも聖来は信じやすい子だから心配ね",
				"Rumors are pretty sketchy. Even if they are true, who would actually be fooled? Oh, but I guess Seira IS pretty gullible... She worries me a bit."
		]},{"name": "Rebecca", "texts": [
				"あっ！　せっかくだから、お稲荷様のお使いにちなんで<br>ライブで、きつねの恰好をするのはどうかしら？<br>みんなでお面を被ったり、とかね♪",
				"Oh! How about we take this chance to dress up like the divine fox messengers of Inari for this live show? We could all wear fox masks or something like that!"
		]},{"name": "Yuri", "texts": [
				"この前、ココと小物を買いに行ったとき<br>尻尾に似せたファーのチャーム見かけたんだ<br>それを腰につければ雰囲気がでると思うぞ",
				"The other day when Coco and I went shopping for accessories, we spotted faux fur charms that look like tails! We'd get that vibe if we wore them on our waists!"
		]},{"name": "Sayuri", "texts": [
				"ふっふっふっ。きつねよりうまく化けちゃうよ！<br>サバゲーでも周囲に溶け込むのは得意だから任せて♪<br>あはは、それとはちょっと違うか♪",
				"Hehehe. My disguise will be better than a fox's! I'm good at blending in when I play airsoft, so leave it to me! *Laugh* I guess it's not quite the same, huh."
		]},{"name": "Hitomi", "texts": [
				"何……？<br>勝負事なら変身だろうが負けられん<br>日々の鍛錬の成果を見せてやろう！",
				"What's that? If this is a competition, even one about transforming, I can't afford to lose! I'll show everyone the results of my daily training!"
		]},{"name": "Kasane", "texts": [
				"いいねいいね♪<br>きつねさんが驚くくらいすっごいコスプレ、じゃなくて<br>変身しちゃおうよ♪",
				"That's the spirit, all right! Let's wear costumes...I mean, undergo transformations that'll leave any fox astonished!"
		]},{"name": "Aya", "texts": [
				"墨を使ってお面に顔を描いてみました<br>細長い目の部分は、きつねの特徴を<br>うまく表現できた気がします……！",
				"I used ink to draw a face on the mask. I think I did a great job at expressing fox-like features, like the elongated eyes!"
		]},{"name": "Reine", "texts": [
				"見てみて！　黒地のお面かわいいでしょ？<br>耳に付いてる鈴とタッセルもお気に入りなんだぁ♡",
				"Check it out! Isn't this black mask cute? I also love the bells and tassels on the ears!"
		]},{"name": "Marika", "texts": [
				"みんなが持ってきたお面<br>いろんなデザインがあって面白いなぁ～<br>飽きっぽいあたしでもずっと見てられるよ♪",
				"The masks that everyone brought with them are so fun! All the designs are so different from each other. Even someone fickle like me can stare at them for ages!"
		]},{"name": "Misaki", "texts": [
				"この尻尾のファーチャーム、なめらかな触り心地で最高ね……<br>こんなぬいぐるみ、どこかにないかしら",
				"The silky feel of this tail charm made from faux fur is amazing... I wonder if they sell stuffed animals like this somewhere."
		]},{"name": "Leo", "texts": [
				"きつねのシッポ、たくさん持ってきた！<br>ふわふわで気持ちいい……！",
				"I brought a bunch of fox tails! They feel so nice and soft!"
		]},{"name": "Haruka", "texts": [
				"今回の衣装のデザインは浴衣っぽくしてみました！<br>神社にも合う和テイストです♪",
				"I made the costume designs look like yukatas this time! They've got a Japanese flair that'll also match the shrine perfectly!"
		]},{"name": "Ranpha", "texts": [
				"ジャーン！　大好きなパンダのお面持ってきたネ！<br>白いもふもふな尻尾も準備バンタン♪<br>エッ……、好きな動物の恰好をするんじゃないアルカ！？",
				"Tadaaa! I brought my favorite panda mask! I also have this fluffy white tail all ready to go! Huh? Aren't we supposed to dress up like our favorite animal?!"
		]},{"name": "Jennifer", "texts": [
				"あら、蘭花は勘違いして違うものを持ってきてしまったのね<br>尻尾のチャームはレオがたくさん持ってたから借りましょう",
				"Oh no, Ranpha... You must've misunderstood the plan and brought the wrong stuff. Leo has lots of tail charms, so you should borrow one of hers."
		]},{"name": "Ru", "texts": [
				"残念ながらお面を余分に持ってる人はいないみたいです<br>私が予備のものを持ってきていれば……",
				"Unfortunately, it doesn't look like anyone has any extra masks. If only I had brought a spare..."
		]},{"name": "Minami", "texts": [
				"起こってしまったことは仕方ありません<br>どこかできつねのお面を借りられないか聞いてみましょう",
				"There's no use crying over spilled milk. Let's go ask around and see if we can borrow a fox mask from someone."
		]},{"name": "Yuuka", "texts": [
				"誰も持っている人はいませんでしたね……<br>放送で呼びかけるのも、よい方法にはならなさそうです<br>困りましたね……",
				"No one had a mask... And I don't think making an announcement about it over the broadcast will help us either. What should we do?"
		]},{"name": "Yu", "texts": [
				"あっ……お面が置いてある……！<br>一緒にメモもあったよ、なにか書いてあるみたい……",
				"Ah! There's a mask lying here! And there's a note attached to it too. It looks like something's written on it..."
		]},{"name": "Fuu", "texts": [
				"あっ、あの大きな帽子を被った子！<br>もしかしてあの子が置いて行ってくれたのかな？<br>はぁ、はぁ……。ダメだ、追いつけなかった……！",
				"Oh, that girl wearing the big hat! Could she have left it here for us? *Pant* Pant* It's no use, I couldn't catch up to her!"
		]},{"name": "Ayumi", "texts": [
				"メモには「これ使って」って書いてあるわね……<br>助けてくれるなら、直接渡してくれればいいのに<br>お礼も言えないじゃないっ！",
				"The note says, \"Use this.\" She should've handed it over to us directly if she wanted to help us. Now we can't even thank her properly!"
		]},{"name": "Iruka", "texts": [
				"きっと、困ってる須田たちを見て助けてくれたんだよ！<br>お言葉に甘えて使っちゃお♪<br>さ、ライブいくぞー！",
				"She must've seen that we were having trouble and wanted to help us! Let's accept her kind offer and use the mask! It's time for the live show!"
		]},{"name": "Maria", "texts": [
				"きつねになりきって<br>いつもの私とはちょっと違うミステリアスな<br>ライブパフォーマンスをお店するわ♪",
				"Now that I've changed into a fox, I'll show everyone a mysterious side of myself during the performance. One that's a little different from usual!"
		]},{"name": "Mizuki", "texts": [
				"軽やかにジャンプ！　どう、きつねっぽい？<br>へへっ、ジャンプ力なら誰にも負けない自信があるよ♪",
				"Check out my nimble jump! How about it? Do I look like a fox? *Giggle* When it comes to jumping, I'm confident that I won't be beat!"
		]},{"name": "Koyuki", "texts": [
				"小雪のきつねのイメージはね、スラッとしてるの<br>バレエで培った技術でそのイメージを表現してみせるよ",
				"I always picture foxes as being lithe and slender. I'll try to express that with the skills I've cultivated through ballet."
		]},{"name": "Ryo", "texts": [
				"一時はどうなるかと思ったけれど、ライブは無事成功したね<br>ふふ、やはり表現するのは楽しいな<br>お面や尻尾のチャームもステージを彩ってくれた",
				"I wasn't sure how it'd turn out, but the show was a success! Hehe, it's so fun to express yourself. The masks and tail charms also added to the performance!"
		]},{"name": "Seira", "texts": [
				"助けてくださった方にお礼を言えませんでした……<br>せめて、無事にライブを終えられたことに感謝を込めて<br>お参りして帰りましょう",
				"We couldn't thank the person who helped us... The least we can do now is visit the shrine and express our gratitude for the great show before we head home."
		]},{"num": "ED", "texts": [
				"結局、お面を置いて行ったのはいったい……？<br>誰かのきまぐれな手助けだったのかもしれませんね……<br>それでは、次回のライブ♪アリーナでお会いしましょう！",
				"So who left that mask there, anyway? Maybe the girls benefited from a bit of...divine intervention? At any rate, see you at the next Live Arena!"
		]}
	]},
	{'titles': ['ペンタス・フェスティバル',''],
	'num': 13,
	'sub': '「ペルソナ」シリーズコラボ特別回　開催：2021/10/31 - 2021/11/25',
	'offset': 0,
	'opponent': [
		{'num': 'OP', 'text': 'さあ、学園対抗のライブ♪アリーナ！<br>さっそく盛り上がっていき……ん？　あ、えっと、速報でーす<br>『ゲスト様』からコメントもらえたので、紹介しますね！'},
		{'name': 'P3', 'namealt': 'アイギス','text': '敵の反応なし。罠というわけではなさそうですね<br>警戒態勢を解除し、状況への対処を開始……<br>まずはその『ライブ』というものを検証するであります'},
		{'name': 'P3', 'namealt': '<ruby>桐条<rt>きりじょう<\/rt><\/ruby><ruby>美鶴<rt>みつる<\/rt><\/ruby>', 'text': 'この小窓は一体……ここに映るライブにコメントをしろと？<br>タルタロスでは初めて見る現象だが……映っているもの自体に<br>危険性は……いや、むしろ楽しそうだな'},
		{'name': 'P3', 'namealt': '<ruby>岳羽<rt>たけば<\/rt><\/ruby>ゆかり', 'text': 'えっ、コメント！？　無茶振りすぎない……？<br>まあ、こっちに危険とかないなら別にいいけど……<br>どんなライブやってんの？'},
		{'name': 'P3', 'namealt': '<ruby>山岸<rt>やまぎし<\/rt><\/ruby><ruby>風花<rt>ふうか<\/rt><\/ruby>', 'text': '危険な反応はないし、安全……なのかな？　でもコメントとか<br>あまり得意じゃなくて……で、できる範囲でよければ……<br>内容考えたいから、少し時間もらってもいいですか？'},
		{'name': 'P3', 'namealt': '<ruby>汐見<rt>しおみ<\/rt><\/ruby><ruby>琴音<rt>ことね<\/rt><\/ruby>', 'text': '＞ライブに対してコメントを求められているようだ<br>　特に問題なさそうだし、素直に答えてみよう<br>　今、自分の中で思い浮かんでいる言葉は……'},
		{'name': 'P3', 'namealt': 'アイギス', 'text': '『ライブ』……つまり『生存する』の検証結果が出ました<br>戦場での生存に高い士気は不可欠。名は体を表すの通り<br>皆を守りたいと士気が上がったであります。なるほどなー'},
		{'name': 'P3', 'namealt': '<ruby>岳羽<rt>たけば<\/rt><\/ruby>ゆかり', 'text': 'あはは……<br>我ながら呆れるわ。ここが危険なタルタロス<br>ってこと忘れて楽しんじゃった。でもこんな余裕持てるなら<br>この先もし何かあってもきっと大丈夫よね！'},
		{'name': 'P3', 'namealt': '<ruby>桐条<rt>きりじょう<\/rt><\/ruby><ruby>美鶴<rt>みつる<\/rt><\/ruby>', 'text': 'フッ……気づいたら、ライブに見入っていたようだな<br>最後まで全力で踊り切る姿……<br>何があっても諦めるなと励まされる気分だ。ブリリアント！'},
		{'name': 'P3', 'namealt': '<ruby>汐見<rt>しおみ<\/rt><\/ruby><ruby>琴音<rt>ことね<\/rt><\/ruby>', 'text': '＞……楽しい歌と踊りに、どこか応援されている気持ちになる<br>　たとえいつか何かに絶望することがあっても、<br>　前を向く気持ちを忘れないでいよう'},
		{'name': 'P3', 'namealt': '<ruby>山岸<rt>やまぎし<\/rt><\/ruby><ruby>風花<rt>ふうか<\/rt><\/ruby>', 'text': 'す、すごい……！　ライブってすごいです！<br>上手く言えないんですが、前向きな心になれるというか……！<br>って、あ……周りの目も気にせずはしゃいじゃいました……'},
		{'name': 'P4', 'namealt': 'マリー', 'text': 'ゲストコメント？　よくわかんないんだけど……<br>今その小窓に映ってるのが、『ライブ』ってやつ？<br>……ふ、ふーん、まあ、観ろっていうなら観てもいいけど'},
		{'name': 'P4', 'namealt': '<ruby>白鐘<rt>しろがね<\/rt><\/ruby><ruby>直斗<rt>なおと<\/rt><\/ruby>', 'text': 'テレビの中の異世界で、まさかコメントを求められるとは……<br>小窓の向こうの光景を見るに、危険はないと推理できますが<br>……念の為もう少し様子を見てみましょうか'},
		{'name': 'P4', 'namealt': '<ruby>里中<rt>さとなか<\/rt><\/ruby><ruby>千枝<rt>ちえ<\/rt><\/ruby>', 'text': 'えっ、ライブなんて観れるの！？<br>なんだか楽しそうじゃん、観る観る！　帰ったら<br>カンフーの修行しようって思ってたけど、予定変更だね！'},
		{'name': 'P4', 'namealt': '<ruby>久慈川<rt>くじかわ<\/rt><\/ruby>りせ', 'text': 'なに、コメント？　ま、敵とか怪しげな反応もないし、<br>今なら別にイイケド……でもアイドル経験ある私に<br>ライブのコメント求めちゃうんだ～？　私、結構辛口だよー？'},
		{'name': 'P4', 'namealt': '<ruby>天城<rt>あまぎ<\/rt><\/ruby><ruby>雪子<rt>ゆきこ<\/rt><\/ruby>', 'text': 'え、こんなところでライブ観るの……？　異世界でライブ？<br>……ぷっ、ぷぷ、あははっ！　ツ、ツボに入ったかも！<br>って、本気の話なの……？　そ、それは、ごめんなさい……'},
		{'name': 'P4', 'namealt': '<ruby>白鐘<rt>しろがね<\/rt><\/ruby><ruby>直斗<rt>なおと<\/rt><\/ruby>', 'text': 'この展開は推理できませんでした。まさかこれほどまでに<br>僕の心が動かされるとは。むき出しの情熱と、常に前を向いて<br>やり遂げるひたむきさ……何か得るものがありますね'},
		{'name': 'P4', 'namealt': '<ruby>天城<rt>あまぎ<\/rt><\/ruby><ruby>雪子<rt>ゆきこ<\/rt><\/ruby>', 'text': 'ライブ、すごいね……気持ちがすっきり明るくなった感じ<br>特捜隊に加わって初めてこの特殊なメガネをかけたとき、<br>異世界の霧が晴れて見えて……ふふ、何だか思い出しちゃった'},
		{'name': 'P4', 'namealt': '<ruby>里中<rt>さとなか<\/rt><\/ruby><ruby>千枝<rt>ちえ<\/rt><\/ruby>', 'text': 'あんな派手な舞台で物怖じせず踊れるとか、すごいじゃん！<br>観てたら何だかあたしも身体動かしたくなっちゃった！<br>アチョー！　ホォー……オワチャッ！'},
		{'name': 'P4', 'namealt': '<ruby>久慈川<rt>くじかわ<\/rt><\/ruby>りせ', 'text': 'ステージに立つだけでも大きな覚悟が必要で大変なのに、<br>色々乗り越えてきたんだね……すごくキラキラしてる！<br>この『りせちー』、みーんな推しちゃう！'},
		{'name': 'P4', 'namealt': 'マリー', 'text': 'キラリ煌めく星たち……心の夜間を彩るミルキィウェイ……<br>って、何勝手に渡しの詩聞いてるの！？　ばかきらいさいてー<br>……でも心が前向きになれたの、私だけじゃないでしょ？'},
		{'name': 'P5', 'namealt': 'ナビ', 'text': 'なんだ！？　その小窓っぽいやつの先に見えるの……<br>ら、ライブぅ！　だと……？　まあ危なげな反応してないし？<br>……てか、逆にすっげー楽しげじゃね？'},
		{'name': 'P5', 'namealt': 'ノワール', 'text': 'コメント……ですか？　あの、どちら様……<br>あ、でもメメントスでこんな楽しい雰囲気……フフ<br>いい意味で、裏切られた感じしてます'},
		{'name': 'P5', 'namealt': 'クイーン', 'text': 'シャドウ！？　……だったら、とっくに攻撃されてるか<br>え？　コメントがほしいだけ？　そ、そうだったんだ……<br>勝手に焦っちゃって……お姉ちゃんが見てたら笑われてるな'},
		{'name': 'P5', 'namealt': 'パンサー', 'text': 'へえ、その向こうに見えるのってライブなんだぁ～<br>ちょっと最近、大変なことばっかでさ、<br>そんなアガる言葉きくの、久しぶりかも！'},
		{'name': 'P5', 'namealt': 'ヴァイオレット', 'text': '私なんかよりも、先輩たちの方が素敵なコメントを……？<br>え？　皆さんに、個別にうかがってるんですか……？<br>じゃあなんか、私なりに気の利いたこと……うーん……'},
		{'name': 'P5', 'namealt': 'ナビ', 'text': '……にしてもライブか、人見知りを克服した今のわたしなら、<br>クリアできないお題じゃないな<br>よーし！　いつかライブ会場で普通に盛り上がってやる！'},
		{'name': 'P5', 'namealt': 'パンサー', 'text': 'なんかさ～観てたら自然に体が動いてきちゃうね！<br>ほんの少し前まで、すっごく暗い顔してたんだよ？<br>え？　仮面でわかんない？　アハハ、そりゃそうだっ！'},
		{'name': 'P5', 'namealt': 'ヴァイオレット', 'text': 'うーん……あ、できました、コメント！<br>自分が思ったままを素直にできれば……あ、要するに！<br>楽しめたら「勝ち」だと思いますっ！'},
		{'name': 'P5', 'namealt': 'ノワール', 'text': 'ライブをされている皆さん、どなたかは存じませんが、<br>観ていて想う気持ちには、覚えがあるような……<br>とても素敵なライブ、ありがとうございます'},
		{'name': 'P5', 'namealt': 'クイーン', 'text': 'すごく魅力的……あそこまで仕上げるのに、きっと辛い練習を<br>皆さんで乗り越えてきたんだろうな……あ！<br>考えたらそれ、私たちも一緒か。なら私たちも、大丈夫だね'},
		{'num': '', 'text': '<div class="note">※この回のエンディングテキストはありません。<br>ステージ31以降は、ステージ1～30のテキストが繰り返されます。<br>また、この回のドリームセッションの対戦相手・セリフは以下の1種類のみでした。<\/div>'},
		{'num': 'D', 'name': 'P3', 'namealt': 'エリザベス', 'text': 'とある節目の『特別』に携われ、光栄に存じます<br>『希望』とは、別け隔てなく万人の心に光を灯すもの……<br>それを拝見できたこと、私にとっても『特別』でございます'}
	]},
	{'titles': ['灯そう！聖なる気持ち','O Holy Shining Night!'],
	'num': 14,
	'sub': '開催：2021/11/30 - 2021/12/25',
	'opponent': [
		{"num": "OP", "texts": [
				"クリスマスの季節が近づいてきましたね！　みなさんは<br>ほしいものありますか？　おや、スクールアイドルの<br>みなさんもクリスマスの話をしているようですね",
				"The Christmas season is almost upon us! Is there anything you  all hope to get? Ah, it seems that the school idol girls are  chatting about Christmas too!"
		]},{"name": "Christina", "texts": [
				"もうすぐクリスマスですね<br>この時期は街の雰囲気がいつもと違ってワクワクします<br>私にとっても大切な祈りの日の1つなんですよ",
				"It'll be Christmas soon, huh? The atmosphere in town is so  much more exciting than usual at this time of year. It's also an  important day of prayer for me!"
		]},{"name": "Yumi", "texts": [
				"知り合いの演奏家の方が毎年参加してるクリスマスツリーの<br>点灯式イベントで、ライブをしてみないかって<br>声を掛けてもらえるなんて、とても光栄よね",
				"One of my musician friends who takes part in the annual  tree-lighting ceremony asked us if we'd like to do a live show  for it. It's a tremendous honor!"
		]},{"name": "Chiduko", "texts": [
				"聖なる夜のイベントに招待されるなんて……<br>特別な日にみなさんへ愛を届けられることは幸せですわ♡",
				"Getting invited to an event on such a sacred night is  unbelievable. We're so blessed to be able to share our love  with everyone on such a special day!"
		]},{"name": "Akemi", "texts": [
				"く～っ！<br>こんなに大きなツリー見たことないわ、最高ね♪<br>これはぜひ写真に残しておきたいわ！",
				"Oooh! I've never seen such a gigantic tree before! It rocks!  I need to take a picture of it so I can remember it forever!"
		]},{"name": "Maria", "texts": [
				"オーナメントに使われているポインセチアの花で<br>真っ赤に飾られたクリスマスツリー……とても情熱だわ！<br>前から一度見てみたいと思ってたのよ",
				"The Christmas tree adorned in red of the poinsettia... It's all so  passionate! I've been longing to see this for ages."
		]},{"name": "Yu", "texts": [
				"イルミネーションきれい……<br>星の輝きとはまた違った良さがある……",
				"The lit-up decorations are beautiful... It's a different kind of  beauty than the twinkling of the stars..."
		]},{"name": "Iruka", "texts": [
				"小さな子たちもたくさんいる！　一層気合が入るねっ<br>あの子たち全員の顔を覚えるのが目標だ♪<br>須田はやるぞーっ！！",
				"There are so many little kids here too! Now I'm even more  motivated. My goal is to remember all of their faces! I've got  this! I can do anything!"
		]},{"name": "Sakura", "texts": [
				"イベントに参加してくれる子たちにもっと喜んでもらいたい<br>私たちを見て笑顔になってくれたら嬉しい……<br>ってドールのこの子も言ってるの",
				"I want the kids attending the event to have even more fun. I'd  be so happy if seeing us brought smiles to their faces... That's  what my doll here said too."
		]},{"name": "Sakuya", "texts": [
				"今回のイベント、咲良がとてもやる気を出しているの<br>ここで危ない目に合わせるわけにはいかない！<br>いつも以上に気を配って見守るわ",
				"Sakura seems really pumped up about this event. I can't risk  putting her in any danger here! I'll watch over her with even  more caution than usual."
		]},{"name": "Coco", "texts": [
				"ココたちがサンタさんになって、来てくれた子たちに<br>プレゼントを渡すなんてどうかな？<br>たくさんの人が笑顔になってくれるとうれしいな！",
				"What if we all dress up as Santa and give out presents to all  the kids who show up? I'd be so happy if it made lots of people  smile!"
		]},{"name": "Isabella", "texts": [
				"ん？　もらってうれしいプレゼント？<br>みんなで鍛錬ができるから、ダンベルだとうれしい<br>強いに越したことはないしな",
				"Hmm? What makes for a nice present? I think dumbbells  always bring joy since everyone can train their bodies with  them. Nothing beats sheer strength."
		]},{"name": "Fumi", "texts": [
				"私はギョロちゃんの喜ぶものがほしいですが<br>みんながもらってうれしいプレゼントとなると……<br>難しいですね",
				"I'd personally like something that would make Gyoro happy, but  if it's going to be a present that everyone will be happy to get...  That's a tough one."
		]},{"name": "Yukari", "texts": [
				"うーん……みなさん、ほしいものが違いますね<br>プレゼント選びの参考になればと思ったのですが……<br>なかなか選べません",
				"Hmmm... Everyone wants different things, don't they? I thought  this would help me pick out presents, but... Nope, I can't  choose."
		]},{"name": "Ryo", "texts": [
				"来てくれたみんなに喜んでもらえるプレゼントは<br>難しいかもしれないね。ワタシたちはスクールアイドルだから<br>ライブで楽しい時間をプレゼントしたいな",
				"It's tough to pick a present that'll please everyone who comes  to watch us. We're school idols, so I'd like our gift to them to be  a fun time at our show."
		]},{"name": "Yuka", "texts": [
				"あっ、良いこと思いついた！<br>みんなでキャンドルライトを持って<br>クリスマスソングを歌う、なんてどうかな？",
				"Oh, I just thought of something good! How about we all hold  LED candles and sing everyone a Christmas song?"
		]},{"name": "Nagi", "texts": [
				"みんながオレンジ色の明かりを持っている風景、<br>絵に描いたようにきれいだと思うー",
				"I think a scene where we're all bathed in orange glow would  look as pretty as a painting!"
		]},{"name": "Akira", "texts": [
				"キャンドルライトを持ってライブに参加してくれた子に<br>イベントのラストにお礼としてお菓子を贈りたいな<br>結構料理は得意なんだ",
				"The kids taking part in the show by holding LED candles... I  want to give them treats as thanks at the end of the event. I'm  a pretty decent cook, you know!"
		]},{"name": "Minami", "texts": [
				"みんなのお姉ちゃん、永山みなみも<br>腕によりをかけて、みんなが笑顔になるおいしいお菓子を<br>つくっちゃうよ♪",
				"I'll lend all of my skills as everyone's honorary big sister! I'll  make yummy treats that'll bring smiles to everyone's faces!"
		]},{"name": "Akiru", "texts": [
				"いよいよイベント本番ね<br>あら……緊張してるの？　もう……しょうがないわね<br>一生懸命準備したんだから大丈夫よ！",
				"It's almost time for the event. Oh my... Are you anxious? Well,  there's not much to do at this point. We've prepared with all our  might, so it'll all be okay!"
		]},{"name": "Sana", "texts": [
				"クリスマスツリーもイルミネーションも、とってもきれいね<br>さて、そろそろ私たちの出番かしら？　……えっ！<br>何もしてないのにツリーの明かりが消えちゃったわよ！？",
				"The Christmas tree and the lights are sooo pretty. Right then, is  it almost time for us to go up? ...Oh! I didn't do anything, but  the tree lights went out?!"
		]},{"name": "Mutsuki", "texts": [
				"ふむ。どうやら電気系統のトラブルのようだな……<br>吾輩が行って直してこよう！<br>少しの間、時間を稼いでくれ",
				"Hm. It must be some trouble with the electrical system... I'll  head right there to fix it up! All I need is for you to stall for a  little time!"
		]},{"name": "Rika", "texts": [
				"どうやって時間を稼ごうか……<br>よし。私たちとみんなが持っているキャンドルライトで<br>サプライズ演出を装ってライブをはじめよう",
				"How do we stall for time, though... Okay. Let's make a surprise  entrance by using the LED candles everyone's holding and act  like it was intentional!"
		]},{"name": "Jennifer", "texts": [
				"こんばんは～！　私たちスクールアイドルです<br>ビックリさせちゃったかな、ごめんね<br>みんな、最初に配ったキャンドルライトは持ってるかな～？",
				"Good evening! We're school idols! Sorry, I guess we startled  you a bit there. Do you all have the LED candles we handed  out at the start?"
		]},{"name": "Saki", "texts": [
				"キャンドルライトを持ってる人は<br>明かりをつけてくれるかな？<br>おっ！　だんだん明るくなってきた♪",
				"Could everyone holding an LED candle make sure it's lit up?  Wow! It's getting brighter and brighter now!"
		]},{"name": "Mizuki", "texts": [
				"うわぁ～、みんなが明かりをつけてくれたから<br>一面オレンジ色でとってもきれいだよ……！<br>よーし、今からみんな一緒に歌ってツリーに明かりを灯そう♪",
				"Wooow! Since everyone has their lights on, it's like an ocean of  orange. It's so gorgeous! Okay, now let's all sing together and  light up the tree!"
		]},{"name": "Himeno", "texts": [
				"一緒に歌ってくれてありがとうございます！<br>みなさんのおかげでツリーに明かりが灯りました",
				"Thank you so much for singing along with us! The tree is all lit  up now thanks to your efforts."
		]},{"name": "Fumie", "texts": [
				"ライブ、おつかれさまです！<br>トラブルはありましたが、イベントは大成功！<br>まるで、アニメやマンガのような大団円ですね！",
				"Great job on the live show! We hit some snags, but the event  was a huge hit! It was just like a grand finale from an anime or  manga!"
		]},{"name": "Sakura", "texts": [
				"ほんとに喜んでもらえるか不安だったけど……<br>たくさんの子たちがもっと見たいって言ってくれたの<br>ドールも嬉しそうで、がんばってよかった…<br><div class=\"note\">編集者註：ここだけ三点リーダが単独で使用されている。おそらくライターのミス。</div>",
				"I was worried if everyone would actually like it... But lots of kids  said they wanted to see more, and my dolls look pleased too.  I'm glad I tried so hard."
		]},{"name": "Nanaka", "texts": [
				"みんな、今回の主催者の方に取材に行ったら<br>すごい感激してくれてたよ！<br>次のイベントに招待されることになったよ",
				"Guys, I went to interview the organizers of this event and they  were really impressed by us! We'll be invited again to their next  event."
		]},{"name": "Rakshata", "texts": [
				"インドとは違った光景がたくさん見られました！<br>これが日本のクリスマスなんですね<br>また1つ文化の違いを感じられてよかったです♪",
				"I got to see lots things that were way different from India's! So  this is Christmas in Japan... I'm so glad I got to experience  another cultural difference!"
		]},{"num": "ED", "texts": [
				"これにてライブ♪アリーナ、閉幕です！<br>参加してくれたみなさんの心に残るクリスマスを届けられて<br>よかったですね！　それでは、またお会いしましょう",
				"And so ends the Live Arena! It's great that everyone  experienced the Christmas in the way they will remember! See  you at the next Live Arena!"
		]}
	]},
	{'titles': ['キズナでつながるゆく年くる年','Bonds from the Old Year to the New'],
	'num': 15,
	'sub': '開催：2021/12/31 - 2022/01/25',
	'opponent': [
		{"num": "OP", "texts": [
				"まもなく新年ですね～。年末年始はスクールアイドルと一緒に<br>カウントダウン＆ニューイヤーライブで盛り上がりましょう！<br>スクールアイドルのみなさんは一言新年の抱負をお願いします",
				"It's almost New Year's! Let's say bye to the old and ring in the new with the school idols' countdown and live show! But first, let's hear their resolutions!"
		]},{"name": "Haruka", "texts": [
				"も、もうすぐですね。どきどきします<br>お姉ちゃんが起きていられるのか心配で……<br>えーと「寝る子は育つ」が抱負です！",
				"I-It's almost time, huh? I'm excited, but I'm not sure if Kanata can stay up that late... Um, I'm hoping to sleep well and grow nice and tall!"
		]},{"name": "Yuri", "texts": [
				"ハッピーニューイヤー！！　……って、まだか<br>抱負？　新年の！　シビれるな、それ！<br>とにかくあれだよ。「ビッとかっこよく！」だね",
				"Happy New Year! ...Wait, too soon? Huh? My resolution? Yeah, that’s so cool! Anyways, I want to be more, y'know... Dazzlingly cool!"
		]},{"name": "Fumie", "texts": [
				"やや、なぜでしょう、そわそわします、新年まであと少し……<br>ステージに立つ前の心細いような不思議な気持ち。あ、抱負は<br>「世界は丸いただ一つ」アニメに国境はないのです！",
				"I wonder why I'm so fidgety in a weird, right-before-a-show way. It's just a bit longer until New Year's... Oh! I resolve to unite the world through anime!"
		]},{"name": "Ayumi", "texts": [
				"何か足りないわ。ねえ、あなたもそう思わない？<br>そうよ、カウントダウンよ！　私のライブスタートまでの！！<br>言わなくても分かるでしょ、「あなたのため」に歌うんだから",
				"Something's missing, don't you think? Right! We need to do a countdown before my live show starts! I shouldn't have to say it, but I resolve to sing for you."
		]},{"name": "Sachiko", "texts": [
				"な、なんだと！？　汝には聞こえていないのか！<br>くっ、致し方ない。ならば我が抱負と信じ、心して聞きなさい<br>「汝の願いを叶えよう。永遠の忠誠と引き換えに」",
				"Wh-What?! No one informed me of this! Heh, then listen closely and take this resolution to heart. I shall grant your desires...in exchange for undying loyalty."
		]},{"name": "Yukari", "texts": [
				"わー今日はいつにも増して盛り上がっていますねー<br>え、抱負ですか？　もちろん「笑う門には福来る」ですよっ<br>みんなで歌って紡がれる絆がなにより心地よいのです",
				"Wow, it's even livelier today! Um, my resolution? Well, it has to be to \"sing and be merry\"! There's nothing cozier than growing closer together through song."
		]},{"name": "Fumi", "texts": [
				"まだ少し早めですが、ギョロちゃんも一緒に、せーの！<br>あけましておめでとうございます～<br>毎年ですけど「みんな仲良く」を大切にしています♪",
				"It's early, but... All together with Gyoro now! Happy New Year! I may have the same resolution every year, but getting along with everyone really matters."
		]},{"name": "Yuuka", "texts": [
				"さん、にー、いち、ゼロ～あけましておめでとうございます！<br>カウントダウンは放送部の私こそが適任だと自負していました<br>さあ今年もアイドル活動で「表現の自由」を体現しますよー",
				"Three, two, one, zero...! Happy New Year! No one can handle a countdown like me, a broadcasting club member. This year, I'll speak my mind through idol work!"
		]},{"name": "Coco", "texts": [
				"わーい！　ニューイヤーライブ！　始まりましたー♪<br>「心機一転」やっぱり日本のお正月って特別です、文化です！<br>羽根つき、凧あげ、独楽まわし。そうだ、かるたもありました",
				"Yay! Our New Year's live show has begun! Turning over a new leaf is an important part of the holiday. And so are classic Japanese games like karuta cards!"
		]},{"name": "Leo", "texts": [
				"おー日本文化！　レオ、好き。かるたもわかるよ、面白い<br>ハッピーニューイヤー、抱負を述べよ？<br>任せろ、簡単♪　「鬼に金棒、レオにひれ！」",
				"Ooh, I love Japanese culture! I know karuta too. It's fun! Oh, my Happy New Year wish? Easy peasy! I'm gonna try to \"gild the Leo all nice\"!"
		]},{"name": "Ranpha", "texts": [
				"<ruby>新年好<rt>シンネンハオ</rt></ruby>！　お待たせしました、ワタシのライブ始まりますネ！<br>日本の文化、抱負のかるた？　も、もちろん知ってるアルヨ♪<br>レオにひれ、れ……「連続で猿も木から落ちる」デス！",
				"Yay, New Year's! My live show starts at last! We're making resolutions like...karuta? S-Sure, I know what that is! \"E\" first, huh? \"Everyone makes mistakes!\""
		]},{"name": "Marika", "texts": [
				"あけましておめでと。え、何？　ルから始まるかるたな抱負？<br>誰よこんなの始めたの～！　あーもう、ライブ始まっちゃうし<br>るー「類は友を呼ぶ！」って抱負なのコレ？　次は、ブ！",
				"Happy New Year! Wh-What? A resolution starting with \"s\"? Whose idea was that?! Geez. We've got a show to do! \"S\"... Fine. \"Same attracts same\"! Next is \"e\"!"
		]},{"name": "Rakshata", "texts": [
				"ふふ、これがお正月遊びなんですねーとても楽しい文化です<br>さて、ブから始まるのは……「武士に二言はない！」<br>武士道、侍、実にミステリアスです。お次の方はイですよー",
				"*Giggle* So it's a game played during Japanese New Year? How fun! \"E,\" was it...? \"Every samurai stays true!\" I think samurai are actually mysterious, though."
		]},{"name": "Rebecca", "texts": [
				"ハッピーニューイヤー！　見て<ruby>白蓮花<rt>びゃくれんげ</rt></ruby>の衣装よ、素敵でしょ<br>ZENの心、伝わってほしい。「一期一会」かな、私の抱負<br>あら？　東雲学院も花の衣装ね。あれはマーガレットかしら？",
				"Happy New Year! Isn't my white lotus outfit nice? It shows my zen heart. \"Embrace chances\" may do as a resolution. It's true of Shinonome and floral outfits!"
		]},{"name": "Kasane", "texts": [
				"あちゃー、ココの言った、かるたがマズかったのかなあ<br>しりとりになってるし……流れを変えなきゃ！<br>うーん。え、「絵に描いた餅！」あーつなげちゃったよー",
				"Ack! Coco shouldn't have mentioned karuta. Now we're making word chains... I've gotta keep up the chain or Coco'll be blamed. Oh! \"Seize your dreams!\" Phew!"
		]},{"name": "Yuka", "texts": [
				"あけおめ！　今日は特別なライブだし、キレッキレのダンスを<br>見せてあげる♪　しりとりで新年の抱負？　時間ないよー<br>ち、ち……「中華料理はじめましたー！」なによこれー！！",
				"Happy New Year! ...A resolution that starts with \"S\"? There's no time for that! S... \"Seasonings change, so should you!\" ...Wait, what does that even mean?!"
		]},{"name": "Akira", "texts": [
				"よっ！　今年もよろしく♪　お気に入りのロードで来たからさ<br>気分がいいんだー。よしっ、この勢いでライブも頑張るぞー！<br>たで始まる抱負？　え、ちょっ、「立つ鳥跡を濁さず」",
				"Hey! Hope this year's another good one! I'm hyped for the live show 'cuz I came on my fave bike! ...A proverb resolution first? Er, um! \"Ugly is as ugly does\"?"
		]},{"name": "Sana", "texts": [
				"はぁ～新年早々ひどい有様ね。別にココのためにじゃないけど<br>人肌脱いであげるか。はぁっ？　だから、ココは関係ないの！<br>わっ時間ない、すすすっ「住めば都」……。さーライブ行こっ",
				"*Sigh* What a way to start the year. Fine, I'll bite. But it's not for Coco's sake or anything! Really! \"...S-S-Sit wherever you call home.\" Onto the show!"
		]},{"name": "Mutsuki", "texts": [
				"不可能を可能に、それが発明。つまり瞬時に見つけることだな<br>しりとりが終わる言葉を。吾輩のAI辞書シリトランがそれっ！<br>……「コウボウモフデノアヤマリ」。失敗失敗、カッカッカッ",
				"Inventions make the impossible, possible. Time to end this! This calls for my AI dictionary, Wordchain EX! ...\"Even Homer nods.\" ...Oops, on it goes. Mu ha ha!"
		]},{"name": "Sakura", "texts": [
				"あけまして……おめでとう。……今日の私、とびっきりだよ<br>その前に……睦月が答えを見つけたから……私で終わらせる！<br>り……り……り……「竜頭蛇尾」……むずかしい",
				"Happy...New Year. Today, I'm...going to give it my all. But, first... I'll finish what Mutsuki didn't! S... S... \"Strong start, weak finish.\" ...This is hard."
		]},{"name": "Rika", "texts": [
				"なるほど。アリーナの熱量、この推移だとピークは近いな<br>ココの名誉を挽回し、更なる熱狂をつくるのが東雲の友情！<br>とはいえ、うーん。ひ、「火に油を注ぐ」ってダメか……",
				"I see. The Arena's flames are nearing peak temperature. Raising that fervor in Coco's honor is a matter of Shinonome friendship. \"Hurl oil on the fire,\" maybe?"
		]},{"name": "Mikoto", "texts": [
				"ふふ、私がしりとりを終わらせて風紀を正しましょう！<br>あれ？　なんか、緊張してる！？　わわ私がちゃんと……<br>コホン。それでは、くーくーっ「口は<ruby>禍<rt>わざわい</rt></ruby>のかど！」……あぁ",
				"Ha! So it's my duty to end this and set things back on course! (Hm? I'm kinda nervous?! I-I...) Ahem. Well then! \"Evil starts when you speak!\" ...Ack."
		]},{"name": "Chiduko", "texts": [
				"あけましておめでとうございます♡　みなさん、愛とは繋がり<br>むしろ、繋がることにこそ、秩序と規律を感じませんこと？<br>「毒を食らわば皿まで」。わたくしの新年の抱負ですわ♡",
				"Happy New Year! Love means connection, guys! And connections go hand in hand with order and discipline, yeah? \"Keep to your guns\" is my motto for the year!"
		]},{"name": "Himeno", "texts": [
				"この抱負でしりとり、ホントはみなさん楽しんでいますよね～<br>繋げられなかったんだ、って思われたくない緊張感が楽しい<br>うふふ。「点滴石を穿つ」根気よく努力を重ねようと思います",
				"Everyone's really into this resolution chain game, huh? I like the anticipation that comes with not wanting to break the chain. \"Small drops add up over time.\""
		]},{"name": "Shun", "texts": [
				"すごいね！　ステージと応援してくれるみんなとの一体感♪<br>絶好調の時に、私いま太郎と繋がった！　って感じるアレ！<br>「つうと言えばかあ」……うまく言えないけど、そんな感じ！",
				"Oh, wow! The stage and crowd are all in sync! That perfect unity feels just like me and Taro! We totally \"end each other's sentences\"! Or something like that!"
		]},{"name": "Ru", "texts": [
				"あ～私のセッション、次なんです。し、しりとりだなんて<br>体を動かして……落ち着け私。あで始まる、んで終わる……<br>前向きに、前向きに……「明日のことは明日案じよ」……",
				"Ah! I'm up next. It's w-word chains, right? Okay, calm down... gatta keep my body relaxed. So... Something optimistic... \"See what tomorrow brings.\""
		]},{"name": "Reine", "texts": [
				"あけおめっ。次、麗音だよっ！　なーに？　しりとり？<br>こんなに繋がってるの！？　いいじゃんもっと繋ごうよ♪<br>よから始まる～「寄らば大樹の陰！」麗音の抱負はこれ一択ね",
				"Happy New Year! Reine here! Whaaat? A word chain? And it's still going?! Cool, I'll add another! \"Seek friends in high places!\" That's gotta be my resolution!"
		]},{"name": "Aya", "texts": [
				"見てください、そこの書き初め！　謹賀新年、一番上手に書け<br>ました。ニューイヤーライブもあって今年のお正月は大活躍<br>です♪　ライブのお時間ですね。「<ruby>乾坤一擲<rt>けんこんいってき</rt></ruby>」頑張ります！",
				"Look at this New Year's card. It's the one I wrote out best. A New Year's live show is a spectacular way to celebrate! I'm going to \"strive with all my might\"!"
		]},{"name": "Akiru", "texts": [
				"パンパカパーン！　あれもしたいこれもしたい、私の抱負はー<br>「興味津々！」まるで<span class=\"ul\">クワドラプル</span>によるフィニッシュね！<br>よ、良かったんだよね？　んで終わっても。……ダメだった？<br><div class=\"note\">※クワドラプル(quadruple)：フィギュアスケートにおける「4回転ジャンプ」のこと。</div>",
				"Ta-daaa! I wanna do all kinds of different things, so my goal is \"total fixation\" for like, a quadruple finish! What? \"Total fixation\" is okay, right?"
		]},{"name": "Coco", "texts": [
				"ままま待ってくださ～い！　ス、スクールアイドルのキズナは<br>どこまでも繋がります。ココの抱負は、んー「ンジャメナ！」<br>え、それ抱負かって？　……ハイ、次はキミだよ♡",
				"It's not over yet! School idol bonds know no bounds! So my resolution starting with N is... \"N'Djamena\"! Okay, now it's your turn!"
		]},{"num": "ED", "texts": [
				"不思議な友情を感じましたが、とにかく、ほっとしましたね～<br>ちなみにンジャメナとは「癒しの場所」という意味だそうです<br>ライブ♪アリーナ、今年もよろしくお願いします",
				"That was an unusual show of friendship, but still refreshing. Also, it seems \"N'Djamena\" means \"a place of rest.\" Please support the Live Arena this year too!"
		]}
	]},
	{'titles': ['まごころ♡バレンタイン！','Valentines from the Heart!'],
	'num': 16,
	'sub': '開催：2022/01/31 - 2022/02/21',
	'opponent': [
		{"num": "OP", "texts": [
				"今日はバレンタインデー♡　そこでスクールアイドルたちが<br>皆さんに手作りチョコを持ってきてくれました！　皆さんに<br>お渡しする前に試食も兼ねて紹介してもらいましょう！",
				"It's Valentine's Day! The school idols brought handmade chocolates for you all. Let's have them taste test and explain the chocolates before they're given out!"
		]},{"name": "Yuri", "texts": [
				"まずはあたしからだね。紹介するのはココが作った<br>チョコブラウニーだよ、味は間違いなしさ！　ココはいつも<br>バレンタインに可愛いラッピングでプレゼントしてくれるんだ",
				"First is me! I'm here to present the chocolate brownie that Coco made. Its flavor can't be beat! Coco's Valentine's presents always have such cute wrapping."
		]},{"name": "Akemi", "texts": [
				"見てください、このパレットみたいにカラフルなマカロン！<br>さすが凪ちゃん、写真映えする美しい色彩です♪<br>見た目だけでなくお味も美味です！",
				"Behold these macarons, colorful as a paint palette! That's Nagi for you. Beautiful picture-perfect colors! Not only do they look great, but they're tasty too!"
		]},{"name": "Sakuya", "texts": [
				"公の場で妹の作ったものを紹介するのは照れくさいわ……<br>このトリュフチョコ、実は私がリクエストしたの<br>咲良の作るトリュフチョコはホントに美味しいのよ",
				"Showing off something my sister made to the public is a bit awkward... These chocolate truffles were actually requested by me. Sakura makes really yummy ones."
		]},{"name": "Ryo", "texts": [
				"雪ちゃんはバレリーナだから普段甘いものは食べないんだけど<br>毎年バレンタインにはチョコをくれるんだ<br>雪ちゃんの作る生チョコは、甘さ控えめで美味しいよ",
				"Yuki's a ballerina so she usually doesn't eat sweets, but she gives me chocolates every Valentine's Day. Her ganache is not too sweet and very yummy."
		]},{"name": "Hitomi", "texts": [
				"『愛のガトーショコラです』って押し付けられたぞ！<br>なぜ俺がアイツの作ったチョコを紹介しないといけないんだ<br>ん～、ねっとりした食感……旨いが、まるでアイツの様だな",
				"I was forced to accept this gateaux au chocolat of love! Why do I have to present HER sweets?! It has a sticky mouthfeel... It's good, but it's just like her."
		]},{"name": "Christina", "texts": [
				"わぁ……とてもやさしい味がします！　遥さんはお姉さんと<br>協力してチョコチップクッキーを作ってくださったんです♪<br>ほんとに仲の良い姉妹で憧れてしまいます",
				"My word, it has such a subtle flavor! Haruka and Kanata worked together to make chocolate chip cupcakes for me. I envy the strong sisterly bond they have."
		]},{"name": "Sayuri", "texts": [
				"普段、お菓子を持ち歩かない命からチョコプリンをもらえる<br>なんてレアだね♪　意外と女の子らしいところあるんだな～<br>うんうん、チョコの味をしっかり感じる♪",
				"Mikoto doesn't normally have snacks, so it's rare to get chocolate pudding from her! She has a surprisingly girlie side to her. Mmm, so rich and chocolatey!"
		]},{"name": "Misaki", "texts": [
				"見て、剣が作ったチョコマフィン！　クマのトッピングが<br>可愛くて食べられないわ！　こんなに可愛いお菓子を<br>作れるなんて意外な一面ね♪",
				"Look, it's a chocolate muffin made by Tsurugi! The bear topper is too cute to eat! I never thought she'd be able to make sweets as cute as this!"
		]},{"name": "Ru", "texts": [
				"麗音ちゃんのチョコタルト、フルーツがたくさん載ってて<br>すごくおしゃれなんです！　私には到底作れません……<br>チョコとフルーツの酸味がマッチして美味しいです♪",
				"Reine's chocolate tart has lots of fruit on it. It's so fancy! I could never make this... The tartness of the fruit matches deliciously with the chocolate!"
		]},{"name": "Marika", "texts": [
				"歩美の力作チョコの試食、楽しみにしてたんだよね～♪<br>あの子、実はお菓子作りが得意で、絶対美味しいはず！<br>それでは、いっただきまーす……あれ、チョコないよ？",
				"I've been so excited to try the chocolate Ayumi worked so hard on. She has a knack for sweets, so I know it'll be good! Here I go! ...Wait, it's gone."
		]},{"name": "Ayumi", "texts": [
				"え！？　私の作ってきたチョコがないですって……？<br>すごく頑張って作ってきたのに！<br>もうっ！　どうしてこんなことになるのよ！！",
				"Huh?! What do you mean, it's gone? But I worked so hard to make it! Argh! Why is this happening?!"
		]},{"name": "Minami", "texts": [
				"あらあら、今は探しに行けないし困ったわね<br>なにか気分転換に……あっ！　私が作ってきたチョコ食べる？<br>甘いものを食べれば気持ちが明るくなるかもしれないわ",
				"Oh dear. We can't go looking for it now, so how do we turn this around... Oh! Want some of the chocolate I made? Eating something sweet might cheer you up."
		]},{"name": "Mutsuki", "texts": [
				"カッカッカッ、吾輩が作った特製チョコせんべいの出番だな！<br>ひと口かじれば、ビックリして怒りなんて飛んでいくぞ♪<br>なに？　こわくて食べられない？　むむむ……",
				"*Cackle* It is time for my special chocolate rice crackers! One bite and you'll blast the anger away with surprise! What? You're too scared to eat them? Hmm..."
		]},{"name": "Sachiko", "texts": [
				"我が秘術を詰め込んで作ったチョコキャンディは<br>悪い念を吹き飛ばし、忘却の彼方へ消失させるであろう<br>効果は抜群だぞ！",
				"My chocolate candy filled with strokes of mystery will cast off all the acrimony, condemning it to nothingness in the far reaches of oblivion!"
		]},{"name": "Rakshata", "texts": [
				"カレー味のチョコはいかがですか？<br>甘口カレーとはまた違った味わいなんですよ！<br>とってもハッピーになれます！",
				"Would you like some curry-flavored chocolate? It tastes rather different from mild curry! It'll make you feel really happy!"
		]},{"name": "Maria", "texts": [
				"見て、情熱的な真っ赤なチョコ！<br>偶然見かけたツバキの花をイメージして作ったのよ<br>チョコに込めた情熱でふくれっ面なんて溶かしてあげるわ",
				"Look at this passionate, bright-red chocolate! I made it based on a camellia I came across. The passion in the chocolate will melt away that sullen look."
		]},{"name": "Shun", "texts": [
				"馬のひづめに付ける蹄鉄をイメージして作ってきたんだ<br>蹄鉄は、幸運のお守りとして有名なんだよ<br>これを食べれば、きっと幸せな気持ちになれるはず！",
				"I made these with horseshoes in mind. They're very well known as good luck charms. I just know you'll feel blessed if you eat one!"
		]},{"name": "Seira", "texts": [
				"ハッピーバレンタイン！　気合を入れて全面を金箔で<br>コーティングしてみました！　珍しいこのチョコなら<br>きっと笑顔になってもらえると思います",
				"Happy Valentine's Day! I went all out and covered all the sides in gold leaf! I'm sure this rare chocolate will bring a smile to your face."
		]},{"name": "Saki", "texts": [
				"今日は手作りチョコでみんなを応援するよー！<br>レモンの果実をたっぷり入れたチョコゼリー♪<br>これを食べれば元気になって気持ちもスッキリするよ",
				"I'm gonna cheer everyone on today with handmade chocolates! I made chocolate jello filled with lemon juice! Eating this will energize and refresh you!"
		]},{"name": "Ranpha", "texts": [
				"中華ちまきをイメージして作った「チョコちまき」アルヨ<br>愛情たっぷり込めて笹に包んだ自信作ネ！<br>ほらほら、早く召し上がれ♪",
				"I made this chocolate zongzi based on the Chinese dish. I'm proud of this bamboo-leaf-wrapped, love-filled creation! Hurry up and dig in!"
		]},{"name": "Isabella", "texts": [
				"ちまき？　もち米を使った食べごたえのある物と聞いたぞ<br>腹持ちが良さそうでトレーニングに最適だ！　だが、それを<br>チョコにしたのか？　すまん、味の想像ができない……",
				"Zongzi? I heard they're hearty glutinous rice dumplings. They keep you full so they're ace for training! But a chocolate version? Sorry, I can't picture it..."
		]},{"name": "Rika", "texts": [
				"もち米とチョコの組み合わせで想定外の美味しさが<br>生まれるのだとしたら……興味深い<br>しかし、実際に食べるには研究の必要性を感じるな……",
				"If combining glutinous rice and chocolate creates an unexpected taste sensation, then I'm interested. But I feel like research is needed before we dig in..."
		]},{"name": "Sana", "texts": [
				"やっと私の番ね、見たらビックリするわよ♪　ジャーン！<br>テニスボール型ケーキよ！　ボールの質感を表現するのに……<br>あら？　ここにあった理華の研究用の「チョコちまき」は？",
				"Finally my turn. You'll be surprised when you see it. Ta-da! A tennis-ball cake! To make the fuzzy exterior, I... Hm? Where's the zongzi for Rika's research?"
		]},{"name": "Aya", "texts": [
				"歩美ちゃん、気になるチョコはありましたか？　あっ！<br>待ってください、それ「チョコちまき」では！？<br>あ、食べちゃった……。ど、ど、どうしよう……",
				"Ayumi, did any chocolates catch your eye? Oh, wait! Isn't that the chocolate zongzi?! Oh, you ate it... Wh-Wh-What do I do...?"
		]},{"name": "Akiru", "texts": [
				"歩美のあんなに幸せそうな顔、今まで見たことない……！<br>カンカンだった歩美を大人しくさせる「チョコちまき」って<br>そんなに美味しいのかしら？",
				"I've never seen her look so happy before. The chocolate zongzi calmed down the infuriated Ayumi! Is it really that delicious?"
		]},{"name": "Chiduko", "texts": [
				"「チョコちまき」に込められた愛の力で騒ぎを鎮める……<br>これこそ愛にあふれた風紀、素晴らしいですわ～♡<br>愛の力は偉大ですのよ♪",
				"The love infused into the chocolate zongzi calmed the commotion. This is what it means to have love-filled discipline. How wonderful! The great power of love!"
		]},{"name": "Yukari", "texts": [
				"わあっ、蘭花の作った「チョコちまき」興味あります！<br>でもでも、他にも気になるチョコがたくさん！<br>どれも美味しそうでワクワクしちゃいます～♪",
				"Ooh, I'm interested in Ranpha's chocolate zongzi! But, but, there are lots of other chocolates I'm curious about too! They all look so tasty. I'm so excited!"
		]},{"name": "Haruka", "texts": [
				"笹の中身ってこんな風になってるんですね<br>とっても美味しそうです！　料理が苦手な私でも作れますか？<br>お姉ちゃんに作ってあげたいなって思って……",
				"So that's what's inside the bamboo leaves. It looks yum! Would someone bad at cooking like me be able to make it? I want to make some for Kanata..."
		]},{"name": "Jennifer", "texts": [
				"美味しいってジャスティスよね♪<br>いろんなものを食べ歩きしてる蘭花は、料理も上手よね<br>今度一緒に料理をしてみたいわ！　とっても楽しそう♪",
				"Being delicious is so just! Ranpha goes around eating many different things, and she's good at cooking too! I'd love to cook with her sometime. That'd be fun!"
		]},{"name": "Ranpha", "texts": [
				"ふふ、大成功ネ！　甘いもの食べると幸せになるヨ！<br>スクールアイドル応援してくれるみんなも<br>これ食べて幸せ感じてくれるとうれしいネ♪",
				"*Giggle* That was a huge success! Eating sweet things brings happiness! I'd be so happy if all of you school idol supporters ate this and felt the joy too!"
		]},{"num": "ED", "texts": [
				"気になる手作りチョコばかりでした！　歩美ちゃんを<br>笑顔にした「チョコちまき」は、ぜひ食べてみたいです♪<br>それでは、またお会いしましょう！　ハッピーバレンタイン♡",
				"We saw so many intriguing handmade chocolates! The chocolate zongzi that made Ayumi smile is a must-have. Now then, until we meet again! Happy Valentine's Day!"
		]}
	]},
	{'titles': ['驚き！桃の木！大人気！？','Big Surprise at the Doll\'s Festival'],
	'num': 17,
	'sub': '開催：2022/02/28 - 2022/03/25',
	'opponent': [
		{"num": "OP", "texts": [
				"今日のライブ♪アリーナは、ひな祭りライブです！<br>わたくしつい先ほど、控室の前を通りかかったのですが<br>ご来場された皆さまに何か振る舞う相談をしていましたよ♪",
				"The Live Arena for today, March 3, is the Doll's Festival live show! I just passed the dressing room and heard everyone discussing what to serve the audience!"
		]},{"name": "Mikoto", "texts": [
				"まったく……甘酒を振る舞いたいだなんて……<br>米麹から造られたものはアルコールが入っていないからって<br>とにかく私は！　風紀が乱れないかが心配なんです！",
				"Geez, I can't believe you want to serve sweet sake, even if it is made from malted rice and non-alcoholic! I'm worried about it going against public morals!"
		]},{"name": "Sachiko", "texts": [
				"なに！？　桃には不老長寿の効能がある……だと！<br>クッ、なぜ知らなかった……いや、悔やんでいる場合ではない<br>すぐに帰って……ああっ、ライブが始まる！",
				"What?! Peaches grant longevity?! Ack, why didn't I know that? No, there's no time for regrets now.I need to go home and... Ahh, the live show is gonna start!"
		]},{"name": "Yu", "texts": [
				"3月3日……か。夜の8時か9時ごろかな？<br>仲良く並んでる、ふたご座のカストルとポルックス……<br>ひなまつり星って呼ばれているんだよ",
				"March 3, huh... At around 8 or 9 at night, I guess? Castor and Pollux, who sit side-by-side in the Gemini constellation, are called the Doll's Festival stars."
		]},{"name": "Haruka", "texts": [
				"ひな祭りですか？　うーん……寝てました！<br>小学生の時も中学生の時もお姉ちゃんは毎年そうです！<br>でも実は、私もつられて寝ちゃうんですよね……",
				"The Doll's Festival? Hm... Kanata sleeps through it every year! Even back in elementary and middle school! But the truth is, I also fall asleep with her..."
		]},{"name": "Fumi", "texts": [
				"このひなあられ美味しいっ！　え？　欲しいのですか？<br>私としてはぜひギョロちゃんにも食べてもらいたいのですが<br>コオロギしか食べないですよね、ギョロちゃん？",
				"These Doll's Festival treats are so yummy! Huh? You want some? I'd love for you to have a few too, but you only eat crickets, right, Gyoro?"
		]},{"name": "Leo", "texts": [
				"ひし餅、はまぐり、ちらし寿司！<br>レオ、悩んでる……とても真剣<br>あげるため？　ちがう、食べるため！",
				"Hishi mochi, clams, and sushi rice bowls! I've got to think this over very carefully...  About what to give out? No, about what to eat!"
		]},{"name": "Mutsuki", "texts": [
				"ふむ。皆まちまちで決まらない、と。吾輩に任せたまえ！<br>ちょうど出来たてのコレ、多数決ロボ「すぐき丸」で……ん？<br>普通に人が多数決をすれば良いと！？　盲点盲点カッカッカ！",
				"Too many ideas to pick one, eh? I'll handle it! I just made the Insta-Pick voting robot, so... Huh? Just have people vote?! Hey, that's a loophole! *Cackle*"
		]},{"name": "Aya", "texts": [
				"皆さんの人数を考えますと、用意が出来るものは2つ<br>ひなあられか甘酒か、どちらかなんです。でも決まらない！<br>一筆入魂。この後、目録を用意するのは私なのに……",
				"With so many guests, we have two choices: Doll's Festival treats or sweet sake. But I can't pick! It's a toss-up. I'm the one doing inventory later too..."
		]},{"name": "Iruka", "texts": [
				"うん、やっぱりひなあられに決まったね♪<br>須田もあられが良いと思ってたよ。渡しやすいしキレイだし<br>泳ぎながらもポイって食べられるし……。違う、鯉じゃない",
				"I knew we'd pick Doll's Festival treats! I thought they were good too. So pretty and easy to give out. You can swim and eat them too... No, it's not for koi!"
		]},{"name": "Coco", "texts": [
				"人生には刺激が必要だとココは常々思っていました……<br>ふふふ。そこで先ほど、あのひなあられの山にこっそり1つ<br>ココ特製の激辛ひなあられを入れておきましたー！！",
				"I've always thought that we need to spice up our lives... *Giggle* So I just hid one specially made, super-spicy treat in that pile of Doll's Festival treats!"
		]},{"name": "Koyuki", "texts": [
				"激辛……さすがにまずいって<br>配り始める前にどうにかしなきゃだけど見つけられないよこれ<br>よしっ！　バレエで培った忍耐力で1つ1つ……くじけそう",
				"A super-spicy treat...for the audience? No! We must fix this before they're served, but how?! Ah! I'll use my patience from ballet to check each one... *Sigh*"
		]},{"name": "Rebecca", "texts": [
				"木を隠すなら森の中と言いますし<br>見つけさせないぞ！　という強い意思を感じますね<br>これもZENの心を会得するための修行なのでしょうか……",
				"The best place to hide a tree is in a forest, right? I sense its strong will to never be found.  Maybe this too is practice for achieving a zen heart..."
		]},{"name": "Yuka", "texts": [
				"たぶん私は得意だよ。間違い探しとか、見つけるの<br>いつもダンスの練習で細かい動きをチェックしているからね<br>きっと激辛ひなあられにも見た目の違いがあるはずだよ",
				"I bet I'd be good at this spot-the-difference stuff because I always look for small missteps at dance practice. The spicy treat should look different too."
		]},{"name": "Ayumi", "texts": [
				"そうね～色かしら。お菓子づくりって色を気にするから……<br>赤や緑のあられだと、スパイスの色が隠れちゃうけど<br>白いあられには見た目の違いが出るんじゃない？",
				"Right. Maybe it's the color? I have an eye for color from making sweets, so... While red or green treats might hide a spice's color, maybe white ones show it?"
		]},{"name": "Fumie", "texts": [
				"皆さんまるで探偵アニメのような鋭い推理です！<br>探偵の基本は聞き込みですので私は情報収集をしてみます<br>……あれ？　犯人はもう分かっているんでしたね……",
				"Everyone's making skillful deductions like in a detective show! A core tenet of detective work is getting info, so I'll try... Hm? Right, we know the culprit."
		]},{"name": "Reine", "texts": [
				"ダンスって体を動かす本人にしか分からないことがあるんだよ<br>激辛ひなあられも本人だけに分かる特徴がきっとあるはずで<br>もう、入れた本人に直接聞いちゃうのが早いんじゃないかな？",
				"With dancing, there are some things only the one moving their body knows. The one who hid the treat should know its traits so it'd be faster to ask her, right?"
		]},{"name": "Kasane", "texts": [
				"あちゃ～またココがやらかしちゃった……みんなごめんね<br>私、ココを探して激辛ひなあられの特徴を聞いてくるよ<br>せっかく着付けた十二単だったのに脱ぐの大変だなあ",
				"Aw, Coco did it again. Sorry, everyone. I'll go and ask about the spicy Doll's Festival treat. It's a pain to take off the kimono I just put on, though."
		]},{"name": "Rika", "texts": [
				"え？　ココならさっき病院に行くって言ってたから居ないよ<br>顔赤くして汗びっしょりだったね。胃が痛いんだってさ<br>科学的に見てあれは、何か悪いものを食べた反応だね",
				"Hm? Coco left to go to a clinic. Her face was red and sweaty and she said her stomach hurt. It looked like a bad reaction to something she ate."
		]},{"name": "Fuu", "texts": [
				"よしきた！　今日絶好調の私の出番だね！<br>ひとっ走り探してきまーす！　いっくぞー！<br>……どこの病院って言ってたっけ？",
				"The time has come for me to step up! This is right up my alley! I'll go run off and look for her! Here I go! (...Wait, which clinic did she say again?)"
		]},{"name": "Yuuka", "texts": [
				"うう……皆さん大活躍の中、放送部の私にできることは……<br>そうだ、決めました！　1つずつ地道にひなあられを確認して<br>この激辛パニックの危機を回避してみせます！",
				"Ugh... Everyone's playing their part, but what can I do as part of the broadcasting club? Oh, I know! I'll check each treat and avert this spicy crisis!"
		]},{"name": "Akira", "texts": [
				"1人あたり200個だよ……作る時は楽しかったんだけどなあ<br>楽しかったと言えば、先週のサイクリングは気持ち良かっ……<br>あーダメダメ！　現実逃避している場合じゃない！",
				"It's 200 pieces per person... Making them was so fun.  And y'know what else was fun? Cycling felt so nice last... No, no! I've gotta stop running from reality!"
		]},{"name": "Nagi", "texts": [
				"凪そういえばー、ビー玉くらいの桃の絵を描いて欲しいってー<br>今日の朝かな？　ココちゃんに頼まれたんだよねー、<br>可愛く描けたんだよー。あれ、何に使ったんだろうねー？",
				"By the way, I got asked to draw a marble-sized picture of a peach...this morning, was it? Mm, Coco asked me! I drew a real cute one! I wonder what it was for."
		]},{"name": "Himeno", "texts": [
				"見て下さい！　先ほど控室で撮った写真です！<br>この、ラッピングのリボンに付いている桃のイラスト<br>激辛ひなあられの目印なんじゃないでしょうか！",
				"Please look! I took this photo in the dressing room earlier! This ribbon with the picture of a peach must be for the super-spicy Doll's Festival treat, yes?!"
		]},{"name": "Hitomi", "texts": [
				"こんな雰囲気の中じゃ大きな声で言えないんだが……<br>激辛ひなあられ、パンチが効いてて俺は良いと思うんだよな<br>それに辛いからってさ、風紀が乱れるわけじゃないだろ？",
				"I can't say this too loud with the mood like this, but... I think the spicy treat makes things fun. It won't harm public morals by being spicy, right?"
		]},{"name": "Yumi", "texts": [
				"辛いお菓子に罪はないけれど、フルートを演奏する私の場合<br>ノドを痛めたくないので避けるわ。そして皆さんの中にも<br>そのような方がいないとも限らない、という事でしょうね",
				"The spicy treat is not at fault, but since I play the flute I don't wish to hurt my throat, so I'll avoid it. There might be someone like me in the audience."
		]},{"name": "Nanaka", "texts": [
				"好奇心のカタマリと言われた私がついにひらめいたー！<br>当たりくじにしようよ！　桃のイラスト付きの人、開封せずに<br>持ってきて下さい。特別なプレゼントと交換しますって！",
				"I, a ball of curiosity, just got an idea! Let's do a lottery! Whoever gets the treat with the peach picture turns it in unopened for a gift!"
		]},{"name": "Mizuki", "texts": [
				"うんイイね、当たりくじ！　あたしは賛成ー<br>バスケットボールで言うところのフリースローだよねっ！<br>……え、違うの？　それでもあたしは賛成ー",
				"Yeah, drawing lots is a good idea! I'm all in! It's like a free throw in basketball! ...What? It isn't? Well, I'm still on board with the idea!"
		]},{"name": "Tsurugi", "texts": [
				"……全部しらべ終わったよ。……結果、見つからなかった<br>練り上げた私の心眼さえも欺くとは！　激辛ひなあられめ！<br>もちろん、目印もなかった。……桃のイラストめ！",
				"We finished checking... Nothing. How dare you deceive my well-honed mind's eye, you spicy Doll's Festival treat! There was no mark... Curse that peach picture!"
		]},{"name": "Isabella", "texts": [
				"目印もないなら、当たりくじの作戦も使えないな。……そして<br>ひなあられは、次の幕間で配るそうだ……。つまり時間切れだ<br>心も体も鍛錬を重ねてきたのに。なあ蘭花、悔しいなあ",
				"No mark means no lottery either. The treats will be served during the intermission, so we're out of time. We worked so hard for nothing. I'm so sad, Ranpha!"
		]},{"name": "Ranpha", "texts": [
				"う、うう……ホントに……ホントに……<br>ホントにうまいアルねー！　この辛さがいいヨ！　最好吃了！<br>みなサンもおひとついかがデスか？　ハイ、どーぞ♡",
				"*Sniffle* It's so...so...so delicious! This spiciness is great! This is the tastiest thing ever! Would you all like one too? Here you go!"
		]},{"num": "ED", "texts": [
				"無事見つかってホッとしましたね～。蘭花さん、あまりの美味<br>しさに感動しちゃって皆さんにもお配りしていましたが、意<br>外に大人気だったようですよ！　それでは、良いひな祭りを～",
				"I'm glad the treat was found! Ranpha liked it so much she handed out more to the audience, but they all seemed to love it! Well, have a nice Doll's Festival!"
		]}
	]},
	{'titles': ['Nunnally in School Idol Festival 前半戦',''],
	'num': 18,
	'sub': '「コードギアス」コラボ特別回　開催：2022/04/01 - 2022/04/12',
	'opponent': [
		{'num': 'OP', 'text': '今回のライブ♪アリーナはナナリー争奪戦！　いったいどこの<br>チームがナナリーを仲間にできるんでしょうか？！<br>それではスタートの合図は、このひと声から！'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': 'ライブバトル……お兄様、なんだか凄いです！<br>私が入るチームを選んで良いなんて、迷ってしまいそう<br>それでは開始の合図を……「にゃーーー！」'},
		{'name': 'geass', 'namealt': 'ミレイ', 'text': 'ライブバトル、上等だわ！　全校生徒、部活は一時中断！<br>ナナリーを私のところに連れて来てっ！<br>連れてきた人には生徒会メンバーからキッスのプレゼントよ！'},
		{'name': 'geass', 'namealt': 'シャーリー', 'text': '会長～！　ナナちゃん争奪戦って本当ですか？<br>そんなの、ルルが一声、ナナちゃんに生徒会メンバーで<br>一緒にやろうって言えば良いじゃないですか！'},
		{'name': 'geass', 'namealt': 'ヴィレッタ', 'text': '私に水着で参加しろ？　ふざけるな、後で100回しばく……！<br>……任務でなければ教師役など<br>スクールアイドルなんだからお前たち生徒だけで参加しろ'},
		{'name': 'geass', 'namealt': 'ニーナ', 'text': 'スクールアイドル……？　またミレイちゃんたら変な事に……<br>え？　ライブバトルにはユーフェミア様も参加するの？<br>ナナリー、この衣装着て一緒に参加して！'},
		{'name': 'geass', 'namealt': 'カレン', 'text': 'ふぁ～。眠い……さすがにキツイな……二重生活……<br>あら、ナナリー、そのアイドルの衣装とても可愛いじゃない<br>……ええ？　私にもこの衣装を着ろっていうの？'},
		{'name': 'geass', 'namealt': 'アーニャ', 'text': 'ナナリー様。そのアイドルの衣装、とてもお似合いです<br>一緒に写真を撮ってください。はい、チーズ。あ。この写真が<br>あれば、生徒会がナナリー様を獲得したと宣言できそう'},
		{'name': 'geass', 'namealt': 'C.C.', 'text': 'じゃあ、もうナナリー争奪戦は終わりだな<br>そんな事より<br>ライブバトル会場でピザが食べられると聞いたんだが……'},
		{'name': 'geass', 'namealt': '<ruby>神楽那<rt>かぐや<\/rt><\/ruby>', 'text': 'ちょっとナナリー様、お待ちになって！　ライブをするのなら<br>私たち黒の騎士団以外を選ぶなんてありえませんわ！<br>任せてください。私は勝利の女神なんですから！'},
		{'name': 'geass', 'namealt': '天子', 'text': 'ライブ……<ruby>星刻<rt>シンクー<\/rt><\/ruby>、朱禁城の外の世界にはこんなに<br>素敵なものがあるのね。ねえナナリー様、一緒にダンスの<br>練習をしてくれませんか？　私1人だと不安で……'},
		{'name': 'geass', 'namealt': '<ruby>周<rt>ジョウ<\/rt><\/ruby><ruby>香凛<rt>チャンリン<\/rt><\/ruby>', 'text': '天子様とナナリー様のダンスの練習をサポートしろ！<br>わ、私はライブに参加しないのかって？<br>私はここでサポートの指揮をとらせていただきます！'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': 'まあ！　黒の騎士団の皆さんまで参加されるんですね<br>ダンスの振り付け……スザクさんになら相談できるでしょうか<br>お兄様は激しいダンスは苦手そうなので……'},
		{'name': 'geass', 'namealt': 'モニカ', 'text': 'いけません、ナナリー皇女殿下。ライブは私たちと行いましょ<br>う。我らナイトオブラウンズにとって黒の騎士団など……<br>必ずや勝利をお約束します'},
		{'name': 'geass', 'namealt': 'ノネット', 'text': 'ナイトオブナインのノネットだ<br>ライブか。ずいぶん楽しそうじゃないか。問題ない<br>皇族相手でもしっかりしごかせてもらうぞ'},
		{'name': 'geass', 'namealt': 'アーニャ', 'text': '熱源が沢山。これがライブの熱気……<br>黒の騎士団のダンスが上か、ラウンズのダンスが上か<br>私もナイトオブラウンズ。……負けない'},
		{'name': 'geass', 'namealt': 'カレン', 'text': 'ちょっと！　ナナリーは私たち黒の騎士団とライブをするに決<br>まってるでしょ！　最っ高に素敵なライブを見せてあげる！<br>ナイトオブラウンズ、あんた達は引っ込んでな！'},
		{'name': 'geass', 'namealt': 'C.C.', 'text': '当然だ。ラウンズなんぞに負けたりするはずがない<br>なんせ、この私がいるんだ<br>そうだろう、ナナリー？'},
		{'name': 'geass', 'namealt': '千葉凪沙', 'text': '紅月とC.C.の言う通りだ！<br>四聖剣の誇りに賭けてこのライブを成功させてみせる<br>……このステップ、意外と難しいじゃないか'},
		{'name': 'geass', 'namealt': 'ラクシャータ', 'text': 'へえ、面白い。ライブでバトルねえ<br><span class="ul">ランウズ<\/span>なんかに負けるんじゃないわよ<br>じゃあ本番いってみようか<br><div class="note">※原文の誤植。正しくは「ラウンズ」<\/div>'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': 'お兄様、どうしましょう。ナイトオブラウンズと黒の騎士団の<br>皆さんが言い争いを……。これでは選ぶことなど出来ません<br>みんなで仲良くライブが出来れば良いのに……'},
		{'name': 'geass', 'namealt': 'セシル', 'text': '皆さん～！　特派からの差し入れです！<br>ライブの休憩にウコン・わさび・和三盆入りのサンドイッチを<br>用意したので食べてくださいね！'},
		{'name': 'geass', 'namealt': 'ローマイヤ', 'text': 'ナナリー様、何を迷われているのですか<br>仲良くライブなどと、反ブリタニア勢力と交わる必要などあり<br>ません。皇帝代理の総督として命じればよいのです'},
		{'name': 'geass', 'namealt': 'マリアンヌ', 'text': 'そうよ、ナナリー。私と一緒にライブしましょ！<br>母と娘でライブなんて素敵じゃない！<br>私が決めたんだから決定よ'},
		{'name': 'geass', 'namealt': 'ニーナ', 'text': 'ナナリー、どのチームに入るか困ってるなら<br>蜃気楼に搭載された電子解析システムの<br>ドルイドシステムでデータを比較してみたら？'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': 'お兄様、皆さんからお誘いをいただいてしまって……<br>私には誰かを選ぶことなどできません<br>このままではライブをすることが出来ない……'},
		{'name': 'geass', 'namealt': 'ユーフェミア', 'text': 'ナナリーのためにスクールアイドルとしての<br>歌とダンスをマスターしないと<br>社交界で踊るようなダンスではダメね'},
		{'name': 'geass', 'namealt': 'コーネリア', 'text': 'ナナリー、ユフィ、お前たちが望むなら、ライブ会場のひとつ<br>やふたつ、このコーネリアが用意して見せよう<br>なに愛する妹たちのためだ。気にするな'},
		{'name': 'geass', 'namealt': 'C.C.', 'text': '……歌っていいのは歌える覚悟があるやつだけ、か<br>このままではナナリーはライブすることを諦めてしまう'},
		{'name': 'geass', 'namealt': '<ruby>咲世子<rt>さよこ<\/rt><\/ruby>', 'text': 'ナナリー様、私がライブ会場へ潜入・制圧いたします<br>ナナリー様に相応しい舞台を用意して<br>メイドの意地をお見せします'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': 'ああ。皆さんが私のことを思って、色んな無茶を……<br>こうなってしまった原因は私がライブをしたいと<br>わがままを言ったから。なら……'},
		{'num': 'ED', 'text': 'ナナリー争奪戦の結末は、なんと波乱の幕引き！<br>続きはライブ♪アリーナ史上初の後半戦へ！<br>刮目して待て！'},
		{'name': 'geass', 'num': '31', 'namealt': 'アーニャ (制服)', 'text': 'ナイトオブシックスとしてではなく、普通の学生をしにジノと<br>一緒にアッシュフォード学園に転入したの<br>学校でモルドレッドは……ダメ？'},
		{'name': 'geass', 'num': '32', 'namealt': 'カレン (制服)', 'text': 'レジスタンス活動で欠席しがちなので<br>学校を休んでも都合が良い様に……ああ、イライラする！<br>病弱なんて設定にしなけりゃよかった！'},
		{'name': 'geass', 'num': '33', 'namealt': 'ローマイヤ', 'text': 'エリア11の総督に就任されたナナリー様に<br>補佐官としてお仕えしております<br>ナンバーズ共に慈悲をかける必要などありません'},
		{'name': 'geass', 'num': '34', 'namealt': '周香凛', 'text': '星刻様の補佐を務め、天子様をお守りするのが私の役目<br>天は星刻様に知略と武勇という二物を与えたというのに<br>時間だけは与えては下さらなかった'},
		{'name': 'geass', 'num': '35', 'namealt': 'ナナリー', 'text': 'ミレイさんのご厚意で、お兄様と私は<br>アッシュフォード学園のクラブハウスに住んでいるんです<br>生徒会の皆さんと過ごす毎日はとても楽しいんですよ'},
		{'name': 'geass', 'num': '36', 'namealt': 'ヴィレッタ', 'text': '今は教師の仮面を被り、機密情報局でロロと共にルルーシュを<br>監視している。ゼロの正体を突止めた功績で男爵位を手に入れ<br>たと言うのに……くそ……！'},
		{'name': 'geass', 'num': '37', 'namealt': 'ニーナ (制服)', 'text': '私、普段は学校でも研究ばかりしていて<br>人付き合いがジュテなんだ……<br>ユーフェミア様はそんな私を助けてくれた女神様なんです'},
		{'name': 'geass', 'num': '38', 'namealt': '千葉凪沙', 'text': '「奇跡の藤堂」の率いる四聖剣の1人として戦い続けてきた<br>この戦いが終わったら、私……<br>藤堂さんに聞いてもらいたい事があるんです'},
		{'name': 'geass', 'num': '39', 'namealt': 'コーネリア', 'text': 'ブリタニアの魔女と呼ばれた私に勝つつもりか？<br>黒の騎士団だと……？　テロになど屈せぬ<br>エリア11は私が綺麗にして愛するユフィに渡すのだ'},
		{'name': 'geass', 'num': '40', 'namealt': 'C.C. (制服)', 'text': '巨大ピザは午後からだと？　アンデス産のアルティメット・ト<br>マトを使っていると聞いた。楽しみにしているんだ<br>早くしろ。もちろんタバスコも用意してある'},
		{'name': 'geass', 'num': '41', 'namealt': 'ミレイ', 'text': 'アッシュフォード学園の理事長の孫で生徒会長を務めているわ<br>没落した家のために、位の高い貴族と結婚か……<br>モラトリアムできるうちは楽しまないとね'},
		{'name': 'geass', 'num': '42', 'namealt': 'ノネット', 'text': 'ナイトオブラウンズの最高位であるナイトオブワンは<br>皇帝陛下のみが任命できるのさ<br>その特権には、好きなエリアを1つ貰えるというのがある'},
		{'name': 'geass', 'num': '43', 'namealt': '天子', 'text': '私、ずっと朱禁城から外に出た事がなくて……。いつか外の世<br>界を見たいと願っていた私を星刻はここから連れ出してくれる<br>と約束してくれた。それが私と星刻の永続調和の契り'},
		{'name': 'geass', 'num': '44', 'namealt': 'シャーリー', 'text': 'ルルとはクラスメイトで生徒会でも一緒なの<br>最初はルルの事、あんまり好きじゃなかったんだけど……<br>どうしたら私の気持ち、気づいてもらえるかな'},
		{'name': 'geass', 'num': '45', 'namealt': 'ナナリー', 'text': '私はお兄様と一緒にいられるならば、それだけで良いんです<br>お兄様、愛しています<br>お兄様のいない明日なんて……！'},
		{'name': 'geass', 'num': '46', 'namealt': 'セシル', 'text': '上司のロイドさんは優秀な科学者なんですが<br>スザク君をランスロットのパーツ扱いしたりと<br>どこか人間として欠如している人なんで、いつも大変です'},
		{'name': 'geass', 'num': '47', 'namealt': 'カレン (黒の騎士団)', 'text': 'カレン・シュタットフェルトなんて呼ぶな！<br>これが私の本当の姿。私は日本人の紅月カレンよ<br>黒の騎士団のエースとして負けるわけにはいかないんだ'},
		{'name': 'geass', 'num': '48', 'namealt': 'ニーナ (メカニック)', 'text': 'シュナイゼル殿下から任された研究チーム・インヴォーグ<br>ここで私が開発したフレイヤは多くの罪なき人の命を奪った<br>……私はその贖罪をしなければいけない'},
		{'name': 'geass', 'num': '49', 'namealt': 'マリアンヌ', 'text': 'ルルーシュとナナリーのお母さんよ<br>こう見えても昔はナイトオブラウンズの1人で<br>「閃光のマリアンヌ」って呼ばれてたんだから！'},
		{'name': 'geass', 'num': '50', 'namealt': 'C.C. (拘束服)', 'text': 'ルルーシュと契約をし、いかなる命令にも従わせる事ができる<br>絶対遵守の力、ギアスを与えた<br>その代償として私の願いをひとつだけ叶えてもらう'},
		{'name': 'geass', 'num': '51', 'namealt': '神楽那', 'text': 'エリア11のレジスタンスを支援するキョウト六家のひとつ<br>皇家の当主を務めております。私……ゼロ様の妻なんです！<br>デビューから、ずーっとファンだったんですよ'},
		{'name': 'geass', 'num': '52', 'namealt': 'モニカ', 'text': '神聖ブリタニア帝国皇帝の直属の騎士ナイトオブラウンズ<br>私はナイトオブトゥエルブ。ラウンズはナイトオブワン以外は<br>序列や上下関係などは一切無く、立場は対等なんです'},
		{'name': 'geass', 'num': '53', 'namealt': 'ラクシャータ', 'text': '私の開発した兵器は、<span class="ul">プリン伯爵<\/span>のと違って<br>使用する人間や生存率向上をちゃあんと考えているのさ<br>共同作業なんてしたくもないね……あーあ、気持ち悪っ<br><div class="note">※プリン伯爵：コードギアスシリーズの登場人物、ロイド・アスプルンドのこと。<\/div>'},
		{'name': 'geass', 'num': '54', 'namealt': 'コーネリア', 'text': 'ブリタニアの魔女と呼ばれた私に勝つつもりか？<br>黒の騎士団だと……？　テロになど屈せぬ<br>エリア11は私が綺麗にして愛するユフィに渡すのだ<br><div class="note">※ステージ39での登場時と全く同じ<\/div>'},
		{'name': 'geass', 'num': '55', 'namealt': 'ナナリー', 'text': '私は、エリア11の総督に新しく着任しました<br>ナナリー・ヴィ・ブリタニアです<br>ユフィ姉妹が目指した、等しく優しい世界を作りたいのです'},
		{'name': 'geass', 'num': '56', 'namealt': 'ヴィレッタ', 'text': '今は教師の仮面を被り、機密情報局でロロと共にルルーシュを<br>監視している。ゼロの正体を突止めた功績で男爵位を手に入れ<br>たと言うのに……くそ……！<br><div class="note">※ステージ36での登場時と全く同じ<\/div>'},
		{'name': 'geass', 'num': '57', 'namealt': '咲世子', 'text': 'ある時はナナリー様をお世話するメイド<br>そしてある時はルルーシュ様の影武者……<br>忍者ではございません。篠崎流37代目のSPでございます'},
		{'name': 'geass', 'num': '58', 'namealt': 'アーニャ (パイロット)', 'text': '最年少だけど私もナイトオブラウンズ<br>私が書いた日記があるけれど私には書いた記憶がない<br>私の記憶とデータとしての記憶は違っているの'},
		{'name': 'geass', 'num': '59', 'namealt': 'ユーフェミア', 'text': 'お飾りの副総督と言われても仕方ありません<br>でもこれ以上、皆が大切な人を失わなきようにしたいのです<br>私は、汝、枢木スザクを我が騎士として認めます'},
		{'name': 'geass', 'num': '60', 'namealt': 'C.C. (黒の騎士団)', 'text': '私とルルーシュは共犯者だ<br>契約したからな。私だけは、あいつのそばにいると<br>しかし私の本当の願いは……私の存在が永遠に終わる事だ'},
		{'name': 'geass', 'num': '??', 'namealt': 'ナナリー', 'text': 'お兄様が<span class="ul">セロ<\/span>だったのですね<br>私がお兄様を止めなければなりません<br>お兄様の罪は私が背負います<br><div class="note">※原文の誤植。正しくは「ゼロ」<\/div><div class="note">ナナリーのセリフはランダム？私はこの台詞に遭遇することはできませんでした<\/div>'}
	]},
	{'titles': ['Nunnally in School Idol Festival 後半戦',''],
	'num': 18,
	'sub': '「コードギアス」コラボ特別回　開催：2022/04/14 - 2022/04/25',
	'opponent': [
		{'num': 'OP', 'text': 'ナナリー争奪戦から争いが起きてしまった前半戦！<br>まさかのナナリーのボイコットで終了！<br>混沌のライブ♪アリーナ、後半戦の開幕です！'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': 'これ以上私のことで争うのはやめください<br>世界はもっと平和に、優しく変えていけると思うんです<br>ですから、みんなで手を取り合って……'},
		{'name': 'geass', 'namealt': '<ruby>神楽那<rt>かぐや<\/rt><\/ruby>', 'text': 'いくらお友だちであるナナリー様のご提案でも、それを飲むわ<br>けには参りません。なぜなら<br>ナナリー様とライブをするのは私たち黒の騎士団ですもの'},
		{'name': 'geass', 'namealt': 'モニカ', 'text': 'ナナリー皇女殿下、何を悩まれるのでしょうか<br>帝国最強の我らを選ばずして黒の騎士団を選ぶなど……<br>俗事に惑わされてはなりません！'},
		{'name': 'geass', 'namealt': 'カレン', 'text': 'ナナリーを懐柔しようったって、そうはいかないよ！<br>ブリタニアになんか負けはしない！<br>私たち黒の騎士団のライブパフォーマンスを舐めるなーっ！！'},
		{'name': 'geass', 'namealt': 'ローマイヤ', 'text': 'まったく、これだからイレヴンは野蛮なんです<br>ナナリー様、黒の騎士団などに耳を貸す必要はございません<br>ライブは私どもにお任せください'},
		{'name': 'geass', 'namealt': '千葉凪沙', 'text': 'ブリタニアが何を言う<br>黒の騎士団は正義の味方なのだ<br>我らの奇跡のライブを見るがいい！'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': '前半戦に引き続き、お互いに争ってばかり……<br>お兄様、半人前の私ではダメなんでしょうか<br>私では正しい道を指し示すことはできないのでしょうか……'},
		{'name': 'geass', 'namealt': 'ノネット', 'text': 'なんだい。みんな、ヒートアップしていて<br>ライブ会場の熱気が異常じゃないか<br>これはノネットさんもウカウカしてらんないねぇ'},
		{'name': 'geass', 'namealt': 'ラクシャータ', 'text': 'ちょっと！　私の準備したライブステージなんだから<br>早くライブを始めなさいよ。あんたらの歌と踊りに<br>耐えられるようにせっかく作ったんだからさ'},
		{'name': 'geass', 'namealt': 'ニーナ', 'text': 'ずいぶんと揉めてるね<br>いっそのこと、このライブ♪アリーナを中止しちゃえばいいん<br>じゃないかな。そうすれば揉めることもないし'},
		{'name': 'geass', 'namealt': 'C.C.', 'text': '極論だが一理ある<br>争ってばかりでナナリーを苦しめるぐらいなら<br>中止するのもまたひとつの方法だな'},
		{'name': 'geass', 'namealt': 'アーニャ', 'text': 'どっちも蟻地獄……<br>結局、どちらに転んでもライブは出来ないという事ね<br>……残念。ちょっとだけ'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': 'そうですね<br>皆さんが争うぐらいなら、ライブを中止したほうがいい<br>それならば、私が諦めればいいだけのこと。私が諦めれば……'},
		{'name': 'geass', 'namealt': 'ミレイ', 'text': 'ちょっとちょっと！　リラーックス！<br>なんだか皆、前半戦より殺気だってない？<br>ナナリー、あなたが諦める必要なんてないわ'},
		{'name': 'geass', 'namealt': 'ヴィレッタ', 'text': 'だから私はライブをしたい訳じゃないと言っただろう！<br>やめろ、おかしな誤解を招くじゃないか<br>みんな学校に戻れ。これから補習だ'},
		{'name': 'geass', 'namealt': 'セシル', 'text': '本当は皆さん、ただナナリー様と一緒に<br>ライブがしたかっただけなのに意地ばかり張って……<br>どうしてみんな分かり合えないのでしょうか'},
		{'name': 'geass', 'namealt': 'C.C.', 'text': 'よし、みんな落ち着け<br>まだ回収できていないピザを食べながらじっくり話し合おう<br>あれ？　タバスコが無いな。ラー油だとどうもな'},
		{'name': 'geass', 'namealt': '<ruby>周<rt>ジョウ<\/rt><\/ruby><ruby>香凛<rt>チャンリン<\/rt><\/ruby>', 'text': '天子様のように無垢な気持ちで接すれば<br>ブリタニアの人たちとも分かり合えるでしょうか<br>天子様はいかがお考えです？'},
		{'name': 'geass', 'namealt': '天子', 'text': 'みんな、ナナリーとライブがしたかっただけだよね？<br>それなら、みんな同じ気持ちなんじゃないかな<br>想いには世界を変えるほどの力があるんだから！'},
		{'name': 'geass', 'namealt': 'マリアンヌ', 'text': 'そうね<br>私だってナナリーと一緒にライブしたかっただけなの<br>バラバラだった皆がひとつになるのは良いことだと思うの'},
		{'name': 'geass', 'namealt': 'カレン', 'text': 'そうだよ、みんな<br>ナナリーのためにも争ってちゃダメだ<br>ナナリーのためにもみんなで協力しよう！'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': '皆さん、そんなにも私と……。ありがとうございます<br>私、決めました。皆さん全員とライブをします！<br>……お兄様、私に勇気をください！'},
		{'name': 'geass', 'namealt': 'コーネリア', 'text': '皆とライブか……そんなに簡単な事ではない<br>ナナリー、理想と現実は違うのだぞ<br>それでも成し遂げるというのか。……本気なのだな'},
		{'name': 'geass', 'namealt': '<ruby>咲世子<rt>さよこ<\/rt><\/ruby>', 'text': 'ナナリー様。すべてのチームとライブを行おうとすると<br>睡眠を3時間として<br>108チームとライブすることになってしまいます'},
		{'name': 'geass', 'namealt': 'C.c.', 'text': '咲世子。そのスケジュールではナナリーが倒れてしまう<br>まったく、どいつもこいつも騒ぎ立てて<br>しかし、みんなで合唱ならいいんじゃないか？'},
		{'name': 'geass', 'namealt': 'ユーフェミア', 'text': 'あら、良いじゃないですか！　みんなで合唱なんて素敵だわ<br>私……学校は途中で辞めちゃったから……<br>ナナリーと一緒にスクールアイドルが出来るだなんて嬉しい！'},
		{'name': 'geass', 'namealt': 'ニーナ', 'text': 'ユーフェミア様と一緒に歌えるなんて夢みたい……<br>今度は私がユーフェミア様にお洋服……<br>いえ、衣装を用意しますね！　私の女神様！！'},
		{'name': 'geass', 'namealt': 'シャーリー', 'text': 'ナナちゃん、歌はパワーだね！<br>誰かのために歌うとね、すっごいパワーが出るの！<br>皆と一緒に歌うだなんて素敵！　絶対楽しいよ！'},
		{'name': 'geass', 'namealt': 'アーニャ', 'text': '皆で歌う……そうしたら、皆で集合写真撮ろ<br>皆の記憶で記念の写真。消えない証拠'},
		{'name': 'geass', 'namealt': 'ナナリー', 'text': 'バラバラのチームなら、ひとつにしてしまえば良い……<br>そうですよね、お兄様？<br>お兄様も、もちろん参加ですよ？　楽しみです！'},
		{'num': 'ED', 'text': 'ナナリー争奪戦の結末は、みんなで合唱の感動の展開に！<br>世界は優しく変えてゆけるんですねえ<br>ライブ♪アリーナが優しさに包まれました！'},
		{'num': '', 'text': '（ステージ31以降の対戦相手・セリフは前半戦と共通です）'}
	]},
	{'titles': ['ぴっかぴかの中のぴっかぴか♪','Shiny and Sparkly!'],
	'num': 19,
	'sub': '開催：2022/04/30 - 2022/05/25',
	'opponent': [
		{"num": "OP", "texts": [
				"いよいよ待ちに待ったGWがやって来ましたね♪<br>そこで今回のライブ♪アリーナはゴールデンライブ、開催です<br>スクールアイドルの皆さんも思い出話に花を咲かせていますよ",
				"Golden Week is finally here! And now, at the arena, the Golden Live Show has begun. Plus, the school idols are bursting with their own Golden Week memories too!"
		]},{"name": "Fumi", "texts": [
				"覚えていますか？　初めて一緒に虫捕りをした日のこと……<br>今日のように、空が清々しく晴れ渡ったGWでした<br>ギョロちゃんの場合、捕った虫は食べちゃうんですけどね！",
				"Do you remember the day we first went to catch bugs together? It was Golden Week, on a clear blue day like today. Gyoro would eat any bugs she caught, though!"
		]},{"name": "Mikoto", "texts": [
				"青空に泳ぐたくさんの鯉のぼりを見るとわくわくしませんか？<br>そして私はホイッスルを握りしめ……うずうずするのです<br>ふと風が弱まった時の隊列の……風紀の乱れが気になって……",
				"Don't you get excited seeing the carp streamers swim in the blue sky? I'm clutching my whistle in anticipation! I hope the wind doesn't drop and ruin the setup."
		]},{"name": "Saki", "texts": [
				"私？　毎年だいたい野球観戦に行くよ。もちろん応援席！<br>あの独特の空気とか球場全体がワーって盛り上がる時間が好き<br>とにかく応援し放題なのがいいよね♪",
				"I usually go to the ball game each year. In the cheering section, of course! I love that vibe with the whole stadium going wild. It's great to cheer all you want!"
		]},{"name": "Yukari", "texts": [
				"小さい頃からGWって聞くと開放感を覚えるんですよ！<br>自由さというか、わくわくする……冒険心のような？<br>うまく言えないですが……Y.G.国際学園のみんなのようなっ！",
				"Since I was a kid, Golden Week always meant freedom! It's like an exciting sense of adventure? I don't know, it's like everyone at Y. G. International School!"
		]},{"name": "Koyuki", "texts": [
				"特別な思い出、小雪にもあるよ。GWで初めて観た「<span class=\"ul\">ジゼル</span>」<br>鳥肌が立つほど感動して、涙がでちゃったの<br>このゴールデンライブも誰かの特別な思い出になるといいな♪<br><div class=\"note\">※バレエ作品のひとつ。</div>",
				"I have a special memory too. I first saw Giselle at Golden Week. It moved me to goosebumps and tears. I hope the Golden Live Show can be someone's special memory."
		]},{"name": "Sakura", "texts": [
				"お盆や、お正月みたいに忙しくないから……<br>たくさんの時間を一緒に……ドールたちと過ごせる……<br>だから……GWは大切な思い出ばかり……",
				"The Golden Week is full of fond memories for me... It's not as busy as the Obon or the New Year's festival... So I get to spend more quality time with my dolls."
		]},{"name": "Chiduko", "texts": [
				"五月人形や鯉のぼりを飾ったり、かしわ餅を食べたり……<br>ありきたりではありますが、こうした行事によって風紀は守ら<br>れているのだと、子どもながらに愛情を感じていましたわ♡",
				"Setting up Children's festival dolls and carp streamers, eating Kashiwa mochi... It's so ordinary, but as a child I enjoyed these events that keep things in order."
		]},{"name": "Iruka", "texts": [
				"温泉テーマパークに連れて行ってもらったのが嬉しかったなー<br>まだプールの季節じゃないのにいつでも泳げるんだよね<br>しかしあの時は1日中泳いでたなあ……",
				"I got taken to a hot spring theme park. I was so happy! It wasn't pool season yet, but you could swim anytime. I think I swam there all day, actually..."
		]},{"name": "Yu", "texts": [
				"星が見えづらい季節でも……観察ができるようにって<br>天体望遠鏡を買ってもらったのがGWだったよ<br>もうすぐ……<span class=\"ul\">水星の逆行運動</span>を観察するんだ<br><div class=\"note\">※地球から見た惑星の見かけの動きが、普段と逆方向になること。</div>",
				"The stars are hard to see during this season, but Golden Week was when I got my telescope so I could watch them. Soon I can watch Mercury in retrograde motion."
		]},{"name": "Maria", "texts": [
				"逆行！　星占いで聞いたことがあるわ！　え～と水星ね<br>……人間関係や通信機器のトラブルが起きるかも！？<br>ほんとうかしら？　まあでも占いって情熱的よね～",
				"Retrograde! I've heard that in horoscopes! Mercury... \"You may have trouble with relationships and technical equipment!\" Really? Horoscopes are always so intense!"
		]},{"name": "Fuu", "texts": [
				"当たるも八卦当たらぬも八卦、っていうけど……<br>ゴールデンライブの真っ最中に通信機器のトラブルは嫌だな～<br>うん。心配だし、ひとっ走り何も起きていないか聞いてくる！",
				"They say fortunes are hit-or-miss, but I don't want technical trouble during our Golden Live Show... Hmm. I'm worried. I'll go and ask if there's been anything!"
		]},{"name": "Yuuka", "texts": [
				"心配し過ぎですよ……館内放送で呼び戻しましょうか？<br>でもそれだけ今日のライブを大事に思っているんですよね<br>白雪ちゃんの言うように特別な思い出にして欲しいですからね",
				"She's too worried. Should we call her back on the intercom? I guess that's how much the show means to her. She wants it to be a special memory like Koyuki said."
		]},{"name": "Yuka", "texts": [
				"今日みんなの思い出に残るのは私のダンスソロだと思うな♪<br>ぴっかぴかに技を磨いてきたからね、ゴールデンだけに！<br>ところでさ、ゴールデンなライブってなんだと思う？",
				"I think my solo dance is what'll stick with them. It's only for this show and my moves are gonna shine! Like gold! Hey, what do you think makes a show golden?"
		]},{"name": "Fumie", "texts": [
				"えーと、ゴールデン。……金色の……黄金のように価値のある<br>アニメですと、テレビの放送時間、ゴールデン帯のことですね<br>つまり、非常に価値の高いライブ……でしょうか？",
				"Hm... Golden... It's valuable, like gold. They call the TV slot for anime \"golden time.\" So it would be like a super valuable live show, right?"
		]},{"name": "Yuri", "texts": [
				"カッコいいだけじゃない、最っ高にクールなライブ<br>ロックなビートにハートが震えたらそれがゴールデンだな<br>忘れられない1日にしようぜ",
				"It can't just look good, it has to be really cool! My rock's gonna glitter like gold today too. Let's make it a day to remember!"
		]},{"name": "Himeno", "texts": [
				"月並みですが、持てる力を出し切って最高のライブを届ける？<br>いえ、いつも以上のことをしてこそゴールデンでしょうか……<br>うーん。例えばステージにお花を生けてみるとか……",
				"So give our all to deliver the best live show, just like always? No, Golden Week is about going above and beyond. Hmm... Maybe we could put flowers onstage..."
		]},{"name": "Jennifer", "texts": [
				"あたしたちが思い描く最高のライブ……だけではダメよね<br>応援してくれるみんなにとっても最高のライブでないと！<br>少なくともあたしの正義はそう言っているわ",
				"It's not enough for this to be the best live show we can imagine. It's gotta be the ultimate live show for all our supporters! At least, that's what I believe."
		]},{"name": "Akira", "texts": [
				"あれ？　もしかして空気……重くなってる？<br>アタシこういうのわりと敏感だよ<br>いつもタイヤの空気には気をつけているからね",
				"Huh? Is it just me, or do things feel pretty heavy around here? I'm pretty sensitive to that kind of thing, since I'm always keeping an eye on my tire pressure."
		]},{"name": "Sana", "texts": [
				"たしかに空気重いかも。ついさっきまで盛り上がってたのにね<br>それが今や、まるでサーブの構えに入った時みたいに……<br>まさか……これが人間関係のトラブルってこと！？",
				"Yeah, I suppose so. Everyone was in high spirits just a moment ago. Now it feels like when you're getting ready to serve. Could this be that relationship trouble?"
		]},{"name": "Akiru", "texts": [
				"ゴールデンなんて言葉に惑わされちゃって……みっともないわ<br>ショートでもフリーでも、技術や芸術のお披露目じゃないのよ<br>会場のみんなとの一体感こそライブの醍醐味でしょ！",
				"Don't get thrown off by the word \"golden.\" This might be a short free show, but it's not for us to show off. The thrill of a live show is the unity with our fans!"
		]},{"name": "Shun", "texts": [
				"わかる……わかるよ！　馬術だってそうだもん！！<br>大会でも、私と太郎と応援してくれる人みんな、求めてるのは<br>心も体も何もかもみーんな……人馬一体になることだよ！",
				"I know what you mean! It's just like horse riding! Even at contests, what I, Taro, and all our supporters want is to become one in body and mind!"
		]},{"name": "Sakuya", "texts": [
				"とはいえ今となっては、私たちにさえ一体感がないわね<br>……人間関係と通信機器のトラブルだなんて……くっ！<br>こんな露骨な機関の陰謀、もっと早く気付けたはずなのに！",
				"But we're not even unified among ourselves right now. Relationship and technical issues? Ugh! I should have noticed this blatant Agency conspiracy sooner!"
		]},{"name": "Ru", "texts": [
				"こういう時はひと眠りしてリフレッシュするところですが……<br>そうだ！　シンプルな合言葉で私たちの統一を図りませんか？<br>シンプルなイメージ……ステレオタイプ……オノマトペ……",
				"A nap now would be perfect to refresh ourselves, but... Right! Why don't we unite ourselves with a simple slogan? A simple concept, stereotype, onomatopoeia..."
		]},{"name": "Leo", "texts": [
				"おっ！？　レオ、知ってる！　オノマトペ！<br>ゲロゲロ。ホーホー。パオーン。……懐かしくて、楽しいな<br>ゴールデンもさっき知った。ぴっかぴか♪",
				"Oh?! I know some onomatopoeia! Like ribbit ribbit, hoot hoot, bruuummm... This is fun, and takes me back. Just learnt about golden too, it's so shiny!"
		]},{"name": "Kasane", "texts": [
				"イイじゃん、イイじゃん！　それで行こうよ。ぴっかぴか♪<br>GWにするゴールデンライブだし、今日の衣装にもぴったり<br>ぴっかぴかの中のぴっかぴか♪　だねっ！",
				"Nice! Let's go with that, all shiny and sparkly! It's a Golden Live Show during Golden Week. We have to get the blingiest of the outfits for today, right?"
		]},{"name": "Misaki", "texts": [
				"そうね、悪くないわ。私たちは強く輝き、その輝きが……<br>応援するみんなを輝かせる。そんな一体感をつくるのよね<br><span class=\"ul\">ブレイクショット</span>で飛び散るボールのような勢いを感じるわ！<br><div class=\"note\">※ブレイクショット：ビリヤードのゲームの最初に行われるショット（突き）。<br>初期配置を崩し、的球を散らすために行われる。</div>",
				"Right, not bad. We shine brilliantly, and that brilliance lights up those who support us. That builds a sense of unity. I feel charged, like a ball off a break!"
		]},{"name": "Sayuri", "texts": [
				"今からでも衣装に装飾は付け足せるだろうし<br>ステージの演出だって照明の工夫くらいはできそうだよね♪<br>この現地調達感……ふふっ、ちょっとしたサバイバルだよ！",
				"I think we could add more decorations to the outfits and devise something for the stage lighting. This feeling of making it up as we go... This is some survival!"
		]},{"name": "Marika", "texts": [
				"よしきた占ってあげる♪　先月は占い部でも活動してたんだー<br>さてさて～ジャン！　フールの正位置だ！　これはね……<br>自由や始まりを表しているの！　ほら、ぴっかぴか♪　だよ！",
				"That horoscope is really swaying us. A zen heart is free. It isn't constrained by a fortune. It could be fun to get a better fortune elsewhere and switch gears."
		]},{"name": "Rebecca", "texts": [
				"それにしても、振り回されたわね<br>ZENの心は自由自在。占いの結果になど縛られないわ<br>例えば別の占いの良い結果で塗り替えてみても面白いかも♪",
				"Okay, I'll tell your fortune! I was in the fortune-telling club last month. Aaand ta-dah! The Fool, upright! That means...freedom and new beginnings! So shiny!"
		]},{"name": "Reine", "texts": [
				"よ～し、麗音からが本当のゴールデンライブの始まりだよっ！<br>みんな～！　ぴっかぴかのダンスを楽しんでねー！！<br>……<span class=\"ul\">水星の逆行はGW後</span>って遊宇から聞いたのは黙っとこっと<br><div class=\"note\">※時事ネタ。水星の逆行運動は、2022年5月10日からしばらくの間観測することができた。</span",
				"Yeah! The real Golden Live Show starts with me! Enjoy the shiny dance, everyone! ...I won't say that Yuu said Mercury is only in retrograde after Golden Week."
		]},{"num": "ED", "texts": [
				"さあ、ぴっかぴかの輝きを取り戻した今日のゴールデンライブ<br>あなたにも私にも、特別な思い出になる予感がしますね♪<br>ステージ上空の鯉のぼりも元気に泳いでいますよ～",
				"Now, the Golden Live Show has regained its sparkle. I have a feeling it will be a special memory for us. The carp streamers over the stage are swimming happily!"
		]}
	]},
	{'titles': ['ミライへアクセス','Access the Future'],
	'num': 20,
	'sub': '開催：2022/05/31 - 2022/06/25',
	'opponent': [
		{"num": "OP", "texts": [
				"今回のライブ♪アリーナはフューチャーライブ<br>スクールアイドルの皆さんはそれぞれミライへと<br>想いをはせているようです",
				"This Live Arena is all about live shows for the future. The school idols all seem to each have their own feelings about what lies ahead."
		]},{"name": "Himeno", "texts": [
				"昔からスクールアイドルになるのが夢でしたから<br>私にとっては今がまさにミライ……なんですよね！",
				"It's been my dream to become a school idol since forever. As far as I am concerned, the future truly is now!"
		]},{"name": "Marika", "texts": [
				"あたしはまだまだ知らないこと、体験したことがないことが<br>いっぱいあるから、いろんなことに挑戦していきたいな～<br>ミライが楽しみで仕方がないよ♪",
				"There's so much I still don't know about and still haven't experienced, so I want to try all sorts of things. I can't help but look forward to the future!"
		]},{"name": "Ru", "texts": [
				"ポジティブですね。私はミライは楽しみでもあるけど<br>どうなるかわからなくて……ちょっと不安になったりもします",
				"You're so optimistic. I'm also looking forward to what the future brings, but I don't really know what it will be... That makes me a little nervous."
		]},{"name": "Nanaka", "texts": [
				"ミライって、待ってたらやってくるものじゃなくて<br>自分達で作っていくものだと思うの！<br>明日の自分は自分自身で変えていきたいー！",
				"I don't think the future is something that we wait for. It's something that we create ourselves! I want tomorrow's me to be a me changed by me!"
		]},{"name": "Rika", "texts": [
				"ふむ、「ミライは自分で作る」、か……<br>このライブも私達が作るミライのひとつになれるだろうか……",
				"Hmm, creating your own future... I guess this live show could also become a future that we create ourselves..."
		]},{"name": "Sana", "texts": [
				"ミライといえば、天気予報♪　今は梅雨の時期だから<br>ライブの日のお天気がどうなるのか<br>とっても気にならない！？",
				"And speaking of the future, what about the weather? It's rainy season now. Aren't you super curious about how the weather will be on the day of the live show?!"
		]},{"name": "Yukari", "texts": [
				"はい、気になります！　ゆかり雨女だから、いつもライブは<br>雨が降って、みなさんに大変な想いをさせてしまって……<br>申し訳ない気持ちでいっぱいになっちゃいます～！",
				"Yes, I am! I'm really unlucky with the weather. It always rains during my live shows and it dampens everyone's mood... I end up wanting to apologize to everyone!"
		]},{"name": "Jennifer", "texts": [
				"私は逆ね。ジュニアハイスクールの頃から、イベントが<br>あるときはぜーんぶ快晴。雨が降ったことがないのよね",
				"I'm the opposite. Ever since my junior high school days, the weather was aaalways perfect during events. It never rained for me."
		]},{"name": "Fumi", "texts": [
				"いーなー。いつも晴れだと、ステージも気持ちよくて<br>最高の気分でライブができるよね<br>ギョロちゃんも、そう思わない？",
				"That sounds great. Sunny weather feels so nice up onstage and it puts you in the perfect mood for a live show. Don't you think so too, Gyoro?"
		]},{"name": "Akiru", "texts": [
				"雨の日だと、髪の毛もまとまらないし、せっかくセットした<br>前髪だってぺしゃんこになっちゃうし、気分サイアクだわ",
				"My hair always gets messed up on rainy days. It takes so long for me to get my bangs just right, and then they get flattened wet. It's just the worst."
		]},{"name": "Fumie", "texts": [
				"私は雨の日も好きですよ！　家の中でアニメに漫画<br>ゲーム三昧……♡　ややっ、晴れの日も変わらないって？<br>これは一本取られましたな～！",
				"I love rainy days, actually! It lets me focus on my favorite hobbies of anime, manga, and games at home... Wait, I do that on sunny days anyway. Whoops!"
		]},{"name": "Coco", "texts": [
				"やっぱりライブの日は、晴れてくれると嬉しいな<br>せめて曇りだったら足元が濡れなくいいでしょ？<br>お星さまにお願いしておこうっと♡",
				"Sunny weather's definitely the best for live shows. It's okay if it's cloudy though, since your feet don't get soaked, you know? Let's ask for the sun's favor!"
		]},{"name": "Yuuka", "texts": [
				"でも、雨を題材にした歌もいっぱいありますし<br>雨の歌を雨の日に歌ったら、みなさんと共感できて<br>素晴らしいステージになると思いませんか？",
				"But there are lots of songs about rain. If we sing a song about rain on a rainy day, everyone would share the same feelings. It'd make for a great show, right?"
		]},{"name": "Reine", "texts": [
				"雨で湿度があるとお肌だってちょっと潤うよね<br>私は髪もパサつき気味だからしっとり落ち着いてくれて<br>調子良いなーってなるよ",
				"The rain makes it humid, which hydrates my skin a little. My hair also tends to dry out in normal weather, so rainy weather really helps to get it in good shape."
		]},{"name": "Iruka", "texts": [
				"逆転の発想！　スゴイよ！<br>須田、そんな風に考えたこと無かった～！<br>これからはそんな風に考えて雨と仲良くしていこう♪",
				"Ooh, a different perspective! Wow! I never thought about it like that. I'm going to start being more positive about the rain from now on!"
		]},{"name": "Isabella", "texts": [
				"そうだな。マイナスに思える物事も、逆に考えると<br>良い事に思えてくる、なんてこともいっぱいあるだろう！",
				"Good point. There are a lot of supposed minuses that can become pluses if you approach them from another angle!"
		]},{"name": "Akemi", "texts": [
				"雨の日に友達とアイアイ傘して帰るのも、楽しそうよね～♪<br>普段と違う距離感で、お互いにちょっとドキドキしちゃったり<br>して……キャーッ！",
				"Cheerfully going home with friends under an umbrella sounds so fun too! We'd all be closer together than usual, so our hearts would be racing a little... Ahhh!"
		]},{"name": "Chiduko", "texts": [
				"雨の日だって、考え方次第でこんなに素敵なことに<br>思えてくるんですのね。楽しくなってきましたわ♡",
				"Now I can see how even rainy days can become something wonderful with the right mindset. It's so fun to think about!"
		]},{"name": "Hitomi", "texts": [
				"でも、雨だと星が見られないのは、ちょっと残念だな<br>星に願っても、その願いが届かなくなってしまう……",
				"But it is a shame you can't see the stars at night when it's rainy. The rain clouds block out any wishes I make to the stars..."
		]},{"name": "Christina", "texts": [
				"お星さまにお願いできないなら、お月様にお祈りするのは<br>いかがでしょう？　お祈りは目を閉じるので、たとえ<br>お月様が見えなくても、あなたの祈りは届きます",
				"If you can't do that, then why not pray to the moon? You close your eyes during prayer, so even if you can't see the moon, your prayers will still reach it."
		]},{"name": "Sakura", "texts": [
				"まさに……逆転の……発想！",
				"Wow... I never would've thought of that!"
		]},{"name": "Ranpha", "texts": [
				"月って、古来から神秘的とか幻想的なイメージが強くて<br>ちょっと怖いネ。ダケド、いつでもそこにあって<br>見守ってくれる、静かなやさしさを感じるヨ",
				"The moon has long been seen as very mystical or magical, even a little scary. But I feel a quiet kindness in how it's always watching over us from up there."
		]},{"name": "Seira", "texts": [
				"雨の日があるから晴れの日がもっと嬉しくて<br>月があるから太陽が昇るのがワクワクするんですね",
				"It's the rainy days that make us all the happier for sunny days, right? In that sense, having the moon makes the sun rising up all the more exciting."
		]},{"name": "Yuka", "texts": [
				"うん。雨だって月だって、ネガティブに捉えがちだけど<br>それぞれに意味があってどっちも素晴らしいんだね！",
				"Yeah. We may tend to perceive the rain and moon negatively, but they have their own purposes and can both be wonderful things!"
		]},{"name": "Fuu", "texts": [
				"ジャンプをする前の助走、踏み切りってことだね！<br>いい踏み切りができると、大大大ジャンプができるっ！",
				"It's like the run-up and first step before making a jump! If you get a good running start, you can make a big, big jump!"
		]},{"name": "Minami", "texts": [
				"喧嘩したことで、かえって仲良くなっちゃう、なんてことも<br>あるし。言いたいことを言いあうことで、お互いのことを<br>より深く知ることができるようになるよねっ♪",
				"Even arguing with someone can actually deepen your friendship with them. Saying what you want to say lets you get to know each other on a deeper level."
		]},{"name": "Tsurugi", "texts": [
				"私達は、決してクリアしたわけじゃない<br>まだまだ成長しているんだ！",
				"It's clear that there's much, much more growing for us to do! We aren't done yet!"
		]},{"name": "Leo", "texts": [
				"成長しているレオの姿、みんなに早く見せたい！",
				"I can't wait to show everyone how much I keep growing!"
		]},{"name": "Akiru", "texts": [
				"今の自分達に満足するんじゃなくて、ミライの自分達を<br>思い描いて、それに向かって頑張って進んでいきたいわね！",
				"I want us to keep doing our best! Not to satisfy our current selves, but to pursue what we want our future selves to be!"
		]},{"name": "Kasane", "texts": [
				"その通りだよ。このライブは、現状から抜け出して次へ進む<br>つまり、ミライへ向かう道でもあるんだね！",
				"Exactly. This live show will be our path to moving beyond our current level. In other words, our path to the future!"
		]},{"num": "ED", "texts": [
				"どうやらみなさん、ミライへの想いをあらたに胸に描いている<br>ようです。フューチャーライブ、前代未聞てんこ盛りのライブ<br>になりそうですね！",
				"It seems everyone has reaffirmed their desire to face the future. Their live shows for the future are sure to reach new, unprecedented levels of excitement!"
		]}
	]},
	{'titles': ['夢叶える日まで','Until Our Dreams Come True'],
	'num': 21,
	'sub': '開催：2022/06/30 - 2022/07/25',
	'opponent': [
		{"num": "OP", "texts": [
				"今回のライブ♪アリーナのテーマは「エンペラー」！<br>スクールアイドルのみなさんは、このテーマをどう受け止めて<br>いるのでしょうか～？",
				"The next Live Arena theme is: Emperor! I wonder what the school idols will do with this theme?"
		]},{"name": "Maria", "texts": [
				"エンペラーって皇帝ってことよね<br>世界を統べるほどの圧倒的な存在！<br>でも、どうして7月のライブのテーマが皇帝なの？",
				"An emperor is a person powerful enough to rule over the entire world! But why is that the theme for our July live show?"
		]},{"name": "Rakshata", "texts": [
				"皇帝とは、国の王様のようなものですね<br>インドでも、昔、皇帝が国を治めていた時代がありました……",
				"An emperor is like the king of a country. An emperor used to reign in India once too..."
		]},{"name": "Haruka", "texts": [
				"7月って、英語でJulyって言いますよね？　これって<br><span class=\"ul\">昔の皇帝の名前が元になってる</span>って聞いたことがあります<br>その人、7月生まれで、7月を自分の名前にしたんですって<br><div class=\"note\">※「July」という語は、古代ローマの政務官、ガイウス・ユリウス・カエサルの名に由来するが、カエサル自身は皇帝を経験していない（帝政になったのはカエサルの死後）。</div>",
				"As for July, isn't the month named after an old emperor? I think I heard that once. He was born in July and named the month after himself."
		]},{"name": "Sakuya", "texts": [
				"ふむ、ものしりなのね。でも皇帝ってすごいわね<br>暦まで自分の思い通りにできちゃうなんて！<br>私はてっきり機関が裏で手を回したのかと思ったわ",
				"You sure are knowledgeable. Imagine being able to change the calendar however you see fit! And I thought I was good at manipulating things behind the scenes."
		]},{"name": "Yu", "texts": [
				"7月生まれ……私も……そう……<br><div class=\"note\">逢沢遊宇ちゃんは7月7日生まれ。</div>",
				"July... I...was born in July too..."
		]},{"name": "Saki", "texts": [
				"そんな、エンペラーなんてだいそれた名前のライブ<br>いったいどうすればよいのでしょう<br>そして、私はどうなっちゃうのでしょう？",
				"Well, what are we gonna do for such a grandiose name for our show? And what am I gonna have to do?"
		]},{"name": "Yuri", "texts": [
				"みんなから崇められるようなライブにするんじゃない？<br>ガツンとカッコいいライブにしてやろうぜ！",
				"It'll have to be a show that makes everyone want to worship us, right? Let's make it freakin' awesome!"
		]},{"name": "Fumie", "texts": [
				"もしかして、この中の誰かが皇帝になるってことですか？<br>それ、私、気になっちゃいます<br>気になって夜しか眠れません！",
				"Does that mean one of us is going to play the empress? Sounds interesting... So interesting that I might be able to sleep only at night!"
		]},{"name": "Sayuri", "texts": [
				"誰かってことなら、サバゲーで皇帝決めようよ！<br>こういうのは実力で勝ち取ってこそ、価値があるよ！",
				"Let's decide who gets to play empress with an airsoft game! The emperor has to have the strength to secure victory, so I think it's worth a try!"
		]},{"name": "Misaki", "texts": [
				"だったら、ビリヤードで勝負をつけては、どうかしら？<br>皇帝には知的な駆け引きも大切だと思うの",
				"Why not decide it with a game of pool? I think tactics and strategy are just as important to an emperor."
		]},{"name": "Mizuki", "texts": [
				"フリースロー3本勝負で決めようよ！<br>ちょっとぐらいハンデつけてあげるからさ～",
				"Let's have a best-of-three free throw contest! I'll even let all of you have a handicap!"
		]},{"name": "Shun", "texts": [
				"やっぱり皇帝って馬にまたがってる姿が似合うと思うんだ<br>つまり、太郎に颯爽とまたがった私こそが皇帝にふさわしい！",
				"I think an emperor would look good riding a horse. So considering how elegant I look riding Taro, obviously I should be the empress!"
		]},{"name": "Nagi", "texts": [
				"皇帝が決まったら、その人の肖像画を描きたい<br>ああいう中世風のタッチって、面白そうー",
				"Once we decide on the emperor, I'd like to draw their portrait. It seems fun adding those medieval touches..."
		]},{"name": "Sachiko", "texts": [
				"フッ、我が秘術をもってすれば、皇帝になることなど<br>たやすいことだ……！<br>皆も、なりたければ、いつでも皇帝にしてやろうぞ！",
				"Hmph. If I used my secret arts, becoming empress would be no trouble at all! And if any of you feel like it, I can make you empress whenever you like!"
		]},{"name": "Ayumi", "texts": [
				"あなた達が皇帝になんかなったら、世界が大混乱に陥るわ<br>でも、それはそれで、みんな楽しい気持ちであふれそう……<br>ちょっと見てみたい気もするわね",
				"If any of you became empress, the world would be plunged into chaos! Still, I'm sure we'd all have a lot of fun... Maybe I would like to see it happen."
		]},{"name": "Mikoto", "texts": [
				"だ、大混乱！？　あなたたち、風紀を乱すようなことは<br>絶対に許しませんからね！<br>スクールアイドルは、「清く正しく」なんです！",
				"Ch-Chaos? If you did anything to upset the social order, I'd never forgive you! School idols must be honest and proper!"
		]},{"name": "Saki", "texts": [
				"皇帝スクールアイドルがいっぱい……<br>これは応援するほうも楽しくなりそうです♪<br>みんな、がんばれ～～っ！",
				"So many empress school idols... I bet it's going to be fun to cheer for them too! Do your best, everyone!"
		]},{"name": "Akemi", "texts": [
				"いろんな皇帝スクールアイドルが歌って踊って走る姿……！<br>こんなお宝シャッターチャンス、逃せないわ！",
				"All those empress school idols singing, dancing, and running around! I can't miss such a great photography opportunity!"
		]},{"name": "Koyuki", "texts": [
				"小雪はね、皇帝ってよくわからないけど……<br>いつも通りバレエで培ったステージング技術で<br>楽しいライブができたらいいなって思ってるの♪",
				"I don't really know what an emperor is, but... I'll be happy if I can just use the staging skills I learned from ballet to put on another fun show!"
		]},{"name": "Ryo", "texts": [
				"ふふ……雪ちゃんらしいなあ<br>でも、いつも通りの雪ちゃんは皇帝っていうより<br>……お姫様だね♪",
				"*Giggle* That's so like you, Koyuki. You're more like a princess than an empress, though, aren't you?"
		]},{"name": "Christina", "texts": [
				"皆さん、エンペラーライブのイメージが<br>湧いてきたようですね<br>これならライブの成功間違いなしです！",
				"Looks like you're all bursting with ideas for our emperor live show. Now I'm sure the show's going to be a success!"
		]},{"name": "Rika", "texts": [
				"でも、スクールアイドル界の皇帝と呼ばれるには<br>それこそ全力で頑張らないと駄目なんじゃないか？",
				"But if we're calling ourselves empress of the school idol world, we'd really better give it our all, shouldn't we?"
		]},{"name": "Ru", "texts": [
				"全力で頑張ったって、皇帝なんて身の丈を超えた存在に<br>私なんかがなれるのかな……？",
				"Even if I give it my all, can I really be anything like an empress? Someone who's larger than life?"
		]},{"name": "Kasane", "texts": [
				"大丈夫だよ。どんな皇帝も最初から皇帝だったわけじゃなくて<br>一歩ずつ階段をのぼっていって、最後の最後に皇帝の座に<br>ついたんだと思うよ",
				"Don't worry. No emperor started out that way. I think they all climbed the ladder one step at a time, finally reaching the throne."
		]},{"name": "Yumi", "texts": [
				"学問に王道なし、千里の道も一歩から。楽器の演奏だって<br>一朝一夕には上手くなれないわ。何事も、一気にトップに<br>なれるなんて都合の良いことはないわけだからね",
				"There aren't any shortcuts in learning. You can't learn to play an instrument overnight either. Whatever it is, it takes a long time to reach the top."
		]},{"name": "Minami", "texts": [
				"なにより、私達は一人ぼっちじゃないと思うの<br>お互い助け合って、一緒に成長していけばいいじゃない",
				"What's important is that none of us are going it alone. We've just got to stick together and grow together, right?"
		]},{"name": "Akira", "texts": [
				"そうだよ。夢を叶えるその日まで、アタシらみんなで<br>一緒に頑張って進んでいこうよ<br>そして、最高の景色を見に行こうよ！",
				"That's right. Let's all keep on working together until the day our dreams come true! Then let's go see what it's like to be on top of the world!"
		]},{"name": "Chiduko", "texts": [
				"最高の景色……スクールアイドルの中の皇帝って<br>呼ばれるほどすごいスクールアイドルになれたら<br>どんな景色が見られるのかしら……♡",
				"On top of the world... I wonder what it'd be like to become a school idol good enough to be known as the empress of school idols."
		]},{"name": "Rebecca", "texts": [
				"山登りで頂上を目指すように、一歩一歩足元を踏みしめながら<br>登っていく、そんな辛い道のりなんだと思うわ<br>これこそまさにZENの心なんじゃないかしら？",
				"I think reaching the top is all about that long, hard journey of putting one foot in front of the other over and over again. That's what zen is all about, right?"
		]},{"name": "Isabella", "texts": [
				"誰が肯定になってもいい。みんなで助け合ってお互い最高の<br>スクールアイドルを目指すんだ<br>それがスクールアイドルってものなのだ！",
				"I don't care who becomes empress. We've all got to work together to become the best school idols we can be. That's what it means to be a school idol!"
		]},{"num": "ED", "texts": [
				"どうやら、ライバル心がかえって団結を生み出したようです<br>お互いに切磋琢磨して、より高みを目指していく……<br>今回のライブも、素晴らしいライブになりそうです",
				"Rather than becoming rivals, everyone's expressing their solidarity. Working hard together to reach the top... Looks like the next show will be a great one!"
		]}
	]},
	{'titles': ['鏡の中の私','Our Reflections in the Mirror'],
	'num': 22,
	'sub': '開催：2022/07/31 - 2022/08/25',
	'opponent': [
		{"num": "OP", "texts": [
				"今回のライブ♪アリーナは「ファインド・マイセルフ」<br>みなさん、自分探しの旅へ、いってらっしゃ〜い！",
				"This Live Arena is all about live shows for the future. The school idols all seem to each have their own feelings about what lies ahead."
		]},{"name": "Leo", "texts": [
				"自分探し……自分自身を見る……？<br>っ！　でっかい鏡を探してこないと！",
				"Finding myself...as in, looking at myself? Oh! That means I need to go find a big mirror!"
		]},{"name": "Kasane", "texts": [
				"鏡で自分自身を見るのは毎朝やってるよー！<br>「今日も私、魅力的に見えるかな？」とか、ね♪",
				"I find myself in the mirror every morning, wondering if I still look cute as ever, that kind of thing!"
		]},{"name": "Reine", "texts": [
				"人は人に見られることで美しくなれるって<br>麗音、聞いたことあるよ♪<br>例えそれが自分自身であっても効果はあるんじゃないかなぁ",
				"I've heard people say that you only become beautiful when you're seen by someone else. I guess that means that looking at yourself might have the same effect."
		]},{"name": "Seira", "texts": [
				"じゃあ、私、これから毎朝鏡を見て<br>「私きれい？」<br>って話しかけることにします！",
				"Okay, then from now on, I'll look in the mirror every morning and ask it if I'm pretty!"
		]},{"name": "Yumi", "texts": [
				"それじゃおとぎ話の魔法の鏡でしょ！<br>っていうか、聖来、毎朝鏡見てないの！？",
				"Like a magic mirror from a fairy tale! Also, wait, you don't already look in the mirror every morning?"
		]},{"name": "Haruka", "texts": [
				"普通の鏡は返事してくれないね。でも、私はお姉ちゃんに<br>「今日の私、かわいい？」って聞いてるの。そうしたら、<br>「今日も世界一かわいいよ」って言ってくれるんだ",
				"Normally, mirrors don't respond. But I ask my older sister if I look cute today, and she always says I'm the cutest in the world."
		]},{"name": "Sakura", "texts": [
				"少し、羨ましい。<br>……姉さん、今日の私、かわいい？",
				"I'm a little envious. Sakuya, am I cute today?"
		]},{"name": "Sakuya", "texts": [
				"さ、咲良、突然何を言い出すの？<br>か、かわいいに、決まってるじゃない……",
				"Th-That came out of nowhere, Sakura. O-Of course you're cute."
		]},{"name": "Koyuki", "texts": [
				"姉妹仲が良いですね。<br>でも、待ってください。小雪はね、自分探しって、<br>そういう意味じゃない気がするんです……",
				"You two sisters get along so well. But if you could wait a moment, I have a feeling that this isn't exactly what finding yourself means."
		]},{"name": "Mikoto", "texts": [
				"自分の存在意義や、今まで知らなかった自分自身の<br>魅力、能力を見つけ出すこと……ですよね？",
				"I think it's like your reason to be here or finding some good point or talent you didn't know you had...right?"
		]},{"name": "Jennifer", "texts": [
				"自分で自分を見つめ直すのも大切だけど、<br>周りからどういうスクールアイドルだと思われているのか<br>ってことも大切なんじゃないかしら",
				"Self-reflection is important, but it's also important to know what kind of school idol other people see you as."
		]},{"name": "Rika", "texts": [
				"そうだね。自分ではかわいい系のつもりでいたのに、<br>いつの間にかかっこいい系だと思われてたり、<br>その逆だったりなんてのもよくある話だよね",
				"I agree. I wanted to go for a cute angle, but I ended up being known as cool before I knew it. Those kinds of twists are pretty common."
		]},{"name": "Nagi", "texts": [
				"だったら、そういう、他の人から思われている<br>自分のイメージも、新しい自分を見つける<br>手がかりになるのかなー？",
				"So maybe that means the image other people have of you is a clue for finding a new you."
		]},{"name": "Minami", "texts": [
				"うんうんっ！　今までと全く違う路線に<br>イメージチェンジするのも案外面白いのかもしれないね♡<br>私も、妹キャラに挑戦しちゃおうかな？",
				"That's true. It might be more fun than I imagined to completely revamp my image! Maybe I should try going for a cutesy little sister image."
		]},{"name": "Isabella", "texts": [
				"思うに、「なりたい自分」と「思われている自分」の<br>他にもうひとつ、「本当の自分」というのがある気がするのだ",
				"My thinking is that besides my ideal self and the perceived self, there's one more true self."
		]},{"name": "Sachiko", "texts": [
				"第3の自分だな……。他の人も、自分自身すらも<br>まだ気づいていない、闇に隠された真の自分が、<br>もしかしたら存在するのかもしれない……！",
				"The third self, huh? You know, maybe there's a true talent inside of you that's hidden in darkness-something that neither you nor anyone else has noticed yet!"
		]},{"name": "Yuri", "texts": [
				"確かに、あたしもバンドと同じくらい<br>熱くなれることがあるとは思わなかった。<br>……これが真の自分ってことなのか？",
				"True. I never thought there would be anything I would get into other than the band... is this what I truly am?"
		]},{"name": "Fuu", "texts": [
				"そうだね！<br>今の私がスクールアイドルやってるってこと、<br>過去の自分に教えてあげたいよ！",
				"Absolutely! Right now, I'm a school idol, but try telling that to my self in the past."
		]},{"name": "Shun", "texts": [
				"私も、太郎と一緒に馬場にいるはずだったのに、<br>今、ステージにいるなんて考えもしなかったなぁ……",
				"Same with me. I thought I'd always be horse-riding with Taro, not being onstage."
		]},{"name": "Saki", "texts": [
				"私は人のことを応援する方が自分に向いてると思ってた。<br>でも今は、スクールアイドルの自分も大好き！<br>新しい自分を発見できてうれしいんだ！",
				"I thought I was better at cheering for someone else. But now I love being a school idol myself. I'm glad I found the new me!"
		]},{"name": "Marika", "texts": [
				"「なりたい」っていう気持ちは、一番大切にしても<br>いいんじゃないかな。でも、それにこだわりすぎて<br>新しいチャンスを見逃すのももったいない気がする",
				"There's nothing wrong with prioritizing your ideal self. But I also think that if you get too hung up on it, you'll miss out on new opportunities."
		]},{"name": "Jennifer", "texts": [
				"スクールアイドルになりたくてなった。<br>「なりたい自分」を応援してもらえるのって<br>本当に幸せなことだなって思うわ",
				"I wanted to be a school idol, so I became one. I think that having so many people support my ideal self is truly a happy thing."
		]},{"name": "Ranpha", "texts": [
				"今の私がなりたい自分だったかどうか、わからないアル。<br>でも、今、私はここにいる。それだけは事実ネ",
				"Right now, I'm not sure if I've been able to achieve my ideal self. But what I am sure of now is that I'm here."
		]},{"name": "Yuka", "texts": [
				"私はね、泣いてる自分も、笑っている自分も、<br>ぜーんぶまとめて自分だと思うから、そんな私のことを、<br>好きだと言って応援してもらいたいんだ！",
				"I think that whether we're crying or laughing, it's all part of the same big self. I want someone to support me by loving both those sides of me!"
		]},{"name": "Sana", "texts": [
				"全力で泣いたり笑ったりすると、<br>ちょっと変な顔になっちゃうときがあるわよね……<br>それでも笑って許して、応援してもらいたいわ",
				"I guess we make weird faces when both crying hard and laughing hard... But I'd like someone who wouldn't mind and would just smile and keep supporting me."
		]},{"name": "Yuuka", "texts": [
				"そうですね、いろんな自分がいてもいい、<br>新しい自分を発見したら、今までの自分と合わせて<br>パワーアップした自分になればいいと思います！",
				"Yes. It's okay to have lots of different selves. I think that when you find a new self, you should combine it with your other selves and make a powered-up self!"
		]},{"name": "Fumie", "texts": [
				"それで、私のことを一番だよって言ってもらえたら、<br>こんなに嬉しいことはない、ですな！",
				"And if I were to be told that I am the best, I would feel wonderfully pleased."
		]},{"name": "Hitomi", "texts": [
				"よし！　今までとは違う俺、見せてやるぜ！<br>しかとその目に焼き付けるんだな！",
				"Alright! I'm going to show you a totally different me! Make sure you don't miss it!"
		]},{"name": "Tsurugi", "texts": [
				"新しい自分なんて、すぐに見つかるものじゃないけど、<br>応援してもらってる今の自分を日々磨いていけば、<br>いつか新しい自分との運命的な出会いがあるんじゃないかな",
				"You can't find your new self immediately, but if you work every day at improving your current self with support, you'll meet your new self in no time."
		]},{"name": "Nanaka", "texts": [
				"いつも人のことばかり撮ってるけど、<br>たまには自分を撮ってみたら新しい自分に出会えちゃうかも！<br>そうと決まれば鏡見ながら自分磨きの研究だー！",
				"I'm always taking pictures of other people, but by taking pictures of myself instead, I might find a new self! I better start practicing by looking in the mirror!"
		]},{"num": "ED", "texts": [
				"みなさん、それぞれの自分探しに旅立って、いろんな<br>成果を手にされたようですね。今後の活躍がいっそう<br>期待できそうです！",
				"It seems everyone has reaffirmed their desire to face the future. Their live shows for the future are sure to reach new, unprecedented levels of excitement!"
		]}
	]},
	{'titles': ['重なるストーリー','Crossing Stories'],
	'num': 23,
	'sub': '開催：2022/08/31 - 2022/09/25',
	'opponent': [
		{"num": "OP", "texts": [
				"始まりましたライブ♪アリーナ！<br>みなさんには、この夏の経験を踏まえて、いろいろな物語を<br>語っていただきましょう。では、どうぞ〜！",
				"The Live Arena has begun! Let's hear everyone's stories about their summer experiences. Now, enjoy!"
		]},{"name": "Misaki", "texts": [
				"ひと夏の経験……素敵な出会いから始まる2人の物語。<br>みんなのロマンチックな物語を聞きたいわ",
				"A summer experience... How about the story of two people that began with a wonderful chance meeting? I'd like to hear all your romantic stories!"
		]},{"name": "Chiduko", "texts": [
				"夏の素敵な出会い……出会いから育まれる愛！<br>風紀を守る為の愛の物語、素敵ですわよね",
				"A wonderful summer meeting... A love that began with a fateful meeting! The story of a love that put the world to rights would be lovely, wouldn't it?"
		]},{"name": "Iruka", "texts": [
				"夏！　海！　水泳！　水泳といえばこの須田いるか！<br>やっぱり海で一日中いるかと一緒に泳いで、<br>泳ぎ疲れたら夕日を眺める物語がいいと思うなぁ",
				"Summer! Sea! Swimming! And swimming means me, Iruka Suda! I think a story of swimming all day with the dolphins and then watching the sunset would be nice."
		]},{"name": "Himeno", "texts": [
				"夏のバカンスといえばやはり避暑地でリゾートですよね。<br>小鳥のさえずり、小川のせせらぎを聞きながら読書する<br>日々はそれはもう充実していました",
				"A summer vacation means going on a no-heat retreat. Reading while listening to the chirping birds and murmuring stream made for a most satisfying time."
		]},{"name": "Haruka", "texts": [
				"私はお姉ちゃんと一緒におでかけしました！<br>お姉ちゃんの手作りのお弁当持ってピクニック。<br>楽しくて時間がたつのが早かったなぁ",
				"I went out with my sister and had a picnic with her homemade packed lunches. Time really flew while we were having fun."
		]},{"name": "Fumi", "texts": [
				"花火大会も夏の風物詩ですよね。<br>空を見ながら歩いていると、何度も転びそうになっちゃうし、<br>ギョロちゃんとはぐれそうになるし、大変でした〜",
				"Fireworks shows are a summer staple too. Walking around with my eyes to the sky, I tripped so many times and almost lost Gyoro. It was really rough."
		]},{"name": "Koyuki", "texts": [
				"みんなの色々な物語、自分の夢の話だったり、<br>本の物語の話だったり、色々あって<br>聞いてるだけで楽しくなっちゃう",
				"I'm enjoying myself just hearing everyone's stories, stories of their dreams, and stories from books."
		]},{"name": "Minami", "texts": [
				"物語といえば、この間、保育所の手伝いで<br>子供たちに絵本の読み聞かせをしてあげたの！<br>みんなきらっきら目を輝かせて聞いてくれたんだ〜♡",
				"Speaking of stories, when I was helping out at the nursery recently, the children had me read to them. They all listened with such sparkling eyes!"
		]},{"name": "Nagi", "texts": [
				"ふふ。凪もこどもの頃は、絵本の中の物語に夢中になったー。<br>どれもー、夢がいっぱい詰まってて楽しかったなー",
				"*Giggle* When I was little, I used to get lost in the worlds in picture books. They were all so full of fantasy, it was such fun."
		]},{"name": "Nanaka", "texts": [
				"物語に夢中になりすぎて、自分が物語の中に入っちゃう<br>みたいな体験も面白いよね。<br>あの没入感は他では味わえない、独特な面白さだよね",
				"It's interesting how you can get so absorbed in a story, it's almost like you're there, isn't it? It's a special experience that you can't get anywhere else."
		]},{"name": "Ryo", "texts": [
				"物語に没入するといえば、演劇だって他では味わえない<br>没入感が味わえる……。まさしく物語の登場人物となって<br>その世界の住人になる快感は格別さ！",
				"Speaking of story immersion, there's nothing quite like theater. The feeling of becoming one of the characters and living in that world is like nothing else!"
		]},{"name": "Yuuka", "texts": [
				"映画や舞台の中で物語に入り込むのって、不思議ですよね。<br>まるで自分が登場人物になったようにその世界を体験し、<br>いろんな冒険にチャレンジできるんですから",
				"It's funny how you can get lost in a story, isn't it? Become one of the characters, experience the world for yourself, and go on all sorts of adventures."
		]},{"name": "Ru", "texts": [
				"でもそれは物語の中だけで、<br>実際の自分とはかけ離れているような気がして……<br>少し悲しくなっちゃいます……",
				"But that's only within the story. I feel a little sad sometimes when I realize how different it is from real life."
		]},{"name": "Akemi", "texts": [
				"演じるといえば、我々スクールアイドルも、<br>ある意味、演じている存在と言えるかもしれないわね",
				"Speaking of acting, I suppose we school idols are kind of like actors in a way too, aren't we?"
		]},{"name": "Akiru", "texts": [
				"確かに、ステージ上での私が素の私かというと、<br>そんなことはないから、そういう意味では<br>スクールアイドルを演じているのかもしれないわね",
				"I'm definitely a different person onstage than I am in everyday life. In that way, I suppose I am playing a school idol."
		]},{"name": "Aya", "texts": [
				"じゃあ、スクールアイドルの私って、<br>本当の私じゃないのかな……",
				"Does that mean the school idol version of me isn't the real me?"
		]},{"name": "Mutsuki", "texts": [
				"確かにスクールアイドルをやっているときは、普段の姿とは<br>違う自分を演出しているところはある。だがしかし、<br>どちらも自分自身であることに違いはないんじゃないか？",
				"It's true that when I'm being a school idol, I look different from how I normally look. But there's no doubt they're both me, right?"
		]},{"name": "Isabella", "texts": [
				"そうだな。最初は自分を偽った演技であっても、<br>それを真剣に演じているうちに、<br>それは本当の自分になっていくのかもしれないな",
				"That's right. Maybe I was faking it when I performed at first, but after performing so hard for so long, I think that became the real me."
		]},{"name": "Sachiko", "texts": [
				"くっくっく。今は我が魔術でかりそめの姿だが、<br>我の真の姿を知ってしまえば、汝らは<br>我の前にひれ伏すことになろうぞ……",
				"Heh heh heh. Though I currently hide my true form using my dark powers, all of you would bow before my greatness if you bore witness to it!"
		]},{"name": "Kasane", "texts": [
				"私の作る衣装を着て、みんながいつもと違う輝きを魅せて<br>くれるの、大好きなんだよね。コスプレでも衣装でも、<br>いつもと違う自分をプロデュースするのが好き♪",
				"I love how everyone shines in unique ways when wearing my outfits. With both cosplay and costumes, I like producing a different version of myself!"
		]},{"name": "Yuri", "texts": [
				"それにしても、今日の衣装は、ヒラッヒラで……<br>確かにいつもと違うあたしではあるけれども……",
				"But wow, with the way my outfit for today flutters... It really does feel like I'm a different person."
		]},{"name": "Coco", "texts": [
				"ココは、いつも新しい衣装を着るのを楽しみにしてるんです。<br>可愛い衣装を着たココのことを、ドキドキしながら見て<br>もらえると思うと、ワクワクしちゃいます……♡",
				"I always look forward to wearing new outfits. When I think of people's hearts pounding while looking at me in a cute costume, I get so excited!"
		]},{"name": "Yuka", "texts": [
				"衣装を着ると、私、スクールアイドルなんだー！って<br>実感が湧いてきて、いつもと違う自分が出せるんだー",
				"When I put on a costume, the feeling of being a school idol wells up inside of me and a different version of myself comes out!"
		]},{"name": "Marika", "texts": [
				"むしろスクールアイドルであることで、本当の自分に<br>気づけた一面もあるよね。あたし、こんなに<br>パフォーマンスすることが大好きなんだなーって♪",
				"I actually feel like I found my true self through being a school idol. I realized how much I love performing like this."
		]},{"name": "Rebecca", "texts": [
				"スクールアイドルを通じてそれぞれが個々を磨く。<br>桜梅桃李。みんな違ってみんないい！<br>これぞまさにZENの心ね！",
				"We've all learned different things through being school idols. Each of us is different, and each of us is great! That's what zen is all about!"
		]},{"name": "Ranpha", "texts": [
				"ワタシの国には、満漢全席って料理がアルネ！<br>いろいろな地方の食材がそれぞれの美味しさを発揮する<br>最高級の料理ネ！",
				"Where I'm from, there's a type of banquet called the Manchu-Han Imperial Feast. It's the best, 'cause various regions get to show off their unique dishes!"
		]},{"name": "Leo", "texts": [
				"レオはいつだってレオだ！",
				"I'm always me, no matter what!"
		]},{"name": "Christina", "texts": [
				"なりきって演じているうちに、それは自分の中で演技では<br>なくなり、自分自身に重なっていくと思うのです。<br>色々な物語を体験することで、自分を高めて行きましょう！",
				"When playing a role, at some point it stops being a performance and becomes part of me. By experiencing all sorts of stories, we can keep improving ourselves!"
		]},{"name": "Jennifer", "texts": [
				"まさにスクールアイドルも、その色々な体験のひとつよね！<br>こんな面白くて楽しい活動、他では経験できないもの",
				"And being a school idol is one of those experiences, too! You can't have such a fun and interesting experience anywhere else!"
		]},{"name": "Sayuri", "texts": [
				"そうそう、この夏のあっつーいステージだって<br>大切な経験の1ページなんだよ！",
				"That's right. This hot summer live show is another page in a wonderful story!"
		]},{"num": "ED", "texts": [
				"みなさん、自分のこの夏の物語を胸に、新しい物語を<br>つむいでいけそうですね。みんな一緒なら、きっと<br>この物語はハッピーエンドに変わるでしょう！",
				"It seems like everyone is ready to spin a new summer tale. So long as they stick together, this story is sure to have a happy ending!"
		]}
	]},
	{'titles': ['全ては私のために','For Our Own Good'],
	'num': 24,
	'sub': '開催：2022/09/30 - 2022/10/25',
	'opponent': [
		{"num": "OP", "texts": [
				"今月もやってまいりましたライブ♪アリーナ。<br>今回のお題は「ステップアップ」<br>みなさんのこれからの展望を語っていただきましょう",
				"We're back this month with a new Live Arena! This time it's all about progress. Let's hear what the girls have to say about their thoughts on the future!"
		]},{"name": "Himeno", "texts": [
				"秋ですね。秋といえば、スポーツの秋、読書の秋、芸術の秋！<br>なにか新しいことに挑戦してみたくなりますね！",
				"It's fall, huh? Fall's known as the best season for playing sports, reading books, and enjoying art! Makes you feel like trying something new, huh?"
		]},{"name": "Saki", "texts": [
				"新しいことに挑戦する。それこそ、今回のテーマの<br>「ステップアップ」につながるってことだよね！",
				"The idea of trying something new fits perfectly with the theme this time, which is progress!"
		]},{"name": "Misaki", "texts": [
				"私は、今までと違うジャンルの歌に挑戦してみようかしら。<br>イメージチェンジになるかもしれないし",
				"Personally, I'd like to challenge myself with a song genre that I'm not used to. People might even end up seeing me in a new light."
		]},{"name": "Kasane", "texts": [
				"考えただけで、ワクワクするよね！<br>今まで知らなかった世界がぶわーっと広がっていくの、<br>胸の高鳴りがとまらない感じだよ♪",
				"I get excited just thinking about a whole new world unfolding before me... My heart is racing and it won't stop!"
		]},{"name": "Aya", "texts": [
				"うう……。私は、新しいことって言われても<br>すぐには思いつかないから……。<br>今まで通り、毎日こつこつ練習していくことしか……",
				"Ugh... I can't think of anything new off the top of my head, you know... All I can do is keep practicing every day like I always do."
		]},{"name": "Mikoto", "texts": [
				"確かに、新しいことって簡単には思いつかないですよね。<br>今まで積み重ねてきたことを急にやめてしまうのも<br>なんだか嫌ですし",
				"You're right, it's not that easy to come up with something new, huh? And I'd hate to just give up on everything I've worked so hard to build up until now."
		]},{"name": "Mutsuki", "texts": [
				"吾輩の開発した「ステップアップマシーン」を使えば、<br>誰でも簡単にステップアップすることが可能だぞ。<br>このマシーン作るのにものすごく苦労したけどな",
				"Anyone can easily make progress just by using the Progress Machine that I've developed, y'know. It sure took a lot of hard work to build it, though."
		]},{"name": "Yuka", "texts": [
				"そのマシーンを開発すること自体が努力と工夫の<br>積み重ねっていうのがオチだねー！",
				"I guess all the effort and ingenuity you've accumulated in developing that machine was the payoff in and of itself!"
		]},{"name": "Tsurugi", "texts": [
				"今まで通りの練習をこつこつとやるのも、<br>ステップアップへの道になるんじゃないかな。<br>練習を続けることでわかってくることもあると思うんだ",
				"I feel like practicing diligently the way we always have is another way to make progress. I'd say there's still stuff I can teach myself if I keep on practicing."
		]},{"name": "Shun", "texts": [
				"それわかる〜！　ある日突然、「こういうことかー！」って<br>閃きのように気づくことがあるよね！<br>太郎と気持ちがつながる時はいつもそんな感じだなぁ",
				"Totally! Because one day, you'll suddenly have an epiphany and be like, \"This is it!\" That's how it is when I feel a connection with Taro."
		]},{"name": "Ranpha", "texts": [
				"ワタシの国には「雨垂れ石を穿つ」っていう言葉がアルヨ。<br>何事もこつこつと頑張れば、成果が得られるネ！",
				"We have this saying in my country... \"Constant dripping wears away a stone.\" If you work hard at everything you do, you will get results!"
		]},{"name": "Haruka", "texts": [
				"自分自身を高めるための努力はいつもしているつもりだけど<br>どうしても、他からどう見られているのか、<br>気になっちゃうなぁ……特にお姉ちゃんから！",
				"I always mean to work on improving myself, but I always end up worrying about how other people see me...specially my older sister."
		]},{"name": "Christina", "texts": [
				"私たちスクールアイドルは、応援されることで<br>力を発揮できると思うんです。ですから、どう見られているか<br>気にするのは問題ないんじゃないでしょうか",
				"I think we school idols can only achieve our full potential when we have people cheering us on, so I think it's perfectly fine to care about how others see us."
		]},{"name": "Isabella", "texts": [
				"しかし、人の評価ばかり気にしてしまうのは、<br>それはそれでよくない気がするのだが……",
				"But I do feel like it's not particularly good to be obsessed about other people's opinions either..."
		]},{"name": "Leo", "texts": [
				"レオ、応援されると、頑張る気持ちになれる！",
				"So we really should all look to ourselves and find the key to making progress on our own."
		]},{"name": "Akiru", "texts": [
				"やっぱり、自分自身を見つめて、自分の力で<br>ステップアップの鍵をつかんでいくべきなのよ",
				"But it is true that we can sometimes realize important things by listening to the words of our supporters. I am grateful for that."
		]},{"name": "Seira", "texts": [
				"でも、応援してへいる声の中に、大切なことを気づかせて<br>くれる言葉があったりもして。感謝してます♪",
				"I always feel like I can give it my all when I hear someone cheering me on!"
		]},{"name": "Yukari", "texts": [
				"応援されることで、前向きな気持ちになれることも、<br>さらなるステップアップにつながっていくんだって、<br>ゆかりも思ったのです！",
				"I also believe that getting cheered on and feeling positive leads to even more progress!"
		]},{"name": "Koyuki", "texts": [
				"周りのみんなはどんどん前に進んでいくから、どこかで<br>満足して立ち止まってしまったら、あとはどんどん<br>下がっていくことになってしまいそうで、怖いの",
				"Everyone around me is moving ahead so fast that I think if I get complacent and pause, I'll end up going backward from there, which scares me."
		]},{"name": "Ryo", "texts": [
				"籠の中で大人しくしているんじゃ、成長はできない。<br>鳥は大空に飛び立って、自由に羽ばたいていなくちゃね",
				"You can't grow up if you stay quietly in a cage. A bird must take flight to the skies and flap its wings freely."
		]},{"name": "Nanaka", "texts": [
				"でも、たまに、挑戦するのに<ruby>躊躇<rt>ちゅうちょ</rt></ruby>するっていうか、<br>こわいなって感じるときがあるよ。<br>今のままでもいいんじゃないかって思ったりもする",
				"But I do occasionally feel hesitant or scared to take on new challenges. Sometimes I find myself thinking that things can just stay the way they are."
		]},{"name": "Ru", "texts": [
				"周りのみんながためらうこともなくどんどん前に<br>進んでいくの、すごいなぁ……って思うことがある……",
				"There are times I can't help but think everyone around me is amazing for the way they charge ahead without any hesitation."
		]},{"name": "Christina", "texts": [
				"外からは思いつきや直感で行動してるように見えても<br>本人は、悩んだり、やり直したり、ちょっとずつ課題と<br>向き合って頑張っているのかもしれないよね",
				"From the outside, it may look like they're acting on a hunch or instinct, but they may be struggling and trying hard to face their challenges a little at a time."
		]},{"name": "Akira", "texts": [
				"自転車が両輪無いと走れないように、壁にぶつかりながら<br>困難を打ち破るのも、慎重に自分と向き合いながら<br>進んでいくのも、どちらも大切だね",
				"Just as a bike needs both wheels to move, we must be brave and face our obstacles head-on. Even if we hit a few things on the way, we must stay true to ourselves."
		]},{"name": "Marika", "texts": [
				"だから、どんなときでも、地道に努力する！<br>それまでの努力がベースにあってこそ、<br>新しいひらめきが活きてくると思うんだぁ♪",
				"So, no matter the situation, always strive to be steadfast! I believe that new inspiration will come from all the hard work of our previous efforts!"
		]},{"name": "Reine", "texts": [
				"もちろん努力を怠っちゃだめだと思うけど、<br>努力だけじゃだめな時もあるよね？",
				"I know we shouldn't slack off on putting in the work, of course, but aren't there times when effort alone isn't enough?"
		]},{"name": "Maria", "texts": [
				"運やタイミングを味方につけて、栄光の勝利を手にする！<br>ふふっ♪　勝利を掴むにはそういった要素もあると思うわ",
				"With a little luck and the right timing, I will achieve glorious victory! *Giggle* I think those things are part of what it means to be a winner, anyway."
		]},{"name": "Mizuki", "texts": [
				"そうそう、バスケの試合でも、負けてる時に、<br>難しい位置からのスリーポイントが決まって、<br>風向きが変わって大逆転！みたいなこともあるよね！",
				"Oh yeah, like in a basketball game when you're losing. A three-pointer from a difficult spot can turn the tide big time! Stuff like that."
		]},{"name": "Akemi", "texts": [
				"つまり、シャッターチャンスってことよ！<br>タイミングだって自力で捕まえるぞっていう<br>マインドが必要ってことかしら？",
				"Oh, like the decisive moment in photography! You also need to believe that you can find the right timing to snap the shot, right?"
		]},{"name": "Rika", "texts": [
				"そのタイミングを見極めるチカラは<br>普段から努力することで磨かれる。<br>全ての努力は自分に返ってくるんだな",
				"And the skill to recognize the right time to take a shot is honed through regular effort. All that effort really circles around back to you in the end."
		]},{"num": "ED", "texts": [
				"みなさん、ステップアップの準備は万端のようです。<br>さて、これからどんなステップアップをしてくれるのか、<br>今後の活躍から目が離せませんね！",
				"Looks like everyone is ready to move, full steam ahead. Now it's time to eagerly wait and see what kind of progress they will make in the future!"
		]}
	]},
	{'titles': ['お祭りバリエーション','Festivities All Around'],
	'num': 25,
	'sub': '開催：2022/10/31 - 2022/11/25',
	'opponent': [
		{"num": "OP", "texts": [
				"すっかり秋も深まりました。今回のライブ♪アリーナは<br>ずばり「お祭り」！　お祭りといってもいろいろありますが、<br>みなさんはどんなお祭りを見せてくれるのでしょうか？",
				"It's the peak of fall. The Live Arena this time is all about festivals! Festivals take all sorts of forms, but what kinds will the girls show us?"
		]},{"name": "Fuu", "texts": [
				"お祭りといえば、楽しいこと大好きな、この私。<br>みんなを楽しませるために、ひと肌ぬいじゃうよ！",
				"Festivals are all about doing fun things, if you ask me. I'll put the work in if it means everyone has a good time!"
		]},{"name": "Haruka", "texts": [
				"うちの学校の学園祭では、スクールアイドル部が<br>オープニングセレモニーを務めるんですよ",
				"Our school idol club will perform at the opening ceremony for our school's campus festival."
		]},{"name": "Ryo", "texts": [
				"それは楽しみだね。どこの学校も、それぞれの特色を<br>活かした素敵な学園祭を企画してるんだろうね",
				"That sounds like fun. I bet every school is working on a campus festival that highlights its unique characteristics."
		]},{"name": "Marika", "texts": [
				"おでんに焼きそば、たこ焼きなんかの屋台がならんで……<br>もー！　考えただけでおなかがぐーぐー鳴っちゃうよー！",
				"Food stands serving oden, yakisoba noodles, and takoyaki all lined up in a row... Mm-mmm! Just thinking about it makes my stomach growl!"
		]},{"name": "Mutsuki", "texts": [
				"吾輩が考案した肉体改造マシーンを出店する予定だ。<br>誰でもスタイル抜群のスーパーボディを手に入れられるぞ",
				"I plan to reveal my latest body-enhancing device. Everyone will be able to become as slim or swole as they desire."
		]},{"name": "Fumie", "texts": [
				"そ、その話、くわしく！<br>来年の夏に向けて、今から準備しておきたいですー！",
				"I-I wanna hear more about that! I need to start getting ready for summer now!"
		]},{"name": "Chiduko", "texts": [
				"この時期は、学園祭だけではなくいろんなお祭りが<br>開催されるから、いっぱい楽しめますわね",
				"At this time of year, many different festivals are going on in addition to the ones held by schools. There's a great deal of fun to be had."
		]},{"name": "Leo", "texts": [
				"ハロウィンもすごく楽しかった！<br>これからもっと楽しいお祭りがあるってことか？",
				"Halloween was totally awesome! You're telling me there're even cooler festivals coming up?"
		]},{"name": "Rika", "texts": [
				"もともと、この時期は収穫祭の季節で、<br>世界中でお祭りが行われてるんだ。<br>一年で一番楽しい時期だと言われている",
				"In olden times, this was the season when places all over the world celebrated the harvest. They say it was the most enjoyable time of the year."
		]},{"name": "Sakura", "texts": [
				"……ふと考えることがあるの。<br>楽しいって気持ちはどうやったら生まれるんだろうって",
				"A thought just crossed my mind. Where does the feeling of having fun come from?"
		]},{"name": "Sakuya", "texts": [
				"確かに、遊んでいるときに楽しいのはわかるけど、<br>それ以外にも楽しいって感じる瞬間はあるように思うわね",
				"Good question. I know that I have fun when I'm hanging out or playing, but I think there are other moments when I feel like I'm having a great time."
		]},{"name": "Tsurugi", "texts": [
				"本番のステージに向けての厳しい鍛錬であっても、<br>つらいよりも楽しいって感じたりもするな。<br>あれは不思議な感覚だよ",
				"Like when we're training hard for the next live show, it's still more enjoyable than it is painful. It's a very odd feeling."
		]},{"name": "Yuka", "texts": [
				"そうやって、楽しいって思ってるときって、<br>自分自身も調子がいいっていうか、ノッてるんだよね。<br>今までできなかったことができるようになったり、ね♪",
				"When you feel yourself enjoying moments like that, it's like you're hitting your stride in peak shape. You can suddenly do things you couldn't before!"
		]},{"name": "Akiru", "texts": [
				"「楽しい」って気持ちは、充実してるときに感じるみたいね",
				"So the sensation of having fun comes from moments when you feel fulfilled."
		]},{"name": "Ranpha", "texts": [
				"ワタシの国の偉い人が昔、「<span class=\"ul\">知好楽</span>」って言ったアルネ。<br>知るよりも好き、好きよりも楽しいって思うことが<br>習い事には効果的アルネ<br><div class=\"note\">※『論語』の一節、「子曰、知之者不如好之者、好之者不如楽之者」に由来する言葉。</div>",
				"A great philosopher from my country once said it's better to like something than just understand it, and better to enjoy it than to just like it."
		]},{"name": "Yukari", "texts": [
				"つまり、楽しんでさえいれば、なんでもうまくいっちゃう<br>ってことですか。なんだか簡単に思えてきました〜♪",
				"In other words, as long as you're having fun, everything will go smoothly? I think I get it now! That was a really nice and simple explanation."
		]},{"name": "Christina", "texts": [
				"楽しいから上達するのか、上達するから楽しいのか。<br>卵が先か鶏が先か問題とよく似た難問ですよね",
				"Do you improve because you enjoy doing something, or enjoy something because you improve at it? It's similar to asking which came first, the chicken or the egg."
		]},{"name": "Nanaka", "texts": [
				"なんでも楽しむってことに関しては、<br>私、自分のことを天才だと思ってるから！",
				"When it comes to finding the fun in anything and everything, I consider myself an elite genius!"
		]},{"name": "Kasane", "texts": [
				"お祭りの多いこの時期だからこそ、なんでも怖がらずに<br>チャレンジしてみる、楽しんでみるのがいいかもね",
				"With so many festivals going on at this time of year, it's the best time to take on new challenges and have fun without worrying about failure."
		]},{"name": "Yumi", "texts": [
				"世の中には、面白くてかわったお祭りがいっぱいあるからね。<br>この機会に、いろんなお祭りを体験してみたいわね",
				"There are so many fascinating festivals that take place across the world. I'd love to get the opportunity to experience all different kinds of festivals!"
		]},{"name": "Rakshata", "texts": [
				"インドには、色の付いた粉をかけ合うお祭りがあるんです！<br>ハッピーホーリー！って言いながら<br>みんなでハグするんですよ☆",
				"In India, we have a festival where we throw colored powder at each other. We say \"Happy Holi!\" while we throw it and we all hug afterward!"
		]},{"name": "Chiduko", "texts": [
				"なんて素敵なお祭りなんでしょう！<br>ハグは万国共通の愛情表現ですわね！",
				"That sounds like such a wonderful event. Hugs are a universal sign of affection!"
		]},{"name": "Akemi", "texts": [
				"日本だってお祭りのバリエーションはすごいわよ。<br>南の方に行くと、<span class=\"ul\">身体を泥まみれにするお祭り</span>とか<br>あるらしいのよ。ぜひ写真に収めたいわ！<br><div class=\"note\">※「パーントゥ」という伝統行事。沖縄県の宮古島で行われている。</div>",
				"Japan has such an amazing variety of festivals. Apparently, there's one in the south where you get covered in mud. I'd love to take some pictures of that one!"
		]},{"name": "Rebecca", "texts": [
				"日本では八百万の神様といって、すべてのものに<br>神様が宿るって言われているのよね。<br>だから、その神様の数だけお祭りがあるのね",
				"They call Japan the land of eight million gods. It's a way of saying the gods dwell in everything all around us. That's why there are so many festivals."
		]},{"name": "Sachiko", "texts": [
				"天高く飛翔する竜たちの宴(ドラゴンズダンスフェスタ)<br>……<span class=\"ul\">ロケットを打ち上げるお祭り</span>があるらしい。<br>他にも<span class=\"ul\">おしゃもじ持って踊るお祭り</span>とか興味がある<br><div class=\"note\">※ロケットを打ち上げる祭りは「秩父吉田の龍勢」（埼玉県）、<br>しゃもじを持って踊る祭りは「博多どんたく」（福岡県）を指していると思われる。</div>",
				"There's a festival called the Dragon Dance Festival where they launch rockets into the sky, then there's a festival where people dance with wooden rice scoops..."
		]},{"name": "Aya", "texts": [
				"<span class=\"ul\">みんなでひたすら笑い続けるお祭り</span>なんてのも<br>あるみたいです。すっごく楽しそうですよね<br><div class=\"note\">※「笑い講」（山口県）のことだろうか。</div>",
				"Seems like a festival where everyone is all smiles from beginning to end. It must be so much fun!"
		]},{"name": "Saki", "texts": [
				"心がどんなにつらくても、顔を笑顔にするだけで<br>いつの間にか心まで笑顔になっていくっていうからね。<br>笑顔はスクールアイドルの命だし、大切だよ",
				"When the going gets tough, you just have to keep smiling. Before you know it, your heart will be smiling too! Smiles are the bedrock of what makes a school idol."
		]},{"name": "Iruka", "texts": [
				"笑う門には福来たる、ってことだね。<br>笑顔を絶やさなければ、なんでも楽しくできる！",
				"They say good fortune comes to those who keep smiling. As long as you keep your frowns turned upside-down, you can enjoy whatever comes your way!"
		]},{"name": "Fumi", "texts": [
				"よーし、そうと決まれば、今回のステージも、<br>ギョロちゃんと一緒に、<br>いっぱい笑顔をふりまいちゃうんだから！",
				"All right! If that's the case, Gyoro and I are gonna spread smiles and cheer all over the place!"
		]},{"name": "Mizuki", "texts": [
				"みんながそれぞれの最高の笑顔を見せてくれたら、<br>個性的でハンパないお祭りがいっぱい楽しめるね！",
				"As long as everyone puts on their biggest and brightest smile, we'll all be able to have tons of festival fun!"
		]},{"num": "ED", "texts": [
				"みなさん、笑顔でこのお祭りステージを楽しむことに<br>決めたようです。彼女たちの弾ける笑顔を<br>ぜひ、お楽しみください！",
				"Well, it seems everyone's decided to take to the festival stage with smiles on their faces. We hope you look forward to seeing those ear-to-ear grins!"
		]}
	]},
	{'titles': ['夢と夢のおはなし','Let\'s Talk about Our Dreams'],
	'num': 26,
	'sub': '開催：2022/11/30 - 2022/12/25',
	'opponent': [
		{"num": "OP", "texts": [
				"今回のライブ♪アリーナのテーマは「夢」<br>みなさん、いろんな夢物語を語ってくださいませ〜！",
				"The theme of today's live show is \"Dreams\". Please tell us all about your dreams!"
		]},{"name": "Kasane", "texts": [
				"「夢」かぁ。子供のころは大きくなったらこんな職業に<br>就きたいとか、そんな夢をいっぱい持ってたなぁ",
				"Well, when I was a child, I had a lot of dreams about what I wanted to be when I grew up."
		]},{"name": "Aya", "texts": [
				"定番の夢だと、看護師さんとか、キャビンアテンダントさん<br>とか、あとは学校の先生っていうのもありますよね",
				"Many children have dreams of becoming a nurse, cabin attendant, or schoolteacher, don't they?"
		]},{"name": "Jennifer", "texts": [
				"職業じゃないけど、私は昔からずーっとスクール<br>アイドルになりたかったよ。今、夢がかなって、<br>まさに夢のような毎日なんだ",
				"It's not a profession, but I always wanted to become a school idol. Now that my dream has come true, it's like I'm living a dream every day!"
		]},{"name": "Tsurugi", "texts": [
				"私は、剣術大会で優勝するのが夢、かな。<br>まだまだ強い人には敵わないけど、<br>いつかきっと叶えてみせる！",
				"I guess my dream is to win a fencing tournament. I've still got a long way to go, but I'll make it happen someday!"
		]},{"name": "Shun", "texts": [
				"私は、太郎と一緒に世界的な乗馬大会で優勝するのが夢<br>……というか、大きな目標だよ",
				"My dream is to win a world-class riding competition with Taro... Or, rather, it's my goal!"
		]},{"name": "Koyuki", "texts": [
				"みんなすごい。私は、ケーキ屋さんになるのが夢だったな。<br>美味しいケーキでみんなを笑顔にするのにあこがれてたの……",
				"Everyone is so amazing. I always dreamed of being a cake baker. I wanted to bring smiles to people's faces with my delicious cakes..."
		]},{"name": "Ryo", "texts": [
				"子供のころの夢って、他愛もないものが多いけど、<br>それぞれの個性はそのころから育まれてきてるよね",
				"Many of the dreams we have as children are silly, but they demonstrate the unique qualities we've had since that time."
		]},{"name": "Haruka", "texts": [
				"うちのお姉ちゃんは、夢を見るのがとっても得意だよ。<br>……眠ってるときに見る夢だけどね、あはは……",
				"My sister has lots of great dreams... I mean the ones she sees when she's asleep, ahaha."
		]},{"name": "Marika", "texts": [
				"むしろ、本来の夢ってそっちの意味で使うのが正しいよね。<br>どちらも同じ「夢」ってことは、<br>何か通じるものがあるのかな？",
				"The word \"dream\" may have originally referred to those kinds of dreams. I wonder if the two different kinds of dreams have something in common?"
		]},{"name": "Reine", "texts": [
				"ねえ、ねえ、みんなは最近、どんな夢を見た？<br>私、いつもぐっすり眠っちゃうから、朝起きたときに<br>どんな夢を見たのか、全然覚えてないんだよね",
				"Hey, what did everyone dream about lately? I always sleep so deeply that I don't remember what I dreamed about when I wake up in the morning."
		]},{"name": "Mutsuki", "texts": [
				"吾輩は、夢で見たアイディアを枕元のメモに書き留めてる。<br>かのノーベル賞科学者もそうやっているらしいのだ",
				"I write down ideas I see in my dreams in a notebook by my bedside. I hear some Nobel Prize winning scientists do that too!"
		]},{"name": "Yukari", "texts": [
				"私はよく、空を飛び回る夢を見ます。<br>お菓子の街を見下ろしながら、ふわふわーって",
				"I often dream of flying through the sky and looking down on a town made of candy."
		]},{"name": "Yumi", "texts": [
				"お菓子の街とは、メルヘンな夢ね。<br>空を飛ぶ夢は、向上心の現れって言われてるそうよ",
				"A candy town is something out of a fairy tale. I have heard that dreaming of flying is a sign of ambition, though."
		]},{"name": "Rika", "texts": [
				"夢占いでは……空を飛ぶ夢は吉夢だそうだ。<br>逆に、なにかに落ちる夢は良くないとされている。<br>疲れてると落ちる夢をよく見るから、そういうのもあるかもな",
				"Dream interpretation suggests dreams of flying are a good sign, whereas falling is bad. I often dream of falling when I'm tired, so maybe that's part of it."
		]},{"name": "Nanaka", "texts": [
				"いい夢って言えば、一富士二鷹三ナスビ！<br>でも、富士山と鷹はなんとなくわかるんだけど、ナスビは<br>どうしていい夢なんだろう？",
				"I've heard dreams about Mt. Fuji are the best, then hawks, and then eggplants! I can sort of understand the first two, but why is dreaming about eggplants good?"
		]},{"name": "Mikoto", "texts": [
				"ナスビは、ふっくらとしていて、お金がいっぱい入った<br>巾着袋を連想するのだそうです！<br>だから金運がよくなる食べ物とされているのでしょうか……？",
				"They say it's because eggplants are plump like a sack full of money! Maybe that's why they're thought of as a food that brings great riches?"
		]},{"name": "Fumi", "texts": [
				"へぇ。じゃあ、ナスビをいっぱい食べると、<br>お金持ちになれちゃうのかな〜？<br>あんまり得意じゃないけど、頑張って食べよ〜っと！",
				"So if I eat a lot of eggplant, I'll be rich? I can't say I enjoy the taste, but I'll try my best!"
		]},{"name": "Ranpha", "texts": [
				"食べる、といえば、麺類を食べる夢を見ると、<br>良縁に恵まれるらしいアル。麺類には、つなぎが<br>入っているから、人と人もつなぐってことアルネ！",
				"Speaking of food, it's said that if you dream of eating noodles, you'll be blessed with a good marriage. Long noodles are symbols of connections between people!"
		]},{"name": "Yuka", "texts": [
				"その話、聞いたことがある！<br>さらに、スープが入っていると、金運もアップするんだよね！",
				"I've heard that before! Plus, if you add them to soup, you'll be rich as well!"
		]},{"name": "Mizuki", "texts": [
				"つまり、ラーメンは<span class=\"ul\">完全食</span>！！<div class=\"note\">「完全食」とは、ヒトが健康を維持するために必要な栄養素がすべて含まれた食べ物のこと。<br>ここでは原義から転じて、「あらゆる良いことが含まれる」程度の意味。</div>",
				"In other words, ramen is a complete meal!"
		]},{"name": "Hitomi", "texts": [
				"私、昨夜、ラーメン屋をハシゴする夢を見たぞ！<br>食い意地が張ってるだけかと思ったら、いい夢だったんだな",
				"I had a dream last night about trying out different ramen shops! I thought I was just being a total pig, but I guess it was a good sign."
		]},{"name": "Seira", "texts": [
				"あっ！　夢占いによると、吉夢は人に話さないほうが<br>いいらしいですよ。「話す」が「離す」に通じて、<br>運気が離れていっちゃうんですって",
				"Ah! Dream interpretation suggests it is better not to tell people about your good dreams. Talking about them is said to prevent them from coming true."
		]},{"name": "Sachiko", "texts": [
				"なに！？　じゃあ今のは聞かなかったことに<br>しなければいけないじゃないか！<br>アー、アー、何も聞こえな〜い！",
				"Really? Then I guess we'll have to pretend we didn't hear anything! Lalala, I wasn't listening!"
		]},{"name": "Iruka", "texts": [
				"でも、夢って見るまで内容がわからないじゃない？<br>いい夢だったらいいけど、悪い夢はあんまり見たくないなぁ",
				"But you don't know what a dream will be about until you have it, right? It's nice dreaming if it's about something good, but I don't like having nightmares."
		]},{"name": "Rakshata", "texts": [
				"明晰夢といって、夢の内容をコントロールできる夢が<br>あるみたいです……。自分が夢を見ているのを自覚して、<br>自分の思い通りの夢を見ることができるって……☆",
				"There is thought to be such a thing as lucid dreaming. The idea is that if you're aware that you're dreaming, you can control what happens in your dream."
		]},{"name": "Fumie", "texts": [
				"明晰夢、最高！　自分の見たい夢を見ることができるなんて。<br>自分のしたいようにできてわがまま放題。夢のようだ！<br>……夢だけに",
				"That sounds awesome! I'd love to be able to decide what I dream about! I can be selfish and do whatever I want! ...Only in dream, that is."
		]},{"name": "Coco", "texts": [
				"私、現実でも、自分の夢のためにわがまま放題してるかも<br>しれません。スクールアイドルであるために、いろんな人に<br>協力してもらったり……",
				"When it comes to my dreams, I might be selfish in the real world, too. I've had so many people help me in order to become a school idol..."
		]},{"name": "Isabella", "texts": [
				"それだから、どちらも、「夢」なんじゃないか。<br>自分のやりたいことをわがままに貫き通す。<br>それが夢の本質なのかもしれない",
				"Maybe that's why we call both things dreams. The essence of a dream might be selfishly doing whatever it is you want to do."
		]},{"name": "Akira", "texts": [
				"それにスクールアイドルは、自分の夢を追いかけると同時に、<br>いろんな人に新しい夢や希望を与えていると思うんだよね。<br>だから、わがままでも問題ないんじゃないかな",
				"I think school idols give everyone new dreams and hopes at the same time as they pursue their own dreams, so I don't see any problem with being selfish."
		]},{"name": "Saki", "texts": [
				"夢は叶えてこそ意味があるよ。自分の夢も、みんなの夢も、<br>ぜ〜んぶまとめて叶えてしまえばみんな幸せになれるよー！",
				"Dreams only have meaning when they come true. If you make your dreams and everyone else's dreams all come true together, everyone will be happy!"
		]},{"num": "ED", "texts": [
				"みなさん、それぞれの夢をふくらませているようです。<br>その夢がいつか叶う日まで、ずっと輝き続けてくださいね！",
				"Everyone seems to be nurturing their own dreams. Keep on shining until your dreams come true someday!"
		]}
	]},
	{'titles': ['世界の中心は私','From Myself to the World'],
	'num': 27,
	'sub': '開催：2022/12/31 - 2022/01/25',
	'opponent': [
		{"num": "OP", "texts": [
				"あけましておめでとうございます！<br>新年最初のライブ♪アリーナは、今年の抱負をテーマに<br>みなさんに語っていただこうと思います！",
				"Happy New Year! For our first Live Arena of the year, let's have everyone share their New Year's resolutions!"
		]},{"name": "Christina", "texts": [
				"あけましておめでとうございます。<br>今年も、スクールアイドルとして、みんなにいっぱい笑顔に<br>なってもらえるよう、頑張りたいと思います",
				"Happy New Year. I want to do my best again this year as a school idol and put big smiles on all your faces."
		]},{"name": "Fumi", "texts": [
				"あけましておめでとうございます〜！<br>今年もギョロちゃん共々、よろしくお願いします！<br>って、毎年同じこと言ってる気がする……",
				"Happy New Year! Please keep on supporting Gyoro and me! ...You know, I feel like I say the same thing every year."
		]},{"name": "Shun", "texts": [
				"毎年でも同じことを言い続けるよ。<br>今年も、太郎と一緒に全速力で駆け抜けるんだ！",
				"I'll keep repeating the same thing every year. Once again, Taro and I will gallop as fast as we can!"
		]},{"name": "Yuka", "texts": [
				"今年だけじゃなく、来年も再来年も、<br>末永く私達のことを応援してほしいよね。<br>スクールアイドルは永遠に不滅だよ！　……なーんて",
				"I hope you'll support us not only this year, but next year, the year after that, and on and on forever. School idols live on eternally! ...Haha, just kidding."
		]},{"name": "Mizuki", "texts": [
				"みんなの応援は、あたし達の元気の源だからね。<br>今年も、いっぱいみんなに元気を振りまくぞー！",
				"Your support is a source of energy for us all. This year, I'll give you lots of energy right back!"
		]},{"name": "Mutsuki", "texts": [
				"カッカッカッ！　今年こそは、スクールアイドルの何たるかを<br>解明してみせるのだ。そして、新たなる発明をするのだ！<br>……吾輩の作ったせんべい、食べるか？",
				"*Cackle* This year, I'll finally show the world what makes a school idol and design a new invention! ...Want one of these rice crackers I made?"
		]},{"name": "Ranpha", "texts": [
				"新年好！　ワタシの国では春節といって、お正月はみんなで<br>大騒ぎして過ごすネ。今年の春節は1月22日。<br>新しい年の訪れを賑やかに迎えるアル！",
				"Happy New Year! In my country, Lunar New Year is an exciting time. This year's Lunar New Year is on the 22nd of January. Let's ring in the new year in style!"
		]},{"name": "Christina", "texts": [
				"1月1日を正月と決めたのは私の国です。<br>私の地元でも、お正月はみんなで大騒ぎします。<br><span class=\"ul\">みんなでお皿を地面に叩きつけて割る風習があるんですよ</span><div class=\"note\">イタリアに存在する風習。<br>厄払いや心機一転といった名目で、年が明けた瞬間に古いものを窓から投げ捨てる。</div>",
				"My country decided that New Year's begins on January 1st. We have a big celebration in my hometown too. It's customary for everyone to smash plates on the floor."
		]},{"name": "Isabella", "texts": [
				"私の国では、お正月は家族でパーティをするんだ。<br>そして、<span class=\"ul\">12時の鐘の音をみんなで聞く。</span><br>家族の絆がとても深まる行事なんだ<div class=\"note\">スペインに存在する風習。<br>12回の鐘に合わせて、1粒ずつぶどうを食べる。</div>",
				"Where I'm from, we party with our families on New Year's. Then, at midnight, we all listen to bells chiming. It really brings the family closer together."
		]},{"name": "Himeno", "texts": [
				"お正月はいろんな方がご挨拶にいらして大変でした。<br>それでも、「一年の計は元旦にあり」と言いますから、<br>やはり年始のご挨拶は大切ですね",
				"I had a hard time keeping up with all the New Year's greetings. But they say to start as you mean to go on New Year's Day, so those greetings are important."
		]},{"name": "Coco", "texts": [
				"やっぱり冬休みはのんびり過ごしちゃいました。<br>初売りでいろんな福袋いっぱい買っちゃったり……<br>チョコレートの福袋なんかもあったんですよ〜",
				"I ended up lazing away the winter break after all. I bought so many grab bags during the New Year's sales... I even got some chocolate grab bags!"
		]},{"name": "Tsurugi", "texts": [
				"お正月は、実家の神社の手伝いで大変だったよ。<br>大変だけど、身が引き締まって気分が良いから<br>嫌いじゃないんだよね",
				"I was quite busy helping out at my family's shrine over New Year's. All that serious work felt good, though, so I didn't mind it."
		]},{"name": "Rebecca", "texts": [
				"初詣で人がいっぱいだからお手伝いも大変そうね。<br>私はいろんな神社をめぐる「七福神めぐり」をやってみたわ。<br>弁才天では他の神様より時間かけてお参りしちゃった",
				"With lots of folks making New Year's shrine visits, helping out must be tough. I did the Seven Lucky Gods Tour, spending the most time with the goddess Benzaiten."
		]},{"name": "Mikoto", "texts": [
				"弁才天は芸事の神様だから、スクールアイドルの私たちには<br>お願いしたいことがいっぱいありますよね",
				"Since Benzaiten is the goddess of performing arts, school idols like us have a lot of things to ask of her, don't we?"
		]},{"name": "Nanaka", "texts": [
				"そうだよ、お願いしたいことだよ。みんな、挨拶とお正月の<br>話ばかりで、今年の抱負を語ってなくなくなくない？<br>私はねえ……ワンマンライブ開催したいっ！",
				"That's right. I do too. But hey, you're all talking about your New Year's happenings and not about your resolutions! As for me...I want to put on a solo show!"
		]},{"name": "Kasane", "texts": [
				"そうだな〜　私もライブはいっぱいやりたいな！<br>目指せ、ライブ♪アリーナ毎月出演！",
				"What do I want... I want to do lots of live shows too! I want to be in the Live Arena every month. That's my goal!"
		]},{"name": "Fuu", "texts": [
				"願い事は、毎年、家族の健康とか、少しで良いから成績が<br>あがりますようにってお願いしてるけど、<br>やっぱり願うだけじゃ成績はよくならないね〜",
				"Every year, I wish for my family to be healthy and for my grades to improve a little. Just wishing won't improve my grades, though, will it?"
		]},{"name": "Marika", "texts": [
				"あたしは、自分が充実した1年を過ごせますようにって<br>お願いしちゃった！<br>他の人のお願いなんて、結局はわからないしねぇ",
				"My wish was to spend the year in a fulfilling way! I just don't get the point of making wishes for other people."
		]},{"name": "Saki", "texts": [
				"でもさ、スクールアイドルとしては<br>みんなの幸せを願いたいよねっ！<br>みんなを応援してこそのスクールアイドルかなって",
				"But as school idols, we wish for everyone's happiness, right? The whole point of being a school idol is to give everyone out there support."
		]},{"name": "Akiru", "texts": [
				"どちらも一理ある言い分ね。<br>自分の願いとみんなの願い、どちらを願うべきなのかしら……",
				"I can see where you're both coming from. I wonder who I should wish for, myself or others."
		]},{"name": "Minami", "texts": [
				"みんなが幸せになることが、私の願い♪<br>だから、みんなの願いが叶えば、<br>私の願いが叶うってことになるのよね〜",
				"My wish is for everyone to be happy! So if all of your wishes come true, that means my wish will come true too!"
		]},{"name": "Akira", "texts": [
				"なるほど。スクールアイドルは<br>みんなを幸せにする存在だもんな！<br>みんなの幸せを願う……なんだかちょっと照れるな",
				"I see. So the purpose of school idols is to make everyone happy! Wishing for everyone's happiness...makes me feel a little shy, I think."
		]},{"name": "Aya", "texts": [
				"でも、そうやってみんながみんなの幸せを願っちゃったら<br>「どんなお願い事したの？」とか「今年の抱負は？」とか<br>みんな答えが同じでちょっとつまらないかもしれません……",
				"But if everyone's wishing for each other's happiness, the answers to \"What did you wish for?\" and \"What are your resolutions for this year?\" are kind of boring..."
		]},{"name": "Hitomi", "texts": [
				"個人的な願い事、例えば、歌がうまくなりたい、とか、<br>大会で優勝したい、とか、そういうのも願い事として<br>全然構わないと思うな。むしろいいんじゃないか？",
				"I don't mind if people make a personal wish, like wanting to get better at singing or to win a contest. Maybe that's better, you know?"
		]},{"name": "Fumie", "texts": [
				"私は、自分の大好きなアニメをみんなに布教したい。<br>作品を見て感動したこの気持ちをわかってほしい。<br>みんなと共有したいって思いますな〜",
				"I want to get everyone into my favorite anime. I want them all to understand why it makes me so emotional, and I want to share it with everyone."
		]},{"name": "Yukari", "texts": [
				"それもいいですね！<br>この世界には、まだまだ眩しくて愛おしいものが<br>い〜っぱい存在するんだってことを知りたいです！",
				"That's a good one! I want to learn about all the dazzling, wonderful things in the world that are still out there to be discovered!"
		]},{"name": "Saki", "texts": [
				"それぞれが、自分の願いを叶えるべくがんばる。<br>そしたら、みんな願いを叶えられてハッピーになれる。<br>それって、素敵なことかもしれないね！",
				"Let's all do our best to make our wishes come true. That way we'll all be happy. Wouldn't that be wonderful?"
		]},{"name": "Akiru", "texts": [
				"私達はそれぞれ無限大の可能性を持ってるからね。<br>みんながその可能性を追求すれば、なんだって可能にできる。<br>……そんな気がするわね",
				"We all have such limitless potential. Keep trying to fulfill that potential, and we can do anything! ...That's what I think, anyway."
		]},{"name": "Akemi", "texts": [
				"自分の一番やりたいこと、大好きなことを極める。<br>そしてそれを精一杯アピールする。<br>結果としてそれが一番みんなの心に響くのね！",
				"I want to set my mind on the things I really love and want to do, and I want everyone to know about them. That's what will resonate with them the most!"
		]},{"name": "Jennifer", "texts": [
				"みんな、それぞれ個性があって、みんないいのよ。<br>だから、その個性を伸ばしていって<br>みんなで最高のスクールアイドルになりましょ！",
				"I love how unique we all are. Let's all keep cultivating that special spark and become the greatest school idols ever!"
		]},{"num": "ED", "texts": [
				"あれあれ、今年の抱負を語っていただくはずが、<br>なんだか壮大なお話に……。でも、みなさん、今年も<br>パワー全開で頑張るみたいなので、応援していきましょう！",
				"Goodness! This was supposed to be about resolutions, but everyone made such grand statements... They're ready to do their best, so let's give them our support!"
		]}
	]},
	{'titles': ['贈り愛・恩返し','Giving and Receiving Love'],
	'num': 28,
	'sub': '開催：2023/02/30 - 2023/02/25',
	'opponent': [
		{"num": "OP", "texts": [
				"2月といえばバレンタイン。スクールアイドルの皆さんは<br>今年はどんなバレンタインを過ごされるのでしょうか？",
				"Nothing says February like Valentine's Day. How will this year's Valentine's Day will pan out for the girls?"
		]},{"name": "Aya", "texts": [
				"バレンタインかぁ……<br>今年はどんなチョコレートを配ろうかな。<br>毎年悩んじゃうんですよね……",
				"It's Valentine's, huh? Every year, I always worry about what kind of chocolates should buy..."
		]},{"name": "Rebecca", "texts": [
				"でも、チョコレートを渡すとみんな笑顔になってくれるから、<br>私は大好きなイベントよ",
				"But still, I love Valentine's. You get to put smiles on everyone's faces by giving them chocolates, after all."
		]},{"name": "Sayuri", "texts": [
				"私も楽しみにしてるイベントなんだけど、あの戦場で<br>お目当てのチョコをゲットするのは、結構大変なのである！",
				"It's an event I also look forward to, but trying to get the chocolates you want most is like being on a battlefield!"
		]},{"name": "Himeno", "texts": [
				"そうそう。でも、普段は手に入らない海外の有名パティシエが<br>作ったチョコが買えるチャンスだったりしますから、<br>どうしてもがんばっちゃいますよね♪",
				"True. But Valentine's gives me the opportunity to buy chocolates from famous oversea patissiers I wouldn't normally be able to buy from, so I can put with it."
		]},{"name": "Nanaka", "texts": [
				"この間並んで買ったスイス製のチョコレート。<br>ひとつひとつ全部味が違って、全部ほっぺたがとろけるかと<br>思うほど美味しかったよ！",
				"The other day, I bought some Swiss chocolates. Each one had a different flavor, and they were all so delicious, I thought my cheeks would melt off!"
		]},{"name": "Seira", "texts": [
				"ああ、プレゼントするからには自分でも食べてみるって<br>言ってたよね。でも、食べ過ぎには注意してね",
				"Yes. You did say you try the chocolates you buy as presents to make sure they're good, right? But be careful not to eat too many."
		]},{"name": "Coco", "texts": [
				"私は、毎年チョコは手作りのを配ってるんです♪<br>ひとつひとつのチョコに気持ちを込めたら、<br>少しでも温もりを伝えられると思って",
				"Every year, I make chocolates by hand. I feel that if I put my feelings into every one I make, I can convey my warmth, even if it's only a little bit."
		]},{"name": "Isabella", "texts": [
				"手作りもいいな。有名パティシエの味には敵わなくても、<br>やはり手間をかけて作ってくれたチョコを貰うのは<br>嬉しいものだ",
				"I love hand-made chocolates too. Even if they're no match to ones made by patissiers, knowing that the giver made the effort to make them for me makes me happy."
		]},{"name": "Mutsuki", "texts": [
				"カッカッカ！　今年のチョコせんべいは一味ちがうぞ。<br>構想1年、制作3ヶ月。今こそ、皆に振る舞おう！<br>名付けて、「せんべいチョコ」！　どうじゃー！！",
				"*Cackle* Taking one year to conceptualize and three months to produce, I present to you my rice cracker chocolates! There's nothing quite like them!"
		]},{"name": "Koyuki", "texts": [
				"小雪は毎年、涼ちゃんに手作りチョコをプレゼントしてる。<br>去年は甘さを抑えた生チョコをあげたから、<br>今年は、デコレーションに挑戦するの",
				"I make chocolates for Ryo every year. Last year, I gave her chocolates with less sugar, so this year, I'll challenge myself to make decorative chocolates."
		]},{"name": "Ayumi", "texts": [
				"私も手作り派。<br>昔は溶かして型にいれるだけだったんだけど、<br>最近はカカオ豆を買ってきてチョコから作ってるわ。<br>意外と簡単にきれいで美味しいチョコが作れるのよ",
				"I make them by hand, too. Long ago, I'd just melt some chocolate then form it, but lately, I buy cocoa beans to make exceptionally yummy and pretty chocolate."
		]},{"name": "Saki", "texts": [
				"手作りグッズがお店に並ぶから、見てるだけでも楽しいよ<br>ラッピング用品も可愛いのがいっぱいあるから、<br>まとめ買いしていろんなことに使ってるんだ",
				"Even just looking at the hand-made goods in store is fun. There's so many cute wrapping products, so I buy them in bulk and use them for all sort of things."
		]},{"name": "Kasane", "texts": [
				"このシーズンは、売り場自体がすごく華やかになるから、<br>色づかいとか、衣装やアクセサリーの参考になるよね",
				"The store counters become so vibrant during Valentine's. It helps me come up with ideas for color usage, clothes, and accessories."
		]},{"name": "Ryo", "texts": [
				"手作りでも、市販品でも、手間と時間をかけて美味しい<br>ものをおくりたいっていう心がこめられているから、<br>どちらも嬉しい気持ちに包まれるよ",
				"Whether it's hand-made or bought from a store, knowing that someone put in the time and effort to give you something delicious warms my heart."
		]},{"name": "Yuri", "texts": [
				"そうだな、贈る人の「愛」を感じられるのが、<br>バレンタインのチョコレートの素敵なところだと思う<br>……柄じゃないって？　う、うるさいな！",
				"You're right. I think it's wonderful how you can feel the love of the person giving you a Valentine chocolate. ...What do mean talking about such stuff doesn't suit me!?"
		]},{"name": "Jennifer", "texts": [
				"私の国では、バレンタインにはチョコに添えてバラの花束を<br>贈るのよ。恋人だけじゃなくて、親しい愛する人達全員に<br>プレゼントして、みんなでハッピーになるのよ",
				"Where I'm from, the chocolate comes with a bouquet of roses. You don't just give them to lovers either, you give them to friends too, making everyone happy."
		]},{"name": "Reine", "texts": [
				"みんなでハッピーになるなんて、すっごく素敵〜！<br>まるでスクールアイドルそのものだねっ♪",
				"What a lovely sentiment that is! You truly are a school idol."
		]},{"name": "Rakshata", "texts": [
				"インドでは、2月14日だけじゃなくて、1週間前から<br>お祭り騒ぎをして楽しみます。お祭り好きの国民なのです",
				"In India, Valentine's isn't only confined to February 14th. A week before, we have a big festival anticipating it. We love our festivals in India."
		]},{"name": "Akemi", "texts": [
				"1週間もバレンタインだったら、もうチョコレート食べ過ぎで<br>鼻血がとまらなくなっちゃうかも……",
				"If I did a whole week of Valentine's, I'd probably get a nosebleed from eating way too much chocolate..."
		]},{"name": "Yumi", "texts": [
				"あら、チョコレートを食べ過ぎると鼻血が出るっていうのは<br>医学的には証明されていないそうよ。だから、<br>思う存分楽しみなさい。でも、食べ過ぎには注意ね",
				"Hey now, there's no medical proof that eating too much chocolate will give you a nosebleed. So eat as much as chocolate you like, but not too much, okay?"
		]},{"name": "Ru", "texts": [
				"バレンタインって、もちろんイベントとしても楽しいけど、<br>自分を支えてくれている人がたくさんいるってことを<br>再確認できるし、ありがたいイベントですね",
				"Valentine's is a fun event, but I'm grateful to it because it allows me to reconfirm that there are a lot of people out there supporting me."
		]},{"name": "Christina", "texts": [
				"自分ひとりでは、何もできない。<br>いつだって、誰だって、誰かの支えになって<br>持ちつ持たれつで毎日を過ごしているのだと思います",
				"I can't do anything on my own. I think that every day, I'm always being supported by someone and supporting them back."
		]},{"name": "Sakura", "texts": [
				"仲間やクラスメイト、家族……毎日たくさんの人に支えられて<br>楽しく過ごしていけてるんだと思う……。<br>私も誰かの支えになれてるのかな",
				"Whether it's by friends, classmates, or family, I'm being supported by tons of people every day. I wonder if I'll ever be able to support someone."
		]},{"name": "Sakuya", "texts": [
				"大丈夫、咲良は十分私の支えになってくれてるわ。<br>私がスクールアイドルとして頑張っていられるのも<br>咲良のおかげよ。ありがとう",
				"Don't worry. You're supporting me just fine. I'm able to work hard as a school idol thanks to your support. Thank you."
		]},{"name": "Shun", "texts": [
				"私の支えは、太郎だな。<br>挫けそうになったときには、太郎に乗って風になる。<br>そうして、いつも太郎に勇気づけられてるんだ",
				"I guess consider Taro to be my crutch supporting me. Whenever I feel down, I ride him and feel like the wind. He's always giving me courage."
		]},{"name": "Minami", "texts": [
				"泣きたいときは思いっきり泣けばいいと思うの。<br>いつの日か、その日のことを思い出して、<br>そうしたら、誰かに優しくなれると思うから",
				"Whenever you feel like crying, I think it's best to cry as much as you want. Then, when you think back to that time someday, you'll be able to be nice to someone."
		]},{"name": "Fumi", "texts": [
				"私もギョロちゃんに支えてもらってます。<br>だから、バレンタインにはギョロちゃんに<br>愛のこもったイチゴをプレゼントしますね！",
				"I receive support from Gyoro. That's why, for Valentine's, my present is going to be strawberries filled with my love!"
		]},{"name": "Haruka", "texts": [
				"私も、毎年お姉ちゃんが愛情たっぷりのチョコケーキを<br>作ってくれるんだけど、毎回ほっぺたがとろけそうに<br>なるほど美味しいの。いつもありがとう、お姉ちゃん",
				"I'm always thankful to my sister who makes me a chocolate cake filled with love every Valentine's. Every single time, it's so tasty, it makes my cheeks melt."
		]},{"name": "Chiduko", "texts": [
				"やはり世界を正しく導くのは愛ですのね！　包み込む愛、<br>見守る愛、助け合う愛、お互いを尊重し、慈しむ愛、<br>育み増幅させる愛のパワーは偉大ですわ！",
				"Love is what sets the world on the right path. Love can watch over, help out, respect, lifts people up. It has incredible power!"
		]},{"name": "Yukari", "texts": [
				"このライブのステージからみんなに愛を届けたい……<br>愛から生まれるパワーを受け取ってもらいたいです！",
				"I want to send everyone love from upon the stage. I want them to feel the power that's born from love!"
		]},{"num": "ED", "texts": [
				"色々な形の愛がありますが、等しく尊いものですね！<br>彼女たちの愛、皆さんのところに届きましたでしょうか？",
				"Love may take many different forms, but all are equally precious! I'm sure you've all felt their love, right?"
		]}
	]},
	{'titles': ['夢を追いかけて','Chasing Our Dreams'],
	'num': 29,
	'sub': '開催：2023/02/28 - 2023/03/25',
	'opponent': [
		{"num": "OP", "texts": [
				"長らくご愛顧いただきましたこのライブ♪アリーナも<br>今回で最終回。ラストステージを飾るみなさんの意気込みを<br>うかがってみましょう！",
				"The long running and well-loved Live Arena is coming to an end. Let's see how enthusiastic the girls are about putting on their final Live Arena."
		]},{"name": "Haruka", "texts": [
				"えっ！？　今回で最後なんですか！？<br>毎月、テーマに合わせてライブを考えるのが大変だけど<br>楽しかったのに……。なんだか寂しいですね",
				"Huh?! This is going to be the last Live Arena?! It may have been tough coming up with a fitting live show every month, but it sure was fun... How sad."
		]},{"name": "Sakuya", "texts": [
				"なんだと！？　さては機関による妨害工作か……<br>お……おのれ機関！　私の安住の地をなくすつもりか！",
				"You said what?! Was this the Organization's doing? C-Curse you, Organization! You mean to take away our peaceful place?!"
		]},{"name": "Ayumi", "texts": [
				"びっくりね……。今まで、楽しい思い出を<br>いっぱいもらったわ。ありがとうございました！<br>……お礼くらい素直に言えるわよ！",
				"What a surprise... I have so many fond memories of previous Live Arenas. I can honestly say that I'm very thankful for them."
		]},{"name": "Christina", "texts": [
				"そうですね、このライブを通して私達のことを知ってくれた<br>人もいっぱいいるし、本当に、感謝の気持ちしかありません",
				"Yes. So many people have gotten to know us through Live Arenas. I'm nothing but thankful for having performed in them."
		]},{"name": "Mutsuki", "texts": [
				"ぐぬぬ。ライブが終わってしまっては、吾輩の作っている<br>真・スクールアイドルロボの完成お披露目ができなくなって<br>しまうではないか。あと少し、あと少しだったのに……",
				"*Grumble* Now I won't be able to show off the completion of my True School Idol Robot. And I was so close to finishing it..."
		]},{"name": "Yuuka", "texts": [
				"３月は別れの季節とはいうけれど、やっぱりさびしいですね。<br>このライブのおかげでせっかく<br>みんなとも仲良くなれたのに……",
				"Although March is known as the month of farewells, this is nevertheless saddening. It's thanks to the Live Arena that I've gotten to become friends with you all."
		]},{"name": "Mikoto", "texts": [
				"ライブ♪アリーナで学んだことはとっても大きいです。<br>こうやって目を閉じると、心のアルバムに綴じられた<br>思い出が、どんどん溢れてきます",
				"The things I've learned in the Live Arena have been huge. When I close my eyes, the memories in my heart come flooding back to me."
		]},{"name": "Minami", "texts": [
				"<span class=\"ul\">子供達の前でのクリスマスライブ</span>が印象に残ってるわ<br>みんな目がキラキラ輝いてて、あの日は寒かったけど<br>心がぽっかぽかになったもの<br><div class=\"note\">※第14回「灯そう！聖なる気持ち」を参照。</div>",
				"Our Christmas live show in front of the kids with their eyes lit up left a strong impression on me. Not even the cold temperature could dull the warmth I felt."
		]},{"name": "Seira", "texts": [
				"<span class=\"ul\">神社でライブしたこともありましたね。</span><br>あの時助けてくれた子、いつの間にかいなくなってて。<br>……不思議な体験でした<br><div class=\"note\">※第12回「やさしさはきつね日和！？」を参照。</div>",
				"We also did a live show at a shrine, didn't we? I remember being helped out by a girl, only for her to suddenly disappear... It was a mystifying experience."
		]},{"name": "Iruka", "texts": [
				"須田はなんといっても、<span class=\"ul\">浜辺の特設ステージで</span><br><span class=\"ul\">イルカと一緒に泳いだ</span>のが思い出に残ってる。<br>一生この時間が続けばいいのにって思ったよ<div class=\"note\">※第10回「イルカに会いたい！ワクワク体験♪」を参照。</div>",
				"Undeniably, the memory that sticks in my mind is swimming with the dolphin on that special beach stage. I wished that moment would've carried on forever."
		]},{"name": "Rebecca", "texts": [
				"私はこのライブを通じて、日本のZENの心を学ぶことが<br>できたわ。みんなで浴衣を着てステージに立ったのは<br>とっても思い出深い経験だったわね",
				"I was able to learn what Japanese zen really is thanks to the Live Arena. Wearing yukatas with you all on stage was an experience I'll never forget."
		]},{"name": "Fumi", "texts": [
				"ギョロちゃんもちょっと寂しそうです。<br>ギョロちゃんと二人三脚（？）で走り抜けてきたこのライブ<br>いつまでも大切な思い出にしていきます。ね、ギョロちゃん",
				"Gyoro looks a little sad too. I'll always remember the live show when we ran a three-legged race together. Isn't that right, Gyoro?"
		]},{"name": "Nagi", "texts": [
				"はじまりがあれば、終わりがある。使いはじめた<br>スケッチブックもいつかは最後のページがくるように……。<br>そんな当たり前のことでも、すごく寂しい",
				"All good things come to an end. Like how one day, I'll get to the last page of this sketchbook I started. It may be natural, but it doesn't make it any less sad."
		]},{"name": "Fumie", "texts": [
				"使い終わったスケッチブックはそれで終わりじゃないと思う。<br>それまでの成長の証として、そして大切な思い出として、<br>宝物のひとつになるのだよ",
				"That sketchbook won't be finished even when you finish it. It'll serve as proof of your growth, as well as a precious memory and treasure for you."
		]},{"name": "Yuri", "texts": [
				"自分には絶対に合わないと思ってた衣装や<br>ひとりじゃ絶対に思いつかない曲やダンスで<br>ライブをした経験は、いい刺激になったよ",
				"Wearing clothes I never thought would've have suited me and performing songs and dances I could've never come up with on my own really fired me up."
		]},{"name": "Ranpha", "texts": [
				"刺激といえば、<span class=\"ul\">激辛ひなあられ、あれ美味しかったネ！</span><br>ワタシ、辛いもの大好きアル！<br><div class=\"note\">※第17回「驚き！桃の木！大人気！？」を参照。</div>",
				"Speaking of fire, those spicy treats were delicious, right? I love spicy food!"
		]},{"name": "Rakshata", "texts": [
				"辛いといえば、みなさんとカレーの話で盛り上がったのを<br>思い出しました。ライブが終わった後に甘くて美味しい<br>私特性のインドカレーをごちそうしますね！",
				"And speaking of spicy, there was that time we all got excited talking about curry. I'll treat you all to my sweet and delicious Indian curry after the live show!"
		]},{"name": "Kasane", "texts": [
				"このライブに出て、いろんな衣装を着てステージに立てて<br>本当に楽しかった。これからも、いっぱいいろんな衣装を<br>作って楽しいステージにしていくよ！",
				"It was so much fun getting up on stage and wearing all kinds of costumes at the Live Arena. I'm going to continue making loads of costumes and have fun on stage!"
		]},{"name": "Akemi", "texts": [
				"私、このライブの思い出をまとめて、写真集を作るわ！<br>撮りためた写真、もう1万枚を超えてるの！",
				"I'll make a photo album of all our memories of the Live Arena! It'll have more than 10,000 photos!"
		]},{"name": "Nanaka", "texts": [
				"その写真1枚1枚に、私達の思い出が詰まっているんだね。<br>写真集楽しみにしてるよ。手伝えることがあったら言ってね！",
				"Each of those pictures is packed to the brim with the memories we made together. I can't wait to see the album. Ask me if there's anything I can help out with!"
		]},{"name": "Koyuki", "texts": [
				"七夕のときにみんなで短冊にお願いを書いたね。<br>恥ずかしかったけど、あの時の気持ちは今も変わらないよ",
				"I wrote a wish on a wish slip during the star festival. It was embarrassing, but I feel the same way now that I did back then."
		]},{"name": "Ryo", "texts": [
				"確か「みんなとずっとアイドル活動がしたい」だったかな。<br>みんな雪ちゃんと同じ気持ちだと思うよ。<br>これからも、ずっと一緒にやっていきたい",
				"I bet you wished for you and us to stay being idols forever. I think we all feel the same way. I want us to be together forever."
		]},{"name": "Ayumi", "texts": [
				"スクールアイドルをやめるわけじゃなくて、<br>その中のひとつ、ライブ♪アリーナが終わるだけだから！<br>私だって、これからも活動は続けていくから！",
				"It's not like we're quitting as school idols, it's just that the Live Arena is coming to an end! I'm going to carry on being a school idol like I always have!"
		]},{"name": "Akira", "texts": [
				"そうだよね。アタシ達がスクールアイドルであることには<br>変わりはないもんね。これからも、みんなを笑顔にする、<br>そんな存在であり続けられたらいいな",
				"You're right. We're still school idols at the end of the day. I hope I can continue being an idol who puts smiles on people's faces."
		]},{"name": "Marika", "texts": [
				"みんなと一緒にライブ♪アリーナのステージに立てたからこそ<br>見つけられた新しい一面や、新しい顔、それらをこれからの<br>ステージや人生に活かしていきたいよね",
				"It's through being on stage at the Live Arena with you all that I found new sides of myself that I want to make the most of in my life and on stage."
		]},{"name": "Sana", "texts": [
				"別れの後には出会いがある。<br>このピンチをチャンスに変えて<br>新しいことに挑戦してみたいな！",
				"After every farewell comes a new encounter. I want to turn this sad moment into an opportunity to challenge myself to try new things!"
		]},{"name": "Jennifer", "texts": [
				"そうね、いつでもポジティブでいることが大切。<br>手始めにみんなでやる新しいライブの相談、<br>始めてみましょうか",
				"Yeah, it's important to always remain positive. How about for a start we discuss the new live show we're going to perform?"
		]},{"name": "Hitomi", "texts": [
				"スクールアイドルの私達だからこそできる、今までとは<br>ひと味違ったライブをみんなで作っていこうぜ！<br><div class=\"note\">※志賀仁美の一人称は「俺」が普通。</div>",
				"Let's put on a live show unlike anything we've done before-a live show only us school idols could put on!"
		]},{"name": "Shun", "texts": [
				"よーし、太郎！　もう迷うことはない！<br>私と一緒に新しい明日に向かって走ろう！",
				"Right, Taro! I'm not lost anymore! Let's run towards a new tomorrow together!"
		]},{"name": "Leo", "texts": [
				"いいね！　レオも走るー！！<br>ガオオォォォーーーーーーーッ！！！",
				"Nice! I'll run with you too! *Roar!*"
		]},{"num": "ED", "texts": [
				"ああっ、黒崎さーん、レオちゃーん！！<br>みなさんはこれからもきっと走り続けるのでしょうね。<br>これまで、応援ありがとうございました！！",
				"That's right, Shun and Leo! I'm sure you and the other school idols will continue running towards that new tomorrow. Thank you all so much for your support!"
		]}
	]},
	{'titles': ['スペシャルセッション汎用 (青藍高校)',''],
	'opponent': [
		{'num': '1-1', 'name': 'Marika', 'text': 'おっ！　きみも来てたんだね！<br>再開を祝って写真でも？　一緒に他のアイドルを見に行く？<br>いやいややっぱりあたし達もセッションしようか！'},
		{'num': '1-2', 'name': 'Marika', 'text': 'スクールアイドルってちょうかわいいよね！　飽きっぽい<br>って言われることもあるけど、あたしのフットワークの軽さは<br>アイドルにピッタリだと思うんだよ！　……やっぱダメ？'},
		{'num': '1-3', 'name': 'Marika', 'text': 'あったかくなってきたから、練習頑張ってみようかな～<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '2-1', 'name': 'Minami', 'text': '今日は保育所はお休みしてきましたっ♪<br>お腹が減っては……って言うでしょう？<br>腕によりをかけて作ったんです！　はいっ、あなたもどうぞ♪'},
		{'num': '2-2', 'name': 'Minami', 'text': 'みんなに何故か「お母さん」って呼ばれるんですよねぇ……<br>私、そんな似年上に見えるんでしょうか……？<br>あっ、リボンが曲がっていますよ'},
		{'num': '2-3', 'name': 'Minami', 'text': '自分の歌をみんなに聴いてもらえるのって、<br>すごく幸せですっ♪<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '3-1', 'name': 'Aya', 'text': 'よっ……よろしく、お願いします！<br>私っ……あ、あまりこういう場の雰囲気には慣れてないですが<br>精一杯頑張ります！'},
		{'num': '3-2', 'name': 'Aya', 'text': '私は書道をやっていますが<br>「はらい」の時に必要な思い切りのよさは<br>スクールアイドルと通じる部分もあるかもしれませんね'},
		{'num': '3-3', 'name': 'Aya', 'text': 'もっと人に見られることに慣れないと……<br>あ、あんまり見ないでくださいっ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '4-1', 'name': 'Ayumi', 'text': 'あら……あなたもここにいたの<br>この私が出るからには、半端じゃ許さないわよ<br>期待してるんだから……面白いセッション、見せなさいよ'},
		{'num': '4-2', 'name': 'Ayumi', 'text': '趣味……？　……お菓子作りよ<br>なによ、悪い？'},
		{'num': '4-3', 'name': 'Ayumi', 'text': 'さち子がまた変なことやってる……<br>あなたからも何か言ってあげてよ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '5-1', 'name': 'Seira', 'text': 'すごいすごい！<br>こんなに沢山の人たちが1つのイベントで<br>1番を目指して……私も盛り上がってきちゃいました～！！'},
		{'num': '5-2', 'name': 'Seira', 'text': '悠弓ちゃんはすごいでんす。あんなに上手いのに<br>それでも慢心しないで毎日遅くまで練習して……<br>だから、私も負けないように、頑張らなくちゃって思います！'},
		{'num': '5-3', 'name': 'Seira', 'text': 'もっともっと、上を目指してみたいんです！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '6-1', 'name': 'Sachiko', 'text': 'ククク……来たな、我が同士よ……<br>これも黒魔術の祖たる、マーリン様の巡り合わせ……<br>さあ、我と混沌の狂宴を奏でるのだ……！'},
		{'num': '6-2', 'name': 'Sachiko', 'text': 'ククッ……残念ながら、我が黒魔術によって<br>我々のグループが優勝することは決まっているのだ……！<br>……何？　個人戦だと？'},
		{'num': '6-3', 'name': 'Sachiko', 'text': 'メイド服の落とし物！？<br>そ、そ、それは我と何の関係もないっ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '7-1', 'name': 'Akiru', 'text': 'フィギュアスケートもスクールアイドルも<br>大事なのは体幹の強さよ。疲れない、自然な姿勢が取れること<br>それが、舞台で大勢の人に見られながら、長持ちする秘訣なの'},
		{'num': '7-2', 'name': 'Akiru', 'text': '舞台に立つときは、いつだって自分独り<br>だから私は、この大舞台でも自由に舞えるわ'},
		{'num': '7-3', 'name': 'Akiru', 'text': '私に出来ないことなんてないわ……<br>多分、ね<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '8-1', 'name': 'Yumi', 'text': 'ちょっと、私を無視するんじゃないわよ<br>あなたと私の仲でしょ……まったくあなたと<br>奏でるセッション……ちょっとワクワクするじゃない'},
		{'num': '8-2', 'name': 'Yumi', 'text': '私のフルートに、聖来のヴァイオリンが合わされば<br>誰にも負けるはずない<br>管弦楽隊のスクールアイドルの力、目に焼き付けるといいわ'},
		{'num': '8-3', 'name': 'Yumi', 'text': 'くたびれた？<br>だらしないわね、体力づくりに付き合いましょうか？<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
	]},
	{'titles': ['スペシャルセッション汎用 (東雲学院)',''],
	'opponent': [
		{'num': '1-1', 'name': 'Coco', 'text': 'はわわ……こんなにたくさんの人がいるんですね……！<br>ちょっと緊張しますけど……<br>優理ちゃんたちといっぱい練習しましたし、大丈夫ですっ！'},
		{'num': '1-2', 'name': 'Coco', 'text': 'ココ、このステージでいっぱい歌えるの楽しいです！<br>優理ちゃんやクリスちゃんたちと来れて本当によかったぁ♪'},
		{'num': '1-3', 'name': 'Coco', 'text': 'スクールアイドルになりたくなったら<br>いつでも声をかけてくださいね～<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '2-1', 'name': 'Sana', 'text': 'な、何なのよ！　本番前に、その……か、かわいいとか<br>調子狂うじゃない！　やめてよね！<br>……ま、まあ、かうんたも……な、何でもないわ！'},
		{'num': '2-2', 'name': 'Sana', 'text': '最高のライブをするんだから！<br>あんたが私についてきなさいよねっ！<br>き、緊張なんてしてないわよっ'},
		{'num': '2-3', 'name': 'Sana', 'text': '今度のステージ、来るんでしょうね？<br>来なかったらどうなるか分かってる？<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '3-1', 'name': 'Christina', 'text': 'セッションってなんだか<br>たくさんの人とあやとりするみたいですね'},
		{'num': '3-2', 'name': 'Christina', 'text': 'ふふ、リラックス、リラックスです<br>このステージを素敵なものにしましょうね♪'},
		{'num': '3-3', 'name': 'Christina', 'text': '神様の祝福がありますように……♪<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '4-1', 'name': 'Yuri', 'text': 'この会場、すげー盛り上がり……ここでガツンと決めたら<br>いつもより気持ちいいライブになりそうだ'},
		{'num': '4-2', 'name': 'Yuri', 'text': '練習の成果、ここでぶつけてみせる<br>あんたも本気でぶつけてくれよな'},
		{'num': '4-3', 'name': 'Yuri', 'text': 'シビれるような<br>すげーかっこいいライブするからさ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '5-1', 'name': 'Rika', 'text': 'キミのステージパフォーマンスを参考にさせてもらおうかな？<br>いや、何事も挑戦が大事だな……と思ってね<br>もちろん私も全力でパフォーマンスするさ'},
		{'num': '5-2', 'name': 'Rika', 'text': 'キミと私のステージは、いい化学反応が起こりそうだ<br>……キミにとって、だよ。いや……私にとっても、かな'},
		{'num': '5-3', 'name': 'Rika', 'text': 'この衣装とあの衣装では、どちらが好ましい？<br>……なるほど、メモしておこう<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '6-1', 'name': 'Haruka', 'text': '今日も元気にライブしますよー<br>朝、お姉ちゃんと約束しましたからね'},
		{'num': '6-2', 'name': 'Haruka', 'text': 'お姉ちゃんのお世話が趣味、かも？<br>だって、お姉ちゃん見てないとすぐ寝ちゃうから<br>あ、あとはアルトサックスもちょっとだけ……'},
		{'num': '6-3', 'name': 'Haruka', 'text': '今日は毛糸を買いに行こうと思ってるんです<br>お姉ちゃんにマフラー編もうかなと思って<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '7-1', 'name': 'Kasane', 'text': '支倉かさね。今日も頑張りまーっす♪<br>キミも言ってみるといいよ！　すっごくやる気出るよ！<br>さあ、楽しいステージにしよー！'},
		{'num': '7-2', 'name': 'Kasane', 'text': 'キミのその衣装すっごく素敵！<br>今度はこういうのもいいかも？<br>私、コスプレとか、みんなの衣装考えるのが大好きなんだ！'},
		{'num': '7-3', 'name': 'Kasane', 'text': '明日新曲の練習するから<br>キミにも来てもらいたいなあ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '8-1', 'name': 'Mizuki', 'text': 'なんかこれって、スポーツの真剣勝負ーって感じ！<br>燃えてきたーっ！　あなたも、同じだといいな<br>お互いの全力を見せようね！'},
		{'num': '8-2', 'name': 'Mizuki', 'text': 'あたしの趣味？　もちろんバスケ！<br>シュートが決まる瞬間も気持ちいいけど<br>味方のナイスプレーを見るのも気持ちいいんだ！'},
		{'num': '8-3', 'name': 'Mizuki', 'text': '気合い入れてやってみるよ！<br>あたしと一緒に頑張ろう！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'}
	]},
	{'titles': ['スペシャルセッション汎用 (千歳橋高校) ',''],
	'opponent': [
		{'num': '1-1', 'name': 'Yu', 'text': '（断られちゃったら……どうしよう……）<br>……セッション……する……？'},
		{'num': '1-2', 'name': 'Yu', 'text': '（星がきれい……<br>惑星がすれ違うみたいに、私も待ってれば、会えるのかな）<br>あっ……また、会えたね'},
		{'num': '1-3', 'name': 'Yu', 'text': '（一緒におさんぽに行こうよ……言えないけど）<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '2-1', 'name': 'Fumie', 'text': 'ややっ！　これは奇遇ですね！　私はもちろん<br>電脳空間の素晴らしさを伝えにきました！　私のセッションを<br>見ればサイバー衣装が増えること間違いなし！　布教布教！'},
		{'num': '2-2', 'name': 'Fumie', 'text': '見てくださいこのフィギュア！　 限定版なんですよ！<br>布教用に10体ほど買ったので、あなたにもおすそ分けです！<br><div class="note">編集者註：1行目の空白は「全角1.5文字分」になっている。ライターのミス？<\/div>'},
		{'num': '2-3', 'name': 'Fumie', 'text': 'るうちゃんを誘って<br>ゲームのコラボカフェに行ってまいります！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '3-1', 'name': 'Akemi', 'text': '夢を掴むために何人ものスクールアイドルがこの会場に……<br>くーっ！　正に激写日和！！<br>最初のシャッターチャンスは……そう、あなたよ！！'},
		{'num': '3-2', 'name': 'Akemi', 'text': '最高に可愛くて輝いてるスクールアイドルの<br>最高の一瞬を切り取る……それが私に課せられた使命なの！'},
		{'num': '3-3', 'name': 'Akemi', 'text': '元気？て　ちゃんと心のシャッター押してる？<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '4-1', 'name': 'Iruka', 'text': 'いつか、「プール系スクールアイドルといったら須田」って<br>呼ばれるように……え？　現時点で須田1人だって？<br>もう目標達成じゃんか！よし、次は仲間を増やしていくぞー'},
		{'num': '4-2', 'name': 'Iruka', 'text': 'プールのスクールアイドル、須田だよ！<br>須田の武器は、歌と踊りと……泳ぎ！'},
		{'num': '4-3', 'name': 'Iruka', 'text': 'いっぱい踊るから、君もいっぱい見ててね！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '5-1', 'name': 'Reine', 'text': 'すごいねーっ！麗音、盛り上がってる会場見てると<br>テンション上がっちゃう～♪<br>麗音たちのセッションでもっとダンサブルにしちゃうからね'},
		{'num': '5-2', 'name': 'Reine', 'text': '麗音、ダンスが好きなんだぁ<br>みんなと踊って歌ってると、一体感感じちゃうよね～♪'},
		{'num': '5-3', 'name': 'Reine', 'text': '麗音に会いに来てくれる人って<br>みんな嬉しそう♪　麗音も嬉しいよぉ！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '6-1', 'name': 'Nanaka', 'text': 'おっ、奇遇だね！　こんなにスクールアイドルが集まってると<br>そこら中からスクープの匂いがすると思わないかい？<br>今回の一面記事のTOPは……君だ！'},
		{'num': '6-2', 'name': 'Nanaka', 'text': '私たちは、スクールアイドルの色々な面を記事にしていきたい<br>多面的に物事を見なければ、全ての魅力も伝えられない<br>新聞とスクールアイドルは、実は密接に関係しているのさ'},
		{'num': '6-3', 'name': 'Nanaka', 'text': '言葉にするのは難しい感情もある<br>それでも私は書き続けるよ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '7-1', 'name': 'Saki', 'text': 'やっほ♪　君もこのイベント、参加するんだね<br>私の応援は百人力だよ！　……え、私もセッションする？<br>……そうだね、よーし。自分で自分を応援するぞー！'},
		{'num': '7-2', 'name': 'Saki', 'text': 'ポンポンは標準装備だよ！<br>いつどこで応援が必要になるか、わからないしねっ♪'},
		{'num': '7-3', 'name': 'Saki', 'text': 'ふふーん<br>私のことをほめても、何にも出ないぞっ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '8-1', 'name': 'Ru', 'text': 'あの……良かったら、私とセッション……してくれますか？<br>私の相手をしてくれる人、他には見つからなくて……'},
		{'num': '8-2', 'name': 'Ru', 'text': 'こんにちは。え……私がこんなところにいるのが意外……？<br>……そうかも、ですね。今日は、ちょっとだけ頑張って<br>自分に負けないように来たんです'},
		{'num': '8-3', 'name': 'Ru', 'text': 'ほっ、ほっ……<br>ランニングは得意です……<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '9-1', 'name': 'Nagi', 'text': '天才……？　よくわからないけど<br>見てくれる人がよろこんでくれることがだいじかなー<br>絵も、アイドルも、どっちも同じだよねー'},
		{'num': '9-2', 'name': 'Nagi', 'text': '凪はー、絵を描くこととー<br>子どもたちがよろこんでくれることが好きー'},
		{'num': '9-3', 'name': 'Nagi', 'text': 'いっぱい歌うよ<br>部活楽しいねー<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'}
	]},
	{'titles': ['スペシャルセッション汎用 (藤黄学園)',''],
	'opponent': [
		{'num': '1-1', 'name': 'Shun', 'text': 'リズム感には自信あるんだ～　乗馬で鍛えてきたからね！<br>キミのリズム感にだって負ける気はしないよ！'},
		{'num': '1-2', 'name': 'Shun', 'text': '太郎とは私が乗馬を始めたときから一緒にいるんだ<br>私が来るとね、嬉しそうな顔するんだよ！<br>今度、姫乃ちゃんにお願いして写真撮ってもらおうかなあ'},
		{'num': '1-3', 'name': 'Shun', 'text': 'キミってのんびりしてそうで<br>意外としっかり者だよねっ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '2-1', 'name': 'Fumi', 'text': '私とセッション、ですか？　嬉しいです！<br>頑張りま……うわわっ、すみません！<br>つまづいちゃいました……あの、大丈夫でしたか？'},
		{'num': '2-2', 'name': 'Fumi', 'text': 'ギョロちゃんとはいつも一緒なんです<br>もちろんギョロちゃんのお世話グッズも持ち歩いてますよ！<br>って、あーっ！　ギョロちゃん、それは食べちゃダメーっ！'},
		{'num': '2-3', 'name': 'Fumi', 'text': 'わ、わわっ！<br>めがねをふいてもぐるぐるは取れませんよ～<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '3-1', 'name': 'Tsurugi', 'text': 'こんなに気分が高まるなんて、思ってなかったよ<br>いや、楽しいだろうとは思っていたんだ<br>……でも想像以上だ。キミも楽しんでるかな？'},
		{'num': '3-2', 'name': 'Tsurugi', 'text': '刺繍を施すのは好きなんだ<br>集中して何かをするのって、楽しいだろう？<br>おかげでちょっとしたモノも縫えるようになったよ'},
		{'num': '3-3', 'name': 'Tsurugi', 'text': '気を引き締めて、今年も頑張るよ<br>よろしくね！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '4-1', 'name': 'Yuuka', 'text': '朗読が趣味なんです♪　たまにお昼の放送でもするんですよ<br>よかったら今度、聴いてくれませんか？'},
		{'num': '4-2', 'name': 'Yuuka', 'text': 'この間、白雪ちゃんにバレエを教えてもらったんです♪<br>少しでもしなやかで綺麗に踊れるようになった気がします'},
		{'num': '4-3', 'name': 'Yuuka', 'text': '放送部の見学ですか？<br>興味を持ってくれて嬉しい……大歓迎です♪<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '5-1', 'name': 'Fuu', 'text': 'いつも一緒に歌ってるみんな以外とも歌うのは緊張するけど<br>楽しくていいね！　それに君とならもっと楽しくなれそう！'},
		{'num': '5-2', 'name': 'Fuu', 'text': '体を動かすのが大好きなんだ<br>みんなのやってるスポーツを一緒にやるのも<br>こうしてダンスするのもすっごく楽しい！'},
		{'num': '5-3', 'name': 'Fuu', 'text': '今日のトレーニング、つきあってよ<br>アドバイスほしいんだよね<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '6-1', 'name': 'Misaki', 'text': '私、勝負事が好きなの。ふふ、そうね<br>この会場をどちらがより盛り上げられるか……<br>なんてどうかしら？'},
		{'num': '6-2', 'name': 'Misaki', 'text': '私こう見えてもぬいぐるみを集めるのが好きなのよ？<br>小雪が作るマスコットとかも貰ったりするの<br>どうかしら？　私のギャップにキュンとした？'},
		{'num': '6-3', 'name': 'Misaki', 'text': '何か用？<br>ふふ、それなら私のことを捕まえてみて♪<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '7-1', 'name': 'Himeno', 'text': 'わあっ、さっきのステージ見てましたよ♪<br>とっても素敵でした。思わずカメラを探してしまうくらい！<br>私ともそんな素敵なセッション、していただけますか？'},
		{'num': '7-2', 'name': 'Himeno', 'text': 'この間、みんなで着物を着たんです♪<br>ちょっと照れてる白雪ちゃんとか、りりしい剣ちゃんとか<br>いっぱい写真も撮ったんですよ。見てみますか？'},
		{'num': '7-3', 'name': 'Himeno', 'text': 'ステージで元気いっぱい<br>ダンスできるのが楽しいんです！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '8-1', 'name': 'Koyuki', 'text': 'ステージの前はいつも緊張する……<br>もしかして、あなたも？　ふふっ、小雪と一緒だね<br>あなたのおかげで緊張、ほぐれたよ。ありがとう'},
		{'num': '8-2', 'name': 'Koyuki', 'text': '小雪、バレエとマスコット作りが趣味なの<br>え？　ダンスがきれいだねって……本等？<br>涼ちゃんと並んでも恥ずかしくない、かな……'},
		{'num': '8-3', 'name': 'Koyuki', 'text': '部室で待ってるよ<br>練習がんばろーね<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '9-1', 'name': 'Ryo', 'text': 'キミと一緒のステージ……なんだか新鮮だな<br>ステージはいつだって一期一会なんだ<br>ワタシはいつだって全力で表現するさ'},
		{'num': '9-2', 'name': 'Ryo', 'text': '演劇もスクールアイドルも好ましいけど<br>ギターも少したしなんでいてね<br>今度のステージパフォーマンスに取り入れてみようかな？'},
		{'num': '9-3', 'name': 'Ryo', 'text': '雪ちゃんを見なかったかい？<br>ちょっと話したいことがあってね<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'}
	]},
	{'titles': ['スペシャルセッション汎用 (紫苑女学院)',''],
	'opponent': [
		{'num': '1-1', 'name': 'Mikoto', 'text': '風紀の乱れは心の乱れ！　私が正してあげましょう！<br>……なんですか、背は関係ないでしょう！　背は！<br>許しませんからね！'},
		{'num': '1-2', 'name': 'Mikoto', 'text': '風紀を取り仕切る側だというのにあの2人ときたら……<br>どこに行ったんでしょう……？<br>そこのあなた、怪しい風紀委員を見かけませんでしたか？'},
		{'num': '1-3', 'name': 'Mikoto', 'text': '今日の風紀は……なかなかいい感じです！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '2-1', 'name': 'Chiduko', 'text': '世界が愛で満たされれば<br>すなわち秩序が成り立ち風紀も乱されない……<br>さあ、手始めにわたくしと愛のセッションを奏でましょう！'},
		{'num': '2-2', 'name': 'Chiduko', 'text': '愛とは相互理解から始まりますわよね？<br>……はぁ……ぁっ、あなたとわたくしが交わることによって<br>どのようなセッションが奏でられるのか、ワクワクしますわ！'},
		{'num': '2-3', 'name': 'Chiduko', 'text': 'わたくしと愛の課外授業に出かけませんこと？<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '3-1', 'name': 'Hitomi', 'text': '秩序を保つためには力が必要……<br>俺が風紀を背負うからには、貴様に負けるわけにはいかんな'},
		{'num': '3-2', 'name': 'Hitomi', 'text': '隙有りっ！！　……ふっ、避けたか<br>個人個人で風紀の意識は違う<br>貴様の風紀……どのような塩梅か、確かめてくれるっ！！'},
		{'num': '3-3', 'name': 'Hitomi', 'text': '俺には俺の風紀がある<br>口出しは無用だ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '4-1', 'name': 'Akira', 'text': 'アタシは鬼崎アキラ。自転車部さ<br>得意なことは、とにかく早く走ることと……<br>手品も、少しだけできるかな'},
		{'num': '4-2', 'name': 'Akira', 'text': 'ロードレースってのはさ、何日もかけて走り続けて<br>全部の汗と体力を出し尽くして優勝ゼッケンを狙うんだ<br>ここも、レース中と似た雰囲気を感じるよね'},
		{'num': '4-3', 'name': 'Akira', 'text': '最近こたつ出したんだ！<br>あったまっていかない？<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '5-1', 'name': 'Yuka', 'text': '私、ダンスが好きなんだ！<br>さあ、踊ろう！　セッションは即興が命だよ！'},
		{'num': '5-2', 'name': 'Yuka', 'text': 'スワイプスからウィンドミル……いや、ヘッドスピンに<br>つなげた方が自然かな……？　えへへっ、ダンスの組合わせ方<br>って無限大だから、ついつい考えちゃうんだ'},
		{'num': '5-3', 'name': 'Yuka', 'text': 'たまには2人で出かけようよ！<br>おしゃれしていくからさー<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '6-1', 'name': 'Sayuri', 'text': '新入り！　今日も精が出るな！<br>サバゲ部の一員として、片時も油断は禁物だぞ！<br>戦闘、開始ぃーーーーーーーっ！！'},
		{'num': '6-2', 'name': 'Sayuri', 'text': '第123歩兵部隊所属、兵藤さゆり軍曹！<br>本日は全力で作戦を遂行するーーーっ！！<br>本日の任務は……高天原研究所の警備である！！'},
		{'num': '6-3', 'name': 'Sayuri', 'text': 'これより訓練に入る！<br>まずはボーカルレッスンから♪<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '7-1', 'name': 'Sakura', 'text': '……姉さんを見なかった？　この会場は機関とかの罠じゃない<br>って何度も説明したんだけど、聞く耳もたなくて……<br>……たまには木刀とかで突いた方が、いいのかな……'},
		{'num': '7-2', 'name': 'Sakura', 'text': 'ドールとはよく話しているよ……<br>ほら、今もこうして語りかけてくれる……<br>姉さんのドールを作ってみる、か。面白いかもしれない……'},
		{'num': '7-3', 'name': 'Sakura', 'text': '今日は姉さんは機関に追われてるみたい<br>寝ながらうめいてた<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '8-1', 'name': 'Sakuya', 'text': 'お、お前、来たのね……！　だ、大丈夫<br>こんなときのために、私と咲良はたゆまぬ努力を……<br>咲良？　い、いない！？　咲良ーーーーっ！！'},
		{'num': '8-2', 'name': 'Sakuya', 'text': '闇の夜を駆け、機関と戦う孤独の戦士<br>それが私……黒羽咲夜よ<br>あっ！　やめて、怖いのは苦手なの！　咲良ーーーーっ！！'},
		{'num': '8-3', 'name': 'Sakuya', 'text': 'これ以上私に近づいたら……危険よ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '9-1', 'name': 'Mutsuki', 'text': '我が高天原研究所の名誉所員！　よく来たのだ！<br>アイドルが多い！　すなわち我が発明の実験台も多い！<br>失敗を恐れるでない、我が発明の恩恵を受けるのだ～！'},
		{'num': '9-2', 'name': 'Mutsuki', 'text': 'カッカッカッ！　発明家に立ち止まる日などない！<br>発明とは常に新しいもの！　故に、成功でも失敗でも<br>とにかく突き進むべきなのだ！'},
		{'num': '9-3', 'name': 'Mutsuki', 'text': 'すやすや……思いついたぞぉ……<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'}
	]},
	{'titles': ['スペシャルセッション汎用 (Y.G.国際学園)',''],
	'opponent': [
		{'num': '1-1', 'name': 'Ranpha', 'text': 'ワタシ、食べるの大好きアル<br>食べることそのもの、それがこんなに人をハッピーにするネ<br>……ふふ、アイドルと似てるアルな'},
		{'num': '1-2', 'name': 'Ranpha', 'text': 'ワタシの積み重ねたスクールアイドルクンフー、しかと見るネ<br>小籠包！　麻婆豆腐！　青椒肉絲！！<br>……違うネ、これは今から食べる分アル'},
		{'num': '1-3', 'name': 'Ranpha', 'text': '歌うの、楽しいデス！<br>いっしょに歌いまショー！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '2-1', 'name': 'Rakshata', 'text': 'また会えて嬉しいです<br>いつもは安心感を与えてくれるアナタですが……<br>今日ばかりは、このセッションを楽しみましょう……☆'},
		{'num': '2-2', 'name': 'Rakshata', 'text': 'インド人なのに辛いものが苦手なのかとよく聞かれるんです<br>甘口カレー……素晴らしい文化ですよね<br>日本の食の幅広さには驚かされました……☆'},
		{'num': '2-3', 'name': 'Rakshata', 'text': 'ウエストにくびれが欲しい？<br>一緒にベリーダンスはいかがですか？<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '3-1', 'name': 'Rebecca', 'text': 'ハロー、レベッカよ。気軽にベッキーと呼んでね<br>日本のZENのココロを知るために留学してきてるわ'},
		{'num': '3-2', 'name': 'Rebecca', 'text': 'ブツゾー……奥の深い文化よね。静かでいて、時に力強い……<br>私が好きなのは般若菩薩像よ<br>スクールアイドルにも、似た側面があると言えるわね'},
		{'num': '3-3', 'name': 'Rebecca', 'text': '部屋の乱れはココロの乱れ<br>日々、掃除は欠かさずにね<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '4-1', 'name': 'Isabella', 'text': '貴様か。スクールアイドルの鍛錬は……<br>うむ、つづけているのならばいいんだ<br>鍛錬の成果、私に見せてもらおう！'},
		{'num': '4-2', 'name': 'Isabella', 'text': '日本の礼儀正しさは素晴らしい<br>こうして、……戦いの前に互いに一礼をすることで<br>お互いに対戦相手への感謝を忘れないのであろう'},
		{'num': '4-3', 'name': 'Isabella', 'text': '授業が難しい？<br>私が面倒を見てやろうか<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '5-1', 'name': 'Jennifer', 'text': 'あらあなた、久しぶりね。こんなに沢山のスクールアイドルが<br>互いに正義を抱いてぶつかりあうイベント……<br>……ふふっ、柄じゃないけど高ぶってしまうわね'},
		{'num': '5-2', 'name': 'Jennifer', 'text': '「正義」という言葉がとても好きなの<br>押し付けるだけでは成立せず、相手に義をもって正す……<br>意味は……まだ勉強中なんだけどね'},
		{'num': '5-3', 'name': 'Jennifer', 'text': '元気にしてる？<br>……その笑顔、100点満点ねっ！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '6-1', 'name': 'Maria', 'text': '熱い……熱いわ……！　この会場、フラメンコの<br>踊りにも負けてない、良いパッションよね<br>さあ、私達もセッションしましょう？　オ・レ！'},
		{'num': '6-2', 'name': 'Maria', 'text': '私のフラメンコは、もう日常なの<br>何かを感じれば踊るし、踊ればそれがみんなに伝わる……<br>ふふっ、大人の女の魅力、魅せてあげる♪'},
		{'num': '6-3', 'name': 'Maria', 'text': '自分のことを知ってもらいたい……<br>そんな気持ちで踊っているのかもしれないわ<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '7-1', 'name': 'Leo', 'text': 'レオは「さばいばる」に強い、言われた<br>「さばいばる」、なに？　レオ、わからない……'},
		{'num': '7-2', 'name': 'Leo', 'text': 'レオ、歌うの、好き<br>みんなで歌うこと、もっと好き！'},
		{'num': '7-3', 'name': 'Leo', 'text': 'お祝いだぞ！　いっぱい踊ろう！<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'},
		{'num': '8-1', 'name': 'Yukari', 'text': 'うわぁ～～～～！！　そっ、壮観ですね！　こんなにもスクールアイドル……私たちと同じ目標の方々がいるなんて！<br>ワクワクしますねっ♪　もうセッションを我慢できませんっ！'},
		{'num': '8-2', 'name': 'Yukari', 'text': '紫と書いて、ゆかりと読むんですよ～<br>私の歌で、世界をつなげることが目標なのです♪<br>コーラス部のみんなには……なぜか止められますけど'},
		{'num': '8-3', 'name': 'Yukari', 'text': '最近はラジオ体操に真剣に取り組んでいます！<br>なかなか奥が深いのですね～<div class="note">※キラキラ☆転入生フェスティバルSSRの、ホーム画面で表示されるセリフの一つ<\/div>'}
	]},
	{'titles': ['ドリームセッション (通常回)',''],
	'opponent': [
		{'num': '1-1', 'name': 'Tsubasa', 'text': '私たちのパフォーマンスを見てくれたみなさんが喜んで<br>くれるって素敵でしょ？　でもまだまだ成長できると思うの<br>あなたたちのパフォーマンス、見せてほしいわ'},
		{'num': '1-2', 'name': 'Tsubasa', 'text': 'さあ、ライブの時間よ！<br>私たちを待ってくれているみなさんに<br>最高のステージを見せないとね'},
		{'num': '1-3', 'name': 'Tsubasa', 'text': 'お互い、頑張りましょう<br>そして私たちも負けません！'},
		{'num': '2-1', 'name': 'Anju', 'text': '私たちもあなたたちも欠かさずに練習してきたはずです<br>ファンの皆さんの期待に応えられるよう<br>全力でステージに挑みましょうね'},
		{'num': '2-2', 'name': 'Anju', 'text': '私たちの歌で、元気になってくれたら嬉しいわ<br>輝き続ける私たちのこと、応援よろしくね'},
		{'num': '2-3', 'name': 'Anju', 'text': '完っ全にフルハウス！<br>私たちにふさわしいステージになりそうね'},
		{'num': '3-1', 'name': 'Erena', 'text': '私たちは純粋に<br>今この時一番みなさんを喜ばせる存在でありたい<br>ただ、それだけ……'},
		{'num': '3-2', 'name': 'Erena', 'text': '私が大切にしているこのステージ……<br>見逃さないでほしい'},
		{'num': '3-3', 'name': 'Erena', 'text': '今日は凄く良いライブができそうだ'},
		{'num': '4-1', 'name': 'Leah', 'text': 'この会場に来ている人みんなに<br>もっと私たちのことを知ってもらいたい……<br>ねえさまと私の全力、見てて！'},
		{'num': '4-2', 'name': 'Leah', 'text': '私たちはもっともっと上に行きたい！<br>だからこのステージも、絶対成功させてみせる！'},
		{'num': '4-3', 'name': 'Leah', 'text': 'ねえさまと一緒に、このステージを最高のものにしてみせる'},
		{'num': '5-1', 'name': 'Sarah', 'text': '私たちのステージで、この会場を虜にします<br>あなたたちには負けません！'},
		{'num': '5-2', 'name': 'Sarah', 'text': '理亞と2人で努力してきた成果……<br>このステージで皆さんに見せてみせます！'},
		{'num': '5-3', 'name': 'Sarah', 'text': 'ラブライブ！でもこのステージでも<br>私たちは頂点を目指します'}

	]},
	{'titles': ['ドリームセッション (コードギアスコラボ)',''],
	'sub': '「コードギアス」コラボ特別回',
	'opponent': [
			{'num': '', 'text': '<div class="note">ドリームセッションの対戦相手は10回ごとにループ。<br>ナナリーとカレンは2種類、C.C.は4種類?のイラストとテキストが用意されていた。<\/div>'},
		{'name': 'geass', 'num': '1', 'namealt': 'ミレイ', 'text': 'だーめ！<br>取材許可なんてほとんど降りなくって、ねえ？'},
		{'name': 'geass', 'num': '2', 'namealt': 'コーネリア', 'text': 'にわかには信じがたいが<br>生きていたとは真だったようだな、ルルーシュ<br>そしてスザク'},
		{'name': 'geass', 'num': '3-A', 'namealt': 'ナナリー', 'text': 'ただ、今のワタシには政治の決定権がありません<br>出来得る限り、迅速に対応しようと思いますが……'},
		{'name': 'geass', 'num': '3-B', 'namealt': 'ナナリー', 'text': 'お兄様だけが罪を背負うことはありません！<br>私も同罪なのですから！'},
		{'name': 'geass', 'num': '4', 'namealt': '咲世子', 'text': 'はい。彼らは全員ここのメンバー<br>一手先んじられました'},
		{'name': 'geass', 'num': '5', 'namealt': 'アーニャ', 'text': '間に合った？　なんとか……<br>良かった。なんかあると<span class="ul">ジェリー<\/span>怒るから<br><div class="note">※「ジェリー」とは、登場人物「ジェレミア・ゴットバルト」の愛称。<\/div>'},
		{'name': 'geass', 'num': '6', 'namealt': 'シャムナ', 'text': '元<ruby>嚮主<rt>きょうしゅ<\/rt><\/ruby>……C.C.<br>この時期に現れるとは天啓か？'},
		{'name': 'geass', 'num': '7-A', 'namealt': 'カレン', 'text': 'ゼロなら奇跡を起こせるって知ってる、か……<br>よ～し！　明日の為に結団式と行こうか！'},
		{'name': 'geass', 'num': '7-B', 'namealt': 'カレン', 'text': '私にとってゼロは記号じゃないの<br>だからさ、あんたに名乗られると<br>ちょっと困っちゃうんだよねえッ！'},
		{'name': 'geass', 'num': '8', 'namealt': 'シャーリー', 'text': 'ネットでの噂ですけど<br>ジルクスタンにいる海外の人たちが<br>次々と幽閉されてるって'},
		{'name': 'geass', 'num': '9', 'namealt': 'ラクシャータ', 'text': '本当なのかい？<br>ジルクスタンがナナリーを攫ったってのは'},
		{'name': 'geass', 'num': '10-A', 'namealt': 'C.C.', 'text': '約束があるからな。私には<br>いつまでもこのままにはしないさ'},
		{'name': 'geass', 'num': '10-B', 'namealt': 'C.C.', 'text': 'どういうことだ？<br>なぜ人々の意識がどこにも行かず止まっている？'},
		{'name': 'geass', 'num': '10-C', 'namealt': 'C.C.', 'text': '私が取り戻したかったのはこんなお前じゃない<br>尊大でガキ臭くて自信家で<br>何時いかなる時もあきらめない、ルルーシュだ！'},
		{'name': 'geass', 'num': '10-D', 'namealt': 'C.C.', 'text': '知らなかったか？<br>私はわがままなんだ！'}
	]}
];

var CurrentPage = 0;

//■顔アイコンの作成
function WriteFace(name){
	if(name in TagData){
		const tx = (9-TagData[name].x) * IconSize;
		const ty = (6-TagData[name].y) * IconSize;
		return '<div class="face" style="background-position: right -' + tx + 'px bottom -' + ty + 'px"><\/div>';
	}
}

//■セレクトボックスの初期化
function InitializeSelectBox() {
 	ArenaData.forEach((temp1, idx) => {
		if(temp1.titles[lang_select]) {
			var temp2 = new Option();
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
	document.addEventListener('keydown', function(){
		act = document.activeElement.toString();
		if(act === '[object HTMLDivElement]'){
			if(event.code == 'ArrowLeft'){
				if(CurrentPage > 0){
					WriteMessage(CurrentPage-1);
				}
			}
			if(event.code == 'ArrowRight'){
				if(CurrentPage < ArenaData.length-1){
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
	ArenaData.forEach((temp1, idx) => {
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
function WriteMessage(set) {
	//引数が無い場合、セレクトボックスの状態から引数を生成する
	if(set === undefined){ set = document.getElementById('select-box').value; }
	set = +set;
	
	CurrentPage = set;
	document.getElementById("sub").innerHTML = ('sub' in ArenaData[set] ? Localization.ARENA_ROUND_SUB[lang_select](ArenaData[set].sub) : "");
	
	let Output = "";
	let MessageNumber = 1;
	for(const temp1 of ArenaData[set].opponent){
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
				Output += '\t<th>' + WriteFace(temp1.name) + '<\/th>\n\t<td>'
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
	const selectedOption = document.querySelector(`#select-box option[value="${set}"]`);
	if(selectedOption.previousSibling) {
		document.getElementById('ButtonLeft').classList.add('button-enable');
		document.getElementById('ButtonLeft').classList.remove('button-disable');
		document.getElementById('ButtonLeft').onclick = () => WriteMessage(selectedOption.previousSibling.value);
	} else {
		document.getElementById('ButtonLeft').classList.add('button-disable');
		document.getElementById('ButtonLeft').classList.remove('button-enable');
		document.getElementById('ButtonLeft').onclick = null;
	}

	//右ボタンの設定変更
	if(selectedOption.nextSibling) {
		document.getElementById('ButtonRight').classList.add('button-enable');
		document.getElementById('ButtonRight').classList.remove('button-disable');
		document.getElementById('ButtonRight').onclick = () => WriteMessage(selectedOption.nextSibling.value);
	} else {
		document.getElementById('ButtonRight').classList.add('button-disable');
		document.getElementById('ButtonRight').classList.remove('button-enable');
		document.getElementById('ButtonRight').onclick = null;
	}
	
	//セレクトボックスの位置変更
	document.getElementById("select-box").value = set;
}

//■「キャラ別登場回数」の描画
function WriteSummary() {
	let TextSummary = new Object();
	let idols = 51;
	for(i in TagData){
		if(idols-- <= 0){break;}
		TextSummary[i] = [];
	}
	for(i of ArenaData){
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
		Output += '<tr><th>' + WriteFace(i) + '<\/th><th>'
		+ TagData[i].names[lang_select] + '<\/th><td>' + TextSummary[i].length + '<\/td><td>';
		Output += TextSummary[i].join(", ") + "<\/td><\/tr>";
	}
	document.getElementById("Summary-Contents").innerHTML = Output;
	
}