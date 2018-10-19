var Human = {
    name: '',
    age: '',
    gender: '',

    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    },

    setAge: function (age) {
        this.age = age;
    },
    getAge: function () {
        return this.age;
    },

    setGender: function (gender) {
        this.gender = gender;
    },
    getGender: function () {
        return this.gender;
    },

    getInfo: function () {
        alert("Name: " + this.name);
        alert("Age: " + this.age);
        alert("Gender: " + this.gender);
    }
}

Human.name = prompt("Enter your name: ");
Human.age = prompt("Enter your age: ");
Human.gender = prompt("Enter your gender: ");

document.write(Human.getName() + " ");
document.write(Human.getAge() + " ");
document.write(Human.getGender() + " ");

Human.getInfo();
