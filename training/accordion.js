(() => {
    class Accrodion {
        //初期化
        constructor(obj) {
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }

        //クリックされたら実行される処理
        clickHandler = (e) => {
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            if ($content.style.display === 'block') {
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        };
    }

    const fuckinAccordion = new Accrodion({
        hookName: '#js-faq',
        tagName: 'p'
    });

    const dummyAccordion = new Accrodion({
        hookName: '#js-accordion',
        tagName: 'a'
    });

    const miniAccordion = new Accrodion({
        hookName: '#js-accordion-mini',
        tagName: 'dt'
    });

})();   