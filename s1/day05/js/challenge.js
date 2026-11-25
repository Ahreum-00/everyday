const student = {
    name: "홍길동",
    year: 2,
    major: "컴퓨터공학",
};

console.log(student.name);
console.log(student.year);

student.year = 3;
student.email = "hong@test.com";

console.log(student.year);
console.log(student.email);


console.log(`${student.name} (${student.major} ${student.year}학년)`);




const scores = [
    { subject: "국어", score: 80 },
    { subject: "영어", score: 95 },
    { subject: "수학", score: 70 },
];

for (let i = 0; i < scores.length; i++){
    console.log(scores[i].subject + ": " + scores[i].score + "점");
}

function bestSubject(list) {
    let best = list[0];

    for (let i = 0; i < list.length; i++){
    if (best.score < list[i].score){
        best = list[i];}
    }
    return best.subject;
}

console.log(bestSubject(scores));

const code = "  hong@Test.COM  ";

console.log(code.trim().toLowerCase());
console.log(code.includes("@"));

const arr = "80,95,70".split(",");

let total = 0; 

for ( let i =0; i<arr.length; i++ ) {
 total = total + Number(arr[i]);
}

console.log(total);

const avg = (total/arr.length).toFixed(1); 


scores[3] = { subject: "과학", score: 88 };

console.log(scores.length);
console.log(scores[scores.length-1].subject);


function averageScore(list) {
    let total = 0;
    for ( let i =0; i < list.length; i++) {
        total = total + list[i].score;
    }
    return total/list.length;
}

console.log(averageScore(scores));


const dayText = "cs101,db201,cs103".toUpperCase().split(",").join("/");

console.log(dayText);


function makeEmail(name,domain){

    return `${name.trim().toLowerCase()}@${domain.trim().toLowerCase()}`;
}

console.log(makeEmail(" Kim", "TEST.com"));