import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Heading, Flex, Grid, Text, Box, Icon, Image } from '@chakra-ui/core';

const Cell = ({
  children,
  fontSize = 'lg',
  height = ['60px', '150px'],
  ...props
}) => (
  <Box
    fontSize={fontSize}
    fontWeight={300}
    textAlign="center"
    h={height}
    {...props}
  >
    {children}
  </Box>
);

const Calendar = ({ events, profile }) => {
  const currentDay = dayjs();
  const [date, setDate] = useState(dayjs());

  const currentYear = date.year();
  const currentMonth = date.month(); // January = 0
  const daysInMonth = date.daysInMonth();

  const firstDayOfMonth = dayjs(`${currentYear}-${currentMonth + 1}-1`);
  const weekDayOfFirstDay = firstDayOfMonth.day(); // Sunday = 0

  const lastDayOfMonth = dayjs(
    `${currentYear}-${currentMonth + 1}-${daysInMonth}`
  );
  const weekDayOfLastDay = lastDayOfMonth.day();

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrev = () => {
    setDate(date.subtract(1, 'month'));
  };

  const handleNext = () => {
    setDate(date.add(1, 'month'));
  };

  return (
    <div>
      <img src={profile && profile.photoUrl} alt="" width="90" />
      <div>
        <h6>{profile && profile.name}</h6>
        <span>{profile && profile.email}</span>
        <br />
      </div>
      <div className="calendar">
        <div className="header">
          <button type="button" className="nav prev" onClick={handlePrev}>
            &lt;
          </button>
          <h3 className="heading">{date.format('MMM DD YYYY')}</h3>
          <button type="button" className="nav nav next" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <Grid
          templateColumns="repeat(7, 1fr)"
          textAlign="right"
          gap={1}
          borderBottomWidth="1px"
          borderBottomColor="gray.200"
        >
          {weekDays.map(d => (
            <Cell fontSize="2xl" height="auto" key={d}>
              {d}
            </Cell>
          ))}
        </Grid>
        <Grid templateColumns="repeat(7, 1fr)" textAlign="right" gap={2}>
          {[...Array(weekDayOfFirstDay).keys()].map(i => (
            <Cell borderBottomWidth="1px" borderBottomColor="gray.200" key={i}>
              <Box backgroundColor="gray.100" h="100%" />
            </Cell>
          ))}
          {[...Array(daysInMonth).keys()].map(i => {
            const day = i + 1;
            const isToday =
              day === currentDay.date() &&
              currentMonth === currentDay.month() &&
              currentYear === currentDay.year();
            const style = {
              color: isToday ? 'indianred' : 'inherit'
            };
            return (
              <Cell
                borderBottomWidth="1px"
                borderBottomColor="gray.200"
                key={i}
              >
                <Flex
                  direction="column"
                  align="center"
                  justify="space-between"
                  h="100%"
                  py={[1, 8]}
                >
                  {day}
                  {events &&
                    events.map(e => {
                      {
                        const event =
                          day === dayjs(e && e.start.dateTime).date() &&
                          currentMonth ===
                            dayjs(e && e.start.dateTime).month() &&
                          currentYear ===
                            dayjs(e && e.start.dateTime).year() ? (
                            <Icon name="circle" color="green.200" key={e.id} /> // e.summary
                          ) : null;
                        return event;
                      }
                    })}
                </Flex>
              </Cell>
            );
          })}
          {[...Array(6 - weekDayOfLastDay).keys()].map(i => (
            <Cell borderBottomWidth="1px" borderBottomColor="gray.200" key={i}>
              <Box backgroundColor="gray.100" h="100%" />
            </Cell>
          ))}
        </Grid>
      </div>
    </div>
  );
};
export default Calendar;
