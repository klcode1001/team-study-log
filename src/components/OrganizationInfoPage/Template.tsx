import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLoading from '../../hooks/shared/useLoading';
import useOrganization from '../../hooks/useOrganization';
import DEFAULT_BREAKPOINTS from '../../themes/breakpoints';
import DEFAULT_SHADOWS from '../../themes/shadows';
import { formatDate } from '../../utils/dateFormat';
import { LoadingButton as Button } from '../shared/Button';
import { H2 } from '../shared/Headings';
import P from '../shared/Paragraph';
import Layout from './Layout';

const Template = () => {
  const { id } = useParams();
  const { organization, getOrganizationDetail, joinOrganization } =
    useOrganization();
  const { organizations: joinedOrganizations, getJoinedOrganizations } =
    useOrganization();
  const [loading, startTransition] = useLoading();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await joinOrganization(Number(id));
    } catch (error) {
      window.alert('You are failed to register.');
    }
  };

  const hasUserJoined = () => {
    return !!joinedOrganizations.find(
      (joined) => organization && joined.id === organization.id
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getJoinedOrganizations();
      } catch {
        console.error('something error while fetching joinedOrganizations.');
      }
    };

    fetchData();
  }, [getJoinedOrganizations]);

  useEffect(() => {
    const fetchData = async () => {
      // fetch organization detail
      try {
        await startTransition(getOrganizationDetail(Number(id)));
      } catch {
        navigate('/404', { replace: true });
      }
    };

    fetchData();
  }, [getOrganizationDetail, id, navigate, startTransition]);

  return (
    <Layout>
      {organization && (
        <Container>
          {/** head */}
          <H2>Organization</H2>

          {/** body */}
          <div>
            <P>Name: {organization.name}</P>
            <P>Leader: {organization.leader.username}</P>
            <P>Number of member: {organization.members.length}</P>
            <P>
              Creatation Date:{' '}
              {formatDate(new Date(organization.createdAt), { delimiter: '-' })}
            </P>
          </div>

          <div>
            <Button
              fullWidth
              disabled={hasUserJoined()}
              isLoading={loading}
              size="lg"
              variant="primary"
              onClick={handleClick}
            >
              {hasUserJoined() ? 'You have been already registered' : 'Register'}
            </Button>
          </div>
        </Container>
      )}
    </Layout>
  );
};

export default Template;

const Container = styled.div`
  /** flex attributes */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  padding: 32px 48px;

  width: 100%;
  border-radius: 6px;
  box-shadow: ${DEFAULT_SHADOWS.dp2};

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.md}px) {
    padding: 32px 16px;
  }

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.sm}px) {
    padding: 16px 8px;
  }
`;
