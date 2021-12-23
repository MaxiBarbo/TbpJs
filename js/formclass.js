// Se Guaarda usuario en constructor
class User {
    constructor(user, nombre, mail, pass) {
      this.user = user
      this.nombre = nombre
      this.mail = mail
      this.pass = pass
      
    }
    changeValues(value) {
      this[value.name] = value.value
    }
    save() {
      localStorage.setItem('user', JSON.stringify(this.user))
      localStorage.setItem('nombre', JSON.stringify(this.nombre))
      localStorage.setItem('mail', JSON.stringify(this.mail))
      localStorage.setItem('pass', JSON.stringify(this.pass))
      
    }
    agregarUsuario(usuario) {
      this.usuario.push(new User(usuario));
      this.save();
  }
    
  }
    