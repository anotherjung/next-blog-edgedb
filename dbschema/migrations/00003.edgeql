CREATE MIGRATION m1n6jjas3w2owgwarbvc6x4u7ue2manvqyfjaimrnymau34e6aeksa
    ONTO m1eykh52h33otklchkidx4es7c4dkcu5msiplse4zekkz7nsgeb6lq
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY title {
          SET REQUIRED USING ('Untitled');
      };
  };
};
