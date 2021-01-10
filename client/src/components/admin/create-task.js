import React, { useState, useEffect } from 'react';
import TodoItem from "./TodoItem";
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import "./create-task.css";



const useStyles = makeStyles((theme) => ({
  root: {
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
  },
  // typografy: {
  //   display: 'inline',
  //   justifycontent: 'space-between',
  // },


  stylesForButn: {
    borderRadius: 25,
    width: '45px',
    height: '25px',
    margin: '10px 0 0 10px',
    padding: '0px',
    backgroundColor: '#c5e7dd',
    color: '#7ab6a2',
    fontSize: '0.9rem',
  },
    DeleteButn: {
      borderRadius: 25,
      width: '45px',
      height: '25px',
      margin: '10px 0 0 10px',
      padding: '0px',
      color: '#8b3a4d',
      fontSize: '0.9rem',
  },
  
  dayBlockMon: {
    // top: '-1px',
    left: 'none',
    // right: 0,
    cursor: 'pointer',
    minHeight: '60px',
    borderRadius: '40px',
    marginBottom: '10px',
    backgroundColor: '#eaccd7',
    fonSize: 'large'
  },

  dayBlockTue: {
    cursor: 'pointer',
    minHeight: '65px',
    borderRadius: '40px',
    marginBottom: '10px',
    backgroundColor: '#dbdbf2'
  },

  dayBlockWed: {
    cursor: 'pointer',
    minHeight: '65px',
    borderRadius: '40px',
    marginBottom: '10px',
    backgroundColor: ' #c5e7dd'
  },

  dayBlockThusd: {
    cursor: 'pointer',
    minHeight: '65px',
    borderRadius: '40px',
    marginBottom: '10px',
    backgroundColor: '#f4f1dc'
  },

  dayBlockFri: {
    cursor: 'pointer',
    minHeight: '65px',
    borderRadius: '40px',
    marginBottom: '10px',
    backgroundColor: '#f0dbec'
  },

  dayBlockSat: {
    cursor: 'pointer',
    minHeight: '65px',
    borderRadius: '40px',
    marginBottom: '10px',
    backgroundColor: '#dddbf2'
  },

  dayBlockSun: {
    cursor: 'pointer',
    minHeight: '65px',
    borderRadius: '40px',
    marginBottom: '10px',
    backgroundColor: '#9489ef'
  }

}));

export default function CreateTask() {
  const classes = useStyles();
  const [taskLst, setTaskList] = useState([])

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/getmonday")
  //   .then((response) => {
  //     setTaskList(response.data);
  //   })
  // }, []);

  

// MONDAY
  const [inputMon, setInputMon] = useState("");
  const [itemsMon, setItemsMon] = useState([]);
  const deleteTasksMon = () => {
    Axios.delete('http://localhost:3001/api/delete', {taskOfDay: inputMon})
  }
  const submitTasksMon = () => {
    Axios.post('http://localhost:3001/api/insertmonday',{
      tasksOfDay: inputMon
    }).then(() => {
      alert('successful insert')
    });
  };
  function addItemMon(event) {
    setItemsMon(prevData => {
        return [...prevData, inputMon];
    });
    setInputMon("");
    submitTasksMon();
    };
  function removeItemMon(id) {
    setItemsMon(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
};

// TUESDAY
  const [inputTues, setInputTues] = useState("");
  const [itemsTues, setItemsTues] = useState([]);
  const submitTasksTues = () => {
  Axios.post('http://localhost:3001/api/inserttuesday',{
    tasksOfDay: inputTues
  }).then(() => {
    alert('successful insert')
  })
};
function addItemTues(event) {
  setItemsTues(prevData => {
      return [...prevData, inputTues];
  });
  setInputTues("");
  submitTasksTues();
  };
function removeItemTues(id) {
  setItemsTues(prevData => {
      return prevData.filter((item, index) => {
          return index !== id;
      })
  });
};

// WEDNESDAY
  const [inputWed, setInputWed] = useState("");
  const [itemsWed, setItemsWed] = useState([]);
  const submitTasksWed = () => {
    Axios.post('http://localhost:3001/api/insertwednesday',{
      tasksOfDay: inputWed
    }).then(() => {
      alert('successful insert')
    })
  };
function addItemWed(event) {
  setItemsWed(prevData => {
      return [...prevData, inputWed];
  });
  setInputWed("");
  submitTasksWed();
  };
function removeItemWed(id) {
  setItemsWed(prevData => {
      return prevData.filter((item, index) => {
          return index !== id;
      })
  });
;}

// THUSDAY
  const [inputThusd, setInputThusd] = useState("");
  const [itemsThusd, setItemsThusd] = useState([]);
  const submitTasksThusd = () => {
    Axios.post('http://localhost:3001/api/insertthusday',{
      tasksOfDay: inputThusd
    }).then(() => {
      alert('successful insert')
    })
};
function addItemThusd(event) {
  setItemsThusd(prevData => {
      return [...prevData, inputThusd];
  });
  setInputThusd("");
  submitTasksThusd();
  };
function removeItemThusd(id) {
  setItemsThusd(prevData => {
      return prevData.filter((item, index) => {
          return index !== id;
      })
  });
};

// FRIDAY
const [inputFri, setInputFri] = useState("");
  const [itemsFri, setItemsFri] = useState([]);
const submitTasksFri = () => {
  Axios.post('http://localhost:3001/api/insertfriday',{
    tasksOfDay: inputFri
  }).then(() => {
    alert('successful insert')
  })
};
function addItemFri(event) {
  setItemsFri(prevData => {
      return [...prevData, inputFri];
  });
  setInputFri("");
  submitTasksFri();
  };
function removeItemFri(id) {
  setItemsFri(prevData => {
      return prevData.filter((item, index) => {
          return index !== id;
      })
  });
};

// SATURDAY
  const [inputSat, setInputSat] = useState("");
  const [itemsSat, setItemsSat] = useState([]);
  const submitTasksSat = () => {
  Axios.post('http://localhost:3001/api/insertsaturday',{
    tasksOfDay: inputSat
  }).then(() => {
    alert('successful insert')
  })
};
function addItemSat(event) {
  setItemsSat(prevData => {
      return [...prevData, inputSat];
  });
  setInputSat("");
  submitTasksSat();
  };
function removeItemSat(id) {
  setItemsSat(prevData => {
      return prevData.filter((item, index) => {
          return index !== id;
      })
  });
};

// SUNDAY
  const [inputSun, setInputSun] = useState("");
  const [itemsSun, setItemsSun] = useState([]);
  const submitTasksSun = () => {
  Axios.post('http://localhost:3001/api/insertsunday',{
    tasksOfDay: inputSun
  }).then(() => {
    alert('successful insert')
  })
};
function addItemSun(event) {
  setItemsSun(prevData => {
      return [...prevData, inputSun];
  });
  setInputSun("");
  submitTasksSun();
  };
function removeItemSun(id) {
  setItemsSun(prevData => {
      return prevData.filter((item, index) => {
          return index !== id;
      })
  });
};
  return (
    <div className="main">
    <div className="background">
      <h1>Hello</h1>
      <Accordion className={classes.dayBlockMon}>
        <AccordionSummary
        ><p>Monday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.typografy}>
            <div className="btns">
              <Button className={classes.stylesForButn}
              onClick={addItemMon}>
              Add
              </Button>
              <Button className={classes.DeleteButn}
              onClick={deleteTasksMon}>
              Delete
              </Button>
            </div>
            <TextField id="standart-basic" label='Add to do' value={inputMon}
            onChange={(event) => {setInputMon(event.target.value)}}
            ></TextField>
            <List>
              {itemsMon.map((item, index) => (
              <TodoItem
              key={index}
              id={index}
              item={item}
              onCheck={removeItemMon}
              />
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.dayBlockTue}>
        <AccordionSummary
        ><p>Tuesday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={addItemTues}>
            Add
            </Button>
            <TextField id="standart-basic" label='Add to do' value={inputTues}
            onChange={(event) => {setInputTues(event.target.value)}}
            ></TextField>
            <List>
              {itemsTues.map((item, index) => (
              <TodoItem
              key={index}
              id={index}
              item={item}
              onCheck={removeItemTues}
              />
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.dayBlockWed}>
        <AccordionSummary>
        <p>Wednesday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={addItemWed}>
            Add
            </Button>
            <TextField id="standart-basic" label='Add to do' value={inputWed}
            onChange={(event) => {setInputWed(event.target.value)}}
            ></TextField>
            <List>
              {itemsWed.map((item, index) => (
              <TodoItem
              key={index}
              id={index}
              item={item}
              onCheck={removeItemWed}
              />
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.dayBlockThusd}>
        <AccordionSummary>
        <p>Thusday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={addItemThusd}>
            Add
            </Button>
            <TextField id="standart-basic" label='Add to do' value={inputThusd}
            onChange={(event) => {setInputThusd(event.target.value)}}
            ></TextField>
            <List>
              {itemsThusd.map((item, index) => (
              <TodoItem
              key={index}
              id={index}
              item={item}
              onCheck={removeItemThusd}
              />
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.dayBlockFri}>
        <AccordionSummary>
        <p>Friday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={addItemFri}>
            Add
            </Button>
            <TextField id="standart-basic" label='Add to do' value={inputFri}
            onChange={(event) => {setInputFri(event.target.value)}}
            ></TextField>
            <List>
              {itemsFri.map((item, index) => (
              <TodoItem
              key={index}
              id={index}
              item={item}
              onCheck={removeItemFri}
              />
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.dayBlockSat}>
        <AccordionSummary>
        <p>Saturday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={addItemSat}>
            Add
            </Button>
            <TextField id="standart-basic" label='Add to do' value={inputSat}
            onChange={(event) => {setInputSat(event.target.value)}}
            ></TextField>
            <List>
              {itemsSat.map((item, index) => (
              <TodoItem
              key={index}
              id={index}
              item={item}
              onCheck={removeItemSat}
              />
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.dayBlockSun}>
        <AccordionSummary>
        <p>Sunday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={addItemSun}>
            Add
            </Button>
            <TextField id="standart-basic" label='Add to do' value={inputSun}
            onChange={(event) => {setInputSun(event.target.value)}}
            ></TextField>
            <List>
              {itemsSun.map((item, index) => (
              <TodoItem
              key={index}
              id={index}
              item={item}
              onCheck={removeItemSun}
              />
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <div></div>
    </div>
    </div>
  );
}