(()=>{
  //即時関数。ここで定義した変数はこのファイル内でしか適用されなくなる。グローバル汚染の防止のため。
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const nuvLen = $nav.length;

  //初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  //クリックイベント
  const handleClick = (e) => {
    //イベントを全てkillする
    e.preventDefault();

    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav, contentをリセットする。
    let index = 0;
    while(index < nuvLen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化
    $tab.querySelectorAll('[data-content="' + targetVal +'"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
    console.log('$this', $this.dataset.nav);
  };

  //全nav要素に対して関数を適応
  let index = 0;
  while(index < nuvLen){
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }

})();
