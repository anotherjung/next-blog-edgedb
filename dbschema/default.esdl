module default {
  type BlogPost {
    required property title -> str;
    required property content -> str {
      default := "";
    }
  }
  type Person {
    required property name -> str;
  }
  type Movie {
    required property title -> str;
    multi link actors -> Person;
  }
}