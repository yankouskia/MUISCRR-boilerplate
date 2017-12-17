import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import AppLayout from '../layout/App';
import ContentLayout from '../layout/Content';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SEND_FEEDBACK } from '../constants/actions';
import TextField from '../form-wrappers/TextField';
import { REQUIRED_FIELDS, FORM_NAME } from '../constants/feedback-form';

const validate = values =>
  REQUIRED_FIELDS.reduce((errors, field) => {
    if (values.get(field)) return errors;

    errors[field] = 'required';
    return errors;
  }, {});

const FormTitle = styled(Typography)`
  && {
    text-align: center;
  }
`;

const Content = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 60px);
  }
`;

const Form = styled(Paper)`
  && {
    width: 90%;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    opacity: 0.9;
  }
`;

const Input = styled(TextField)`
  && {
    width: 95%;
    padding: 10px;
    margin: 0;
  }
`;

class Feedback extends React.PureComponent {
  static propTypes = {
    send: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
  };

  send = () => {
    this.props.send();
  };

  render() {
    return (
      <AppLayout>
        <Header />
        <ContentLayout>
          <Content>
            <Form elevation={8}>
              <FormTitle type="title">Feedback</FormTitle>
              <Field component={Input} label="Name" name="name" type="text" />
              <Field
                component={Input}
                label="Email"
                name="email"
                type="email"
              />
              <Field component={Input} label="Grade" name="grade" type="text" />
              <Field
                component={Input}
                label="Feedback"
                name="comment"
                type="text"
                multiline
                rows="2"
              />
              <Field
                component={Input}
                label="What could be improved"
                name="improve"
                type="text"
                multiline
                rows="2"
              />
              <Button
                onClick={this.send}
                color="primary"
                disabled={!this.props.valid}
              >
                Submit
              </Button>
            </Form>
          </Content>
        </ContentLayout>
        <Footer />
      </AppLayout>
    );
  }
}

const formSelector = formValueSelector(FORM_NAME);

const mapStateToProps = state => ({
  formValues: formSelector(state, ...REQUIRED_FIELDS),
});

const mapDispatchToProps = dispatch => ({
  send: () => dispatch({ type: SEND_FEEDBACK }),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withForm = reduxForm({ form: FORM_NAME, validate });

export default withForm(withConnect(Feedback));
