console.log("JS 有成功載入");
function showInput() {
  const data = {
    chinese: Number(document.getElementById("chinese").value),
    english: Number(document.getElementById("english").value),
    math: Number(document.getElementById("math").value),
    science: Number(document.getElementById("science").value),
    civics: Number(document.getElementById("civics").value),
    history: Number(document.getElementById("history").value),
    geography: Number(document.getElementById("geography").value),
    physicsChemistry: Number(document.getElementById("physicsChemistry").value),
  };

  // 🔥 加權總分
  const total =
    data.chinese * 4 +
    data.english * 4 +
    data.math * 4 +
    data.science * 2 +
    data.physicsChemistry * 2 +
    data.civics * 2 +
    data.history * 2 +
    data.geography * 2;

  // 🔥 總權重（用來算平均）
  const weight = 4 + 4 + 4 + 2 + 2 + 2 + 2+2; // = 22

  const avg = total / weight;

  document.getElementById("inputData").innerHTML = `
    <p>國文：${data.chinese}</p>
    <p>英文：${data.english}</p>
    <p>數學：${data.math}</p>
    <p>自然：${data.science}</p>
    <p>公民：${data.civics}</p>
    <p>歷史：${data.history}</p>
    <p>地理：${data.geography}</p>
    <p>自然（物理/化學）：${data.physicsChemistry}</p>
  `;

  document.getElementById("result").innerHTML = `
    <h3>加權總分：${total}</h3>
    <h3>加權平均：${avg.toFixed(2)}</h3>
  `;
}