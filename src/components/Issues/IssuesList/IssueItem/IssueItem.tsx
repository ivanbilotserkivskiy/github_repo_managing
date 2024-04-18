import { useDrag } from 'react-dnd'
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { GitHubCardIssue } from '../../../../utils/types/gitHubIssue.types';
import { convertCreatedToTime } from '../../../../utils/converters/CreatedToTimePassed.converter';
import { DraggableItems } from '../../../../utils/constants/draggableItems.constants';

type IssueItemProps = {
  issue: GitHubCardIssue
  dropIndex: number
  index: number
  changeDropIndex: (index: number) => void
}

const IssueItem: React.FC<IssueItemProps> = (
  {
    issue,
    dropIndex,
    index,
    changeDropIndex
  }
) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      item: function () {
        return {
          ID: issue.id,
          type: DraggableItems.IssueCard,
          dropIndex
        }
      },
      type: DraggableItems.IssueCard,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.1 : 1,
      })
    }),
    []
  )

  const formatedDate = convertCreatedToTime(issue.created_at)
  return (
      <Stack className="mx-auto">
         <Card 
          ref={dragRef} 
          style={{ width: '18rem', opacity }}
          onDrop={() => {
            changeDropIndex(index)  
          }}
         >
          <Card.Body>
            <Card.Title>{issue.title}</Card.Title>
            <Card.Subtitle>
              <span>#{issue.number} </span>
              <span>{issue.state} </span>
              <span>
                {
                  formatedDate.amount > 0
                    ? formatedDate.amount
                    : null
                } 
              </span>  
              <span>{` ${formatedDate.date} `}</span>  
              <span>
                {
                  formatedDate.amount >= 1 
                    ? 'ago' 
                    : null
                }
              </span>  
            </Card.Subtitle>
            <Card.Subtitle className='mt-2'>
              <span>{issue.author_association} </span>
              <span>| </span>
              <span>Comments: </span>  
              <span>{issue.comments} </span>    
            </Card.Subtitle>
          </Card.Body>
         </Card>
      </Stack>
  )
}

export default IssueItem