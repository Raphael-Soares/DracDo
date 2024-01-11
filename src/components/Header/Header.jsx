import styled from 'styled-components';

const DateHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6272a4;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Day = styled.div`
  text-align: left;

  font-size: 4em;

  height: auto;
`;
const Month = styled.div`
  text-align: left;

  font-size: 1.5em;
`;
const Year = styled.div`
  text-align: left;
  font-family: 'Roboto light';

  font-size: 1.5em;
  font-weight: thin;
`;

const WeekDay = styled.div`
  text-align: right;

  letter-spacing: 0px;

  opacity: 1;
  font-size: 2em;
`;
export default function Header() {
  const date = new window.Date();

  const [day, month, year, weekDay] = [
    date.getDate(),
    date.toLocaleString('en-us', { month: 'short' }),
    date.getFullYear(),
    date.toLocaleString('en-us', { weekday: 'long' })
  ];

  return (
    <DateHeader>
      <Date>
        <Day>{day}</Day>
        <SideContainer>
          <Month>{month}</Month>
          <Year>{year}</Year>
        </SideContainer>
      </Date>

      <WeekDay>{weekDay}</WeekDay>
    </DateHeader>
  );
}
