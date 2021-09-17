import "/src/styles.css";

const onClickAdd = () => {
  // テキストぼっくすの値を所得し初期化する🟡ここわからん
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // domの生成はクリエイトエレメントって関数使うみたい
  // div生成
  const div = document.createElement("div");
  div.className = "list-raw";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // ---------------// bボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    console.log("clickされた");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "消去";
  deleteButton.addEventListener("click", () => {
    // リストから消去
  });

  // --------------

  // divタグの子要素に各区要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加🟡ここも三角
  document.getElementById("incomplete-list").appendChild(div);
};

// ここの意味わからない。イベントについて復習する🟡
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
