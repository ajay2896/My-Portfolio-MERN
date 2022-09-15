


import * as React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator,
  TimelineConnector, 
  TimelineContent, 
  TimelineDot ,
  TimelineOppositeContent 
} from '@mui/lab';

import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {
          timelines.map( (item, index) => (
            <TimelineItem key={index}>

              <TimelineOppositeContent
                sx={{ m:"auto 0"}}
                align="right"
                variant="body"
                color="GrayText.secondary"
              >
                {item.date.toString().split("T")[0]}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Event />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py:"12px", px:2 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>{item.description}</Typography>
              </TimelineContent>

            </TimelineItem>
          ))
        }
      </Timeline>
    </div>
  )
}

export default TimeLine