
// // TUESDAY
//   const [inputTues, setInputTues] = useState("");
//   const [itemsTues, setItemsTues] = useState([]);
//   const submitTasksTues = () => {
//   Axios.post('http://localhost:3001/api/inserttuesday',{
//     tasksOfDay: inputTues
//   }).then(() => {
//     alert('successful insert')
//   })
// };
// function addItemTues(event) {
//   setItemsTues(prevData => {
//       return [...prevData, inputTues];
//   });
//   setInputTues("");
//   submitTasksTues();
//   };
// function removeItemTues(id) {
//   setItemsTues(prevData => {
//       return prevData.filter((item, index) => {
//           return index !== id;
//       })
//   });
// };

// // WEDNESDAY
//   const [inputWed, setInputWed] = useState("");
//   const [itemsWed, setItemsWed] = useState([]);
//   const submitTasksWed = () => {
//     Axios.post('http://localhost:3001/api/insertwednesday',{
//       tasksOfDay: inputWed
//     }).then(() => {
//       alert('successful insert')
//     })
//   };
// function addItemWed(event) {
//   setItemsWed(prevData => {
//       return [...prevData, inputWed];
//   });
//   setInputWed("");
//   submitTasksWed();
//   };
// function removeItemWed(id) {
//   setItemsWed(prevData => {
//       return prevData.filter((item, index) => {
//           return index !== id;
//       })
//   });
// ;}

// // THUSDAY
//   const [inputThusd, setInputThusd] = useState("");
//   const [itemsThusd, setItemsThusd] = useState([]);
//   const submitTasksThusd = () => {
//     Axios.post('http://localhost:3001/api/insertthusday',{
//       tasksOfDay: inputThusd
//     }).then(() => {
//       alert('successful insert')
//     })
// };
// function addItemThusd(event) {
//   setItemsThusd(prevData => {
//       return [...prevData, inputThusd];
//   });
//   setInputThusd("");
//   submitTasksThusd();
//   };
// function removeItemThusd(id) {
//   setItemsThusd(prevData => {
//       return prevData.filter((item, index) => {
//           return index !== id;
//       })
//   });
// };

// // FRIDAY
// const [inputFri, setInputFri] = useState("");
//   const [itemsFri, setItemsFri] = useState([]);
// const submitTasksFri = () => {
//   Axios.post('http://localhost:3001/api/insertfriday',{
//     tasksOfDay: inputFri
//   }).then(() => {
//     alert('successful insert')
//   })
// };
// function addItemFri(event) {
//   setItemsFri(prevData => {
//       return [...prevData, inputFri];
//   });
//   setInputFri("");
//   submitTasksFri();
//   };
// function removeItemFri(id) {
//   setItemsFri(prevData => {
//       return prevData.filter((item, index) => {
//           return index !== id;
//       })
//   });
// };

// // SATURDAY
//   const [inputSat, setInputSat] = useState("");
//   const [itemsSat, setItemsSat] = useState([]);
//   const submitTasksSat = () => {
//   Axios.post('http://localhost:3001/api/insertsaturday',{
//     tasksOfDay: inputSat
//   }).then(() => {
//     alert('successful insert')
//   })
// };
// function addItemSat(event) {
//   setItemsSat(prevData => {
//       return [...prevData, inputSat];
//   });
//   setInputSat("");
//   submitTasksSat();
//   };
// function removeItemSat(id) {
//   setItemsSat(prevData => {
//       return prevData.filter((item, index) => {
//           return index !== id;
//       })
//   });
// };

// // SUNDAY
//   const [inputSun, setInputSun] = useState("");
//   const [itemsSun, setItemsSun] = useState([]);
//   const submitTasksSun = () => {
//   Axios.post('http://localhost:3001/api/insertsunday',{
//     tasksOfDay: inputSun
//   }).then(() => {
//     alert('successful insert')
//   })
// };
// function addItemSun(event) {
//   setItemsMon(prevData => {
//       return [...prevData, inputSun];
//   });
//   setInputMon("");
//   submitTasksSun();
//   };
// function removeItemSun(id) {
//   setItemsSun(prevData => {
//       return prevData.filter((item, index) => {
//           return index !== id;
//       })
//   });
// };