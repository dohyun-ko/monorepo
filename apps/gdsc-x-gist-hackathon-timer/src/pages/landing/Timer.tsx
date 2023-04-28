import React, {useEffect, useState} from 'react';
import styled, {createGlobalStyle, css, keyframes} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #000000;
    margin: 0;
  }
`;

const animate = (count: number) => {
  let styles = '';
  const step = 100 / count;
  let progress = 0;
  let translate = -180 * count;

  while (progress < 100) {
    styles += `${progress}% { transform: translateY(${translate}px); }`;
    progress += step;
    translate += 180;
  }

  return styles;
};
const hoursTens = keyframes`
${animate(10)}
`;

const hoursOnes = keyframes`
${animate(10)}
`;

const minutesTens = keyframes`
${animate(6)}
`;

const minutesOnes = keyframes`
${animate(10)}
`;

const secondsTens = keyframes`
${animate(6)}
`;

const secondsOnes = keyframes`
${animate(10)}
`;


const Wrapper = styled.div`
  margin: 100px auto;
  width: 1000px;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    height: 20px;
    z-index: 10;
  }

  &:before {
    top: 0;
    background-image: linear-gradient(to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%);
  }

  &:after {
    bottom: 0;
    background-image: linear-gradient(to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%);
  }
`;

const TimePartWrapper = styled.div`
  display: inline-block;
  margin-right: 50px;
  position: relative;

  &:not(:last-child)::after {
    content: ':';
    display: block;
    width: 30px;
    height: 230px;
    position: absolute;
    top: 0;
    right: -30px;
    color: rgba(255, 255, 255, 1);
    font-size: 200px;
    line-height: 0.9;
  }
`;

interface TimePartProps {
  hoursTens?: boolean;
  hoursTensDelay?: number;
  hoursOnes?: boolean;
  hoursOnesDelay?: number;
  minutesTens?: boolean;
  minutesTensDelay?: number;
  minutesOnes?: boolean;
  minutesOnesDelay?: number;
  secondsTens?: boolean;
  secondsTensDelay?: number;
  secondsOnes?: boolean;
  secondsOnesDelay?: number;
}


const TimePart = styled.div<TimePartProps>`
  width: 140px;
  text-align: center;
  height: 180px;
  overflow: hidden;
  display: inline-block;
  margin-left: -5px;
  box-sizing: border-box;

  .digit-wrapper {
    animation-timing-function: cubic-bezier(1, 0, 1, 0);

    ${(props: TimePartProps) => {
      if (props.hoursTens) {
        return css`
          animation-name: ${hoursTens};
          animation-duration: 360000s; // 1s * 10 * 6 * 10 * 6 * 10 * 10
          animation-iteration-count: infinite;
          animation-delay: -${props.hoursTensDelay}s;
        `;
      } else if (props.hoursOnes) {
        return css`
          animation-name: ${hoursOnes};
          animation-duration: 36000s; // 1s * 10 * 6 * 10 * 6 * 10
          animation-iteration-count: infinite;
          animation-delay: -${props.hoursOnesDelay}s;
        `;
      } else if (props.minutesTens) {
        return css`
          animation-name: ${minutesTens};
          animation-duration: 3600s; // 1s * 10 * 6 * 10 * 6
          animation-iteration-count: infinite;
          animation-delay: -${props.minutesTensDelay}s;
        `;
      } else if (props.minutesOnes) {
        return css`
          animation-name: ${minutesOnes};
          animation-duration: 600s; // 1s * 10 * 6 * 10
          animation-iteration-count: infinite;
          animation-delay: -${props.minutesOnesDelay}s;
        `;
      } else if (props.secondsTens) {
        return css`
          animation-name: ${secondsTens};
          animation-duration: 60s; // 1s * 10 * 6
          animation-iteration-count: infinite;
          animation-delay: -${props.secondsTensDelay}s;
        `;
      } else if (props.secondsOnes) {
        return css`
          animation-name: ${secondsOnes};
          animation-duration: 10s; // 1s * 10
          animation-iteration-count: infinite;
          animation-delay: -${props.secondsOnesDelay}s;
        `;
      }
    }}
  }
`;

const DigitWrapper = styled.div``;

const Digit = styled.span`
  display: inline-block;
  font-size: 200px;
  color: rgba(255, 255, 255, 1);
  height: 180px;
  line-height: 1;
`;

const endTime = new Date("2023.04.30 14:30:00");

const Timer = () => {
  const [hoursTensDelay, setHoursTensDelay] = useState(0);
  const [hoursOnesDelay, setHoursOnesDelay] = useState(0);
  const [minutesTensDelay, setMinutesTensDelay] = useState(0);
  const [minutesOnesDelay, setMinutesOnesDelay] = useState(0);
  const [secondsTensDelay, setSecondsTensDelay] = useState(0);
  const [secondsOnesDelay, setSecondsOnesDelay] = useState(0);

  const [isDone, setIsDone] = useState(false);

  const renderDigits = (start: number, end: number) =>
    Array.from({length: end - start + 2}, (_, i) => (
      <Digit key={i}>{start + i - 1}</Digit>
    ));


  useEffect(() => {
    const gap = endTime.getTime() - Date.now();
    const dateGap = new Date(gap);
    console.log("gap: ", gap)
    console.log("hours: ", dateGap.getHours())
    console.log("minutes: ", dateGap.getMinutes())
    console.log("seconds: ", dateGap.getSeconds())
    setHoursTensDelay(360000 - gap / 1000 % 360000);
    setHoursOnesDelay(36000 - gap / 1000 % 36000);
    setMinutesTensDelay(3600 - gap / 1000 % 3600);
    setMinutesOnesDelay(600 - gap / 1000 % 600);
    setSecondsTensDelay(60 - gap / 1000 % 60);
    setSecondsOnesDelay(10 - gap / 1000 % 10);

  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const gap = endTime.getTime() - Date.now();

      if (gap <= 0) {
        setIsDone(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        {isDone ? (
          <Digit>--:--:--</Digit>
        ) : (
          <>
            <TimePartWrapper>
              <TimePart hoursTens hoursTensDelay={hoursTensDelay}>
                <DigitWrapper className={"digit-wrapper"}>{renderDigits(0, 9)}</DigitWrapper>
              </TimePart>
              <TimePart hoursOnes hoursOnesDelay={hoursOnesDelay}>
                <DigitWrapper className={"digit-wrapper"}>{renderDigits(0, 9)}</DigitWrapper>
              </TimePart>
            </TimePartWrapper>

            <TimePartWrapper>
              <TimePart minutesTens minutesTensDelay={minutesTensDelay}
              >
                <DigitWrapper className={"digit-wrapper"}>{renderDigits(0, 5)}</DigitWrapper>
              </TimePart>
              <TimePart minutesOnes minutesOnesDelay={minutesOnesDelay}
              >
                <DigitWrapper className={"digit-wrapper"}>{renderDigits(0, 9)}</DigitWrapper>
              </TimePart>
            </TimePartWrapper>

            <TimePartWrapper>
              <TimePart secondsTens secondsTensDelay={secondsTensDelay}
              >
                <DigitWrapper className={"digit-wrapper"}>{renderDigits(0, 5)}</DigitWrapper>
              </TimePart>
              <TimePart secondsOnes secondsOnesDelay={secondsOnesDelay}
              >
                <DigitWrapper className={"digit-wrapper"}>{renderDigits(0, 9)}</DigitWrapper>
              </TimePart>
            </TimePartWrapper>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Timer;