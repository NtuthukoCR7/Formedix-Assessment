import faker from 'faker'
class randomTextGenerator {
  constructor() {
    this.text = faker.lorem.word()
    this.description = faker.lorem.sentence()

  }
}

export default new randomTextGenerator();

