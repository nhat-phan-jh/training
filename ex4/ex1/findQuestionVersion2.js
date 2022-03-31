//question to handle
//children to store answers of parent
//content is an attribute to store the description of the element
// list back is an attribute to store list questions when you back to previous questions
let questions = {
  headQuestion: {
    childrens: ["diChoi", "anUong"],
    content: "Trang chủ",
    listBack: [],
    parent: "",
  },
  anUong: {
    childrens: [],
    content: "Ăn uống",
    listBack: ["diChoi", "anUong"],
    parent: "headQuestion",
  },
  diChoi: {
    childrens: ["eoGio", "trungLuong", "cuLaoXanh"],
    content: "Đi chơi",
    listBack: ["diChoi", "anUong"],
    parent: "headQuestion",
  },
  eoGio: {
    childrens: ["diBoi", "ngamSanHo", "hongGio"],
    content: "Eo Gió",
    listBack: ["diChoi", "anUong"],
    parent: "diChoi",
  },
  trungLuong: {
    childrens: [],
    content: "Trung Lương",
    listBack: ["diChoi", "anUong"],
    parent: "diChoi",
  },
  cuLaoXanh: {
    childrens: [],
    content: "Cù Lao Xanh",
    listBack: ["diChoi", "anUong"],
    parent: "diChoi",
  },
  diBoi: {
    childrens: ["macDo", "khongMacDo"],
    content: "Đi bơi",
    parent: "eoGio",
    listBack: ["eoGio", "trungLuong", "cuLaoXanh"],
  },
  macDo: {
    childrens: [],
    content: "Mặc đồ",
    listBack: ["diBoi", "ngamSanHo", "hongGio"],
    parent: "diBoi",
  },
  khongMacDo: {
    childrens: [],
    content: "Không mặc đồ",
    parent: "diBoi",
    listBack: ["diBoi", "ngamSanHo", "hongGio"],
  },
  ngamSanHo: {
    listBack: ["eoGio", "trungLuong", "cuLaoXanh"],
    content: "Ngắm san hô",
    childrens: ["ngamMotLan", "ngamNhiuLan"],
    parent: "eoGio",
  },
  hongGio: {
    listBack: ["eoGio", "trungLuong", "cuLaoXanh"],
    content: "Hóng Gió",
    childrens: ["ngamMotLan", "ngamNhiuLan"],
    parent: "eoGio",
  },
  ngamMotLan: {
    childrens: [],
    content: "Ngắm một lần",
    listBack: ["diBoi", "ngamSanHo", "hongGio"],
    parent: "ngamSanHo",
  },
  ngamNhiuLan: {
    childrens: [],
    content: "Ngắm nhiều lần",
    listBack: ["diBoi", "ngamSanHo", "hongGio"],
    parent: "ngamSanHo",
  },
};

// get ulListQuestion to containt init list question
let ulListQuestion = document.getElementById("listQuestion");
// init lick back of question is empty
let listBack = [];
// init parent is headQuestion, choise eadQuestion is parent default
let parent = "headQuestion";
// set tile of page defacut is "Trang Chủ" when users go to the website
document.getElementById("title").innerHTML = "Trang chủ";

//Loop to create element of list init question
// create tag li to handle content handle event when clicking
for (let i in questions.headQuestion.childrens) {
  let liElementOfListQuetion = createLiElement(
    questions.headQuestion.childrens[i]
  );
  ulListQuestion.appendChild(liElementOfListQuetion);
}
//function create createLiElement to add to ullistquestion
const createLiElement = (value) => {
  let liElementOfListQuetion = document.createElement("li");
  liElementOfListQuetion.appendChild(document.createTextNode(value));
  //add event handle to li when it have to click will change question
  liElementOfListQuetion.addEventListener("click", (e) => {
    changeList(e.target.innerText);
  });
  return liElementOfListQuetion;
};
//function handle change list when have the user click to question
// it will check if the question have not to answer then the function will break
// else function will get data from questions and render list li to  ulListQuestion
const changeList = (event) => {
  if (questions[`${event}`].childrens.length > 0) {
    parent = event;
    document.getElementById("title").innerHTML = questions[`${event}`].content;
    ulListQuestion.innerHTML = "";
    for (let i in questions[`${event}`].childrens) {
      let liElementOfListQuetion = createLiElement(
        questions[`${event}`].childrens[i]
      );
      ulListQuestion.appendChild(liElementOfListQuetion);
    }
  }
};

//return SetBack Question is a function to user back to listback question
// it will find the parents of question and list back form 'questions'
// then set title and change parent of list current

const returnListBackQuestion = () => {
  let listTemp = questions[`${parent}`].childrens;
  listBack = questions[`${listTemp[0]}`].listBack;
  ulListQuestion.innerHTML = "";
  for (let i in listBack) {
    let liElementOfListQuetion = createLiElement(listBack[i]);
    ulListQuestion.appendChild(liElementOfListQuetion);
  }
  parent = questions[`${parent}`].parent;
  document.getElementById("title").innerHTML = questions[`${parent}`].content;
};
//set question is a function to create a new question and add to list question
const setQuestion = () => {
  // choose the first value to set id of question
  let textChild = document.getElementById("myTextarea").value.split(" ")[0];
  // if the question is exist or does not exist, otherwise, the function will break.
  if (!questions[`${textChild}`]) {
    //constructor question with default value
    questions[`${parent}`].childrens.push(textChild);
    questions[`${textChild}`] = {
      childrens: [],
      content: textChild,
      listBack: questions[`${questions[`${parent}`].childrens[0]}`].listBack,
      parent: parent,
    };

    let listChildrent = questions[`${parent}`].childrens;
    // loop to set child of parent in current list question
    for (let i in listChildrent) {
      if (questions[`${listChildrent[i]}`].childrens.length > 0) {
        let listTemp = questions[`${listChildrent[i]}`].childrens;
        for (let j = 0; j < listTemp.length; j++) {
          questions[`${listTemp[j]}`].listBack.push(textChild);
        }
      }
    }
    changeList(parent);

    document.getElementById("myTextarea").value = "";
  } else {
    alert("The question is existence");
  }
};
