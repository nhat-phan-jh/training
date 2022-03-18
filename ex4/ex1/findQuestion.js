var questions = {
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

// function addelement() {
//   var completelist = document.getElementById("list");
//   console.log(questions.headQuestion.children.length);
//   for (let i = 0; i < questions.headQuestion.children.length; i++)
//     completelist.innerHTML +=
//       "<li onClick={()=>console.log(12)}>" +
//       questions[`${questions.headQuestion.children[i]}`].content +
//       "</li>";
// }
// addelement();

var ul = document.getElementById("list");
var listBack = [];
var parent = "headQuestion";
document.getElementById("title").innerHTML = "Trang chủ";
for (let i = 0; i < questions.headQuestion.childrens.length; i++) {
  let li = document.createElement("li");

  // li.addEventListener(
  //   "onClick",
  //   changeList
  // );
  li.appendChild(document.createTextNode(questions.headQuestion.childrens[i]));
  li.addEventListener("click", (e) => {
    e.currentTarget; // always returns "a" element
    e.target; // may return "a" or "span"
    // console.log(e.target.innerText);
    changeList(e.target.innerText);
  });

  ul.appendChild(li);
}
const changeList = (event) => {
  if (questions[`${event}`].childrens.length > 0) {
    parent = event;
    document.getElementById("title").innerHTML = questions[`${event}`].content;
    ul.innerHTML = "";
    for (let i = 0; i < questions[`${event}`].childrens.length; i++) {
      let li = document.createElement("li");

      // li.addEventListener(
      //   "onClick",
      //   changeList
      // );
      li.appendChild(
        document.createTextNode(questions[`${event}`].childrens[i])
      );
      li.addEventListener("click", (e) => {
        e.currentTarget; // always returns "a" element
        e.target; // may return "a" or "span"
        // console.log(e.target.innerText);
        changeList(e.target.innerText);
      });

      ul.appendChild(li);
    }
  }

  // var ul = document.getElementById("list");
};

const changeQuestion = () => {
  let listTemp = questions[`${parent}`].childrens;
  listBack = questions[`${listTemp[0]}`].listBack;

  ul.innerHTML = "";
  for (let i = 0; i < listBack.length; i++) {
    let li = document.createElement("li");

    // li.addEventListener(
    //   "onClick",
    //   changeList
    // );
    li.appendChild(document.createTextNode(listBack[i]));
    li.addEventListener("click", (e) => {
      e.currentTarget; // always returns "a" element
      e.target; // may return "a" or "span"
      // console.log(e.target.innerText);
      changeList(e.target.innerText);
    });

    ul.appendChild(li);
  }
  parent = questions[`${parent}`].parent;
  document.getElementById("title").innerHTML = questions[`${parent}`].content;
  console.log(parent);
};
const setQuestion = () => {
  // document.getElementById("myTextarea").value = "Fifth Avenue, New York City";
  // console.log(document.getElementById("myTextarea").value.split(" ")[0]);
  //   console.log(document.getElementById("myTextarea").value);

  let textChild = document.getElementById("myTextarea").value.split(" ")[0];
  if (!questions[`${textChild}`]) {
    questions[`${parent}`].childrens.push(textChild);
    questions[`${textChild}`] = {
      childrens: [],
      content: textChild,
      listBack: questions[`${questions[`${parent}`].childrens[0]}`].listBack,
      parent: parent,
    };

    let listChildrent = questions[`${parent}`].childrens;
    console.log(listChildrent);
    for (let i = 0; i < listChildrent.length; i++) {
      if (questions[`${listChildrent[i]}`].childrens.length > 0) {
        let listTemp = questions[`${listChildrent[i]}`].childrens;
        for (let j = 0; j < listTemp.length; j++) {
          console.log(questions[`${listTemp[j]}`]);
          questions[`${listTemp[j]}`].listBack.push(textChild);
        }
      }
    }
    changeList(parent);

    document.getElementById("myTextarea").value = "";
  }else{
     alert("Câu hỏi đã tồn tại");
  }
};
