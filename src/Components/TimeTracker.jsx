import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const fixTime = (time) => (time < 10 ? "0" + time : time);
const formatTimeToString = (time) => {
    const seconds = time % 60;
    const min = Math.floor(time / 60) % 60;
    return `00:${fixTime(min)}:${fixTime(seconds)}`;
};

export const TimeTracker = () => {
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);
    console.log(timerRef.current);

    useEffect(() => {
        return stopTimer();
    }, []);

    const startTimer = () => {
        if (timerRef.current !== null) return;
        timerRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        setShow(!show)
    };
    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setShow(!show)
    };

    return (
        <TimeStyled>
            <div className='main'>
                <div>
                    <div className='input'>
                        <input type="text" placeholder='What are you working on?' />
                    </div>
                    <div className='project'><img src="https://app.clockify.me/assets/ui-icons/plus-blue.svg" alt="add" /><span>Project</span>
                    </div>
                </div>

                <div>
                    <div className='tag'><img src="https://app.clockify.me/assets/ui-icons/tag-gray.svg" alt="tag" /></div>
                    <div className='dollar'>$</div>
                    <div className='time'>
                        {/* <div>00:00:00</div> */}
                        <div>{formatTimeToString(count)}</div>
                        <div>
                            {
                                show ? <button className='btnStart' onClick={startTimer}>START</button> : <button className='btnStop' onClick={stopTimer}>STOP</button>
                            }
                        </div>
                        <div><img src="https://app.clockify.me/assets/ui-icons/menu-dots-vertical.svg" alt="dotted" /></div>
                    </div>
                </div>
            </div>
        </TimeStyled>
    )
}

const TimeStyled = styled.div`    
background-color: #f2f6f8;
width: 100%;
box-sizing: border-box;
.main{
margin: 40px 20px 10px 20px;
background-color: white;
border: 1px solid #C6D2D9;
}
.main>div{
display: flex;
}

.input{
width:90%;
padding: 10.5px 8.5px;
}
.input input{
width:100%;
outline-width: thin;
outline-style: solid;
outline-color: #C6D2D9;
padding: 0.608rem 0.75rem;
}
.project{
display: flex;
width:10%;
align-items: center;
justify-content: left;
gap: 10px;
color: #03a9f4;
}
.project>img{
height: 19px;
width:21px;
}

.main>div:nth-child(2){
border-top: 1px solid #C6D2D9;
}
.main>div:nth-child(2)>div{
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
}
.tag{
border-right: 1px solid #C6D2D9;
width:40%;
}
.dollar{
border-right: 1px solid #C6D2D9;
width:40%;
font-size: 24px;
font-weight: 100;
color: #999;
}
.time{
width:20%;
display: flex !important;
justify-content: space-between !important;
align-items: center;
/* gap: 20px; */
box-sizing: border-box;
word-wrap: break-word;
}
.time>div:nth-child(1){
font-weight: bold;
font-size: 18.004px;
}
.btnStart{
padding: 0.25rem 0.5rem;
font-size: .75rem;
border-radius: 2px;
color: white;
background-color: #03a9f4;
}
.btnStop{
padding: 0.25rem 0.7rem;
font-size: .75rem;
border-radius: 2px;
color: white;
background-color: #f4443e;
}
`