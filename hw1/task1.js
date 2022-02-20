// array of users
const users = [ 
  {
    "name": "John Doe",
    "date": new Date('2021-10-09'),
  },
  {
    "name": "John Doe Jr.",
    "date": new Date('2021-10-10'),
  },
  {
    "name": "Jonathan Doe",
    "date": new Date('2021-10-11'),
  }
]

/*
    iterate through array of users and print those who registered on October 9 and 10, 2021.
*/
for (const user of users) {
    if (user.date.getTime() === (new Date('2021-10-10')).getTime() || 
        user.date.getTime() === (new Date('2021-10-09')).getTime())
    {
        console.log(user.name); 
    }
}