const actions = ['LOAD_INITIAL_DATA'];

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
