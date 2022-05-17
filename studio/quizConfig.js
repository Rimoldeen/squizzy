export default {
  localWebHost: 'http://localhost:8080', // default Vue port
  localApiHost: 'http://localhost:8080', // default Now API port
  remoteWebHost: 'https://squizzy-wheat.vercel.app',
  match: {
    correctAnswerScore: 100,
    firstAnswerScore: 50
  },
  schema: {
    maxAnswerLength: 40,
    maxQuestionLength: 100,
    maxNumberOfChoices: 4,
    minNumberOfChoices: 2,
    defaultTimeLimit: 30
  }
}
