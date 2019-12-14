const makeParagraph = (sentences1) => {
  const paragraph1 = sentences1.join(' ')
  
return paragraph1
}

const averageDogAge = () => {
return pets1.filter((dog) => pets1.age)
}

const addToDigits = () => {
return 

}

const nightOwls = () => {
return  people.filter((name) => shouldBeAsleep)

}

const nap = () => {

}

const findIndices = () => {

}

const Faqtory = () => {
  return {
    questions: [],
    length: 0,
    addQuestion () {
      question1.text = 'What is your site all about?'
      

    },
    answerQuestion () {
      question1.answer = 'It\'s about MAKING MONEY for yourself.'
    }
  }
  
  
}


class Dog {
  constructor (name, breed, color){
    this.name = name,
    this.breed = breed,
    this.color = color
    
  }
  makeNoise () {
    return 'Woof.'
  }
  

}

class GreatDane extends Dog{
  constructor (name, breed, color) {
    super (name, 'Great Dane') 
  }
  makeNoise () { 
    return 'WOOF.'
  }
}

class Beagle extends Dog {
  constructor (name, breed, color) {
    super (name, 'Beagle', 'white/black/brown')
  }
  makeNoise () { 
    return 'Awooooooooo.'
  }

}

class Pointer extends Dog {
  constructor (name, color, points) {
    super (name, 'Pointer', color )
  }

}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}