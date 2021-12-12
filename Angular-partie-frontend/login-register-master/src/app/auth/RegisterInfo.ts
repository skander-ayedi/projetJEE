export class RegisterInfo {
  name: string;
  username: string;
  email: string;
  password: string;
  gender: string;
  birthdate: any;
  rolebase: number;
 
  role: string[];

  constructor(name: string,
              username: string,
              email: string,
              password: string,
              gender: string,
              birthdate: any,
              rolebase: number
              ) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.birthdate = birthdate;
    this.rolebase = rolebase;

    this.role = ['ROLE_USER'];
  }

}
