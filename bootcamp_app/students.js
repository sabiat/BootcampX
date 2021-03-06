const { Pool } = require('pg');

// Establish connection to bootcampx database
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack));

// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//   })
// });

const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
const values = [`%${process.argv[2]}%`, process.argv[3]];
pool.query(queryString, values)
.then (res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`)
  })
})
.catch(err => console.error('query error', err.stack));
