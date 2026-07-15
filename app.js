
const fields=["氏名","所属","役職","種族","年齢","身長","体重","利き手","魔法属性","武器","関連人物"];
let chars=[];
fetch("data/characters.json").then(r=>r.json()).then(d=>{chars=d;home();});

function home(){
document.getElementById("app").innerHTML=`
<div class="grid">
<button onclick="personnel()">人物資料</button>
<button disabled>Case Archive（準備中）</button>
<button disabled>世界資料（準備中）</button>
<button disabled>用語集（準備中）</button>
<button disabled>資料検索（準備中）</button>
</div>`;
}

function personnel(){
document.getElementById("app").innerHTML="<h2>RLC PERSONNEL DATABASE</h2>"+
chars.map(c=>`<div class="card" onclick="detail('${c.id}')"><strong>${c["氏名"]}</strong><div class='small'>資料を開く</div></div>`).join("")+
"<p><button onclick='home()'>ホームへ戻る</button></p>";
}

function detail(id){
const c=chars.find(x=>x.id===id);
let html=`<h2>${c["氏名"]}</h2><div class='small'>RLC PERSONNEL DATABASE</div><table>`;
fields.forEach(f=>html+=`<tr><td>${f}</td><td>${c[f]||"（未入力）"}</td></tr>`);
html+="</table><p><button onclick='personnel()'>人物一覧へ戻る</button></p>";
document.getElementById("app").innerHTML=html;
}
