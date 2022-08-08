const Maosh = document.querySelector("[data-input1]")
const Soliq = document.querySelector("[data-input2]")
const Yolkira = document.querySelector("[data-input3]")
const Obed = document.querySelector("[data-input4]")
const Rozgor = document.querySelector("[data-input5]")
const Select = document.querySelector("select")
const Natija = document.querySelector("[data-h1]")
const Tablica = document.querySelector(".som")

console.log(Maosh)
console.log(Soliq)
console.log(Yolkira)
console.log(Obed)
console.log(Rozgor)
console.log(Select)


const Bugalteriya = () => {
    // inputga Value qoshish orqali inputning ichiga ypzilgan qiymatini olinadi
    console.log(Maosh.value)
    console.log(Soliq.value)
    console.log(Yolkira.value)
    console.log(Obed.value)
    console.log(Rozgor.value)
    console.log(Select.value)

    const MaoshValue = Maosh.value
    const SoliqValue = Soliq.value
    const YolkiraValue = Yolkira.value
    const ObedValue = Obed.value
    const RozgorValue = Rozgor.value
    const SelectValue = Select.value

    if (SelectValue === "-") {
        Natija.innerHTML = Number(MaoshValue) - Number(SoliqValue) - Number(YolkiraValue) - Number(ObedValue) - Number(RozgorValue) + " so'm"
    }
    else if (SelectValue === "+") {
        Natija.innerHTML = Number(MaoshValue) + Number(SoliqValue) + Number(YolkiraValue) + Number(ObedValue) + Number(RozgorValue) + " so'm"
    }
    else if (SelectValue === "*") {
        Natija.innerHTML = Number(MaoshValue) * Number(SoliqValue) * Number(YolkiraValue) * Number(ObedValue) * Number(RozgorValue) + " so'm"
    }
    else{
        Natija.innerHTML = Number(MaoshValue) / Number(SoliqValue) / Number(YolkiraValue) / Number(ObedValue) / Number(RozgorValue) + " so'm"
    }

    Tablica.style.background = "orange"
Natija.style.color = "green"
// Natija.innerHTML + Text
}
