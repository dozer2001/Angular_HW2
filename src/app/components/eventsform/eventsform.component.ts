import {Component} from '@angular/core';

interface User {
  name: string,
  email: string,
  editing: boolean
}

@Component({
  selector: 'app-eventsform',
  templateUrl: './eventsform.component.html',
  styleUrls: ['./eventsform.component.css']
})
export class EventsformComponent {

  user: User = {
    name: '',
    email: '',
    editing: false
  }
  users: User[] = [
    {
      name: 'Ozi',
      email: 'Ozi@gmail.com',
      editing: false
    },
    {
      name: 'Yao',
      email: 'Ozi@gmail.com',
      editing: false
    }
  ];

  constructor() {  }

  onSubmit(form) {
    this.users.push({
      name: this.user.name,
      email: this.user.email,
      editing: false
    });
    form.resetForm();
  }

  removeUser(index) {
    this.users.splice(index, 1);
  }

  editHandler(index) {
    this.users[index].editing = !this.users[index].editing;
  }
}
