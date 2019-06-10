const initialState = {
  visible: 'all',
  collection: [
    {
      id: 1,
      title: 'My first TODO',
      details: 'This is a todo description for my irst todo entry',
      start: '2019-06-01',
      completed: false,
      completedAt: null
    },
    {
      id: 2,
      title: 'My second TODO',
      details: 'I really need to get some new ideas for test data entries',
      start: '2019-06-10',
      completed: false,
      completedAt: null
    },
    {
      id: 3,
      title: 'My third TODO',
      details: 'This one is done',
      start: '2019-06-10',
      completed: true,
      completedAt: 1519129853500
    }
  ]
}

export default initialState