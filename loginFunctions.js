document.addEventListener("DOMContentLoaded", function () {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var year = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007];
    var choiceofmonth, choiceofday, choiceofyear = "";

    month.map((choice, i) => {
        choiceofmonth += `<option value="${choice}" id="${i}">${choice}</option>`;
    });
    document.getElementById("month").innerHTML = choiceofmonth;

    day.map((choice, i) => {
        choiceofday += `<option value="${choice}" id="${i}">${choice}</option>`;
    });
    document.getElementById("day").innerHTML = choiceofday;

    year.map((choice, i) => {
        choiceofyear += `<option value="${choice}" id="${i}">${choice}</option>`;
    });
    document.getElementById("year").innerHTML = choiceofyear;


    const openModal = document.getElementById("btnRegister");
    const closeModal = document.getElementById("closeModal");
    const modal = document.getElementById("registerModal");

    openModal.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});

