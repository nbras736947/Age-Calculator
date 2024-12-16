function calculateAge() {

    var birthdate = document.getElementById("birthdate").value;

    if (birthdate === "") {

        document.getElementById("result").innerText = "يرجى إدخال تاريخ الميلاد.";

        return;

    }

    var birthDate = new Date(birthdate);

    var today = new Date();

    var ageYears = today.getFullYear() - birthDate.getFullYear();

    var ageMonths = today.getMonth() - birthDate.getMonth();

    var ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {

        ageMonths--;

        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();

    }

    if (ageMonths < 0) {

        ageYears--;

        ageMonths += 12;
          }

    document.getElementById("result").innerText = "عمرك هو " + ageYears + " سنة، " + ageMonths + " شهر، و" + ageDays + " يوم.";

}

function resetCalculator() {

    document.getElementById("birthdate").value = "";

    document.getElementById("result").innerText = "";

}


 