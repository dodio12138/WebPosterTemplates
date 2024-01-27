const book = document.getElementsByClassName('book')[0];

const bg = document.getElementsByClassName('backgroundtexts')[0];

const gen = document.getElementsByClassName('gen')[0];


gen.addEventListener("click", function () {
    if (document.getElementsByClassName('booknames')[0]) {
        document.getElementsByClassName('booknames')[0].remove();
    };
    if (bg.children) {
        while (bg.firstChild) {
            bg.removeChild(bg.firstChild);
        };
    }

    const booknames = document.createElement('div');
    booknames.className = 'booknames';
    book.appendChild(booknames);
    const names = document.getElementsByClassName('textbook')[0];
    var text = names.value;
    var lines = text.split('\n');

    for (var i = 0; i < lines.length; i++) {
        const name = document.createElement('div');
        name.className = 'name';
        name.innerHTML = lines[i];
        booknames.appendChild(name);
    }

    const bgtextin = document.getElementsByClassName('textbg')[0];
    var textbg = bgtextin.value;
    var linesbg = textbg.split('\n');

    for (var i = 0; i < linesbg.length; i++) {
        const bgc = document.createElement('div');
        bgc.className = 'backgroundtext';
        if(i%2==0){
            bgc.style.transform = "translateX(-2em)";
        }
        bgc.innerHTML = linesbg[i];
        bg.appendChild(bgc);
    }
});



