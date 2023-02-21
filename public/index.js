const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

const FormComponent = class {
  constructor() {
    this.selectElement = document.querySelector("select[name='status']");

    // bind event listeners
    this.selectElement.addEventListener("change", (event) =>
      this.onChangeSelect(event)
    );

    const form = document.forms[0];
    form.addEventListener("submit", (event) => this.onSubmit(event));
  }

  start() {
    for (let o in oppoStatus) {
      const option = document.createElement("option");
      option.value = oppoStatus[o].K_OPPO_STATUS;
      option.text = oppoStatus[o].STATUS;

      this.selectElement.appendChild(option);
    }
  }

  findOppo(status) {
    return oppoStatus.find(
      (option) => option.K_OPPO_STATUS === parseInt(status)
    );
  }

  onChangeSelect(event) {
    const oppo = this.findOppo(event.target.value);

    const successElement = document.querySelector("input[name='success']");
    successElement.value = oppo.SUCCESS;
  }

  onSubmit(event) {
    event.preventDefault();

    const oppo = this.findOppo(this.selectElement.value);

    const outputElement = document.querySelector(".output");
    const output = {
      status: oppo.K_OPPO_STATUS,
      success: oppo.SUCCESS,
    };
    outputElement.innerHTML = JSON.stringify(output);
  }
};

const fc = new FormComponent();
fc.start();
