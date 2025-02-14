const singIn = {
    userName: 'name',
    passWord: 'password',

    get firstInput() {
        return this.userName;
    },

    set firstInput(value) {
        if (!value || value.length < 3) {
            console.log("Name is too short");
            return;
        }
        this.userName = value;
    },

    get secondInput() {
        return this.passWord;
    },

    set secondInput(value2) {
        if (value2 === null || value2 === undefined) {
            console.log("Required input");
        } else {
            this.passWord = value2;
        }
    }
};


singIn.firstInput = "Robert";
//singIn.firstInput = "Ro";
//singIn.firstInput = " ";

singIn.secondInput = "newPass";
//singIn.secondInput = 0;
//singIn.secondInput = null;

console.log(singIn.firstInput);
console.log(singIn.secondInput);

