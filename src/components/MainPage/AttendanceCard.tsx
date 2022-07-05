import styled from 'styled-components';
import { useAttendanceDispatchContext } from '../../contexts/AttendanceProvider';
import useLoading from '../../hooks/shared/useLoading';
import useTimer from '../../hooks/useTimer';
import DEFAULT_SHADOWS from '../../themes/shadows';
import {formatDate} from '../../utils/dateFormat';
import { LoadingButton } from '../shared/Button';

const AttendanceCard = () => {
  const [loading, startTransition] = useLoading();
  const { addAttendance } = useAttendanceDispatchContext();
  const timer = useTimer();

  // TODO - Show on the button on success
  const handleClick = async () => {
    try {
      await startTransition(addAttendance());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      {formatDate(new Date(timer), { delimiter: '-' })}
      <Wrapper>
        <LoadingButton
          fullWidth
          isLoading={loading}
          size="md"
          variant="primary"
          onClick={handleClick}
        >
        Check attendance at the current time
        </LoadingButton>
      </Wrapper>
    </Container>
  );
};

export default AttendanceCard;

const Container = styled.div`
  padding: 16px;
  border-radius: 6px;
  box-shadow: ${DEFAULT_SHADOWS.dp2};
`;

const Wrapper = styled.div`
  margin-top: 16px;
`;
