
export const getAge= (birthYear, currentYear) => currentYear-birthYear;

export const getAgeGroup = (age) => {
    if (age>=0&&age<=3){return "Toddler"}
    if (age>=4&&age<=12){return "Kid"}
    if (age>=13&&age<=19){return "Teenager"}
    if (age>=20&&age<=39){return "Adult"}
    if (age>=40){return "Old"}
}
/* 
export function getAgeForPerson(person, currentYear){
        return currentYear-person.birthYear;
}                                                                             
 */
export const getAgeForPerson=(person, currentYear) => currentYear-person.birthYear;

function LogThis(message) {
    console.log(message);
  }
  LogThis("Logging this message");
  
  const logThis2 = function (message) {
    console.log(message);
  };
  
  logThis2("Logging this message too");

const person = {
    name: "Marcus",
    birthYear: 1972,
    isTeacher: true,
  };
  console.log(getAgeForPerson(person,2022));
  console.log(logThis2);
  console.log(logThis2.toString());