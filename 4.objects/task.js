function Student(name, gender, age) {
  this.name=name;
  this.gender=gender;
  this.age=age;
}
  const studentOne = new Student("Иван", "Мужчина", 25);
  const studentTwo = new Student("Олеся", "Женщина", 24);
  const studentThree = new Student("Олег", "Мужчина", 27);

//console.log(studentOne.gender);
//console.log(studentTwo.name);
//console.log(studentThree.age);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

studentOne.setSubject("Алгебра");
studentTwo.setSubject("Информатика");
studentThree.setSubject("Английский");

//console.log(studentOne.subject);
//console.log(studentTwo.subject);
//console.log(studentThree.subject);

Student.prototype.addMark(mark) = function (...marks){
  if (this.marks === undefined){
    
  }
}

