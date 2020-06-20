// Write your classes here
<<<<<<< HEAD
class Tree {
=======
class Tree{
>>>>>>> edcff284435ca319d4461fbddba288fe08001059
  constructor(species){
    this.species=species;
  }
  static definition(){
<<<<<<< HEAD
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
=======
    return `${this.species}`
>>>>>>> edcff284435ca319d4461fbddba288fe08001059
  }
}

class Deciduous extends Tree{
  constructor(species,name){
    super(species);
    this.name=name;
  }
  static definition(){
<<<<<<< HEAD
    return (super.definition() +' Deciduous trees shed their leaves annually.')
=======
    return `${super.definition()} Deciduous trees shed their leaves annually.`
>>>>>>> edcff284435ca319d4461fbddba288fe08001059
  }
}

class Evergreen extends Tree{
  constructor(species,name){
      super(species)
      this.name=name;
  }
  static definition(){
<<<<<<< HEAD
     return (super.definition() + ' Evergreens keep their leaves all year round.')
  }
=======
     return `${super.definition()} Evergreens keep their leaves all year round.
>>>>>>> edcff284435ca319d4461fbddba288fe08001059
}





