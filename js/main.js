// זכויות יוצרים
console.log("אתר זה נכתב בדם על ידי סיגל ועדי")
console.log("!!!תיזהרו לקחת קוד")


// Time Clock
    var time = setInterval(function () {
        var date = new Date();
        document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }, 1000);


// calculetor From Borth
    const btnCalc = document.getElementById('btnCalc');
    async function fetchWeeks() {
        const response = await fetch('/weeks.json');
        return await response.json();
    }
    async function displayWeeks() {
        const weeks = await fetchWeeks();
        return await weeks;
    }
    async function appendWeeksElement(numberOfWeeks, weeksList, day) {
        try {
            console.log(numberOfWeeks);
            let weekArr = await weeksList.filter(weeksList => weeksList.week == numberOfWeeks);
            let weekInfo = weekArr[0].week;
            let monthInfo = weekArr[0].month;
            let aboutInfo = weekArr[0].about;
            let testInfo = weekArr[0].test;
            document.getElementById("containerDiv").innerHTML = `<span>מספר שבוע:</span>
            ${weekInfo} <br> <span>פלוס ימים: </span> ${day} <br> <span>מה עובר עליך:</span>
            ${aboutInfo} <br> <span>בדיקות השבוע:</span> ${testInfo}`;
        }
        catch {
            document.getElementById("containerDiv").innerHTML = "התאריך שנבחר הוא מעבר לטווח, אנא עדכני את התאריך";
        }
        }
    btnCalc.addEventListener('click', async function () {
        document.getElementById("result").style.display = "inline-block";
        let start = document.getElementById('start');
        let startValue = new Date(start.value);
        console.log(startValue);
        const oneDay = 1000 * 60 * 60 * 24;
        let today = new Date();
        console.log(today);
        console.log("ימי הריון")
        console.log(Math.ceil((today - startValue) / oneDay));
        const days = Math.ceil((today - startValue) / oneDay);
        const weeks = Math.floor(days / 7);
        console.log("מספר שבועות")
        console.log(weeks);
        console.log("מספר ימים")
        const daysLeft = days % 7;
        console.log(daysLeft);
        let jsonWeeks = await displayWeeks();
        console.log(jsonWeeks)
        appendWeeksElement(weeks, jsonWeeks, daysLeft);
        
    });


    // discount 30%
    const ul = document.getElementById('myUL');
    const inputText = document.getElementById('myInput');
    const btn = document.getElementById('createNewElement');
    if (localStorage.getItem("li") == null) {
        ul.innerHTML = ul.innerHTML
    } else {
        ul.innerHTML = localStorage.getItem("li");
    }
    function getClearBox(event) {
        event.target.classList.toggle("checked");
    }
    ul.addEventListener('click', getClearBox);
    function saveResponses() {
        localStorage.setItem("li", ul.innerHTML);
    }
    btn.addEventListener('click', function () {
        if (inputText.value == "") {
            alert("אנא הכניסי מוצר!");
        }else {
            clearList.style.display = "inline-block";
            const li = document.createElement("li");
            li.innerText = inputText.value;
            ul.appendChild(li);
            inputText.value = "";
            saveResponses()
        }
    });


    // Clear Button Shop List
    const clearList = document.getElementById('clearBtn');
    clearList.addEventListener('click', function () {
        this.style.display = "none";
        localStorage.removeItem("li");
        ulItems();
        alert("Reset/אופס")
    })
    function ulItems() {
        var l, i;
        ul.innerHTML = "";
        for (i = 0; i < localStorage.length; i++) {
            x = localStorage.key(i);
            ul.innerText = "";
        }
    }
