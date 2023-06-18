const btn = document.getElementById("generateButton");
const passScreen = document.getElementById("showPass");
const check1 = document.getElementById("onebox");
const check2 = document.getElementById("twobox");
const check3 = document.getElementById("threebox");

check1.addEventListener("click", showStrong);
function showStrong() {
  btn.addEventListener("click", GenerateStrongPass);
  function GenerateStrongPass() {
    class StrongPassword {
      constructor(pass) {
        this.pass = "";
      }
      strongPass(len) {
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let SpecChar = "@#$%^&*!";
          for (let i = 0; i < len; i++) {
            this.pass += letters[Math.floor(Math.random() * letters.length)];
            this.pass += numbers[Math.floor(Math.random() * numbers.length)];
            this.pass += SpecChar[Math.floor(Math.random() * SpecChar.length)];
          }
          this.pass = this.pass.substring(0, len);
        passScreen.innerText = this.pass;
      }
    }

    let s = new StrongPassword();
    s.strongPass(10);
  }
}

// For Weak Password
check2.addEventListener("click", showWeak);
function showWeak() {
  btn.addEventListener("click", GenerateWeakPass);
  function GenerateWeakPass() {
    class WeakPassword {
      constructor(pass) {
        this.pass = "";
      }
      weakPass(len) {
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
          for (let i = 0; i < len; i++) {
            this.pass += letters[Math.floor(Math.random() * letters.length)];
            this.pass += numbers[Math.floor(Math.random() * numbers.length)];
          }
          this.pass = this.pass.substring(0, len);
        passScreen.innerText = this.pass;
      }
    }

    let s = new WeakPassword();
    s.weakPass(7);
  }
}

//For Funny Password
check3.addEventListener("click", showFunny);
function showFunny() {
  btn.addEventListener("click", GenerateFunnyPass);
  function GenerateFunnyPass() {
    class FunnyPassword {
      constructor(pass) {
        this.pass = "";
      }
      funnyPass(len) {
        let letters = [
          "ineedapassword",
          "changeme",
          "secret",
          "iamforgetful",
          "newpassword",
          "IamACompleteIdiot",
          "yetanotherpassword",
          "nomorepasswords",
          "cantremember",
          "passwordforoldpeople",
        ];
          this.pass += letters[Math.floor(Math.random() * letters.length)];

          this.pass = this.pass.substring(0, len);

        passScreen.innerText = this.pass;
      }
    }

    let s = new FunnyPassword();
    s.funnyPass();
  }
}
