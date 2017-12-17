import React from 'react';
import styled from 'styled-components';

import MuiExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails as MuiExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import AppLayout from '../layout/App';
import ContentLayout from '../layout/Content';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PanelContainer = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 60px);
    opacity: 0.8;
    width: 90%;
    margin: 0 auto;
  }
`;

const ExpansionPanelDetails = styled(MuiExpansionPanelDetails)`
  && {
    display: flex;
    flex-direction: column;
  }
`;

const ExpansionPanel = styled(MuiExpansionPanel)`
  && {
    width: 100%;
  }
`;

export default class Main extends React.PureComponent {
  render() {
    return (
      <AppLayout>
        <Header />
        <ContentLayout>
          <PanelContainer>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How can it help?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  This project can help you to easy start new project with
                  latest trends.
                </Typography>
                <Typography>
                  Material UI, Styled Components, React, Redux, Offline mode,
                  Redux Saga, Webpack are used.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Have question...</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Do not hesitate to ask any kind of questions in issues.
                </Typography>
                <Typography>
                  You can suggest any additinal feature and if it is interesting
                  - it is most likely will be added here!
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </PanelContainer>
        </ContentLayout>
        <Footer />
      </AppLayout>
    );
  }
}
