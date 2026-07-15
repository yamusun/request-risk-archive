let chars=[];
fetch('data/characters.json').then(r=>r.json()).then(d=>{chars=d;list();});
function list(){
const app=document.getElementById('app');
app.innerHTML='<h2>人物資料</h2>'+chars.map(c=>`<div class="card" onclick="show('${c.id}')"><strong>${c['氏名']}</strong><br><small>職員データ（編集中）</small></div>`).join('');
}
function show(id){
const c=chars.find(x=>x.id===id);
const keys=['氏名','所属','役職','種族','年齢','身長','体重','利き手','魔法属性','武器','関連人物'];
let html='<div class="detail"><h2>'+c['氏名']+'</h2><p>RLC PERSONNEL DATABASE</p><table>';
keys.forEach(k=>html+=`<tr><td>${k}</td><td>${c[k]||'（未入力）'}</td></tr>`);
html+='</table><button onclick="list()">一覧へ戻る</button></div>';
document.getElementById('app').innerHTML=html;
}