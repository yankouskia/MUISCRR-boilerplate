const actions = ['SAVE_USER_NAME', 'INITIAL_LOADING', 'SEND_FEEDBACK'];

module.exports = actions.reduce((acc, action) => {
  const successAction = `${action}_SUCCESS`;
  const failureAction = `${action}_FAILURE`;

  return {
    ...acc,
    [action]: action,
    [successAction]: successAction,
    [failureAction]: failureAction,
  };
}, {});
