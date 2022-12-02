var functiondebug = 0;
var checked = 0;
function displayMenu() {
    if (functiondebug){
        console.log("displaymenu");
    }
    //console.log("hi");
    //document.getElementById("myBtn").style.height = "50px";
    if (checked){
        //html_div.style.height = "50px";
        checked = 0;
    }
    else{
        //html_div.style.height = "800px";
        checked = 1;
    }
    
}

function scrollToVerse(versereference){
    if (functiondebug){
        console.log("scrolltoverse");
    }
    const element = document.getElementById(versereference);
    element.scrollIntoView();
    window.scrollBy(0,-80);
}

function highlight(text, id) {
    if (functiondebug){
        console.log("highlight");
    }
  var inputText = document.getElementById(id);
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}

function showText(booknumber,chapternumber,closemobile,versereference) {
    if (functiondebug){
        console.log("showtext");
    }
    var book_id;
    var chapter_id;
    var html_div;
    //book_div
    if(booknumber){
        if (currentBook){
            book_id = "book_" + currentBook;
            html_div = document.getElementById(book_id);
            html_div.style.display = "none";
            if (currentChapter > -1){
                chapter_id = "chapter_" + currentChapter;
                html_div = document.getElementById(chapter_id);
                //console.log(chapter_id1);
                html_div.style.display = "none";
            }
        }
        //console.log(currentBook);
        book_id = "book_" + booknumber;
        html_div = document.getElementById(book_id);
        html_div.style.display = "block";

        currentBook = booknumber;
    }

    //chapter_div
    if (chapternumber > -1){
        //console.log("Current book: " + currentBook);
        //console.log("Current chapter: " + currentChapter);
        if (currentChapter > -1){
            chapter_id = "chapter_" + currentChapter;
            html_div = document.getElementById(chapter_id);
            html_div.style.display = "none";
        }
        chapter_id = "chapter_" + chapternumber;
        html_div = document.getElementById(chapter_id);
        html_div.style.display = "block";

        currentChapter = chapternumber;   
    }
    if(closemobile){
        var html_div = document.getElementById("menu");
        const checkbox0 = document.getElementById('menu');
        const checkbox1 = document.getElementById("item-1");
        const checkbox2 = document.getElementById("item-2");
        const checkbox3 = document.getElementById("item-3");
        if (checkbox3.checked){
            checkbox3.checked = !checkbox3.checked;
            console.log("hii3");
        }
        if (checkbox2.checked){
            checkbox2.checked = !checkbox2.checked;
            console.log("hii2");
        }
        if (checkbox1.checked){
            checkbox1.checked = !checkbox1.checked;
            console.log("hii1");
        }
        checkbox0.checked = !checkbox0.checked;
        displayMenu()
    }
    updateHeader();
    if(versereference){
        var element = document.getElementById(versereference);
        var result = element.innerHTML;
        scrollToVerse(versereference);
        highlight(result, versereference);
        //console.log("yes");
    }
    else{
        window.scrollTo(0, 0);
    }
    
}

function correctPageLoad() {
    if (functiondebug){
        console.log("correctpageload");
    }
    var url = window.location.href;
    var book = qs(url,'book')
    var book_name = "book_" + book;
    var html_div;
    //console.log(book_name);
    if (book){
        html_div = document.getElementById(book_name);
        html_div.style.display = "block";

        if (currentBook && currentBook != book){
            book_id = "book_" + currentBook;
            html_div = document.getElementById(book_id);
            html_div.style.display = "none";
            }
        if (currentChapter > -1){
                    chapter_id = "chapter_" + currentChapter;
                    html_div = document.getElementById(chapter_id);
                    //console.log(chapter_id1);
                    html_div.style.display = "none";
                }

        currentBook = book;
        var chapter = qs(url,'chapter')
        if (chapter > -1){
            var chapter_name = "chapter_" + chapter;
            //console.log(chapter_name + "&&&");
            html_div = document.getElementById(chapter_name);
            html_div.style.display = "block";
            currentChapter = chapter;
        }  
    }
    else{
        var default_page = "book=001&chapter=1"
        html_div = document.getElementById("book_001");
        html_div.style.display = "block";
        currentBook = "001";
        html_div = document.getElementById("chapter_0");
        html_div.style.display = "block";
        currentChapter = "0";
    }
    updateHeader();
    //window.scrollTo(0, 0);
}

function chapterMenuReveal(menunumber) { 
    if (functiondebug){
        console.log("chaptermenureveal");
    }  
    var html_div;
    //book_div
    if (currentMenu){
        var menu_id1 = "menu_" + currentMenu;
        html_div = document.getElementById(menu_id1);
        html_div.style.display = "none";
    }
    //console.log("Menu Number: " + menunumber);
    //console.log(currentMenu);
    var menu_id = "menu_" + menunumber;
    html_div = document.getElementById(menu_id);
    html_div.style.display = "block";

    currentMenu = menunumber;
}


//grab URL id
function qs(url, key) {
    if (functiondebug){
        console.log("qs");
    }
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('#') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars[key];

    window.onload = function() {
    correctPageLoad();
    //console.log("Hi");
    };
}

function chapterUp(){
    if (functiondebug){
        console.log("chapterup");
    }
    var chapter_id = "chapter_" + currentChapter;
    var html_div = document.getElementById(chapter_id);
    html_div.style.display = "none";
    currentChapter++;
    if (currentChapter > 1864){
        currentChapter = 1864;
    }
    else if (currentChapter == 1190){
        currentChapter = 1191;
    }
    else if (currentChapter == 929){
        currentChapter = 930;
    }

    chapter_id = "chapter_" + currentChapter;
    html_div = document.getElementById(chapter_id);
    html_div.style.display = "block";
    //console.log(currentBook);

    getBookByChapter();
    window.scrollTo(0, 0);
    /*html_div = document.getElementById("Miracles_menu");
    html_div.classList.toggle("active");
    console.log("hi");*/
}

function chapterDown(){
    if (functiondebug){
        console.log("chapterdown");
    }
    var chapter_id1 = "chapter_" + currentChapter;
    var w = document.getElementById(chapter_id1);
    w.style.display = "none";
    currentChapter--;
    if (currentChapter < 0){
        currentChapter = 0;
    }
    else if (currentChapter == 1190){
        currentChapter = 1189;
    }
    else if (currentChapter == 929){
        currentChapter = 928;
    }

    var chapter_id = "chapter_" + currentChapter;
    var y = document.getElementById(chapter_id);
    y.style.display = "block";

    getBookByChapter();
    window.scrollTo(0, 0);
}

var chapterListings = [0, 50, 90, 117, 153, 187, 211, 232, 236, 267, 291, 313, 338, 367, 403, 413, 426, 436, 478, 628, 659, 671, 679, 745, 797, 802, 850, 862, 876, 879, 888, 889, 893, 900, 903, 906, 909, 911, 925, 930, 958, 974, 998, 1019, 1047, 1063, 1079, 1092, 1098, 1104, 1108, 1112, 1117, 1120, 1126, 1130, 1133, 1134, 1147, 1152, 1157, 1160, 1165, 1166, 1167, 1168, 1191, 1199, 1208, 1215, 1223, 1231, 1240, 1251, 1260, 1268, 1274, 1283, 1291, 1303, 1315, 1326, 1333, 1341, 1350, 1362, 1370, 1379, 1386, 1391, 1399, 1409, 1419, 1427, 1434, 1443, 1452, 1460, 1827];

var chapterNames = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation", "Miracles", "Separation", "Perception", "Illusions", "Wholeness", "Lessons", "Kingdom", "Journey", "Atonement", "Sickness", "Ego", "Curriculum", "Guiltless", "Teaching", "Holy Instant", "Forgiveness", "Holy Relationship", "Dream", "Peace", "Holiness", "Reason", "Salvation", "War", "Specialness", "Justice", "Transition", "Healing", "Undoing", "Awakening", "Beginning", "Vision", "Workbook", "Manual"];

var firstChapterPT = [0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0];

function getBookByChapter1(){
    if (functiondebug){
        console.log("getbookbychapter1");
    }
    var bookNum;
    //console.log("Current book: " + currentBook);
    for (var i = 0; i <= chapterListings.length; i++){
        //console.log("chapterListings: " + chapterListings[i]);
        //console.log("Number(currentChapter): " + Number(currentChapter));
        if (Number(currentChapter) < chapterListings[i]){
            if (i < 10){
                bookNum = "00" + i;
            }
            else if (i < 100){
                bookNum = "0" + i;
            }
            showText(bookNum,currentChapter);
            currentBook = bookNum;
            window.location.href="#book="+currentBook + "&chapter="+currentChapter;
            break;
        }
        else{
            bookNum = '099';
            showText(bookNum,currentChapter);
            currentBook = bookNum;
            window.location.href="#book="+currentBook + "&chapter="+currentChapter;
        }
    }
    updateHeader();
}

function checkBook(book){
    if (functiondebug){
        console.log("checkbook");
    }
    return book <= currentChapter;
}

function getBookByChapter(){
    if (functiondebug){
        console.log("getbookbychapter");
    }
    var output = chapterListings.filter(checkBook);

    //console.log(output.length);
    var index = output.length;
    //console.log(index);
    if (index < 10){
        bookNum = "00" + index;
    }else if (i < 100){
        bookNum = "0" + index;
    }
    showText(bookNum,currentChapter);
    currentBook = bookNum;
    window.location.href="#book="+ currentBook + "&chapter="+ currentChapter;
    //updateHeader();
}

function predicate(x) { return x > 10 }
var output = chapterListings.filter(predicate);
var input = chapterListings.filter(function(x) { return !predicate(x) })


var oldBook;
function updateHeader(){
    if (functiondebug){
        console.log("updateheader");
    }
    var bookNum = Number(currentBook);
    //console.log(currentBook);
    var testamentBookNum = 39;
    document.getElementById("testament_title").innerHTML = "The Old Testament";
    var chapter = currentChapter - chapterListings[Number(currentBook) - 1] + 1;
    if (bookNum > 66){
        bookNum = bookNum - 66;
        testamentBookNum = 33;
        chapter = chapter + firstChapterPT[bookNum - 1] - 1;
        document.getElementById("testament_title").innerHTML = "The Present Testament";
        //console.log("chapter: " + chapter);
    }else if(bookNum > 39){
        bookNum = bookNum - 39;
        testamentBookNum = 27;
        document.getElementById("testament_title").innerHTML = "The New Testament";
    }
    document.getElementById("bookNum").innerHTML = "Book " + bookNum + " of " + testamentBookNum;
    document.getElementById("bookTitle").innerHTML = chapterNames[Number(currentBook) - 1] + " " + chapter;
    //document.getElementById("chapNum").innerHTML = chapter;
    var html_div = document.getElementById(oldBook + "_menu");
    if (oldBook){
        html_div.classList.remove("active");
    }
    oldBook = currentBook;
    html_div = document.getElementById(currentBook + "_menu");
    //console.log(currentBook + "_menu")
    //html_div = document.getElementById("Miracles_menu");
    html_div.classList.add("active");
    
}


function hideMenusInDevelopment(){
    
}