import styled from 'styled-components';

const Message = styled.p`
  font-size: 14px;
  color: #6272a4;
`;
const Underline = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

export default function Alert({ searchLength, completedTasks, clearFilters, completed, search }) {
  return (
    <div>
      {search.length > 0 && searchLength == 0 ? (
        <Message>
          Your search found no results. <Underline onClick={clearFilters}>Clear the filter here</Underline> to see all
          items
        </Message>
      ) : (
        completedTasks.length == 0 &&
        completed && (
          <Message>
            There is no items marked as done. <Underline onClick={clearFilters}>Clear the filter here</Underline> to see
            all items
          </Message>
        )
      )}
    </div>
  );
}
