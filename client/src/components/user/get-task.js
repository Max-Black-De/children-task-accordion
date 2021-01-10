import React, { useState, useEffect } from 'react';
import TodoItem from "./TodoItem";
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import "./get-task.css";
import Header from '../start_pages/header';

const useStyles = makeStyles(() => ({
  
  stylesForButn: {
    borderRadius: 25,
    width: '45px',
    height: '25px',
    margin: '10px 0 0 260px',
    padding: '0px',
    backgroundColor: '#c5e7dd',
    fontFamily: '"Architects Daughter", sans-serif',
    fontSize: '0.9rem',
    color:'#7ab6a2'
  },
  
  dayBlockMon: {
    cursor: 'pointer',
    minHeight: '60px',
    borderRadius: '40px',
    marginBottom: '10px',
    fontSize: '15px',
    backgroundColor: '#eaccd7'
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

export default function GetTask() {
  const classes = useStyles();

  useEffect(() => {
  }, []);

  
  // MONDAY
  const [taskLstMon, setTaskListMon] = useState([]);
  function removeItemMon(id) {
    setTaskListMon(prevData => {
      return prevData.filter((item, index) => {
        return index !== id;
      })
    });
  };
  function getTaskMon () {
    Axios.get("http://localhost:3001/api/getmonday")
    .then((response) => {
      setTaskListMon(response.data);
    })
  };
  // TUESDAY
  const [taskLstTue, setTaskListTue] = useState([]);
  function removeItemTue(id) {
    setTaskListTue(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
  };
  function getTaskTue () {
    Axios.get("http://localhost:3001/api/gettuesday")
    .then((response) => {
      setTaskListTue(response.data);
    })
  };
  // WEDNESDAY
  const [taskLstWed, setTaskListWed] = useState([]);
  function removeItemWed(id) {
    setTaskListWed(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
  };
  function getTaskWed () {
    Axios.get("http://localhost:3001/api/getwednesday")
    .then((response) => {
      setTaskListWed(response.data);
    })
  };
  // THUSDAY
  const [taskLstThus, setTaskListThus] = useState([]);
  function removeItemThus(id) {
    setTaskListThus(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
  };
  function getTaskThus () {
    Axios.get("http://localhost:3001/api/getthusday")
    .then((response) => {
      setTaskListThus(response.data);
    })
  };
  // FRIDAY
  const [taskLstFri, setTaskListFri] = useState([]);
  function removeItemFri(id) {
    setTaskListFri(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
  };
  function getTaskFri () {
    Axios.get("http://localhost:3001/api/getfriday")
    .then((response) => {
      setTaskListFri(response.data);
    })
  };
  // SATURDAY
  const [taskLstSat, setTaskListSat] = useState([]);
  function removeItemSat(id) {
    setTaskListSat(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
  };
  function getTaskSat () {
    Axios.get("http://localhost:3001/api/getsaturday")
    .then((response) => {
      setTaskListSat(response.data);
    })
  };
  // SUNDAY
  const [taskLstSun, setTaskListSun] = useState([]);
  function removeItemSun(id) {
    setTaskListSun(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
  };
  function getTaskSun () {
    Axios.get("http://localhost:3001/api/getsunday")
    .then((response) => {
      setTaskListSun(response.data);
    })
  };

  return (
  <div className="main">
    <Header />
    <div className="background">
      <h1>Hello Kira</h1>
      <Accordion className={classes.dayBlockMon}>
        <AccordionSummary
        ><p>Monday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={getTaskMon}
            >
            Get
            </Button>
            <List>
            {taskLstMon.map((val, index) => (
              <TodoItem
              key={index}
              id={index}
              item={val.tasks}
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
            onClick={getTaskTue}
            >
            Get
            </Button>
            <List>
            {taskLstTue.map((val, index) => (
              <TodoItem
              key={index}
              id={index}
              item={val.tasks}
              onCheck={removeItemTue}
              />
            ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className={classes.dayBlockWed}>
        <AccordionSummary
        ><p>Wednesday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={getTaskWed}
            >
            Get
            </Button>
            <List>
            {taskLstWed.map((val, index) => (
              <TodoItem
              key={index}
              id={index}
              item={val.tasks}
              onCheck={removeItemWed}
              />
            ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className={classes.dayBlockThusd}>
        <AccordionSummary
        ><p>Thusday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={getTaskThus}
            >
            Get
            </Button>
            <List>
            {taskLstThus.map((val, index) => (
              <TodoItem
              key={index}
              id={index}
              item={val.tasks}
              onCheck={removeItemThus}
              />
            ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className={classes.dayBlockFri}>
        <AccordionSummary
        ><p>Friday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={getTaskFri}
            >
            Get
            </Button>
            <List>
            {taskLstFri.map((val, index) => (
              <TodoItem
              key={index}
              id={index}
              item={val.tasks}
              onCheck={removeItemFri}
              />
            ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className={classes.dayBlockSat}>
        <AccordionSummary
        ><p>Saturday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={getTaskSat}
            >
            Get
            </Button>
            <List>
            {taskLstSat.map((val, index) => (
              <TodoItem
              key={index}
              id={index}
              item={val.tasks}
              onCheck={removeItemSat}
              />
            ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.dayBlockSun}>
        <AccordionSummary
        ><p>Sunday</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button className={classes.stylesForButn}
            onClick={getTaskSun}
            >
            Get
            </Button>
            <List>
            {taskLstSun.map((val, index) => (
              <TodoItem
              key={index}
              id={index}
              item={val.tasks}
              onCheck={removeItemSun}
              />
            ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion><div></div>
    </div>
    </div>
  );
}