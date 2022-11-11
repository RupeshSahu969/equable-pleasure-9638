import { Flex, HStack, Spacer, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TrackerItem from "./TrackerItem";

const fixTime = (time) => (time < 10 ? "0" + time : time);
const formatTimeToString = (time) => {
  const seconds = time % 60;
  const min = Math.floor(time / 60) % 60;
  return `00:${fixTime(min)}:${fixTime(seconds)}`;
};

export const Tracker = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  console.log(timerRef.current);

  console.log(formatTimeToString(count));
  const startTimer = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setShow(!show);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setShow(!show);
  };

  useEffect(() => {
    return stopTimer();
  }, []);

  const [projName, setName] = useState("");
  const [projects, setProjects] = useState([]);
  // console.log(projName)

  const handleAddProjectItem = () => {
    console.log("in fn count", count);
    let currentTime = formatTimeToString(count);
    let item = {
      name: projName,
      time: currentTime,
    };
    setProjects([...projects, item]);
    setName("");
    setCount(0);
    stopTimer();
  };
  // console.log(projects)

  return (
    <TimeStyled>
      <div id="main">
        <div className="inputProject">
          <div className="input">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="What are you working on?"
            />
          </div>
          <Flex
            onClick={handleAddProjectItem}
            cursor="pointer"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="https://app.clockify.me/assets/ui-icons/plus-blue.svg"
              alt="add"
            />
            <span style={{ paddingLeft: "10px" }}>Project</span>
          </Flex>
        </div>

        <div>
          <div className="tag">
            <img
              src="https://app.clockify.me/assets/ui-icons/tag-gray.svg"
              alt="tag"
            />
          </div>
          <div className="dollar">$</div>
          <div className="time">
            {/* <div>00:00:00</div> */}
            <div>{formatTimeToString(count)}</div>
            <div>
              {show ? (
                <button className="btnStart" onClick={startTimer}>
                  START
                </button>
              ) : (
                <button className="btnStop" onClick={stopTimer}>
                  STOP
                </button>
              )}
            </div>
            <div>
              <img
                src="https://app.clockify.me/assets/ui-icons/menu-dots-vertical.svg"
                alt="dotted"
              />
            </div>
          </div>
        </div>
      </div>
      <VStack m="2%">
        {projects.map((el) => {
          return (
            <TrackerItem
              {...el}
              startTimer={startTimer}
              stopTimer={stopTimer}
              show={show}
            />
          );
        })}
      </VStack>
    </TimeStyled>
  );
};

const TimeStyled = styled.div`
  background-color: #f2f6f8;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #c6d2d9;
  #main {
    margin: 40px 20px 10px 20px;
    background-color: white;
    border: 1px solid #c6d2d9;
  }

  #main > div:nth-child(1) {
    display: flex;
    align-items: top !important;
    justify-content: left;
    padding: 0px !important;
    margin: 0px !important;
  }
  .input {
    width: 85%;
    padding: 10.5px 8.5px;
    height: 100%;
  }
  .input input {
    width: 100%;
    outline-width: thin;
    outline-style: solid;
    outline-color: #c6d2d9;
    padding: 0.608rem 0.75rem;
  }

  #main > div:nth-child(2) {
    border-top: 1px solid #c6d2d9;
    display: flex;
  }
  #main > div:nth-child(2) > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .tag {
    border-right: 1px solid #c6d2d9;
    width: 40%;
  }
  .dollar {
    border-right: 1px solid #c6d2d9;
    width: 40%;
    font-size: 24px;
    font-weight: 100;
    color: #999;
  }
  .time {
    width: 20%;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center;
    /* gap: 20px; */
    box-sizing: border-box;
    word-wrap: break-word;
  }
  .time > div:nth-child(1) {
    font-weight: bold;
    font-size: 18.004px;
  }
  .btnStart {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    border-radius: 2px;
    color: white;
    background-color: #03a9f4;
  }
  .btnStop {
    padding: 0.25rem 0.7rem;
    font-size: 0.75rem;
    border-radius: 2px;
    color: white;
    background-color: #f4443e;
  }

  .inputProject {
    margin: 0 !important;
    padding: 0 !important;
  }
`;
