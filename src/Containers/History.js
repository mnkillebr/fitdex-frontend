
import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default class History extends Component {
  
  state = {
    events: [
      // {
      //   id: 1,
      //   start: new Date(),
      //   end: new Date(moment()),
      //   title: "Some title"
      // },
      // {
      //   id: 2,
      //   title: 'Today',
      //   start: new Date(new Date().setHours(new Date().getHours() - 3)),
      //   end: new Date(new Date().setHours(new Date().getHours() + 3)),
      // },
      // {
      //   id: 3,
      //   title: 'Point in Time Event',
      //   start: new Date(),
      //   end: new Date()
      // },
      // {
      //   id: 4,
      //   title: 'First Event',
      //   start: new Date('July 15, 2019'),
      //   end: new Date('July 15, 2019')
      // }
    ]
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/events/')
    .then(res=>res.json())
    .then(eventsArr=>{
      // Lines 46-52 were fixing a issue converting SEEDED backend dates but it ruins new event create method
      // eventsArr.map(event=>{
      //   let newer = new Date(event.start)
      //   newer.setDate(newer.getDate()+1)
      //   event.start = newer
      //   event.end = newer
      //   console.log(event)
      // })
      this.setState({
        events: eventsArr
      })
    })
  }

  handleClickEvent = (event) => {
    console.log(event.start)
    // const dayofWeek = (day=event.start.getDay())=> {
    //   switch (day) {
    //     case 0:
    //       return 'Sunday';
    //     case 1:
    //       return 'Monday';
    //     case 2:
    //       return 'Tuesday';
    //     case 3:
    //       return 'Wednesday';
    //     case 4:
    //       return 'Thursday';
    //     case 5:
    //       return 'Friday';
    //     case 6:
    //       return 'Saturday';
    //   } 
    // }

    // const currentMonth = (month=event.start.getMonth()) => {
    //   switch (month) {
    //     case 0:
    //       return 'January';
    //     case 1:
    //       return 'February';
    //     case 2:
    //       return 'March';
    //     case 3:
    //       return 'April';
    //     case 4:
    //       return 'May';
    //     case 5:
    //       return 'June';
    //     case 6:
    //       return 'July';
    //     case 7:
    //       return 'August';
    //     case 8:
    //       return 'September';
    //     case 9:
    //       return 'October';
    //     case 10:
    //       return 'November';
    //     case 11:
    //       return 'December';
    //   }
    // }

    // console.log(`It is ${dayofWeek()}, ${currentMonth()} ${event.start.getDate()}, ${event.start.getFullYear()}`)
    // // alert(`${event.title}`)
  }

  clickSlot = (slotInfo) => {
    console.log(slotInfo.start.getDay())
  }

  render() {
    const cal_events = []
    return (
      <div style={{ height: 700 }}>
        <Calendar
          selectable
          onSelectEvent={this.handleClickEvent}
          onSelectSlot={this.clickSlot}
          defaultDate={new Date()}
          defaultView="month"
          views={['month']}
          events={this.state.events}
          localizer={localizer}
          style={{ height: "100vh" }}
        />
      </div>
    )
  }
}
