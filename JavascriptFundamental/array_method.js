// List of objects
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, ;ml', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana' , 'Bent, Silas','Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


const bornInFifteenCentury =  inventors.filter((inventor) => (inventor.year >= 1500  && inventor.year <= 1599 ));
// console.table(bornInFifteenCentury)

const fullName = inventors.map((inventor) =>`${inventor.first} ${inventor.last}` )
// console.table(fullName);


// Sort by oldest to youngest, oldest mean the year him/she born will smaller
const sortedBirthDesc=  inventors.sort(function(a, b){
  if(a.year  >  b.year ) {
    return 1
  }else {
    return -1
  }
})
// Sum all years each inventor alive together
const AllYearsAlive = inventors.reduce((total, inventor)=> {
   return total =  inventor.passed - inventor.year;
}
);
console.log(AllYearsAlive)
