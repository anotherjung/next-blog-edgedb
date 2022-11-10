CREATE MIGRATION m1eykh52h33otklchkidx4es7c4dkcu5msiplse4zekkz7nsgeb6lq
    ONTO m16urym3wdc367b37bl3ancmjbaslxvpiv7bo2yqytr6uvwuvs32ka
{
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY name -> std::str;
  };
  CREATE TYPE default::Movie {
      CREATE MULTI LINK actors -> default::Person;
      CREATE PROPERTY title -> std::str;
  };
};
